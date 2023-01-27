import json

from bson import json_util
from flask import request

from api.resource import ApiResource
from domain.task import Task
from infra.taskRepository import TaskRepository

task_repository = TaskRepository()


def data_to_task(data) -> Task:
    return Task(data['name'], data['description'], data['startTime'], data['endTime'], data['userId'])


def is_valid_task_format(data):
    try:
        data_to_task(data)
    except:
        return False
    return True


class TaskController(ApiResource):
    @staticmethod
    def path():
        return "/task"

    def post(self):
        data = request.get_json()
        if not is_valid_task_format(data):
            return {'invalid_format': True}
        task_repository.save(data_to_task(data))
        return data

    def get(self):
        tasks = task_repository.findAll()
        tasks_json = json.loads(json_util.dumps(tasks))
        return tasks_json


class TaskIdController(ApiResource):
    @staticmethod
    def path():
        return "/task/<string:task_id>"

    def delete(self, task_id):
        task_repository.delete(task_id)
        return f"Task {task_id} deleted"

    def put(self, task_id):
        data = request.get_json()
        if is_valid_task_format(data):
            task_repository.put(data_to_task(data), task_id)
        else:
            return 'invalid data format'
        return f"Task {task_id} modified with data: {data}"

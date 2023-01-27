from time import time

from flask import request

from api.resource import ApiResource

class TaskController(ApiResource):
    @staticmethod
    def path():
        return "/task"

    def post(self):
        data = request.get_json()
        return data

    def get(self):
        data =[ {'id': 1, 'name': 'task1', 'description': 'qqch', 'startTime': time(), 'endTime': time(), 'volonteerId': 1}]
        return data

class TaskIdController(ApiResource):
    @staticmethod
    def path():
        return "/task/<int:task_id>"

    def delete(self, task_id):
        return f"Task {task_id} deleted"

    def put(self, task_id):
        data = request.get_json()
        return f"Task {task_id} modified with data: {data}"

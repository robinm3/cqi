import hashlib
import json
import uuid
from typing import List

from domain.constants import MONGO_HOST, DB_NAME, SALT
from pymongo import MongoClient

from domain.task import Task
from domain.utilitaire import generate_random_string

client = MongoClient(MONGO_HOST)


class TaskRepository:
    def __init__(self):
        database = client[DB_NAME]
        self.task_db = database['tasks']
        self.salt = SALT

    def save(self, task: Task) -> None:
        self.task_db.insert_one(task.__dict__)

    def findAll(self) -> List:
        tasks = list(self.task_db.find())
        return tasks

    def delete(self, taskId: int) -> None:
        pass

    def put(self, task: Task) -> None:
        pass


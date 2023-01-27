
from domain.constants import MONGO_HOST, DB_NAME
from pymongo import MongoClient


client = MongoClient(MONGO_HOST)

class ProblemsRepository:
    def __init__(self):
        database = client[DB_NAME]
        self.credentials_db = database['credentials']

    def create_problem(self, problem):
        problem = {
            "name": problem.name,
            "description": problem.description,
            "type": problem.type,
            "userId": problem.userId
        }

        return self.credentials_db.insert_one(problem)

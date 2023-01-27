
from services.UserRepository import UserRepository
from pymongo import MongoClient

client = MongoClient("mongodb+srv://h21:mPythonMongo@cluster0.f9ba0.mongodb.net/?retryWrites=true&w=majority")
database_name = "Problem"

class ProblemsRepository(UserRepository):
    def __init__(self):
        database = client[database_name]
        self.credentials_db = database['credentials']
        self.tokens_db = database['tokens']

    def create_problem(self, name, desc, type, userId):
        problem = {
            "name": name,
            "description": desc,
            "type": type,
            "userId": userId
        }

        return self.credentials_db.insert_one(problem)

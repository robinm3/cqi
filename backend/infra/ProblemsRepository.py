
from services.UserRepository import UserRepository
from pymongo import MongoClient

client = MongoClient("mongodb+srv://h21:mPythonMongo@cluster0.f9ba0.mongodb.net/?retryWrites=true&w=majority")


class ProblemsRepository(UserRepository):
    pass
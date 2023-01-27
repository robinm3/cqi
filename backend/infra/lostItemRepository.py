
from domain.constants import MONGO_HOST, DB_NAME
from pymongo import MongoClient


client = MongoClient(MONGO_HOST)

class itemLostRepository:
    def __init__(self):
        database = client[DB_NAME]
        self.itemLost_db = database['itemLost']


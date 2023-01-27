
from domain.constants import MONGO_HOST, DB_NAME
from pymongo import MongoClient
from domain.lostItem import lostItem


client = MongoClient(MONGO_HOST)

class itemLostRepository:
    def __init__(self):
        database = client[DB_NAME]
        self.itemLost_db = database['itemLost']

    def create_lost_item(self, foundedItem: FoundItem, email: str):
        self.itemLost_db.insert_one(foundedItem, email)
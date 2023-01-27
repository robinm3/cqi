from typing import List

from domain.constants import MONGO_HOST, DB_NAME
from pymongo import MongoClient
from domain.lostItem import LostItem


client = MongoClient(MONGO_HOST)

class LostItemRepository:
    def __init__(self):
        database = client[DB_NAME]
        self.lostItem_db = database['lostItem']

    def save(self, lostItem: LostItem) -> None:
        self.lostItem_db.insert_one(lostItem.__dict__)

    def findAll(self) -> List:
        items = list(self.lostItem_db.find())
        return items

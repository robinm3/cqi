import json

from bson import json_util
from flask import request, make_response, jsonify

from api.resource import ApiResource
from domain.lostItem import LostItem
from infra.lostItemRepository import LostItemRepository

lostItemRepo = LostItemRepository()


def data_to_lost_item(data) -> LostItem:
    return LostItem(data['name'], data['description'], data['lostTime'], data['email'])


class LostItemController(ApiResource):
    @staticmethod
    def path():
        return "/lostItem"

    def post(self):
        data = request.get_json()
        try:
            lostItem = data_to_lost_item(data)
        except:
            return "invalid data format"
        lostItemRepo.save(lostItem)
        response = make_response()
        response.status_code = 200
        return response

    def get(self):
        lost_items = lostItemRepo.findAll()
        lost_items_json = json.loads(json_util.dumps(lost_items))
        return lost_items_json


class FoundItemController(ApiResource):
    @staticmethod
    def path():
        return "/foundItem"

    def post(self):
        data = request.get_data()

        response = make_response()
        response.status_code = 200
        return response

    def get(self):
        data = {
            "Items": [
                {
                    "name": "un item",
                    "description": "description",
                    "time": "un temps",
                },
                {
                    "name": "un item",
                    "description": "description",
                    "time": "un temps",
                }
            ]
        }
        return jsonify(data)

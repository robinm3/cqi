from flask import jsonify, request

from api.resource import ApiResource
from infra.UserRepository import UserRepository

user_repository = UserRepository()

class PingController(ApiResource):
    @staticmethod
    def path():
        return "/ping"

    def get(self):
        user = user_repository.verify_token(request.headers.get("authorization").replace("Bearer ", ""))
        return jsonify({'message': 'hello world'})

    def post(self):
        data = request.get_json()
        return jsonify({'data': data}), 201

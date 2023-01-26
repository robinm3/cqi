from flask import jsonify, request

from api.resource import ApiResource


class Ping(ApiResource):
    @staticmethod
    def path():
        return "/ping"

    def get(self):
        print("PING")
        return jsonify({'message': 'hello world'})

    def post(self):
        data = request.get_json()
        return jsonify({'data': data}), 201

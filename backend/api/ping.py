from flask import jsonify, request
from flask_restful import Resource


class Ping(Resource):
    def get(self):
        print("PING")
        return jsonify({'message': 'hello world'})

    def post(self):
        data = request.get_json()
        return jsonify({'data': data}), 201
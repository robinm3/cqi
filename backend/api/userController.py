from flask import request, jsonify

from api.resource import ApiResource
from domain.constants import DB_NAME, SALT
from infra.UserRepository import MongoDBUserRepository

user_repository = MongoDBUserRepository(DB_NAME, SALT)

class UserController(ApiResource):
    @staticmethod
    def path():
        return "/user"

    def post(self):
        data = request.get_json()
        return user_repository.sign_up(data['email'], data['password'])

    def put(self):
        data = request.get_json()
        return f"User modified with data {data}"

    def get(self):
        return [{"id": 69, "userName": "leo", "userId": 69}]


class LoginController(ApiResource):
    @staticmethod
    def path():
        return "/user:login"

    def post(self):
        data = request.get_json()
        return user_repository.login(data['email'], data['password'])

class MeController(ApiResource):
    @staticmethod
    def path():
        return "/user:me"

    def get(self):
        return jsonify({'type': 'Organisateur', 'first_name': 'John', 'last_name': 'Doe', 'email': 'fasdfasd@gmail.com'})

class LogoutController(ApiResource):
    @staticmethod
    def path():
        return "/user:logout"

    def post(self):
        token = request.headers.get("authorization").replace("Bearer ", "")
        return user_repository.logout(token)


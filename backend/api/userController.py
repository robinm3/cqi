from flask import request, jsonify

from api.resource import ApiResource
from infra.userRepository import UserRepository

user_repository = UserRepository()

class UserController(ApiResource):
    @staticmethod
    def path():
        return "/user"

    def post(self):
        data = request.get_json()
        return user_repository.create_account(data['email'], data['first_name'], data['last_name'], data['type'])

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


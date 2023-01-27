from flask import request, jsonify

from api.resource import ApiResource
from infra.userRepository import UserRepository
from domain.user import User

user_repository = UserRepository()

class UserController(ApiResource):
    @staticmethod
    def path():
        return "/user"

    def post(self):
        data = request.get_json()
        user = User(data['type'], data['firstName'], data['lastName'], data['email'])
        if(user_repository.user_exist(user.email)):
            return {"error": "User already exists"}, 400

        user_repository.create_account(user)

    def put(self):
        data = request.get_json()
        return f"User modified with data {data}"

    def get(self):
        return user_repository.get_all_users()


class LoginController(ApiResource):
    @staticmethod
    def path():
        return "/user:login"

    def post(self):
        data = request.get_json()
        if (not user_repository.user_exist(data['email'])):
            return {"error": "Courriel invalide"}, 400

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


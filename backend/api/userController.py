from flask import request

from api.resource import ApiResource
from infra.MongoDBUserRepository import MongoDBUserRepository

salt = "someSalt"
db_name = "someDB"
user_repository = MongoDBUserRepository(db_name, salt)


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
        return [{"userName": "leo", "userId": 69}]


class LoginController(ApiResource):
    @staticmethod
    def path():
        return "/user:login"

    def post(self):
        data = request.get_json()
        return user_repository.login(data['email'], data['password'])


class LogoutController(ApiResource):
    @staticmethod
    def path():
        return "/user:logout"

    def post(self):
        token = request.headers.get("authorization").replace("Bearer ", "")
        return user_repository.logout(token)


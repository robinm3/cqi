from typing import Type

from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from api.pingController import PingController
from api.resource import ApiResource
from api.userController import UserController, SignUpController, LoginController, LogoutController
from api.taskController import TaskController

app = Flask(__name__)
CORS(app)
api = Api(app)


routes: list[Type[ApiResource]] = [
    PingController,
    SignUpController,
    LoginController,
    LogoutController,
    UserController,
    TaskController
]

for route in routes:
    api.add_resource(route, route.path())

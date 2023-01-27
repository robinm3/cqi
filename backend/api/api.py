from typing import Type

from flask import Flask
from flask_cors import CORS
from flask_restful import Api

from api.problemController import ProblemsController
from api.pingController import PingController
from api.resource import ApiResource
from api.taskController import TaskController, TaskIdController
from api.userController import UserController, SignUpController, LoginController, LogoutController


app = Flask(__name__)
CORS(app)
api = Api(app)


routes: list[Type[ApiResource]] = [
    PingController,
    SignUpController,
    LoginController,
    LogoutController,
    UserController,
    TaskController,
    TaskIdController,
    ProblemsController
]

for route in routes:
    api.add_resource(route, route.path())

from typing import Type

from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from api.pingcontroller import PingController
from api.resource import ApiResource
from api.usercontroller import UserController, SignUpController, LoginController, LogoutController

app = Flask(__name__)
CORS(app)
api = Api(app)


routes: list[Type[ApiResource]] = [
    PingController,
    SignUpController,
    LoginController,
    LogoutController,
    UserController
]

for route in routes:
    api.add_resource(route, route.path())

from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from api.ping import Ping


app = Flask(__name__)
CORS(app)
api = Api(app)

routes = [
    {
        'path': '/ping',
        'resource': Ping
    }
]

for route in routes:
    api.add_resource(route['resource'], route['path'])

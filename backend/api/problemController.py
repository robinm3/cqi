from flask import request, jsonify

from api.resource import ApiResource
from infra.problemsRepository import ProblemsRepository
from domain.problem import Problem
from infra.userRepository import UserRepository
from infra.problemsRepository import ProblemsRepository

user_repository = UserRepository()
problem_repository = ProblemsRepository()


class ProblemsController(ApiResource):
    @staticmethod
    def path():
        return "/problem"

    def post(self):
        if(not user_repository.is_valide_token(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Token invalide"}, 400

        data = request.get_data()
        problem = Problem(data['name'], data['description'], data['type'], data['userId'])
        return problem_repository.create_problem(problem)


class NotificationsController(ApiResource):
    @staticmethod
    def path():
        return "/notifications"

    def get(self):
        data = {
            "notifications": [
                {
                    "is_read": False,
                    "notification": "Une notification lu"
                },
                {
                    "is_read": True,
                    "notification": "Une notification non lu"
                }
            ]
        }
        return jsonify(data)


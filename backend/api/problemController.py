from flask import request, make_response, jsonify


from api.resource import ApiResource
from infra.problemsRepository import ProblemsRepository

class ProblemsController(ApiResource):
    @staticmethod
    def path():
        return "/problem"

    def post(self):
        data = request.get_data()

        #ProblemsRepository().add_problem(data['name'], data['description'], data['type'], data['userId'])

        response = make_response()
        response.status_code = 200
        return response


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


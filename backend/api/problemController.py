from flask import request, make_response


from api.resource import ApiResource
from infra.ProblemsRepository import ProblemsRepository

class ProblemsController(ApiResource):
    @staticmethod
    def path():
        return "/problem"

    def post(self):
        data = request.get_data()

        ProblemsRepository().add_problem(data['name'], data['description'], data['type'], data['userId'])

        response = make_response()
        response.status_code = 200
        return response


class NotificationsController(ApiResource):
    @staticmethod
    def path():
        return "/notifications"

    def get(self):
        response = make_response()
        response.status_code = 200
        data = {
            "notifications": [
                {
                    "is_read": False,
                    "notification": {
                        "name": "New Feature Released",
                        "description": "A new feature has been released on the platform. Check it out!",
                        "type": "update",
                        "author_name": "John Smith"
                    }
                },
                {
                    "is_read": True,
                    "notification": {
                        "name": "Maintenance Scheduled",
                        "description": "The platform will be undergoing maintenance on Wednesday at 2am. Please plan accordingly.",
                        "type": "maintenance",
                        "author_name": "Jane Doe"
                    }
                }
            ]
        }
        response.data = data
        return response


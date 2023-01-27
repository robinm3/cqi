from flask import request, make_response


from api.resource import ApiResource
from infra.ProblemsRepository import ProblemsRepository

class ProblemsController(ApiResource):
    @staticmethod
    def path():
        return "/problem"

    def post(self):
        data = request.get_data()
        #id = ProblemsRepository.sign_up(data['email'], data['password'])

        response = make_response()
        response.status_code = 200
        return response



from flask import request, make_response, jsonify


from api.resource import ApiResource

class LostItemController(ApiResource):
    @staticmethod
    def path():
        return "/lostItem"

    def post(self):
        data = request.get_data()

        response = make_response()
        response.status_code = 200
        return response

    def get(self):
        data = {
            "Items": [
                {
                    "name": "un item",
                    "description": "description",
                    "time": "un temps",
                    "utilisateur": "Un nom"
                },
                {
                    "name": "un item",
                    "description": "description",
                    "time": "un temps",
                    "utilisateur": "Un nom"
                }
            ]
        }
        return jsonify(data)


class FoundItemController(ApiResource):
    @staticmethod
    def path():
        return "/foundItem"

    def post(self):
        data = request.get_data()

        response = make_response()
        response.status_code = 200
        return response

    def get(self):
        data = {
            "Items": [
                {
                    "name": "un item",
                    "description": "description",
                    "time": "un temps",
                },
                {
                    "name": "un item",
                    "description": "description",
                    "time": "un temps",
                }
            ]
        }
        return jsonify(data)


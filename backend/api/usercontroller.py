from api.resource import ApiResource


class SignUp(ApiResource):
    @staticmethod
    def path():
        return "/user"

    def post(self):
        pass


class Login(ApiResource):
    @staticmethod
    def path():
        return "/user:login"

    def post(self):
        pass


class Logout(ApiResource):
    @staticmethod
    def path():
        return "/user:logout"

    def post(self):
        pass


class User(ApiResource):
    @staticmethod
    def path():
        return "/user:me"

    def get(self):
        pass

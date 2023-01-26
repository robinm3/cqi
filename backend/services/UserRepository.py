from abc import abstractmethod


class UserRepository:
    @abstractmethod
    def get(self, token: str) -> str:
        pass

    @abstractmethod
    def sign_up(self, email: str, password: str) -> str:
        pass

    @abstractmethod
    def login(self, email: str, password: str) -> str:
        pass

    @abstractmethod
    def logout(self, token: str):
        pass

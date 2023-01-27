import hashlib
import uuid

from domain.constants import MONGO_HOST
from pymongo import MongoClient
from domain.utilitaire import generate_random_string

client = MongoClient(MONGO_HOST)


class UserRepository:
    def __init__(self, database_name, salt):
        database = client[database_name]
        self.user_db = database['users']
        self.tokens_db = database['tokens']
        self.salt = salt

    def get(self, token: str) -> str:
        user = self.tokens_db.find_one({
            "token": token
        })
        if not user:
            raise RuntimeError("No user")
        return user.get('email')

    def create_account(self, email: str, firstName: str, lastName: str, type: str) -> str:
        password = generate_random_string(10)
        hash_password = self.calculate_hashed(password)
        user = {
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "type": type,
            "password": hash_password
        }
        self.user_db.insert_one(user)
        return self.create_token(email)

    def login(self, email: str, password: str) -> str:
        hashed_password = self.calculate_hashed(password)
        credentials = self.user_db.find_one({
            "email": email,
            "password": hashed_password
        })
        if not credentials:
            raise RuntimeError("No user")
        return self.create_token(email)

    def logout(self, token: str):
        self.tokens_db.delete_one({
            "token": token
        }
        )

    def calculate_hashed(self, password):
        dataBase_password = password + self.salt
        return hashlib.md5(dataBase_password.encode()).hexdigest()

    def create_token(self, email) -> str:
        token = uuid.uuid4().__str__()
        user = {
            "email": email,
            "token": token
        }
        self.tokens_db.insert_one(user)
        return token

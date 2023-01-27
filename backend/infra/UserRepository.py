import hashlib
import uuid

from services.UserRepository import UserRepository
from pymongo import MongoClient

client = MongoClient("mongodb://root:CrdUhS7fq3s9AIDOI2hB@54.88.215.35:27017")


class MongoDBUserRepository(UserRepository):
    def __init__(self, database_name, salt):
        database = client[database_name]
        self.credentials_db = database['credentials']
        self.tokens_db = database['tokens']
        self.salt = salt

    def get(self, token: str) -> str:
        user = self.tokens_db.find_one({
            "token": token
        })
        if not user:
            raise RuntimeError("No user")
        return user.get('email')

    def sign_up(self, email: str, password: str) -> str:
        hashed_password = self.calculate_hashed(password)
        user = {
            "email": email,
            "password": hashed_password
        }
        self.credentials_db.insert_one(user)
        return self.create_token(email)

    def login(self, email: str, password: str) -> str:
        hashed_password = self.calculate_hashed(password)
        credentials = self.credentials_db.find_one({
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

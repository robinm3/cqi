from time import time


class FoundItem:
    def __init__(self, name: str, description: str, foundTime: time, email: str):
        self.name = name
        self.description = description
        self.lostTime = foundTime
        self.email = email

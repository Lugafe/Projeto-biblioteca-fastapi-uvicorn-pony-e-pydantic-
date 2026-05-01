import os

class Settings:
    def __init__(self):
        self.env = os.getenv("ENV", "dev")

        if self.env == "dev":
            self.db_name = "dev.db"
        elif self.env == "test":
            self.db_name = "test.db"
        else:
            self.db_name = "prod.db"

settings = Settings()
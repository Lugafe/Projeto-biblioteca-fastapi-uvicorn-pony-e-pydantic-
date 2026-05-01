from pony.orm import Database
from app.config.settings import settings

db = Database()

def connect():
    db.bind(
        provider="sqlite",
        filename=settings.db_name,
        create_db=True
    )
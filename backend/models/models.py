from sqlalchemy import Column, Text
from .base import Base


class Device(Base):
    __tablename__ = "device_data"
    device_id = Column(Text, primary_key=True)
    name = Column(Text)
    status = Column(Text)
    temperature = Column(Text)
    type = Column(Text)


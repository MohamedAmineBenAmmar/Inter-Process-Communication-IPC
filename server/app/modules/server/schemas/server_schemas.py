from pydantic import BaseModel, constr
from typing import Literal


class ShutdownServerInSchema(BaseModel):
    server_pid: int

class ShutdownServerOutSchema(BaseModel):
    status: str = "down"


class UpServerInSchema(BaseModel):
    type: Literal['TCP', 'UDP', 'FIFO']
    port: int

class UpServerOutSchema(BaseModel):
    status: str = "up"
    server_pid: str

from pydantic import BaseModel, constr
from typing import Literal


class ShutdownServerInSchema(BaseModel):
    server_pid: int

class ShutdownServerOutSchema(BaseModel):
    status: str = "Down"


class UpServerInSchema(BaseModel):
    type: Literal['TCP', 'UDP', 'FIFO']
    port: int

class UpServerOutSchema(BaseModel):
    status: str = "Up"
    server_pid: int

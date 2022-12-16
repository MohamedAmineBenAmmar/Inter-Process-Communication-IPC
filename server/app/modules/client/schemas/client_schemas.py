from pydantic import BaseModel, constr
from typing import Literal, List


class RunAllClientsInSchema(BaseModel):
    clients: int
    type: Literal['TCP', 'UDP', 'FIFO']
    port: int

class RunAllClientsOutSchema(BaseModel):
    status: Literal['success', 'failure']

from fastapi import APIRouter
from ..schemas.client_schemas import RunAllClientsInSchema, RunAllClientsOutSchema
from ..controllers.client_controller import client_controller

router = APIRouter(
    prefix='/client',
    tags=['Client']
)

@router.post("/run_all_clients", response_model=RunAllClientsOutSchema)
async def run_client(req_body: RunAllClientsInSchema):
    return client_controller.run_all_clients(req_body)
from fastapi import APIRouter
from ..controllers.server_controller import server_controller
from ..schemas.server_schemas import ShutdownServerInSchema, ShutdownServerOutSchema, UpServerInSchema, UpServerOutSchema

router = APIRouter(
    prefix='/server',
    tags=['Server']
)


@router.post("/up", response_model=UpServerOutSchema)
async def up_server(req_body: UpServerInSchema):
    return server_controller.up_server(req_body)


@router.post("/shutdown", response_model=ShutdownServerOutSchema)
async def shutdown_server(req_body: ShutdownServerInSchema):
    return server_controller.shutdown_server(req_body)


@router.get("/communications", response_model=dict)
async def get_server_communications():
    return server_controller.get_server_communications()

@router.get("/logs", response_model=dict)
async def get_server_logs():
    return server_controller.get_logs()

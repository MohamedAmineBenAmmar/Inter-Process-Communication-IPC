from fastapi import FastAPI
from modules.server.routers import server_routes
from modules.client.routers import client_routes


app = FastAPI()

# registering the modules routers
app.include_router(server_routes.router)
app.include_router(client_routes.router)

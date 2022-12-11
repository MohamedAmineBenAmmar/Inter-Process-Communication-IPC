import os
from fastapi import status, HTTPException, Response
from ..schemas.server_schemas import UpServerOutSchema, UpServerInSchema


class ServerContoller():
    def up_server(self, req_body: UpServerInSchema) -> UpServerOutSchema:
        values: list
        with os.popen("ps -a | grep test") as f:
            server_process = f.readlines()
            if len(server_process) == 0:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND, detail=f"Server is not running")
            else:
                server_process = server_process[0]
                server_process = server_process[0: len(server_process)-1].strip()
                while server_process.find("  ") != -1:
                    server_process = server_process.replace("  ", " ")

                values = server_process.split(" ")                
                
                response = UpServerOutSchema(status="up", server_pid=values[0])
                return response

    def shutdown_server(self, server_pid) -> dict:
        result = os.system(f'kill -9 {server_pid}')
        if result != 0:
            raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND, detail=f"No process with PID = {server_pid}")
        else:
            return {
                "status": "down"
            }
        

    def get_server_communications(self) -> dict:
        # Pointing to a directory and returning its contents
        return {}


server_controller = ServerContoller()

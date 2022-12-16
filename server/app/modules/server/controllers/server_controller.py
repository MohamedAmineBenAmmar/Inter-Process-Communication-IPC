import os
from fastapi import status, HTTPException, Response
from ..schemas.server_schemas import UpServerOutSchema, UpServerInSchema, ShutdownServerOutSchema, ShutdownServerInSchema
import subprocess
from pathlib import Path
import json

class ServerContoller():    
    def clean_up(self, dir: str):
        path_of_the_directory = dir
        files = Path(path_of_the_directory ).glob('*')
        for file in files:
            file.unlink()
            

    def up_server(self, req_body: UpServerInSchema) -> UpServerOutSchema:
        # Clean the core data
        self.clean_up("../core/data")
        self.clean_up("../core/logs")

        # Run the server
        subprocess.Popen(f"cd ../core && ./build/{req_body.type}_Server {req_body.port} > logs/{req_body.type}_Server_Logs &", shell=True)

        # Check if the server is up and running and returns its PID
        values: list
        with os.popen(f"ps -a | grep {req_body.type}_Server") as f:
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
                
                response = UpServerOutSchema(status="Up", server_pid=int(values[0]))
                return response

    def shutdown_server(self, req_body: ShutdownServerInSchema) -> ShutdownServerOutSchema:
        result = os.system(f'kill -2 {req_body.server_pid}')
        if result != 0:
            raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND, detail=f"No process with PID = {req_body.server_pid}")
        else:
            response = ShutdownServerOutSchema(status="Down")
            return response
        

    def get_server_communications(self) -> dict:
        # Pointing to a directory and returning its contents
        response = {}
        path_of_the_directory = "../core/data"
        files = Path(path_of_the_directory ).glob('*.json')
        for file in files:
            f = open(file)
            data = json.load(f)

            filename = Path(f.name).stem
            response[filename] = data
            f.close()

        print(response)
        return response

    def get_logs(self) -> dict:
        # Pointing to a directory and returning its contents
        response = {}
        path_of_the_directory = "../core/logs"
        files = Path(path_of_the_directory ).glob('*')
        for file in files:
            f = open(file)
            data = f.readlines()
            print()
            print(data)
            print()
            filename = Path(f.name).stem
            response[filename] = data
            f.close()

        # print(response)
        return response


server_controller = ServerContoller()

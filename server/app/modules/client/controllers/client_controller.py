from multiprocessing import Pool
import os
import time
from fastapi import status, HTTPException
from ..schemas.client_schemas import RunAllClientsInSchema, RunAllClientsOutSchema
import time


class ClientContoller():
    def __init__(self) -> None:
        self.port = None
        self.type = None
        self.clients = 0

    def socket_run_client(self, client_id: int):
        result = os.system(f"cd ../core && ./build/{self.type}_Client {self.port} > logs/{self.type}_Client_{client_id}_Logs")
        if result != 0:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Error occured while trying to launch client")
    
    def clients_pool_handler(self):
        l = list(range(1, self.clients +1))
        p = Pool(5)
        p.map(self.socket_run_client, l)
    
    def fifo_run_client(self, client_id: int):
        result = os.system(f"cd ../core && ./build/{self.type}_Client > logs/{self.type}_Client_{client_id}_Logs")
        # time.sleep(0.5)
        print(result)
        if result != 0:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Error occured while trying to launch client")
    
    def run_clients_sequentially(self):
        l = list(range(1, self.clients +1))
        for item in l:
            self.fifo_run_client(item)

    def run_all_clients(self, req_body: RunAllClientsInSchema) -> RunAllClientsOutSchema:
        self.port = req_body.port
        self.type = req_body.type
        self.clients = req_body.clients

        if self.type == 'FIFO':
            self.run_clients_sequentially()
        else:
            self.clients_pool_handler() 

        response = RunAllClientsOutSchema(status="success")
        return response
   

client_controller = ClientContoller()
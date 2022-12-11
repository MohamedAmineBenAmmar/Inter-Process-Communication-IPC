from multiprocessing import Pool
import os
import time
from fastapi import status, HTTPException
from ..schemas.client_schemas import RunAllClientsInSchema, RunAllClientsOutSchema

class ClientContoller():
    def __init__(self) -> None:
        self.port = None
        self.type = None
        self.clients_ids = []

    def run_client(self, client_id: str):
        # print("Client id")
        # print(client_id)
        # print(self.type)
        # print(self.port)
        # print("--------")
        # if client_id == 'client1':
        #     time.sleep(5)
        # elif client_id == 'client3':
        #     time.sleep(6)
        time.sleep(3)
        result = os.system(f'E:\\IDL\\2-ING\\semestre-1x\\Prog-Syst-Unix\\Project-Part2\\server\\app\\core\\build\\test.exe {client_id} {self.port}')
        print(result)
        if result != 0:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Error occured while trying to launch client")
        # print(client_id)
        print("\n--------")
    
    def clients_pool_handler(self):
        p = Pool(5)
        p.map(self.run_client, self.clients_ids)
    
    def run_all_clients(self, req_body: RunAllClientsInSchema) -> RunAllClientsOutSchema:
        self.port = req_body.port
        self.type = req_body.type
        self.clients_ids = req_body.clients_ids

        self.clients_pool_handler() 

        response = RunAllClientsOutSchema(status="success")
        return response
   

client_controller = ClientContoller()
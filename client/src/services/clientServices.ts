import api from "./api";

interface RunAllClientsIn {
  port: number;
  type: "TCP" | "UDP" | "FIFO";
  clients: number
}

interface RunAllClientsOut {
  status: "Up";
}

export const runAllClients: (reqBody: RunAllClientsIn) => Promise<RunAllClientsOut> = (
  reqBody
) => {
  return new Promise((resolve, reject) => {
    try {
      api
        .post("/client/run_all_clients", reqBody)
        .then((res) => {
          console.log("axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("Run All Clients Error=", err);
          reject("RUN_ALL_CLIENTS_ERROR");
        });
    } catch (error) {
      console.error("Run All Clients Error=", error);
      reject("RUN_ALL_CLIENTS_ERROR");
    }
  });
};

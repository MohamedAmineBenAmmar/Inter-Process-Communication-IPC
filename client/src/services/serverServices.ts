import api from "./api";

interface UpServerIn {
  port: number;
  type: "TCP" | "UDP" | "FIFO";
}

interface UpServerOut {
  status: "Up";
  server_pid: number
}

interface ShutdownServerIn {
  server_pid: number
}

interface ShutdownServerOut {
  status: "Down";
}

export const upServer: (reqBody: UpServerIn) => Promise<UpServerOut> = (
  reqBody
) => {
  return new Promise((resolve, reject) => {
    try {
      api
        .post("/server/up", reqBody)
        .then((res) => {
          console.log("axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("Up Server Error=", err);
          reject("UP_SERVER_ERROR");
        });
    } catch (error) {
      console.error("Up Server Error=", error);
      reject("UP_SERVER_ERROR");
    }
  });
};


export const shutdownServer: (reqBody: ShutdownServerIn) => Promise<ShutdownServerOut> = (
  reqBody
) => {
  return new Promise((resolve, reject) => {
    try {
      api
        .post("/server/shutdown", reqBody)
        .then((res) => {
          console.log("axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("Shutdown Server Error=", err);
          reject("SHUTDOWN_SERVER_ERROR");
        });
    } catch (error) {
      console.error("Shutdown Server Error=", error);
      reject("SHUTDOWN_SERVER_ERROR");
    }
  });
};

export const getServerCommunications: () => Promise<Object> = () => {
  return new Promise((resolve, reject) => {
    try {
      api
        .get("/server/communications")
        .then((res) => {
          console.log("axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("Server Communication Error=", err);
          reject("SERVER_COMMUNICATIONS_ERROR");
        });
    } catch (error) {
      console.error("Server Communication Error=", error);
      reject("SERVER_COMMUNICATIONS_ERROR");
    }
  });
};

export const getServerLogs: () => Promise<Object> = () => {
  return new Promise((resolve, reject) => {
    try {
      api
        .get("/server/logs")
        .then((res) => {
          console.log("axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("Server Logs Error=", err);
          reject("SERVER_LOGS_ERROR");
        });
    } catch (error) {
      console.error("Server Logs Error=", error);
      reject("SERVER_LOGS_ERROR");
    }
  });
};


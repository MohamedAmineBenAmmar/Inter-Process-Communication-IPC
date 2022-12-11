import api from "./api";

interface UpServerIn {
  port: number;
  type: "TCP" | "UDP" | "FIFO";
}

interface UpServerOut {
  status: "Up";
  server_pid: number
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

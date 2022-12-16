//@ts-nocheck
import { useEffect, useState } from "react";
import MainPanel from "./MainPanel";
import {
  upServer as remoteUpServer,
  shutdownServer as remoteShutdownServer,
  getServerCommunications as remoteGetServerCommunications,
} from "../../../services/serverServices";
import { runAllClients as remoteRunAllClients } from "../../../services/clientServices";
import { Button } from "primereact/button";

export default function Network({ handleConfig, incrementStep, config }) {
  console.log("last state of config")
  console.log(config)
  const [serverStatus, setServerStatus] = useState("Down");
  const [lastOperation, setLastOperation] = useState("INIT");
  const upServer = async () => {
    try {
      let response = await remoteUpServer({
        port: config.setup.port,
        type: config.setup.type,
      });
      console.log("Up Server reponse");
      console.log(response);

      handleConfig("serverPID", response.server_pid);
      setServerStatus(response.status);
      setLastOperation(`UP_SERVER`);
    } catch (error) {
      console.error(error);
    }
  };

  const shutDownServer = async () => {
    try {
      let response = await remoteShutdownServer({
        server_pid: config.serverPID,
      });
      console.log("Shutdown Server reponse");
      console.log(response);

      handleConfig("serverPID", -1);
      setServerStatus(response.status);
      setLastOperation(`SHUTDOWN_SERVER`);
    } catch (error) {
      console.error(error);
    }
  };

  const getServerCommunications = async () => {
    try {
      let response = await remoteGetServerCommunications();
      console.log("Getting the server communciations");
      console.log(response);

      setLastOperation(`GETTING_SERVER_DATA`);
      console.log("part1")
      handleConfig("communications", response);
      console.log("part2")
    } catch (error) {
      console.error(error);
      setLastOperation(`GETTING_SERVER_DATA_ERROR`);
    }
  };

  const runAllClients = async (clients) => {
    try {
      let response = await remoteRunAllClients({
        port: config.setup.port,
        type: config.setup.type,
        clients,
      });
      console.log("Run all clients reponse");
      console.log(response);

      setLastOperation(`RUN_ALL_CLIENTS_SUCCESS`);

      setTimeout(() => {
        shutDownServer();
        setTimeout(() => {
          getServerCommunications();
        }, 2000);
      }, 2000);
    } catch (error) {
      console.error(error);
      setLastOperation(`RUN_ALL_CLIENTS_ERROR`);
    }
  };

  useEffect(() => {
    console.log("the network mounts to the dom");
  }, []);
  return (
    <>
      <div className="w-full" style={{ height: "600px" }}>
        <MainPanel
          runAllClients={runAllClients}
          shutDownServer={shutDownServer}
          upServer={upServer}
          serverStatus={serverStatus}
          config={config}
          lastOperation={lastOperation}
          setLastOperation={setLastOperation}
        />
      </div>
    </>
  );
}

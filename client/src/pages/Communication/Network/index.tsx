//@ts-nocheck
import { useEffect, useState } from "react";
import MainPanel from "./MainPanel";
import { upServer as remoteUpServer } from '../../../services/serverServices'

export default function Network({ handleConfig, incrementStep, config }) {
  const [serverStatus, setServerStatus] = useState("Down")
  const [lastOperation, setLastOperation] = useState("INIT")
  const upServer = async () => {
    console.log("ena jit")
    try {
      let response = await remoteUpServer({
        port: config.setup.port,
        type: config.setup.type        
      })
      console.log("Up Server reponse")
      console.log(response)

      handleConfig("serverPID", response.server_pid)
      setServerStatus(response.status)
      setLastOperation(`UP_SERVER`)

    } catch (error) {
      console.error(error)
    }
  };

  const shutDownServer = async () => {};

  const runAllClients = async () => {};

  useEffect(() => {
    console.log("the network mounts to the dom");
  }, []);
  return (
    <div className="w-full" style={{ height: "600px" }}>
      <MainPanel upServer={upServer} serverStatus={serverStatus} config={config} lastOperation={lastOperation} setLastOperation={setLastOperation} />
    </div>
  );
}

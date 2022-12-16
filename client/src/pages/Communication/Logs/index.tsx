//@ts-nocheck
import React, { useEffect, useState } from "react";
import { getServerLogs as remoteGetServerLogs } from "../../../services/serverServices";
import LogsAccordion from "../../../components/LogsAccordion";

export default function Logs() {
  const [logs, setLogs] = useState({});
  const getServerLogs = async () => {
    try {
      let response = await remoteGetServerLogs();
      console.log("Getting the server logs");
      console.log(response);

      setLogs(response);
    } catch (error) {
      console.error(error);
      setLastOperation(`GETTING_SERVER_LOGS_ERROR`);
    }
  };

  useEffect(() => {
    getServerLogs();
  }, []);

  console.log("the state");
  console.log(logs);
  return (
    <div className="mt-4">
      <LogsAccordion logs={logs} />
    </div>
  );
}

//@ts-nocheck
import { useEffect } from "react";
import MainPanel from "./MainPanel";
import { shell } from 'electron'


export default function Network() {
  const upServer = () => {};

  const shutDownServer = () => {};

  useEffect(() => {
    console.log("the network mounts to the dom");
    
    
  }, []);
  return (
    <div className="w-full" style={{height: "650px"}}>
      <MainPanel />
    </div>
  );
}

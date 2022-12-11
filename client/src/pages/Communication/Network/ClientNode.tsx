//@ts-nocheck

import React, { memo } from "react";
import { Handle } from "reactflow";
import Config from "./Config";
import { Button } from 'primereact/button'

export default memo(({ data, isConnectable }) => {
  return (
    <div className="surface-200 m-0 p-1 h-3rem w-8rem">
      <div className="grid">
        <div className="col align-self-center">{data.name}</div>
        <div className="col">
          <Config />
        </div>
      </div>
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </div>
  );
});

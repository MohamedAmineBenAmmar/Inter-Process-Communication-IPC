//@ts-nocheck

import React, { memo } from "react";
import { Handle } from "reactflow";
import Config from "./Config";

export default memo(({ data, isConnectable }) => {
  return (
    <div className="surface-200 m-0 p-1 h-3rem w-8rem">
      <div className="grid">
        <div className="col align-self-center">Server</div>
        <div className="col"><Config /></div>
      </div>
      <Handle type="source" position="right" isConnectable={isConnectable} />
    </div>
  );
});

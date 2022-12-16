//@ts-nocheck
import React, { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";

import ClientNode from "./ClientNode";
import ServerNode from "./ServerNode";

import "./network.css";

const initBgColor = "#1A192B";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const nodeTypes = {
  clientNode: ClientNode,
  serverNode: ServerNode,
};

const MainPanel = ({
  runAllClients,
  shutDownServer,
  serverStatus,
  config,
  lastOperation,
  setLastOperation,
  upServer,
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  const addClient = () => {
    const newNode = {
      id: `client_${nodes.length}`,
      type: "clientNode",
      data: { color: initBgColor, name: `client_${nodes.length}`, config },
      style: { border: "1px solid #777" },
      position: { x: 300, y: 50 },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  console.log("Last state of nodes:");
  console.log(nodes);

  console.log("Last state of edges:");
  console.log(edges);

  useEffect(() => {
    setNodes([
      {
        id: "server",
        type: "serverNode",
        data: { color: initBgColor, name: "server", config },
        style: { border: "1px solid #777" },
        position: { x: 100, y: 50 },
      },
      {
        id: "client_1",
        type: "clientNode",
        data: { color: initBgColor, name: "client_1", config },
        style: { border: "1px solid #777" },
        position: { x: 300, y: 50 },
      },
    ]);

    setEdges([]);
  }, []);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        return {
          ...node,
          data: {
            ...node.data,
            config,
          },
        };
      })
    );
  }, [config]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );

  return (
    <>
      <div className="actions mb-4 mt-4">
        <div className="grid">
          <div className="col-6">
          <h2>Actions</h2>
            <div className="grid">
              <div className="col-6">
                <Button
                  label="Add Client"
                  icon="pi pi-plus-circle"
                  iconPos="right"
                  onClick={addClient}
                  className="mr-2 p-button-secondary mb-2 w-8"
                />
                <Button
                  label="Run All Clients"
                  icon="pi pi-sync"
                  iconPos="right"
                  onClick={() => {
                    runAllClients(nodes.length - 1);
                  }}
                  className="mr-2 w-8"
                />
              </div>
              <div className="col-6">
                <Button
                  label="Up Server"
                  icon="pi pi-caret-right"
                  iconPos="right"
                  onClick={upServer}
                  className="mr-2 p-button-success mb-2 w-8"
                />
                <Button
                  label="Shutdown"
                  icon="pi pi-power-off"
                  iconPos="right"
                  onClick={shutDownServer}
                  className="mr-2 p-button-danger w-8"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <h2>Server Status</h2>
            <Button
              type="button"
              label={serverStatus}
              className="p-button-warning"
            >
              <Badge
                value={(serverStatus === "Down" || config.setup.type === 'FIFO') ? 0 : config.setup.port}
              ></Badge>
            </Button>
          </div>
          <div className="col">
            <h2>Current Operation</h2>
            <Button
              type="button"
              label={lastOperation}
              className="p-button-warning"
            />
          </div>
        </div>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: bgColor }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultZoom={1.5}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === "serverNode") return "#0041d0";
            if (n.type === "clientNode") return "#ff0072";
          }}
          nodeColor={(n) => {
            return "#fff";
          }}
        />
        <Controls />
      </ReactFlow>
    </>
  );
};

export default MainPanel;

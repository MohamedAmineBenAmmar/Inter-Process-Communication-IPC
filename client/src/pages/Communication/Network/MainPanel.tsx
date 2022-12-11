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

const MainPanel = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  const addClient = () => {
    const newNode = {
      id: `client_${nodes.length}`,
      type: "clientNode",
      data: { color: initBgColor, name: `client_${nodes.length}` },
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
    // const onChange = (event) => {
    //   setNodes((nds) =>
    //     nds.map((node) => {
    //       if (node.id !== "2") {
    //         return node;
    //       }

    //       const color = event.target.value;

    //       setBgColor(color);

    //       return {
    //         ...node,
    //         data: {
    //           ...node.data,
    //           color,
    //         },
    //       };
    //     })
    //   );
    // };

    setNodes([
      {
        id: "server",
        type: "serverNode",
        data: { color: initBgColor, name: "server" },
        style: { border: "1px solid #777" },
        position: { x: 100, y: 50 },
      },
      {
        id: "client_1",
        type: "clientNode",
        data: { color: initBgColor, name: "client_1" },
        style: { border: "1px solid #777" },
        position: { x: 300, y: 50 },
      },
    ]);

    setEdges([]);
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );

  return (
    <>
      <div className="actions mb-4">
        <Button
          label="Add Client"
          icon="pi pi-check"
          iconPos="right"
          onClick={addClient}
        />
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

export default () => <MainPanel />;
//@ts-nocheck
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "./DialogDemo.css";
import { ServerAccordion } from "../../../components/ServerAccordion";
import { ClientAccordion } from "../../../components/ClientAccordion";

const DialogDemo = ({ config, nodeName, type }) => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  const onHide = () => {
    setVisible(false);
  };

  console.log("7alit el modl")
  console.log(config)
  console.log(nodeName)
  console.log(type)

  const renderFooter = () => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => onHide()}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => onHide()}
          autoFocus
        />
      </div>
    );
  };

  return (
    <div className="dialog-demo">
      <div className="card">
        <Button
          icon="pi pi-cog"
          className="p-button-rounded p-button-secondary h-2rem w-2rem mt-1" 
          onClick={() => onClick()}
        />
         
        <Dialog
          header={type === 'client' ? ("Visualize client communications") : ("Visualize server communications")}
          visible={visible}
          style={{ width: "50vw" }}
          footer={renderFooter()}
          onHide={() => onHide()}
        >
         {type === 'client' ? (<ClientAccordion data={config.communications} nodeName={nodeName} />) : (<ServerAccordion data={config.communications} />)}
        </Dialog>
      </div>
    </div>
  );
};

export default DialogDemo;

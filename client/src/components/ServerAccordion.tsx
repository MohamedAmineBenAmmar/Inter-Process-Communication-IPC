//@ts-nocheck

import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import "../styles/AccordionDemo.css";

import { InputText } from "primereact/inputtext";

export const ServerAccordion = ({ data }) => {
  console.log("the data boi");
  console.log(data);

  return (
    <div className="accordion-demo">
      <div className="card">
        <Accordion>
          <AccordionTab header="Server Configuration">
            <div className="grid p-fluid">
              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <Button label="Address" />
                  <InputText
                    value={data.communication.server.address}
                    disabled
                  />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <Button label="Port" />
                  <InputText value={data.communication.server.port} disabled />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <Button label="Process ID" />
                  <InputText value={data.communication.server.PID} disabled />
                </div>
              </div>
            </div>
          </AccordionTab>
          {Object.keys(data.communication).map((key) => {
            if (key !== "server") {
              return (
                <AccordionTab header={`${key.charAt(0).toUpperCase() + key.slice(1)} Configuration`}>
                  <div className="grid p-fluid">
                    <div className="col-12 md:col-6">
                      <div className="p-inputgroup">
                        <Button label="Address" />
                        <InputText value={data.communication[key].address} disabled />
                      </div>
                    </div>
                    <div className="col-12 md:col-6">
                      <div className="p-inputgroup">
                        <Button label="Port" />
                        <InputText value={data.communication[key].port} disabled />
                      </div>
                    </div>
                  </div>
                </AccordionTab>
              );
            } else return null;
          })}
        </Accordion>
      </div>
    </div>
  );
};

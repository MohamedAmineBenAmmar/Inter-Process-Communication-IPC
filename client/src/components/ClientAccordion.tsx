//@ts-nocheck

import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import "../styles/AccordionDemo.css";

import { InputText } from "primereact/inputtext";

export const ClientAccordion = ({ data, nodeName }) => {
  console.log("the data boi");
  console.log(data);

  return (
    <div className="accordion-demo">
      <div className="card">
        <Accordion>
          <AccordionTab header="Client Configuration">
            <div className="grid p-fluid">
              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <Button label="Client PID" />
                  <InputText value={data[nodeName].pid} disabled />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <Button label="Server PID" />
                  <InputText value={data[nodeName].server_pid} disabled />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <Button label="Server Child PID" />
                  <InputText value={data[nodeName].server_child_pid} disabled />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="p-inputgroup">
                  <Button label="Input" />
                  <InputText value={data[nodeName].input} disabled />
                </div>
              </div>
              <div className="col-12">
                <h2>Server Response</h2>
                <div className="p-inputgroup">
                  <p className="w-10">
                    {data[nodeName].output.map((x, index) => {
                      if (index % 30 === 0) {
                        return (
                          <>
                            <br />
                            {x}&nbsp;
                          </>
                        );
                      } else {
                        return <>
                        {x}&nbsp;
                        </>;
                      }
                    })}
                  </p>
                </div>
              </div>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

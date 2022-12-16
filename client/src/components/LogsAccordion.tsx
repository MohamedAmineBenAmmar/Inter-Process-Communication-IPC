//@ts-nocheck

import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "../styles/AccordionDemo.css";

export default function LogsAccordion({ logs }) {
  return (
    <div className="accordion-demo">
      <div className="card">
        <Accordion>
          {Object.keys(logs).map((key, index) => (
            <AccordionTab header={`${key}`}>
              <p>
                {logs[key].map((item) => (
                  <>
                    {item}
                    <br />
                  </>
                ))}
              </p>
            </AccordionTab>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

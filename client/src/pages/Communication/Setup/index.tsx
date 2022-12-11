// @ts-nocheck
import React, { useEffect, useState } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

import "./FormDemo.css";

export default function Setup({ handleConfig, incrementStep}) {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {    
    if (e.target.id === "type") {
      setFormData({ ...formData, type: e.target.value.name });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data");
    console.log(formData);
    
    handleConfig("setup", formData)
    incrementStep()
  };
  let communicationTypes = [{ name: "TCP" }, { name: "UDP" }, { name: "FIFO" }];
  return (
    <div className="form-demo">
      <div className="flex justify-content-center">
        <div className="card">
          <h3 className="text-center">Setup your network</h3>
          <form onSubmit={handleSubmit} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <InputText id="ip" name="ip" value="127.0.0.1" disabled />
                <label htmlFor="name">IP*</label>
              </span>
            </div>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-info-circle" />
                <InputText
                  id="port"
                  name="port"
                  value={formData.port}
                  onChange={handleChange}
                />
                <label htmlFor="port">Port*</label>
              </span>
            </div>
            <div className="field">
              <span className="p-float-label">
                <Dropdown
                  id="type"
                  name="type"
                  value={{ name: formData.type }}
                  onChange={handleChange}
                  options={communicationTypes}
                  optionLabel="name"
                />
                <label htmlFor="country">Communication Type</label>
              </span>
            </div>
            <Button type="submit" label="Confirm" className="mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
}

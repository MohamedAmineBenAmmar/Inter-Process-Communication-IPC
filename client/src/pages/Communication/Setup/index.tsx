import React, { useEffect, useState } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";

import "./FormDemo.css";

export default function Setup() {
  const [formData, setFormData] = useState({});
  let communicationTypes = [{ name: "TCP" }, { name: "UDP" }, { name: "FIFO" }];
  return (
    <div className="form-demo">
      <div className="flex justify-content-center">
        <div className="card">
          <h3 className="text-center">Setup your network</h3>
          <form className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <InputText id="ip" name="ip" value="127.0.0.1" disabled />
                <label htmlFor="name">IP*</label>
              </span>
            </div>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-info-circle" />
                <InputText id="port" name="port" value="" onChange={() => {}} />
                <label htmlFor="port">Port*</label>
              </span>
            </div>
            <div className="field">
              <span className="p-float-label">
                <Dropdown
                  id="country"
                  name="country"
                  value=""
                  onChange={() => {}}
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

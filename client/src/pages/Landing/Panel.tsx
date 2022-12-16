import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Panel() {
  const navigate = useNavigate();
  const handleRedirection = () => {
    navigate("/communication");
  };
  return (
    <div className="grid grid-nogutter surface-0 text-800">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span className="block text-6xl font-bold mb-1">
            Inter Process Communication
          </span>
          <div className="text-6xl text-primary font-bold mb-3">
            Unix Project
          </div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            This project is going to demonstrate the processes communication
            using sockets with the TCP and UDP protocoles and the communication
            with named pipes.
          </p>
          <Button
            label="Live Demo"
            type="button"
            className="p-button-outlined"
            onClick={handleRedirection}
          />
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
        <img
          src="assets/images/network.jpg"
          alt="Logo"
          className="md:ml-auto block md:h-full"
          style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
        />
      </div>
    </div>
  );
}

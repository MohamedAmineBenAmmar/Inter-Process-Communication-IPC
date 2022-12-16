import React from "react";

export default function Features() {
  return (
    <div className="surface-0 text-center mt-4 p-8">
      <div className="mb-3 font-bold text-2xl">
        <span className="text-900">Higher Institute, </span>
        <span className="text-blue-600">of Computer Science</span>
      </div>
      <div className="text-700 text-sm mb-6">
        Developed by Mohamed Amine Ben Ammar (Softwate Engineer Student).
      </div>
      <div className="grid">
        <div className="col-12 md:col-3 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-globe text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">Communication</div>
          <span className="text-700 text-sm line-height-3">
            The application supports a variety of communication mechanisms such
            as TCP, UDP and Named Pipes.
          </span>
        </div>
        <div className="col-12 md:col-3 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-github text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">Open Source</div>
          <span className="text-700 text-sm line-height-3">
            All the source code is available so you can dig into it and make
            improvements to it.{" "}
          </span>
        </div>
        <div className="col-12 md:col-3 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-wrench text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">Performance</div>
          <span className="text-700 text-sm line-height-3">
            the application uses the latest technologies to ensure high speed
            and reliability.{" "}
          </span>
        </div>
        <div className="col-12 md:col-3 md:mb-4 mb-0 px-3">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-book text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">Learn</div>
          <span className="text-700 text-sm line-height-3">
            this application is great for learning to develop in a unix
            environment. You will discover a lot of new techniques and
            mechanisms that will help to hone your skills.
          </span>
        </div>
      </div>
    </div>
  );
}

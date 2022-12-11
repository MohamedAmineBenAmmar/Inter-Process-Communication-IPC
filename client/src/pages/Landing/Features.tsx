import React from "react";

export default function Features() {
  return (
    <div className="surface-0 text-center mt-4 p-8">
      <div className="mb-3 font-bold text-2xl">
        <span className="text-900">One Product, </span>
        <span className="text-blue-600">Many Solutions</span>
      </div>
      <div className="text-700 text-sm mb-6">
        Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.
      </div>
      <div className="grid">        
        <div className="col-12 md:col-3 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-globe text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">Fast & Global Support</div>
          <span className="text-700 text-sm line-height-3">
            Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum
            tellus.
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
            Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec
            adipiscing tristique risus nec feugiat.{" "}
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
            Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec
            adipiscing tristique risus nec feugiat.{" "}
          </span>
        </div>
        <div className="col-12 md:col-3 md:mb-4 mb-0 px-3">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-shield text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">Trusted Securitty</div>
          <span className="text-700 text-sm line-height-3">
            Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus
            metus aliquam eleifend.
          </span>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import "../02-useEffect/effects.css";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>realexampleref</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide
      </button>
    </div>
  );
};

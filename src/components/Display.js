import React from "react";
import "./Display.css";
function Display({ operations = "", result }) {
  return (
    <div className="displayContainer">
      <p className="operations">{operations}</p>
      <p className="result">{result}</p>
    </div>
  );
}

export default Display;

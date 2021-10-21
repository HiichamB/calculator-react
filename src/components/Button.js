import React from "react";
import "./Button.css";

function Button({ label, handleOnClick }) {
  const isNum = !isNaN(label);
  const cls = isNum ? "btn" : "btn NaN";
  return (
    <button className={cls} onClick={() => handleOnClick(label)}>
      {label}
    </button>
  );
}

export default Button;

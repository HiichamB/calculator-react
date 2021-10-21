import react, { useState } from "react";

import Display from "./Display";
import Button from "./Button";
import "./caclulator.css";

function Calculator() {
  const OPERATIONS = ["x", "+", "-", "/", "="];
  const btnLine1 = [7, 8, 9, "x"];
  const btnLine2 = [4, 5, 6, "-"];
  const btnLine3 = [1, 2, 3, "+"];
  const btnLine4 = ["=", 0, ".", "/"];
  const combineBtns = [...btnLine1, ...btnLine2, ...btnLine3, ...btnLine4];

  const [operations, setOperations] = useState("");
  const [result, setResult] = useState(0);
  const [lastChar, setLastChar] = useState("");

  const handleOnClickBtn = (v) => {
    const isLastCharAnOperation = OPERATIONS.includes(lastChar);
    const isOperation = OPERATIONS.includes(v);
    if (isOperation && isLastCharAnOperation) {
      if (lastChar === "=" && isOperation && v !== "=") {
        setOperations(`${operations}${v}`);
      }
      return null;
    }

    if (!isOperation) setResult(Number(`${result}${v}`));
    else {
      setOperations(`${operations}${result}${v}`);
    }
    if (isLastCharAnOperation) setResult(v);

    if (isOperation && v === "=") {
      setOperations(`${operations}${result}`);
      setResult(eval(`${operations}${result}`));
    }
    if (lastChar === "=" && isOperation && v !== "=") {
      console.log("debugging", {
        v,
        operations,
        lastChar,
      });
    }

    setLastChar(v);
  };

  return (
    <div className="calc-container">
      <Display operations={operations} result={result} />

      <div className="buttons">
        {combineBtns.map((label) => (
          <Button key={label} label={label} handleOnClick={handleOnClickBtn} />
        ))}
      </div>
    </div>
  );
}
export default Calculator;

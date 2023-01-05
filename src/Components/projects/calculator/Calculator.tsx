import React, { useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState<number | undefined>();
  const [error, setError] = useState<string | undefined>();

  const calculate = () => {
    setResult(undefined);
    setError(undefined);

    switch (operator) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "/":
        if (number2 == 0) {
          setError("Cannot divide by zero");
        } else {
          setResult(number1 / number2);
        }
        break;
    }
  };

  return (
    <>
      <div>
        <label htmlFor="number1">Number 1</label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        ></input>
        <label htmlFor="number2">Number 2</label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        ></input>

        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <button onClick={calculate}>Calculate</button>
      </div>
      {result && <div>result : {result}</div>}

      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
};

export default Calculator;

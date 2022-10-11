import React, { useState } from "react";
import Button from "./Button";

function Calculator() {
  const [expression, setExpression] = useState("");

  function changeExpr(value) {
    if (/[/*+-]/.test(value) === true) {
      calculate();
    }

    setExpression((previous) => {
      return previous + value;
    });
  }

  function clear() {
    setExpression("");
  }

  function deleteExpr() {
    setExpression((previous) => {
      return previous.slice(0, previous.length - 1);
    });
  }

  function calculate() {
    // eslint-disable-next-line no-eval
    let result = eval(expression);
    setExpression(result.toString());
  }

  return (
    <div className="form">
      <input type="text" readOnly value={expression}></input>
      <div className="button-div">
        <Button value="AC" id="clear" click={clear} />
        <Button value="delete" click={deleteExpr} />
        <Button value="=" click={calculate} />
        <Button value="/" click={changeExpr} />
        <Button value="1" click={changeExpr} />
        <Button value="2" click={changeExpr} />
        <Button value="3" click={changeExpr} />
        <Button value="*" click={changeExpr} />
        <Button value="4" click={changeExpr} />
        <Button value="5" click={changeExpr} />
        <Button value="6" click={changeExpr} />
        <Button value="-" click={changeExpr} />
        <Button value="7" click={changeExpr} />
        <Button value="8" click={changeExpr} />
        <Button value="9" click={changeExpr} />
        <Button value="+" id="plus" click={changeExpr} />
        <Button value="0" id="zero" click={changeExpr} />
        <Button value="." click={changeExpr} />
      </div>
    </div>
  );
}

export default Calculator;

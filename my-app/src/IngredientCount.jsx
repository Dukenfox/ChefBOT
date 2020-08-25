import React, { useState } from "react";
import { Button } from "react-bootstrap";

function IngredientCount() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h3>{count}</h3>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}

export default IngredientCount;

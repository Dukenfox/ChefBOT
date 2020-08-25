import React from "react";
import IngredientCount from "./IngredientCount";
function IngredientRow(props) {
  return (
    <div className="IngredientRow">
      <h3>{props.text}</h3>
      <IngredientCount />
    </div>
  );
}

export default IngredientRow;

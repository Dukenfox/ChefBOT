import React from "react";
import IngredientCount from "./IngredientCount";
import IngredientList from "./IngredientList";

function IngredientPage() {
  return (
    <div>
      <IngredientList />
      <IngredientCount />
    </div>
  );
}
export default IngredientPage;

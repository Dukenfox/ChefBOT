import React, { useState } from "react";
import ToDoItem from "./IngredientRow";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import IngredientRow from "./IngredientRow";

function IngredientList() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="IngredientsPage">
        <div className="heading">
          <h1>Add Ingredients</h1>
        </div>
        <div className="form">
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div className="IngredientContainer">
          {items.map((todoItem, index) => (
            <IngredientRow key={index} id={index} text={todoItem} />
          ))}
        </div>
    </div>
  );
}

export default IngredientList;

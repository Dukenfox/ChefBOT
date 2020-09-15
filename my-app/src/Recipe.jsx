import React from "react";
import Entry from "./Entry";
import recipeList from "./recipeList";

function createEntry(recipeIcon) {
  return (
    <Entry
      key={recipeIcon.id}
      icon={recipeIcon.ImgURL}
      name={recipeIcon.name}
      description={recipeIcon.meaning}
    />
  );
}

function Recipe() {
  return (
    <div className="recipePage">
      <h1>
        <span>Here are some recipies!</span>
      </h1>
      <dl className="cardRow">{recipeList.map(createEntry)}</dl>
    </div>
  );
}

export default Recipe;

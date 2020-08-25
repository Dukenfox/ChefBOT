import React from "react";
import Entry from "./Entry";
import recipeList from "./recipeList";

function createEntry(recipeIcon) {
    return (
      <Entry
        key={recipeIcon.id}
        icon={recipeIcon.emoji}
        name={recipeIcon.name}
        description={recipeIcon.meaning}
      />
    );
  }
  
  function App() {
    return (
      <div>
        <h1>
          <span>Here are some recipies!</span>
        </h1>
        <dl className="">{recipeList.map(createEntry)}</dl>
      </div>
    );
  }
  
  export default App;
  
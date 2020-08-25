import React from "react";
import StartpageNav from "./StartpageNav";
import Header from "./Header";
import IngredientList from "./IngredientList";
import Recipe from "./Recipe";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <StartpageNav />
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/ingredients">
          <IngredientList />
        </Route>
        <Route path="/recipe">
          <Recipe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

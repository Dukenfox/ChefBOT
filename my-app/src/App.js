import React from "react";
import StartpageNav from "./StartpageNav";
import Header from "./Header";
import IngredientPage from "./IngredientPage";
import Recipe from "./Recipe";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router className="App">
      <StartpageNav />
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/ingredients">
          <IngredientPage />
        </Route>
        <Route path="/recipe">
          <Recipe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

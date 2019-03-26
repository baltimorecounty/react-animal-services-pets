import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PetTabs } from "./components";

const App = () => (
  <Router>
    <div className="pets-app">
      <Route path="/:petType?" exact component={PetTabs} />
    </div>
  </Router>
);

export default App;

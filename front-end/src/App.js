import React from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import HomePage from "../src/Pages/homepage/homepage";
import LoginPage from "./Pages/LoginPage/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import HomePage from "../src/Pages/homepage/homepage";
import LoginPage from "./Pages/LoginPage/LoginPage";

import { auth } from "./Components/FirebaseUtils/FirebaseUtils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentuser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentuser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
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
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "../src/Pages/homepage/homepage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Header from "./Components/header/header";
import {
  auth,
  createUserProfileDocument
} from "./Components/FirebaseUtils/FirebaseUtils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentuser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //console.log(userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentuser: { id: snapShot.id, ...snapShot.data() }
            },
            () => {
              // console.log(this.state.currentuser);
            }
          );
        });
      } else {
        this.setState({ currentuser: userAuth });
        // console.log(this.state.currentuser, userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentuser={this.state.currentuser} />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

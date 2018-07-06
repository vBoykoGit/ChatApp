import React, { Component } from "react";
import Chat from "./components/Chat";
import "./css/App.css";
import { PrivateRoute } from './components/PrivateRoute.js';
import { RegisterPage } from './components/containers/RegisterPage.js';
import { LoginPage } from './components/containers/LoginPage.js';
import { Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <PrivateRoute exact path="/" component={Chat} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </div>
    );
  }
}

export default App;

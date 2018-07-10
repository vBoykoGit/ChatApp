import React, { Component } from "react";
import Chat from "./components/Chat";
import "./css/App.css";
import { PrivateRoute } from './components/PrivateRoute.js';
import { RegisterPage } from './components/containers/RegisterPage.js';
import { LoginPage } from './components/containers/LoginPage.js';
import { HashRouter, Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { user } from './store/authReducers';
import { history } from './history/history';

class App extends Component {
  render() {
    console.log("APPPPPPP");
    
    return (
      <Router history = {history}>
        <div>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute exact path="/" component={Chat}/>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {  
  // const { user } = state;
  // return {
  //     user
  // };
  // return {}
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
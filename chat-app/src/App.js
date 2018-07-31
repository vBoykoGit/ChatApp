import React, { Component } from "react";
import Chat from "./components/Chat";
import "./css/App.css";
import { PrivateRoute } from './components/PrivateRoute'
import { RegisterPage } from './components/containers/RegisterPage'
import { LoginPage } from './components/containers/LoginPage'
import { Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { history } from './history/history';

class App extends Component {
  render() {    
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
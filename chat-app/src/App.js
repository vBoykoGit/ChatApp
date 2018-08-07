import React from "react";
import { Chat } from "./components/Chat";
import "./css/App.css";
import { PrivateRoute } from './components/PrivateRoute'
import { RegisterPage } from './components/containers/RegisterPage'
import { LoginPage } from './components/containers/LoginPage'
import { Router, Route, Switch } from "react-router-dom";
import { history } from './history/history';

const App = () =>
  <Router history={history}>
    <div>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <PrivateRoute path="/" component={() =>
        <Switch>
          <Route path="/channel/:id" component={Chat} />
          <Route path="/" component={Chat} />
        </Switch>
      }
      />
    </div>
  </Router>

export default App
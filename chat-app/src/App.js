import React from "react";
import { Chat } from "./components/containers/Chat";
import { PrivateRoute } from './components/PrivateRoute'
import { RegisterPage } from './components/containers/RegisterPage'
import { LoginPage } from './components/containers/LoginPage'
import { Router, Route, Switch } from "react-router-dom";
import { history } from './history/history';
import './css/styles.scss'

const App = () =>
  <div className='app'>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/" component={() =>
          <Switch>
            <Route path="/channel/:id" component={Chat} />
            <Route path="/" component={Chat} />
          </Switch>
        }
        />
      </Switch>
    </Router>
  </div>
export default App
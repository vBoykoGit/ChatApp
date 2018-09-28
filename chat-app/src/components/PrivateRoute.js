import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { hasToken } from '../helpers/token';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => (
        hasToken
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )
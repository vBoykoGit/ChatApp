import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {
  messages
} from "./reducers";
import user from "./reducers/userReducers.js";
import socket from './socketReducer.js'
import thunk from 'redux-thunk'
import registration from './registrationReducer';
import { createLogger } from 'redux-logger'

let console = window.console;

const loggerMiddleware = createLogger();

const saver = store => next => action => {
  let result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const middleware = () => [
  thunk,
  loggerMiddleware, 
  saver,
]

const storeFactory = (initialState = {}) => {
  const store = applyMiddleware(...middleware())(createStore)(combineReducers({
    socket,
    user,
    registration
  }), localStorage["redux-store"] ? JSON.parse(localStorage["redux-store"]) : initialState);

  console.log(store.getState());
  return store
}

export default storeFactory;
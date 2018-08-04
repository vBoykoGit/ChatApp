import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {
  messages
} from "./reducers";
import user from "./reducers/userReducers.js";
import socket from './reducers/socketReducer.js'
import thunk from 'redux-thunk'
import registration from './reducers/registrationReducer';
import search from './reducers/searchReducer'
import {
  createLogger
} from 'redux-logger'
import chat from './reducers/chatReducer'

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
    registration,
    search,
    chat
  }), localStorage["redux-store"] ? JSON.parse(localStorage["redux-store"]) : initialState);

  console.log(store.getState());
  return store
}

export default storeFactory;
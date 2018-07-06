import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {
  messages
} from "./reducers";
import {
  user
} from "./authReducers";
import thunk from 'redux-thunk'


let console = window.console;

const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const saver = store => next => action => {
  let result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const middleware = () => [
  logger, 
  saver,
  thunk
]

const storeFactory = (initialState = {}) => {
  const store = applyMiddleware(...middleware())(createStore)(combineReducers({
    messages,
    user
  }), localStorage["redux-store"] ? JSON.parse(localStorage["redux-store"]) : initialState);

  console.log(store.getState());
  return store
}

export default storeFactory;
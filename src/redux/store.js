import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initState = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(...middlewares)
  // compose(
  //   applyMiddleware(...middlewares),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

export default store;

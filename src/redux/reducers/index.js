import { combineReducers } from "redux";
import arrayReducer from "./ArrayReducer";
import animationReducer from "./AnimationReducer";
import configReducer from "./ConfigReducer";
import alertReducer from "./AlertReducer";

const rootReducer = combineReducers({
  array: arrayReducer,
  animation: animationReducer,
  config: configReducer,
  alert: alertReducer,
});

export default rootReducer;

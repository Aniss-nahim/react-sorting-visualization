import { combineReducers } from "redux";
import arrayReducer from "./ArrayReducer";
import animationReducer from "./AnimationReducer";
import configReducer from "./ConfigReducer";

const rootReducer = combineReducers({
  array: arrayReducer,
  animation: animationReducer,
  config: configReducer,
});

export default rootReducer;

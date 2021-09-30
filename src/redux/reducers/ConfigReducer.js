/**
 * ConfigReducer for managing form values
 */
import * as actionTypes from "../action-types/ConfigActionTypes";

const initState = {
  algorithm: "",
  speed: 150,
  minSpeed: 50,
  maxSpeed: 5000,
  length: 20,
  maxLength: 120,
  minLength: 5,
  maxValue: 100,
  minValue: 5,
};

const configReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CONFIG_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.CONFIG_RESET:
      return initState;

    default:
      return { ...state };
  }
};

export default configReducer;

/**
 * ConfigReducer for managing form values
 */
import * as actionTypes from "../action-types/ConfigActionTypes";

const initState = {
  algortim: "",
  speed: 150,
  length: 20,
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

/**
 * AnimationReducer for managing the animation object
 */
import * as actionTypes from "../action-types/AnimationActionTypes";

const initState = {};

const animationReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ANIMATION_CLEAR:
      return {};

    case actionTypes.ANIMATION_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

export default animationReducer;

/**
 * AnimationReducer for managing the animation object
 */
import * as actionTypes from "../action-types/AnimationActionTypes";

const initState = {
  animation: {},
};

const animationReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ANIMATION_CLEAR:
      return {
        ...state,
        animation: {},
      };

    case actionTypes.ANIMATION_UPDATE:
      return {
        ...state,
        animation: { ...action.payload },
      };

    default:
      return { ...state };
  }
};

export default animationReducer;

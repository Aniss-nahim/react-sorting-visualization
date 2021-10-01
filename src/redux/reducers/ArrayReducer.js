/**
 * ArrayReducer for managing main array and the animation
 */
import * as actionTypes from "../action-types/ArrayActionTypes";

const initState = {
  array: [],
  isSorted: false,
  isSorting: false,
};

const arrayReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_RANDOM_ARRAY:
      return {
        ...state,
        array: action.payload,
        isSorted: false,
        isSorting: false,
      };

    case actionTypes.START_SORTING:
      return {
        ...state,
        isSorted: false,
        isSorting: true,
      };

    case actionTypes.STOP_SORTING:
      return {
        ...state,
        isSorting: false,
      };

    case actionTypes.ARRAY_SORTED:
      return {
        ...state,
        isSorted: true,
      };

    case actionTypes.ARRAY_UPDATED:
      return {
        ...state,
        array: [...action.payload],
      };

    default:
      return { ...state };
  }
};

export default arrayReducer;

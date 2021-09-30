import * as actionTypes from "../action-types/ArrayActionTypes";
import randomArray from "../../helper/randomArray";

export const createArray = () => (dispatch, getState) => {
  const { length, minValue, maxValue } = getState().config;
  dispatch({
    type: actionTypes.GENERATE_RANDOM_ARRAY,
    payload: randomArray(length, minValue, maxValue),
  });
};

export const sortingArray = () => (dispatch) => {
  dispatch({
    type: actionTypes.START_SORTING,
  });
};

export const stopSortingArray = () => (dispatch) => {
  dispatch({
    type: actionTypes.STOP_SORTING,
  });
};

export const sortedArray = () => (dispatch) => {
  dispatch({
    type: actionTypes.ARRAY_SORTED,
  });
};

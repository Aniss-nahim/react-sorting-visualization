/**
 * Action creatore for Config reducer
 */
import * as actionTypes from "../action-types/ConfigActionTypes";

export const putConfig = (config) => (dispatch) => {
  dispatch({
    type: actionTypes.CONFIG_UPDATE,
    payload: config,
  });
};

export const resetConfig = () => (dispatch) => {
  dispatch({
    type: actionTypes.CONFIG_RESET,
  });
};

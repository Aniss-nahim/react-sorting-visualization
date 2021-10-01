import * as actionTypes from "../action-types/AlertActionTypes";
import { delay } from "../../helper/delayAnimation";

/**
 * Dispatch push alert action to the AlertReducer
 * The alert will be removed after 5seconds
 * @param {Object} param0
 * @returns {Promise}
 */
export const alertPush =
  ({ type, message }) =>
  async (dispatch) => {
    dispatch({
      type: actionTypes.ALERT_CREATED,
      payload: { type, message },
    });
    await delay(5000);
    dispatch({
      type: actionTypes.ALERT_AUTO_REMOVE,
    });
  };

export const alertDelete = (index) => (dispatch) => {
  dispatch({
    type: actionTypes.ALERT_DELETED,
    payload: index,
  });
};

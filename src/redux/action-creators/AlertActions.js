import * as actionTypes from "../action-types/AlertActionTypes";
import { delay } from "../../helper/delayAnimation";

export const alertPush = (alert) => async (dispatch) => {
  dispatch({
    type: actionTypes.ALERT_CREATED,
    payload: alert,
  });
  await delay(5000);
  dispatch({
    type: actionTypes.ALERT_AUTO_REMOVE,
  });
};

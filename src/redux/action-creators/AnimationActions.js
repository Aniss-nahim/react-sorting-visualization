import * as actionTypes from "../action-types/AnimationActionTypes";
import { delay } from "../../helper/delayAnimation";

export const updateAnimation = (animation) => async (dispatch, getState) => {
  const { speed } = getState().config;
  await delay(speed);
  dispatch({
    type: actionTypes.ANIMATION_UPDATE,
    payload: animation,
  });
};

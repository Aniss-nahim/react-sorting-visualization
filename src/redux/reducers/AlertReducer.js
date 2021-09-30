/**
 * AlertReducer for managing Alert notifications
 */
import * as actionTypes from "../action-types/AlertActionTypes";

const initState = {
  alerts: [],
};

const alertReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ALERT_CREATED:
      if (state.alerts.length >= 3) {
        return {
          ...state,
          alerts: [...state.alerts.slice(1), action.payload],
        };
      }
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };

    case actionTypes.ALERT_DELETED:
      return {
        ...state,
        alerts: state.alerts.filter((alert, index) => index !== action.payload),
      };

    case actionTypes.ALERT_AUTO_REMOVE:
      return {
        ...state,
        alerts: [...state.alerts.slice(1)],
      };

    default:
      return { ...state };
  }
};

export default alertReducer;

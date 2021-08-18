import { ActionTypes } from "../constants/action-types";

export const login = (info) => {
  return {
    type: ActionTypes.LOG_IN,
    payload: info,
  };
};

export const logout = () => {
  return {
    type: ActionTypes.LOG_OUT,
  };
};

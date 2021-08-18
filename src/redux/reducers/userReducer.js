import { ActionTypes } from "../constants/action-types";
const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        user: {
          uid: action.payload.uid,
          email: action.payload.email,
        },
      };

    case ActionTypes.LOG_OUT:
      return { user: null };

    default:
      return state;
  }
};

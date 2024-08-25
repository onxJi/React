import { types } from "../types/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        name: action.payload.name,
      };
    case types.logout:
      return {
        ...state,
        logged: false,
        name: "",
      };
    default:
      return state;
  }
};

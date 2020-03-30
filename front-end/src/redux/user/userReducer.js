import "./userTypes";
import { userTypes } from "./userTypes";

const INITIAL_STATE = {
  currentuser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentuser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;

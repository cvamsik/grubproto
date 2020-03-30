import cartActiontypes from "./cartActionTypes";

const INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActiontypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;

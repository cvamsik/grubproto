import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import cartreducer from "./cart/cartReducer";

export default combineReducers({
  user: userReducer,
  cart: cartreducer
});

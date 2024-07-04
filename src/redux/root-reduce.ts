import { combineReducers } from "redux";
import { userReducer } from "./User/reducer";
import { cartReducer } from "./CartReducer/CartReducer";

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>;


import { combineReducers } from "redux";
import { UserSlice } from "./User/user-slice";
import { cartSlice } from "./CartReducer/cart-slice";

export const rootReducer = combineReducers({
  userReducer: UserSlice.reducer,
  cartReducer: cartSlice.reducer,
})

export type RootReducer = ReturnType<typeof rootReducer>;


import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reducer";

export const rootReducer = combineReducers({
  userReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>;


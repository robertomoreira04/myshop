import { createStore } from "redux";
import { rootReducer } from "./root-reduce";

export const store = createStore(rootReducer)
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reduce";
import logger from "redux-logger";


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});



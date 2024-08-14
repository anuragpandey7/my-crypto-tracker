import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "../Store/watchListSlice";

export const cryptoStore = configureStore({
  reducer: {
    watchList: watchListReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import museumReducer from "./museum/slice";

const store = configureStore({
  reducer: {
    museum: museumReducer,
  },
});

export default store;

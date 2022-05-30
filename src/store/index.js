import { configureStore } from "@reduxjs/toolkit";
import museumReducer from "./museum/slice";

const store = configureStore({
  reducer: {
    museumData: museumReducer,
  },
});

export default store;

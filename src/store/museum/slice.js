// src/store/user/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  museumData: [],
};

//reducer
export const museumSlice = createSlice({
  name: "museum",
  initialState,
  reducers: {},
});

//actions
export const {} = museumSlice.actions;

export default museumSlice.reducer;

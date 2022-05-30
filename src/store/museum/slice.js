// src/store/user/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  museumData: [],
};

//reducers
export const museumSlice = createSlice({
  name: "museum",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },

    museumdataFetch: (state, action) => {
      //  console.log("dataFetched action", action);
      state.museumData = [...action.payload]; // get our list of arts from the action payload
      state.loading = false;
    },

    dataById: (state, action) => {
      state.museumData = action.payload;
      state.loading = false;
    },
  },
});

//actions
export const { startLoading, museumdataFetch, dataById } = museumSlice.actions;

export default museumSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface ILoadState {
  loading: boolean;
}

const initialState: ILoadState = {
  loading: false,
};

const loadSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    beginLoad(state: ILoadState) {
      state.loading = true;
    },
    finishLoad(state: ILoadState) {
      state.loading = false;
    },
  },
});

export const loadActions = loadSlice.actions;

export const loadReducers = loadSlice.reducer;

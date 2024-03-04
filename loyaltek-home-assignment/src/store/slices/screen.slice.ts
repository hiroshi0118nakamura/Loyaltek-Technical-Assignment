import { createSlice } from "@reduxjs/toolkit";

interface IScreenState {
  navbarState: boolean;
  darkMode: string;
}

const initialState: IScreenState = {
  navbarState: false,
  darkMode: "dark",
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    changeState(state: IScreenState) {
      state.navbarState = !state.navbarState;
    },
    changeDarkMode(state: IScreenState) {
      state.darkMode = state.darkMode === "dark" ? "light" : "dark";
    },
  },
});

export const screenActions = screenSlice.actions;

export const screenReducers = screenSlice.reducer;

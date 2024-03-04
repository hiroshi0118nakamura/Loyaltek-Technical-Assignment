import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    changeDarkMode(state: IScreenState, actions: PayloadAction<string>) {
      state.darkMode = actions.payload;
    },
  },
});

export const screenActions = screenSlice.actions;

export const screenReducers = screenSlice.reducer;

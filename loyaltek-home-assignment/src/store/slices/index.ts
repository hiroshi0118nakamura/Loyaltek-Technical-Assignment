import { combineReducers } from "@reduxjs/toolkit";
import { cardReducers, cardActions } from "./card.slice";
import { loadReducers, loadActions } from "./load.slice";
import { screenReducers, screenActions } from "./screen.slice";

export const Slices = combineReducers({
  card: cardReducers,
  load: loadReducers,
  screen: screenReducers,
});

export const Actions = {
  card: cardActions,
  load: loadActions,
  screen: screenActions,
};

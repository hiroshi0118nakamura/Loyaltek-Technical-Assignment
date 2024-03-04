import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ICard, IQueryArray, ISet } from "types";

interface ICardState {
  data: IQueryArray;
  filter: IQueryArray;
  result: IQueryArray;
  searchName: string;
  cards: Map<string, ICard>;
  myCard: Map<string, ICard>;
  avgCMC: number;
}

const initialState: ICardState = {
  data: { types: [], subtypes: [], supertypes: [], set: [] },
  filter: { types: [], subtypes: [], supertypes: [], set: [] },
  result: { types: [], subtypes: [], supertypes: [], set: [] },
  searchName: "",
  cards: new Map(),
  myCard: new Map(),
  avgCMC: 0,
};

const cardSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addCard(state: ICardState, action: PayloadAction<string>) {
      const card = state.cards.get(action.payload);
      if (card && state.myCard.size < 30) {
        state.cards.delete(action.payload);
        state.myCard.set(action.payload, card);
        updateAvgCMC(state);
      } else if (state.myCard.size >= 30) {
        toast.error("Deck is filled");
      }
    },
    removeCard(state: ICardState, action: PayloadAction<string>) {
      const card = state.myCard.get(action.payload);
      if (card) {
        state.myCard.delete(action.payload);
        state.cards.set(action.payload, card);
        updateAvgCMC(state);
      }
    },
    clearCard(state: ICardState) {
      state.cards = new Map();
      state.myCard = new Map();
    },

    filterQuery(
      state: ICardState,
      action: PayloadAction<{ type: keyof IQueryArray; value: string }>
    ) {
      const { type, value } = action.payload;
      if (!value) state.filter[type] = [];
      else
        state.filter[type] = state.data[type].filter((item) =>
          item.toUpperCase().includes(value.toUpperCase())
        );
    },
    addQuery(
      state: ICardState,
      action: PayloadAction<{ type: keyof IQueryArray; value: string }>
    ) {
      const { type, value } = action.payload;
      state.result[type] = [...state.result[type], value];
      state.data[type] = state.data[type].filter((item) => item !== value);
      state.filter[type] = [];
    },
    deleteQuery(
      state: ICardState,
      action: PayloadAction<{ type: keyof IQueryArray; value: string }>
    ) {
      const { type, value } = action.payload;
      state.result[type] = state.result[type].filter((item) => item !== value);
      state.data[type] = [...state.data[type], value].sort((a, b) =>
        a.localeCompare(b)
      );
    },
    changeName(state: ICardState, action: PayloadAction<string>) {
      state.searchName = action.payload;
    },

    getTypesRequest() {},
    getTypesSuccess(state: ICardState, action: PayloadAction<string[]>) {
      state.data.types = [...action.payload];
    },
    getSupertypesRequest() {},
    getSupertypesSuccess(state: ICardState, action: PayloadAction<string[]>) {
      state.data.supertypes = [...action.payload];
    },
    getSubtypesRequest() {},
    getSubtypesSuccess(state: ICardState, action: PayloadAction<string[]>) {
      state.data.subtypes = [...action.payload];
    },
    getSetRequest() {},
    getSetSuccess(state: ICardState, action: PayloadAction<ISet[]>) {
      state.data.set = [...action.payload.map((set) => set.name)];
    },
    getCardRequest(_state: ICardState, _action: PayloadAction<string>) {},
    getCardSuccess(state: ICardState, action: PayloadAction<ICard[]>) {
      state.cards.clear();
      action.payload.forEach((card) => {
        if (!state.myCard.has(card.name)) {
          state.cards.set(card.name, card);
        }
      });
    },
  },
});

function updateAvgCMC(state: ICardState) {
  let total = 0;
  let count = 0;
  state.myCard.forEach((card) => {
    if (card.cmc > 0) {
      total += card.cmc;
      count++;
    }
  });
  state.avgCMC = count === 0 ? 0 : total / count;
}

export const cardActions = cardSlice.actions;

export const cardReducers = cardSlice.reducer;

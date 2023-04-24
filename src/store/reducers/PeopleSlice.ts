import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPeople } from "../../types";

interface PeopleState {
  people: IPeople["results"];
  count: number;
  isLoading: boolean;
  error: string;
}

const initialState: PeopleState = {
  people: [],
  isLoading: false,
  count: 0,
  error: "",
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    peopleFetcing(state) {
      state.isLoading = true;
    },
    peopleFetcingSucsess(state, action: PayloadAction<IPeople>) {
      state.isLoading = false;
      state.error = "";
      state.people = action.payload.results;
      state.count = action.payload.count;
    },
    peopleFetcingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default peopleSlice.reducer;

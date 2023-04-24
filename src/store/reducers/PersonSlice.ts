import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PersonState {
  person: string;
}

const initialState: PersonState = {
  person: "",
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    currentPerson(state, action: PayloadAction<string>) {
      state.person = action.payload;
    },
  },
});

export default personSlice.reducer;

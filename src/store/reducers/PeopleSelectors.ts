import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const items = (state: RootState) => state.peopleReducer.people;

export const personInfo = createSelector(
  [items, (_, personName: string) => personName],
  (item, personName) => {
    return item.find((el) => el.name === personName);
  }
);

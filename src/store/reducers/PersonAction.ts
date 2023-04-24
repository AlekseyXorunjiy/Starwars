import { AppDispatch } from "../store";
import { personSlice } from "./PersonSlice";

export const currentPerson = (name: string) => (dispatch: AppDispatch) => {
  dispatch(personSlice.actions.currentPerson(name));
};

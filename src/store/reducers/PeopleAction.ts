import axios from "axios";
import { AppDispatch } from "../store";
import { IPeople } from "../../types";
import { peopleSlice } from "./PeopleSlice";

export const fetchPeople = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(peopleSlice.actions.peopleFetcing());

    const response = await axios.get<IPeople>("https://swapi.dev/api/people");

    dispatch(peopleSlice.actions.peopleFetcingSucsess(response.data));
  } catch (error) {
    dispatch(peopleSlice.actions.peopleFetcingError((error as Error).message));
  }
};

export const searchPeople =
  (title: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(peopleSlice.actions.peopleFetcing());

      const response = await axios.get<IPeople>(
        `https://swapi.dev/api/people/?search=${title}`
      );

      dispatch(peopleSlice.actions.peopleFetcingSucsess(response.data));
    } catch (error) {
      dispatch(
        peopleSlice.actions.peopleFetcingError((error as Error).message)
      );
    }
  };

export const paginationPeople =
  (page: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(peopleSlice.actions.peopleFetcing());

      const response = await axios.get<IPeople>(
        `https://swapi.dev/api/people/?page=${page}`
      );

      dispatch(peopleSlice.actions.peopleFetcingSucsess(response.data));
    } catch (error) {
      dispatch(
        peopleSlice.actions.peopleFetcingError((error as Error).message)
      );
    }
  };

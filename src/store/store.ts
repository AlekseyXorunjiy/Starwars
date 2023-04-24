import { combineReducers, configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./reducers/PeopleSlice";
import personReducer from "./reducers/PersonSlice";

const rootReducer = combineReducers({
  peopleReducer,
  personReducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];

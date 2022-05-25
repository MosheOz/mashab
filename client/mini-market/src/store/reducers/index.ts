import { combineReducers } from "redux";
import { ItemsReducer, ItemsState } from "./items";

export const rootReducer = combineReducers({
  items: ItemsReducer,
});

export interface RootState {
  items: ItemsState;
}

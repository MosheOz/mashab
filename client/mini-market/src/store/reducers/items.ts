import { Item } from "../../types/item.interface";
import { Action } from "../actions";

export interface ItemsState {
  items: Item[];
}

const initialState = {
  items: [],
};

export const ItemsReducer = (
  state: ItemsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "DISPLAY_ITEMS": {
      return { ...state, items: action.payload };
    }
    default:
      return state;
  }
};

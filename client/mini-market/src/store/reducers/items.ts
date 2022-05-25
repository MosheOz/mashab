import { Item } from "../../types/item.interface";
import { Action } from "../actions";

export interface ItemsState {
  items: Item[];
  categories: { [key: number]: string };
}

const initialState = {
  items: [],
  categories: {},
};

export const ItemsReducer = (
  state: ItemsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "DISPLAY_ITEMS": {
      return { ...state, items: action.payload };
    }
    case "UPDATE_CATEGORIES": {
      return { ...state, categories: action.payload };
    }
    default:
      return state;
  }
};

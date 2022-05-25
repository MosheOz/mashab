import { Item } from "../../types/item.interface";

export type Action = { type: string; payload: any };

export const displayItems = (items: Item[]): Action => ({
  type: "DISPLAY_ITEMS",
  payload: items,
});

export const updateCategories = (categories: {
  [key: number]: string;
}): Action => ({
  type: "UPDATE_CATEGORIES",
  payload: categories,
});

import { Ingredient } from "../../utils/interfaces";

export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const REPLACE_ITEM = "REPLACE_ITEM";
export const CLEAR_ITEMS = "CLEAR_ITEMS";

export interface IAddItem {
  readonly type: typeof ADD_ITEM;
  readonly item: Ingredient;
}

export interface IDeleteItem {
  readonly type: typeof DELETE_ITEM;
  readonly index: number;
}

export interface IReplaceItem {
  readonly type: typeof REPLACE_ITEM;
  readonly from: number;
  readonly to: number;
}

export interface IClearItems {
  readonly type: typeof CLEAR_ITEMS;
}
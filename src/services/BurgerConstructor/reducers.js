import { Ingredients } from "../../utils/enum";
import { ADD_ITEM, DELETE_ITEM, CLEAR_MODAL } from "./actions";

const constructorState = {
  items: [],
  bun: null,
};

export const constructorReducer = (state = constructorState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      if (action.payload.type === Ingredients.bun) {
        return { 
          ...state, 
          bun: action.payload, 
        };
      }
      return {
        ...state,
        items: [
          ...state.items, 
          action.payload,
        ],
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: [...state.items].filter((item, index) => index !== action.payload),
      };
    }
    case CLEAR_MODAL: {
      return {
        items: [],
        bun: null,
      };
    }
    default:
      return state;
  }
};
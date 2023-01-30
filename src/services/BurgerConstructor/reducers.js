import { Ingredients } from "../../utils/enum";
import { ADD_ITEM, DELETE_ITEM, REPLACE_ITEM } from "./actions";

const constructorState = {
  items: [],
  bun: {},
};

export const constructorReducer = (state = constructorState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      if (action.item.type === Ingredients.bun) {
        return { 
          ...state, 
          bun: action.item,
        };
      } else return {
        ...state,
        items: [
          ...state.items, 
          action.item,
        ],
      };
    }
    case REPLACE_ITEM:
      const newState = { 
        ...state, 
        items: [
          ...state.items
        ] 
      };
      [
        newState.items[action.from], 
        newState.items[action.to]
      ] = 
      [
        newState.items[action.to], 
        newState.items[action.from]
      ];
      return newState;
    case DELETE_ITEM: {
      return {
        ...state,
        items: [...state.items].filter(
          (item, index) => index !== action.index
        ),
      };
    }
    default:
      return state;
  }
};
import { Ingredients } from "../../utils/enum";
import { 
  ADD_ITEM, 
  DELETE_ITEM, 
  REPLACE_ITEM,
  CLEAR_ITEMS 
} from "./actions";

const constructorState = {
  items: [],
  bun: null,
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
    case CLEAR_ITEMS: {
      return {
        ...state,
        items: [],
        bun: null
      };
    }
    default:
      return state;
  }
};
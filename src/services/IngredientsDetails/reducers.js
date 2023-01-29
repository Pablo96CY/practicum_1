import { INGREDIENT_INFO_MODAL_OPEN, INGREDIENT_INFO_MODAL_CLOSE } from './actions';

const ingredientModalState = {
  isOpen: false,
  item: null,
};

export const ingredientDetailsReducer = (state = ingredientModalState, action) => {
  switch (action.type) {
    case INGREDIENT_INFO_MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        item: action.payload,
      };
    case INGREDIENT_INFO_MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default: {
      return state;
    }
  }
};
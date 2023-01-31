import { INGREDIENT_INFO_MODAL_OPEN, INGREDIENT_INFO_MODAL_CLOSE } from './actions';

const ingredientModalState = {
  isOpen: false,
};

export const ingredientDetailsReducer = (state = ingredientModalState, action) => {
  switch (action.type) {
    case INGREDIENT_INFO_MODAL_OPEN:
      return {
        isOpen: true,
      };
    case INGREDIENT_INFO_MODAL_CLOSE:
      return {
        isOpen: false,
      };
    default: {
      return state;
    }
  }
};
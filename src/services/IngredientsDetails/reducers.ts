import { TIngredientModalrActions } from '../../utils/types';
import { 
  INGREDIENT_INFO_MODAL_OPEN, 
  INGREDIENT_INFO_MODAL_CLOSE 
} from './actions';

export const ingredientModalState = {
  isOpen: false,
};

export const ingredientDetailsReducer = (state = ingredientModalState, action: TIngredientModalrActions) => {
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
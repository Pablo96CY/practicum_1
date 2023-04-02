import { 
  INGREDIENT_INFO_MODAL_OPEN, 
  INGREDIENT_INFO_MODAL_CLOSE 
} from "./actions";

import { 
  ingredientDetailsReducer, 
  ingredientModalState 
} from "./reducers";

describe('ingredientDetailsReducer', () => {
  it("should return the initial state", () => {
    expect(ingredientDetailsReducer(undefined, {}))
    .toEqual(ingredientModalState);
  });

  it("should handle INGREDIENT_INFO_MODAL_OPEN", () => {
    expect(ingredientDetailsReducer(
      ingredientModalState, 
      { 
        type: INGREDIENT_INFO_MODAL_OPEN
      }
    ))
    .toEqual({
      isOpen: true,
    });
  });

  it("should handle INGREDIENT_INFO_MODAL_CLOSE", () => {
    expect(ingredientDetailsReducer(
      ingredientModalState, 
      { 
        type: INGREDIENT_INFO_MODAL_CLOSE
      }
    ))
    .toEqual({
      isOpen: false,
    });
  });
});
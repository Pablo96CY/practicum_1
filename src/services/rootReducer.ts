import { combineReducers } from "redux";

import { constructorReducer } from "./BurgerConstructor/reducers";
import { ingredientsDataReducer } from "./BurgerIngredients/reducers";
import { ingredientDetailsReducer } from "./IngredientsDetails/reducers";
import { newOrderReducer } from "./OrderDetails/reducers";

export const rootReducer = combineReducers({
  burgerConstructor: constructorReducer,
  burgerIngredients: ingredientsDataReducer,
  ingredientsDetails: ingredientDetailsReducer,
  orderDetails: newOrderReducer,
});
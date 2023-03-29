import { combineReducers } from "redux";

import { constructorReducer } from "./BurgerConstructor/reducers";
import { ingredientsDataReducer } from "./BurgerIngredients/reducers";
import { ingredientDetailsReducer } from "./IngredientsDetails/reducers";
import { newOrderReducer } from "./OrderDetails/reducers";
import { authorizationReducer } from "./Authorization/reducers";
import { passwordOperations } from "./PasswordOperations/reducers";
import { userDataReducer } from "./UserData/reducers";
import { registrationReducer } from "./Registration/reducers";
import { commonOrdersReducer } from "./CommonOrders/reducers";
import { ordersInfoReducer } from "./OrderInfo/reducers";
import { personalOrdersReducer } from "./PersonalOrders/reducers";

export const rootReducer = combineReducers({
  burgerConstructor: constructorReducer,
  burgerIngredients: ingredientsDataReducer,
  ingredientsDetails: ingredientDetailsReducer,
  orderDetails: newOrderReducer,
  authReducer: authorizationReducer,
  passwordReducer: passwordOperations,
  userReducer: userDataReducer,
  registReducer: registrationReducer,
  commonOrderReducer: commonOrdersReducer,
  orderInfoReducer: ordersInfoReducer,
  personalOrderReducer: personalOrdersReducer
});
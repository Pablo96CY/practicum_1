import { 
  IAuthorizationClear, 
  IAuthorizationClearToken, 
  IAuthorizationLoginError, 
  IAuthorizationLoginRequest, 
  IAuthorizationLoginSuccess, 
  IAuthorizationLogoutError, 
  IAuthorizationLogoutRequest, 
  IAuthorizationLogoutSuccess, 
  IAuthorizationTokenError, 
  IAuthorizationTokenRequest, 
  IAuthorizationTokenSuccess 
} from "../services/Authorization/actions";
import { 
  IAddItem, 
  IDeleteItem, 
  IReplaceItem, 
  IClearItems 
} from "../services/BurgerConstructor/actions";
import { 
  IngredientDataError, 
  IngredientDataRequest, 
  IngredientDataSuccess 
} from "../services/BurgerIngredients/actions";
import { IngredientModalClose, IngredientModalOpen } from "../services/IngredientsDetails/actions";
import { 
  IOrderRequest, 
  IOrderSuccess, 
  IOrderError, 
  IOrderModalOpen, 
  IOrderModalClose 
} from "../services/OrderDetails/actions";
import { 
  IForgotPasswordRequest, 
  IForgotPasswordSuccess, 
  IForgotPasswordError, 
  IResetPasswordRequest, 
  IResetPasswordSuccess, 
  IResetPasswordError, 
  IClearResetPassword 
} from "../services/PasswordOperations/actions";
import { 
  IRegistrationRequest, 
  IRegistrationSuccess, 
  IRegistrationError, 
  IClearRegistration 
} from "../services/Registration/actions";
import { rootReducer } from "../services/rootReducer";
import { 
  IUserDataRequest, 
  IUserDataSuccess, 
  IUserDataError, 
  IPatchUserDataRequest, 
  IPatchUserDataSuccess, 
  IPatchUserDataError, 
  IUserDataClear 
} from "../services/UserData/actions";

export type TRootState = ReturnType<typeof rootReducer>;

export type TEmail = {
  email: string;
};

export type TEmailAndPassword = {
  password: string;
} & TEmail;

export type TUserFullForm = {
  name: string;
} & TEmailAndPassword;

export type TUserShortForm = {
  name: string;
} & TEmail;

export type TResetPassword = {
  password: string;
  token: string;
};

export type TAuthorizationActions = 
  IAuthorizationLoginRequest 
  | IAuthorizationLoginSuccess
  | IAuthorizationLoginError
  | IAuthorizationLogoutRequest
  | IAuthorizationLogoutSuccess
  | IAuthorizationLogoutError
  | IAuthorizationClear
  | IAuthorizationTokenRequest
  | IAuthorizationTokenSuccess
  | IAuthorizationTokenError
  | IAuthorizationClearToken;

export type TBurgerConstructorActions = 
  IAddItem 
  | IDeleteItem
  | IReplaceItem
  | IClearItems;

export type TBurgerIngredientsActions = 
  IngredientDataRequest 
  | IngredientDataSuccess
  | IngredientDataError;

export type TIngredientModalrActions = IngredientModalOpen | IngredientModalClose;

export type TOrderActions = 
  IOrderRequest  
  | IOrderSuccess
  | IOrderError
  | IOrderModalOpen
  | IOrderModalClose;

export type TPasswordOperationsActions = 
  IForgotPasswordRequest  
  | IForgotPasswordSuccess
  | IForgotPasswordError
  | IResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordError
  | IClearResetPassword;

export type TRegistrationActions = 
  IRegistrationRequest 
  | IRegistrationSuccess
  | IRegistrationError
  | IClearRegistration;

export type TUserDataActions = 
  IUserDataRequest  
  | IUserDataSuccess
  | IUserDataError
  | IPatchUserDataRequest
  | IPatchUserDataSuccess
  | IPatchUserDataError
  | IUserDataClear;
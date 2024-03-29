import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

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
import { 
  ICommonOrdersStartAction, 
  ICommonOrdersOpenAction, 
  ICommonOrdersSuccessAction, 
  ICommonOrdersErrorAction, 
  ICommonOrdersEndAction, 
  ICommonOrdersClosedAction, 
  ICommonOrdersMessageAction, 
  COMMON_ORDERS_CLOSED,
  COMMON_ORDERS_END,
  COMMON_ORDERS_ERROR,
  COMMON_ORDERS_MESSAGE,
  COMMON_ORDERS_OPEN,
  COMMON_ORDERS_START,
  COMMON_ORDERS_SUCCESS
} from "../services/CommonOrders/actions";
import { 
  IngredientModalClose, 
  IngredientModalOpen 
} from "../services/IngredientsDetails/actions";
import mainStore from "../services/mainStore";
import { 
  IOrderRequest, 
  IOrderSuccess, 
  IOrderError, 
  IOrderModalOpen, 
  IOrderModalClose 
} from "../services/OrderDetails/actions";
import { 
  IOrderInfoRequestAction, 
  IOrderInfoSuccessAction, 
  IOrderInfoErrorAction 
} from "../services/OrderInfo/actions";
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
  IPersonalOrdersStartAction, 
  IPersonalOrdersOpenAction, 
  IPersonalOrdersSuccessAction, 
  IPersonalOrdersErrorAction, 
  IPersonalOrdersEndAction, 
  IPersonalOrdersClosedAction, 
  IPersonalOrdersMessageAction,
  PERSONAL_ORDERS_CLOSED,
  PERSONAL_ORDERS_END,
  PERSONAL_ORDERS_ERROR,
  PERSONAL_ORDERS_MESSAGE,
  PERSONAL_ORDERS_OPEN,
  PERSONAL_ORDERS_START,
  PERSONAL_ORDERS_SUCCESS
} from "../services/PersonalOrders/actions";
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
import { Ingredient } from "./interfaces";

export type TRootState = ReturnType<typeof rootReducer>;

export type TAppDispatch = ThunkDispatch<TRootState, never, TAppActions>;

export type TAppThunk = ThunkAction<void, TRootState, unknown, AnyAction>

export type TAppActions = 
  TAuthorizationActions 
  | TBurgerConstructorActions
  | TIngredientModalrActions
  | TBurgerIngredientsActions
  | TOrderActions
  | TPasswordOperationsActions
  | TRegistrationActions
  | TUserDataActions
  | TCommonOrdersActions
  | TPersonalOrdersActions
  | TOrderInfoActions;

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

export type TUser = {
  name: string,
  email: string
}

export type TIngredientWithCount = Ingredient & {
  numberOfItems: number
};

export type TOrder = {
  ingredients: Array<string>;
  _id: string;
  status: string;
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

export type TOrdersList = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
}

export type TWebSocketCommonOrdersActions = {
  onStart: typeof COMMON_ORDERS_START,
  onOpen: typeof COMMON_ORDERS_OPEN,
  onSuccess: typeof COMMON_ORDERS_SUCCESS,
  onClosed: typeof COMMON_ORDERS_CLOSED,
  onEnd: typeof COMMON_ORDERS_END,
  onError: typeof COMMON_ORDERS_ERROR,
  onMessage: typeof COMMON_ORDERS_MESSAGE
};

export type TWebSocketPersonalOrdersActions = {
  onStart: typeof PERSONAL_ORDERS_START,
  onOpen: typeof PERSONAL_ORDERS_OPEN,
  onSuccess: typeof PERSONAL_ORDERS_SUCCESS,
  onClosed: typeof PERSONAL_ORDERS_CLOSED,
  onEnd: typeof PERSONAL_ORDERS_END,
  onError: typeof PERSONAL_ORDERS_ERROR,
  onMessage: typeof PERSONAL_ORDERS_MESSAGE
}; 

export type TOrdersState = {
  isConnected: boolean;
  message: TOrdersList | null;
  error: string | null;
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

export type TCommonOrdersActions = 
  ICommonOrdersStartAction 
  | ICommonOrdersOpenAction 
  | ICommonOrdersSuccessAction 
  | ICommonOrdersErrorAction 
  | ICommonOrdersEndAction 
  | ICommonOrdersClosedAction 
  | ICommonOrdersMessageAction;

export type TPersonalOrdersActions =
  IPersonalOrdersStartAction 
  | IPersonalOrdersOpenAction 
  | IPersonalOrdersSuccessAction 
  | IPersonalOrdersErrorAction 
  | IPersonalOrdersEndAction 
  | IPersonalOrdersClosedAction 
  | IPersonalOrdersMessageAction;

export type TOrderInfoActions = 
  IOrderInfoRequestAction 
  | IOrderInfoSuccessAction 
  | IOrderInfoErrorAction;

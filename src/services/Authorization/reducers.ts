import { TAuthorizationActions } from '../../utils/types';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  TOKEN_REQUEST,
  TOKEN_SUCCESS,
  TOKEN_ERROR,
  CLEAR_TOKEN,
  CLEAR_AUTH
} from './actions';

type TAuthorizationState = {
  requestAuthorization: boolean;
  errorAuthorization?: string;
  successAuthorization: boolean;
  requestToken: boolean;
  successToken: boolean;
  errorToken?: string;
  isLogged: boolean;
}

const initialState: TAuthorizationState = {
  requestAuthorization: false,
  successAuthorization: false,
  errorAuthorization: undefined,
  requestToken: false,
  successToken: false,
  errorToken: undefined,
  isLogged: false,
};

export const authorizationReducer = (state = initialState, action: TAuthorizationActions): TAuthorizationState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { 
        ...state, 
        requestAuthorization: true, 
        successAuthorization: false, 
        errorAuthorization: undefined 
      };
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        requestAuthorization: false, 
        successAuthorization: true, 
        errorAuthorization: undefined,
        isLogged: true 
      };
    case LOGIN_ERROR:
      return { 
        ...state, 
        requestAuthorization: false, 
        successAuthorization: false, 
        errorAuthorization: action.message,
      };
    case LOGOUT_REQUEST:
      return { 
        ...state, 
        requestAuthorization: true, 
        successAuthorization: false, 
        errorAuthorization: undefined 
      };
    case LOGOUT_SUCCESS:
      return { 
        ...state, 
        requestAuthorization: false, 
        successAuthorization: true, 
        errorAuthorization: undefined,
        isLogged: false 
      };
    case LOGOUT_ERROR:
      return { 
        ...state, 
        requestAuthorization: false, 
        successAuthorization: false, 
        errorAuthorization: action.message,
      };
    case TOKEN_REQUEST:
      return { 
        ...state, 
        requestToken: true, 
        successToken: false, 
        errorToken: undefined 
      };
    case TOKEN_SUCCESS:
      return { 
        ...state, 
        requestToken: false, 
        successToken: true, 
        errorToken: undefined,
        isLogged: true 
      };
    case TOKEN_ERROR:
      return { 
        ...state, 
        requestToken: false, 
        successToken: false, 
        errorToken: action.message,
      };
    case CLEAR_TOKEN:
      return { 
        ...state, 
        requestToken: false, 
        successToken: false, 
        errorToken: undefined,
      };
    case CLEAR_AUTH:
      return { 
        ...state, 
        requestAuthorization: false, 
        successAuthorization: false, 
        errorAuthorization: undefined,
      };
    default:
      return state;
}
}
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

const initialState = {
  requestAuthorization: false,
  successAuthorization: false,
  errorAuthorization: null,
  requestToken: false,
  successToken: false,
  errorToken: null,
  isLogged: false,
};

export const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { 
        ...state, 
        requestAuthorization: true, 
        successAuthorization: false, 
        errorAuthorization: null 
      };
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        requestAuthorization: false, 
        successAuthorization: true, 
        errorAuthorization: null,
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
        errorAuthorization: null 
      };
    case LOGOUT_SUCCESS:
      return { 
        ...state, 
        requestAuthorization: false, 
        successAuthorization: true, 
        errorAuthorization: null,
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
        errorToken: null 
      };
    case TOKEN_SUCCESS:
      return { 
        ...state, 
        requestToken: false, 
        successToken: true, 
        errorToken: null,
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
        errorToken: null,
      };
    case CLEAR_AUTH:
      return { 
        ...state, 
        requestAuthorization: false, 
        successAuthorization: false, 
        errorAuthorization: null,
      };
    default:
      return state;
}
}
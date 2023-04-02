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
} from "./actions";

import { authorizationReducer, initialState } from "./reducers";

const errorMessage = 'failed';

describe('auth reducer', () => {
  it("should return the initial state", () => {
    expect(authorizationReducer(undefined, {}))
    .toEqual(initialState);
  });

  it("should handle LOGIN_REQUEST", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: LOGIN_REQUEST 
      }
    ))
    .toEqual({
      ...initialState, 
      requestAuthorization: true, 
      successAuthorization: false, 
      errorAuthorization: undefined 
    });
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: LOGIN_SUCCESS 
      }
    ))
    .toEqual({
      ...initialState, 
      requestAuthorization: false, 
      successAuthorization: true, 
      errorAuthorization: undefined,
      isLogged: true 
    });
  });

  it("should handle LOGIN_ERROR", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: LOGIN_ERROR,
        message: errorMessage 
      }
    ))
    .toEqual({
      ...initialState, 
      requestAuthorization: false, 
      successAuthorization: false, 
      errorAuthorization: errorMessage 
    });
  });

  it("should handle LOGOUT_REQUEST", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: LOGOUT_REQUEST 
      }
    ))
    .toEqual({
      ...initialState, 
      requestAuthorization: true, 
      successAuthorization: false, 
      errorAuthorization: undefined 
    });
  });

  it("should handle LOGOUT_SUCCESS", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: LOGOUT_SUCCESS 
      }
    ))
    .toEqual({
      ...initialState, 
      requestAuthorization: false, 
      successAuthorization: true, 
      errorAuthorization: undefined,
      isLogged: false 
    });
  });

  it("should handle LOGOUT_ERROR", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: LOGOUT_ERROR,
        message: errorMessage  
      }
    ))
    .toEqual({
      ...initialState, 
      requestAuthorization: false, 
      successAuthorization: false, 
      errorAuthorization: errorMessage,
    });
  });

  it("should handle TOKEN_REQUEST", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: TOKEN_REQUEST 
      }
    ))
    .toEqual({
      ...initialState, 
      requestToken: true, 
      successToken: false, 
      errorToken: undefined 
    });
  });

  it("should handle TOKEN_SUCCESS", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: TOKEN_SUCCESS 
      }
    ))
    .toEqual({
      ...initialState, 
      requestToken: false, 
      successToken: true, 
      errorToken: undefined,
      isLogged: true  
    });
  })

  it("should handle TOKEN_ERROR", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: TOKEN_ERROR,
        message: errorMessage  
      }
    ))
    .toEqual({
      ...initialState, 
      requestToken: false, 
      successToken: false, 
      errorToken: errorMessage,
    });
  });

  it("should handle CLEAR_TOKEN", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: CLEAR_TOKEN 
      }
    ))
    .toEqual({
      ...initialState, 
      requestToken: false, 
      successToken: false, 
      errorToken: undefined,  
    });
  })

  it("should handle CLEAR_AUTH", () => {
    expect(authorizationReducer(
      initialState, 
      { 
        type: CLEAR_AUTH 
      }
    ))
    .toEqual({
      ...initialState, 
      requestAuthorization: false, 
      successAuthorization: false, 
      errorAuthorization: undefined,  
    });
  })
});
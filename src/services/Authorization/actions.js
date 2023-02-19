import { loginUser, refreshToken, logoutUser } from "../../utils/methods";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const CLEAR_AUTH = "CLEAR_AUTH";
export const TOKEN_REQUEST = "TOKEN_REQUEST";
export const TOKEN_SUCCESS = "TOKEN_SUCCESS";
export const TOKEN_ERROR = "TOKEN_ERROR";
export const CLEAR_TOKEN = "CLEAR_TOKEN";


export const loginAction = (form) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    loginUser(form).then(data => {
      localStorage.setItem(
        "accessToken", 
        data.accessToken.split("Bearer ")[1]
      );
      localStorage.setItem(
        "refreshToken", 
        data.refreshToken
      );
      dispatch({ 
        type: LOGIN_SUCCESS, 
        user: data.user 
      });
    }).catch(err => {
      dispatch({ 
        type: LOGIN_ERROR, 
        message: err.message 
      });
    });
  }
}

export const logoutAction = () => {
  return (dispatch) => {
    dispatch({ 
      type: LOGOUT_REQUEST 
    });
    logoutUser().then(() => {
      localStorage.removeItem(
        "refreshToken"
      );
      localStorage.removeItem(
        "accessToken"
      );
      dispatch({ 
        type: LOGOUT_SUCCESS 
      });
    }).catch(error => {
      dispatch({ 
        type: LOGOUT_ERROR, 
        message: error.message 
      });
    });
  }
}

export const tokenAction = () => {
  return (dispatch) => {
    dispatch({ 
      type: TOKEN_REQUEST 
    });
    refreshToken().then(data => {
      localStorage.setItem(
        "accessToken", 
        data.accessToken.split("Bearer ")[1]
      );
      localStorage.setItem(
        "refreshToken", 
        data.refreshToken
      );
      dispatch({ 
        type: TOKEN_SUCCESS, 
        user: data 
      });
    }).catch(error => {
      dispatch({ 
        type: TOKEN_ERROR,
        message: error.message  
      });
    });
  }
}
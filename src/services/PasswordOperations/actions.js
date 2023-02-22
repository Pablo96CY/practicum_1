import { forgotPassword, resetPassword } from "../../utils/methods";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_SUCCESS";
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const CLEAR_RESET_PASSWORD = "CLEAR_RESET_PASSWORD";

export const forgotPasswordAction = (form) => {
  return (dispatch) => {
    dispatch({ 
      type: FORGOT_PASSWORD_REQUEST 
    });
    forgotPassword(form).then(() => {
      dispatch({ 
        type: FORGOT_PASSWORD_SUCCESS 
      });
    }).catch(error => {
      dispatch({ 
        type: FORGOT_PASSWORD_ERROR, 
        message: error.message 
      });
    });
  }
}

export const resetPasswordAction = (form) => {
  return (dispatch) => {
    dispatch({ 
      type: RESET_PASSWORD_REQUEST 
    });
    resetPassword(form).then(() => {
      dispatch({ 
        type: RESET_PASSWORD_SUCCESS 
      });
    }).catch(error => {
      dispatch({ 
        type: RESET_PASSWORD_ERROR, 
        message: error.message 
      });
    });
  }
}
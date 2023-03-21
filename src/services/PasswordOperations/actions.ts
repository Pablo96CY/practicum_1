import { forgotPassword, resetPassword } from "../../utils/methods";
import { TEmail, TResetPassword } from "../../utils/types";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const CLEAR_RESET_PASSWORD = "CLEAR_RESET_PASSWORD";

export interface IForgotPasswordRequest {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccess {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IForgotPasswordError {
  readonly type: typeof FORGOT_PASSWORD_ERROR;
  readonly message: string;
}

export interface IResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordError {
  readonly type: typeof RESET_PASSWORD_ERROR;
  readonly message: string;
}

export interface IClearResetPassword {
  readonly type: typeof CLEAR_RESET_PASSWORD;
}

export const forgotPasswordAction = (form: TEmail) => {
  return (dispatch: any) => {
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

export const resetPasswordAction = (form: TResetPassword) => {
  return (dispatch: any) => {
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
import { registerUser } from "../../utils/methods";
import { TAppThunk, TUserFullForm } from "../../utils/types";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";
export const CLEAR_REGISTRATION = "CLEAR_REGISTRATION";

export interface IRegistrationRequest {
  readonly type: typeof REGISTRATION_REQUEST;
}

export interface IRegistrationSuccess {
  readonly type: typeof REGISTRATION_SUCCESS;
}

export interface IRegistrationError {
  readonly type: typeof REGISTRATION_ERROR;
  readonly message: string;
}

export interface IClearRegistration {
  readonly type: typeof CLEAR_REGISTRATION;
}

export const registrationAction = (form: TUserFullForm): TAppThunk => {
  return (dispatch) => {
    dispatch({ type: REGISTRATION_REQUEST });
    registerUser(form).then(() => {
      dispatch({ 
        type: REGISTRATION_SUCCESS, 
      });
    }).catch(error => {
      dispatch({ 
        type: REGISTRATION_ERROR, 
        message: error.message 
      });
    });
  }
}
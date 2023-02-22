import { registerUser } from "../../utils/methods";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";
export const CLEAR_REGISTRATION = "CLEAR_REGISTRATION";

export const registrationAction = (form) => {
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
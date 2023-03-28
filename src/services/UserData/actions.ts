import { getUser, updateUser } from "../../utils/methods";
import { TAppThunk, TUserFullForm, TUserShortForm } from "../../utils/types";

export const GET_USER_DATA_REQUEST = "GET_USER_DATA_REQUEST";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_ERROR = "GET_USER_DATA_ERROR";
export const PATCH_USER_DATA_REQUEST = "PATCH_USER_DATA_REQUEST";
export const PATCH_USER_DATA_SUCCESS = "PATCH_USER_DATA_SUCCESS";
export const PATCH_USER_DATA_ERROR = "PATCH_USER_DATA_ERROR";
export const CLEAR_USER_DATA = "CLEAR_USER_DATA";

export interface IUserDataRequest {
  readonly type: typeof GET_USER_DATA_REQUEST;
}

export interface IUserDataSuccess {
  readonly type: typeof GET_USER_DATA_SUCCESS;
  readonly user: TUserShortForm;
}

export interface IUserDataError {
  readonly type: typeof GET_USER_DATA_ERROR;
  readonly message: string;
}

export interface IPatchUserDataRequest {
  readonly type: typeof PATCH_USER_DATA_REQUEST;
}

export interface IPatchUserDataSuccess {
  readonly type: typeof PATCH_USER_DATA_SUCCESS;
}

export interface IPatchUserDataError {
  readonly type: typeof PATCH_USER_DATA_ERROR;
  readonly message: string;
}

export interface IUserDataClear {
  readonly type: typeof CLEAR_USER_DATA;
}

export const getUserDataAction = (): TAppThunk => {
  return (dispatch) => {
    dispatch({ 
      type: GET_USER_DATA_REQUEST 
    });
    getUser().then(data => {
      dispatch({ 
        type: GET_USER_DATA_SUCCESS, 
        user: data.user 
      });
    }).catch(error => {
      dispatch({ 
        type: GET_USER_DATA_ERROR, 
        message: error.message 
      });
    });
  }
}

export const patchUserDataAction = (form: TUserFullForm): TAppThunk => {
  return (dispatch) => {
    dispatch({ 
      type: PATCH_USER_DATA_REQUEST 
    });
    updateUser(form).then(data => {
      dispatch({ 
        type: PATCH_USER_DATA_SUCCESS, 
        user: data.user 
      });
    }).catch(error => {
      dispatch({ 
        type: PATCH_USER_DATA_ERROR, 
        message: error.message 
      });
    });
  }
}
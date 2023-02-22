import { getUser, updateUser } from "../../utils/methods";

export const GET_USER_DATA_REQUEST = "GET_USER_DATA_REQUEST";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_ERROR = "GET_USER_DATA_ERROR";
export const PATCH_USER_DATA_REQUEST = "PATCH_USER_DATA_REQUEST";
export const PATCH_USER_DATA_SUCCESS = "PATCH_USER_DATA_SUCCESS";
export const PATCH_USER_DATA_ERROR = "PATCH_USER_DATA_ERROR";
export const CLEAR_USER_DATA = "CLEAR_USER_DATA";

export const getUserDataAction = () => {
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

export const patchUserDataAction = (form) => {
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
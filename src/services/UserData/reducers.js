import {
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  PATCH_USER_DATA_REQUEST,
  PATCH_USER_DATA_SUCCESS,
  PATCH_USER_DATA_ERROR,
  CLEAR_USER_DATA
} from './actions';

const initialState = {
  requestUserData: false,
  errorUserData: null,
  successUserData: false,
  user: {
    name: "",
    email: ""
  },
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA_REQUEST:
      return { 
        requestUserData: true, 
        successUserData: false, 
        errorUserData: null,
        user: initialState.user 
      };
    case GET_USER_DATA_SUCCESS:
      return { 
        ...state, 
        requestUserData: false, 
        successUserData: true, 
        user: { 
          name: action.user.name, 
          email: action.user.email 
        } 
      };
    case GET_USER_DATA_ERROR:
      return { 
        requestUserData: false, 
        successUserData: false, 
        errorUserData: action.message
      };
    case PATCH_USER_DATA_REQUEST:
      return { 
        ...state,
        requestUserData: true, 
        successUserData: false, 
        errorUserData: null
      };
    case PATCH_USER_DATA_SUCCESS:
      return { 
        ...state,
        requestUserData: false, 
        successUserData: true 
      };
    case PATCH_USER_DATA_ERROR:
      return { 
        ...state,
        requestUserData: false, 
        successUserData: false, 
        errorUserData: action.message,
      };
    case CLEAR_USER_DATA:
      return { 
        ...state,
        requestUserData: false, 
        successUserData: false, 
        errorUserData: null,
      };
    default:
      return state;
  }
}
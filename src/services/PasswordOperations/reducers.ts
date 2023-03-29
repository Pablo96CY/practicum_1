import { TPasswordOperationsActions } from '../../utils/types';
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  CLEAR_RESET_PASSWORD
} from './actions';

const initialState = {
  requestPassword: false,
  errorPassword: undefined,
  successPassword: false,
  isReadyForChange: false
};

export const passwordOperations = (state = initialState, action: TPasswordOperationsActions) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return { 
        ...state,
        requestPassword: true, 
        successPassword: false, 
        errorPassword: null, 
        isReadyForChange: false 
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {  
        ...state,
        requestPassword: false, 
        successPassword: true, 
        isReadyForChange: true 
      };
    case FORGOT_PASSWORD_ERROR:
      return {  
        ...state,
        requestPassword: true, 
        successPassword: false, 
        errorPassword: action.message,
      };

    case RESET_PASSWORD_REQUEST:
      return {  
        ...state,
        requestPassword: true, 
        successPassword: false, 
        errorPassword: null, 
      };
    case RESET_PASSWORD_SUCCESS:
      return {  
        ...state,
        requestPassword: false, 
        successPassword: true, 
      };
    case RESET_PASSWORD_ERROR:
      return {  
        ...state,
        requestPassword: false, 
        successPassword: false, 
        errorPassword: action.message,
      };
    case CLEAR_RESET_PASSWORD:
      return {  
        ...state,
        requestPassword: false, 
        successPassword: false, 
        errorPassword: null,
      };
    default:
      return state;
  }
}
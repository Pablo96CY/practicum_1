import { TRegistrationActions } from '../../utils/types';
import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  CLEAR_REGISTRATION
} from './actions';

export const initialState = {
  requestRegistration: false,
  successRegistration: false,
  errorRegistration: null,
};

export const registrationReducer = (state = initialState, action: TRegistrationActions) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return { 
        ...state, 
        requestRegistration: true, 
        successRegistration: false, 
        errorRegistration: null 
      };
    case REGISTRATION_SUCCESS:
      return { 
        ...state, 
        requestRegistration: false, 
        successRegistration: true, 
        errorRegistration: null, 
      };
    case REGISTRATION_ERROR:
      return { 
        ...state, 
        requestRegistration: false, 
        successRegistration: false, 
        errorRegistration: action.message,  
      };
    case CLEAR_REGISTRATION:
      return { 
        ...state, 
        requestRegistration: false, 
        successRegistration: false, 
        errorRegistration: null,  
      };
    default:
      return state;
  }
}
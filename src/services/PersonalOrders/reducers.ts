import { TOrdersState, TPersonalOrdersActions } from '../../utils/types';
import {
  PERSONAL_ORDERS_SUCCESS,
  PERSONAL_ORDERS_ERROR,
  PERSONAL_ORDERS_CLOSED,
  PERSONAL_ORDERS_MESSAGE
} from './actions';

const initialState: TOrdersState = {
  isConnected: false,
  message: null,
  error: null
};

export const personalOrdersReducer = (state = initialState, action: TPersonalOrdersActions): TOrdersState => {
  switch (action.type) {
    case PERSONAL_ORDERS_SUCCESS:
      return { 
        ...state, 
        isConnected: true, 
        error: null
      };
    case PERSONAL_ORDERS_ERROR:
      return { 
        ...state,
        isConnected: false,  
        error: action.error
      };
    case PERSONAL_ORDERS_CLOSED:
      return { 
        ...state,
        isConnected: false, 
        error: null  
      };
    case PERSONAL_ORDERS_MESSAGE:
      return { 
        ...state,
        error: null, 
        message: action.message 
      };
    default:
      return state;
  }
}
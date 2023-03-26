import { TCommonOrdersActions, TOrdersState } from '../../utils/types';
import {
  COMMON_ORDERS_SUCCESS,
  COMMON_ORDERS_ERROR,
  COMMON_ORDERS_CLOSED,
  COMMON_ORDERS_MESSAGE
} from './actions';

const initialState: TOrdersState = {
  isConnected: false,
  message: null,
  error: null
};

export const commonOrdersReducer = (state = initialState, action: TCommonOrdersActions): TOrdersState => {
  switch (action.type) {
    case COMMON_ORDERS_SUCCESS:
      return { 
        ...state, 
        isConnected: true, 
        error: null
      };
    case COMMON_ORDERS_ERROR:
      return { 
        ...state,
        isConnected: false,  
        error: action.error
      };
    case COMMON_ORDERS_CLOSED:
      return { 
        ...state,
        isConnected: false, 
        error: null 
      };
    case COMMON_ORDERS_MESSAGE:
      return { 
        ...state, 
        error: null, 
        message: action.message 
      };
    default:
      return state;
  }
}
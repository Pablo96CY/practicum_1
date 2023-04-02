import { TOrder, TOrderInfoActions } from '../../utils/types';
import { 
  ORDER_INFO_REQUEST,
  ORDER_INFO_SUCCESS,
  ORDER_INFO_ERROR
} from './actions';

type TOrderInfoState = {
  requestOrderInfo: boolean;
  errorOrderInfo?: string;
  order?: TOrder;
}

export const initialState: TOrderInfoState = {
  requestOrderInfo: false,
  errorOrderInfo: undefined,
  order: undefined
}

export const ordersInfoReducer = (state = initialState, action: TOrderInfoActions): TOrderInfoState => {
  switch (action.type) {
    case ORDER_INFO_REQUEST:
      return { 
        ...state, 
        requestOrderInfo: true, 
        errorOrderInfo: undefined 
      };
    case ORDER_INFO_SUCCESS:
      return { 
        ...state, 
        requestOrderInfo: false, 
        errorOrderInfo: undefined, 
        order: action.order 
      };
    case ORDER_INFO_ERROR:
      return { 
        ...state, 
        requestOrderInfo: false, 
        errorOrderInfo: action.message, 
        order: undefined 
      };

    default:
      return state;
  }
}
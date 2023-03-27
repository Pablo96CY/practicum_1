import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { getOrder } from '../../utils/methods';
import { TOrder, TRootState } from '../../utils/types';

export const ORDER_INFO_REQUEST = "ORDER_INFO_REQUEST";
export const ORDER_INFO_SUCCESS = "ORDER_INFO_SUCCESS";
export const ORDER_INFO_ERROR = "ORDER_INFO_ERROR";

export interface IOrderInfoRequestAction {
  type: typeof ORDER_INFO_REQUEST;
}

export interface IOrderInfoSuccessAction {
  type: typeof ORDER_INFO_SUCCESS;
  order: TOrder;
}

export interface IOrderInfoErrorAction {
  type: typeof ORDER_INFO_ERROR;
  message: string
}

export const getOrderInfoAction = (number?: string): ThunkAction<void, TRootState, unknown, AnyAction> => {
  return (dispatch) => {
    dispatch({ type: ORDER_INFO_REQUEST });
    getOrder(number).then(result => {
      dispatch({ 
        type: ORDER_INFO_SUCCESS, 
        order: result.orders[0] 
      });
    })
    .catch(error => {
      dispatch({ 
        type: ORDER_INFO_ERROR, 
        message: error.message 
      });
    });
  }
}
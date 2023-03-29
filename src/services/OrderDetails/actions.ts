import { Ingredient } from "../../utils/interfaces";
import { createNewOrders } from "../../utils/methods";
import { TAppThunk } from "../../utils/types";

export const ORDER_REQUEST = "ORDER_REQUEST";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_ERROR = "ORDER_ERROR";
export const ORDER_OPEN_MODAL = "ORDER_OPEN_MODAL";
export const ORDER_CLOSE_MODAL = "ORDER_CLOSE_MODAL";

export interface IOrderRequest {
  readonly type: typeof ORDER_REQUEST;
}

export interface IOrderSuccess {
  readonly type: typeof ORDER_SUCCESS;
  readonly newOrderNumber: number;
}

export interface IOrderError {
  readonly type: typeof ORDER_ERROR;
}

export interface IOrderModalOpen {
  readonly type: typeof ORDER_OPEN_MODAL;
}

export interface IOrderModalClose {
  readonly type: typeof ORDER_CLOSE_MODAL;
}

export const createNewOrder = (ingredients: any): TAppThunk => {
  return (dispatch) => {
    dispatch({
      type: ORDER_REQUEST,
    });
    createNewOrders(ingredients.map((ingredient: Ingredient) => ingredient._id)).then(data => {
      dispatch({ 
        type: ORDER_SUCCESS, 
        newOrderNumber: data.order.number 
      });
    })
    .catch(() => {
      dispatch({ 
        type: ORDER_ERROR 
      });
    });
  }
}
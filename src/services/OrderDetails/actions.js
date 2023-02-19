import { createNewOrders } from "../../utils/methods";

export const ORDER_REQUEST = "ORDER_REQUEST";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_ERROR = "ORDER_ERROR";
export const ORDER_OPEN_MODAL = "ORDER_OPEN_MODAL";
export const ORDER_CLOSE_MODAL = "ORDER_CLOSE_MODAL";

export const createNewOrder = (ingredients) => {
  return (dispatch) => {
    dispatch({
      type: ORDER_REQUEST,
    });
    createNewOrders(ingredients.map((ingredient) => ingredient._id)).then(data => {
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
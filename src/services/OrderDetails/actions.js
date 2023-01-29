import { createNewOrders } from "../../utils/methods";

export const ORDER_REQUEST = "ORDER_REQUEST";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_ERROR = "ORDER_ERROR";

export const createNewOrder = (ingredients) => {
  return (dispatch) => {
    dispatch({
      type: ORDER_REQUEST,
    });
    createNewOrders(ingredients.map((ingredient) => ingredient._id)).then(data => {
      dispatch({ 
        type: ORDER_SUCCESS, 
        new: data 
      });
    })
    .catch(err => {
      dispatch({ 
        type: ORDER_ERROR 
      });
    });
  }
}
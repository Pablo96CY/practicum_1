import { TOrderActions } from "../../utils/types";
import { 
  ORDER_REQUEST, 
  ORDER_SUCCESS, 
  ORDER_ERROR,
  ORDER_OPEN_MODAL,
  ORDER_CLOSE_MODAL
 } from "./actions";

export const newOrderState = {
  isLoad: false,
  isError: false,
  isOpen: false,
  newOrderNumber: null,
};

export const newOrderReducer = (state = newOrderState, action: TOrderActions) => {
  switch (action.type) {
    case ORDER_REQUEST: {
      return {
        ...state,
        isLoad: true,
      };
    }
    case ORDER_SUCCESS: {
      return {
        ...state,
        isLoad: false,
        isError: false,
        newOrderNumber: action.newOrderNumber,
      };
    }
    case ORDER_ERROR: {
      return {
        ...state,
        isLoad: false,
        isError: true,
        newOrderNumber: null
      };
    }
    case ORDER_OPEN_MODAL: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case ORDER_CLOSE_MODAL: {
      return {
        ...state,
        isOpen: false,
        newOrderNumber: null
      };
    }
    default:
      return state;
  }
};
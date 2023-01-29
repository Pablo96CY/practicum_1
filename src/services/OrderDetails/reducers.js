import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_ERROR } from "./actions";

const newOrderState = {
  isLoad: false,
  isError: false,
  new: null,
};

export const newOrderReducer = (state = newOrderState, action) => {
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
        new: action.order,
      };
    }
    case ORDER_ERROR: {
      return {
        ...state,
        isLoad: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
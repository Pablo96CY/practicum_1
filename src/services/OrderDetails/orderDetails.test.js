import { 
  ORDER_REQUEST, 
  ORDER_SUCCESS, 
  ORDER_ERROR,
  ORDER_OPEN_MODAL,
  ORDER_CLOSE_MODAL
} from "./actions";

import { 
  newOrderReducer, 
  newOrderState 
} from "./reducers";

const orderNumber = 50000;

describe('newOrderReducer', () => {
  it("should return the initial state", () => {
    expect(newOrderReducer(undefined, {}))
    .toEqual(newOrderState);
  });

  it("should handle ORDER_REQUEST", () => {
    expect(newOrderReducer(
      newOrderState, 
      { 
        type: ORDER_REQUEST
      }
    ))
    .toEqual({
      ...newOrderState,
      isLoad: true,
    });
  });

  it("should handle ORDER_SUCCESS", () => {
    expect(newOrderReducer(
      newOrderState, 
      { 
        type: ORDER_SUCCESS,
        newOrderNumber: orderNumber
      }
    ))
    .toEqual({
      ...newOrderState,
      isLoad: false,
      isError: false,
      newOrderNumber: orderNumber,
    });
  });

  it("should handle ORDER_ERROR", () => {
    expect(newOrderReducer(
      newOrderState, 
      { 
        type: ORDER_ERROR
      }
    ))
    .toEqual({
      ...newOrderState,
      isLoad: false,
      isError: true,
      newOrderNumber: null
    });
  });

  it("should handle ORDER_OPEN_MODAL", () => {
    expect(newOrderReducer(
      newOrderState, 
      { 
        type: ORDER_OPEN_MODAL
      }
    ))
    .toEqual({
      ...newOrderState,
      isOpen: true,
    });
  });

  it("should handle ORDER_CLOSE_MODAL", () => {
    expect(newOrderReducer(
      newOrderState, 
      { 
        type: ORDER_CLOSE_MODAL
      }
    ))
    .toEqual({
      ...newOrderState,
      isOpen: false,
      newOrderNumber: null
    });
  });
});
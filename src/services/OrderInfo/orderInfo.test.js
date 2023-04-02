import { 
  ORDER_INFO_REQUEST,
  ORDER_INFO_SUCCESS,
  ORDER_INFO_ERROR
} from "./actions";

import { 
  ordersInfoReducer, 
  initialState 
} from "./reducers";

const error = 'fail';
const order = {
  createdAt: "2023-04-02T22:58:40.526Z",
  ingredients: [
    "60d3b41abdacab0026a733c7",
    "60d3b41abdacab0026a733c9",
    "60d3b41abdacab0026a733c7",
  ],
  name: "Бессмертный флюоресцентный бургер",
  number: 47765,
  status: "done",
  updatedAt: "2023-04-02T22:58:41.100Z",
  _id: "642a08a00905fd001b626a7f"
};

describe('ordersInfoReducer', () => {
  it("should return the initial state", () => {
    expect(ordersInfoReducer(undefined, {}))
    .toEqual(initialState);
  });

  it("should handle ORDER_INFO_REQUEST", () => {
    expect(ordersInfoReducer(
      initialState, 
      { 
        type: ORDER_INFO_REQUEST
      }
    ))
    .toEqual({
      ...initialState,
      requestOrderInfo: true, 
      errorOrderInfo: undefined
    });
  });

  it("should handle ORDER_INFO_SUCCESS", () => {
    expect(ordersInfoReducer(
      initialState, 
      { 
        type: ORDER_INFO_SUCCESS,
        order: order
      }
    ))
    .toEqual({
      ...initialState,
      requestOrderInfo: false, 
      errorOrderInfo: undefined, 
      order: order
    });
  });

  it("should handle ORDER_INFO_ERROR", () => {
    expect(ordersInfoReducer(
      initialState, 
      { 
        type: ORDER_INFO_ERROR,
        message: error
      }
    ))
    .toEqual({
      ...initialState,
      requestOrderInfo: false, 
      errorOrderInfo: error, 
      order: undefined 
    });
  });
});
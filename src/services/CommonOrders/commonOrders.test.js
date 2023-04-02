import { 
  COMMON_ORDERS_SUCCESS,
  COMMON_ORDERS_ERROR,
  COMMON_ORDERS_CLOSED,
  COMMON_ORDERS_MESSAGE
} from "./actions";

import { 
  commonOrdersReducer, 
  initialState 
} from "./reducers";

const error = 'fail';
const orders = [
  {
    createdAt: "2023-04-02T22:58:40.526Z",
    ingredients: [
      "60d3b41abdacab0026a733c7",
      "60d3b41abdacab0026a733c9",
      "60d3b41abdacab0026a733c7",
    ],
    name: "Бессмертный флюоресцентный бургер",
    number: 47760,
    status: "done",
    updatedAt: "2023-04-02T22:58:41.100Z",
    _id: "642a08a00905fd001b626a7f"
  },
  {
    createdAt: "2023-04-02T22:58:40.526Z",
    ingredients: [
      "60d3b41abdacab0026a733c7",
      "60d3b41abdacab0026a733c9",
      "60d3b41abdacab0026a733c7",
    ],
    name: "Бессмертный флюоресцентный бургер",
    number: 47761,
    status: "done",
    updatedAt: "2023-04-02T22:58:41.100Z",
    _id: "642a08a00905fd001b626a7f"
  }
]

describe('commonOrdersReducer', () => {
  it("should return the initial state", () => {
    expect(commonOrdersReducer(undefined, {}))
    .toEqual(initialState);
  });

  it("should handle COMMON_ORDERS_SUCCESS", () => {
    expect(commonOrdersReducer(
      initialState, 
      { 
        type: COMMON_ORDERS_SUCCESS,
        url: ''
      }
    ))
    .toEqual({
      ...initialState, 
      isConnected: true, 
      error: null
    });
  });

  it("should handle COMMON_ORDERS_ERROR", () => {
    expect(commonOrdersReducer(
      initialState, 
      { 
        type: COMMON_ORDERS_ERROR,
        error: error
      }
    ))
    .toEqual({
      ...initialState, 
      isConnected: false,  
      error: error
    });
  });

  it("should handle COMMON_ORDERS_CLOSED", () => {
    expect(commonOrdersReducer(
      initialState, 
      { 
        type: COMMON_ORDERS_CLOSED
      }
    ))
    .toEqual({
      ...initialState, 
      isConnected: false, 
      error: null 
    });
  });

  it("should handle COMMON_ORDERS_MESSAGE", () => {
    expect(commonOrdersReducer(
      initialState, 
      { 
        type: COMMON_ORDERS_MESSAGE,
        message: orders
      }
    ))
    .toEqual({
      ...initialState, 
      error: null, 
      message: orders 
    });
  });
});
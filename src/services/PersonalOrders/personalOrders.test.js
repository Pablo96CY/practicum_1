import { 
  PERSONAL_ORDERS_SUCCESS,
  PERSONAL_ORDERS_ERROR,
  PERSONAL_ORDERS_CLOSED,
  PERSONAL_ORDERS_MESSAGE
} from "./actions";

import { 
  personalOrdersReducer, 
  initialState 
} from "./reducers";

const errorMessage = 'failed';
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

describe('personalOrdersReducer', () => {
  it("should return the initial state", () => {
    expect(personalOrdersReducer(undefined, {}))
    .toEqual(initialState);
  });

  it("should handle PERSONAL_ORDERS_SUCCESS", () => {
    expect(personalOrdersReducer(
      initialState, 
      { 
        type: PERSONAL_ORDERS_SUCCESS 
      }
    ))
    .toEqual({
      ...initialState, 
      isConnected: true, 
      error: null 
    });
  });

  it("should handle PERSONAL_ORDERS_ERROR", () => {
    expect(personalOrdersReducer(
      initialState, 
      { 
        type: PERSONAL_ORDERS_ERROR, 
        error: errorMessage
      }
    ))
    .toEqual({
      ...initialState, 
      isConnected: false,  
      error: errorMessage
    });
  });

  it("should handle PERSONAL_ORDERS_CLOSED", () => {
    expect(personalOrdersReducer(
      initialState, 
      { 
        type: PERSONAL_ORDERS_CLOSED
      }
    ))
    .toEqual({
      ...initialState, 
      isConnected: false, 
      error: null  
    });
  });

  it("should handle PERSONAL_ORDERS_MESSAGE", () => {
    expect(personalOrdersReducer(
      initialState, 
      { 
        type: PERSONAL_ORDERS_MESSAGE,
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
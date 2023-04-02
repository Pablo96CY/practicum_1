import { 
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  PATCH_USER_DATA_REQUEST,
  PATCH_USER_DATA_SUCCESS,
  PATCH_USER_DATA_ERROR,
  CLEAR_USER_DATA
} from "./actions";

import { 
  userDataReducer, 
  initialState 
} from "./reducers";

const errorMessage = 'failed';
const user = {
  name: "PabloNew",
  email: "pablo@new.bcs"
}

describe('userDataReducer', () => {
  it("should return the initial state", () => {
    expect(userDataReducer(undefined, {}))
    .toEqual(initialState);
  });

  it("should handle GET_USER_DATA_REQUEST", () => {
    expect(userDataReducer(
      initialState, 
      { 
        type: GET_USER_DATA_REQUEST
      }
    ))
    .toEqual({
      ...initialState, 
      requestUserData: true, 
      successUserData: false, 
      errorUserData: undefined,
      user: {
        name: "",
        email: ""
      }, 
    });
  });

  it("should handle GET_USER_DATA_SUCCESS", () => {
    expect(userDataReducer(
      initialState, 
      { 
        type: GET_USER_DATA_SUCCESS,
        user: user 
      }
    ))
    .toEqual({
      ...initialState, 
      requestUserData: false, 
      successUserData: true, 
      user: { 
        name: user.name, 
        email: user.email 
      } 
    });
  });

  it("should handle GET_USER_DATA_ERROR", () => {
    expect(userDataReducer(
      initialState, 
      { 
        type: GET_USER_DATA_ERROR,
        message: errorMessage 
      }
    ))
    .toEqual({
      ...initialState, 
      requestUserData: false, 
      successUserData: false, 
      errorUserData: errorMessage
    });
  });

  it("should handle PATCH_USER_DATA_REQUEST", () => {
    expect(userDataReducer(
      initialState, 
      { 
        type: PATCH_USER_DATA_REQUEST
      }
    ))
    .toEqual({
      ...initialState, 
      requestUserData: true, 
      successUserData: false, 
      errorUserData: undefined 
    });
  });

  it("should handle PATCH_USER_DATA_SUCCESS", () => {
    expect(userDataReducer(
      initialState, 
      { 
        type: PATCH_USER_DATA_SUCCESS 
      }
    ))
    .toEqual({
      ...initialState, 
      requestUserData: false, 
      successUserData: true 
    });
  });

  it("should handle PATCH_USER_DATA_ERROR", () => {
    expect(userDataReducer(
      initialState, 
      { 
        type: PATCH_USER_DATA_ERROR,
        message: errorMessage 
      }
    ))
    .toEqual({
      ...initialState, 
      requestUserData: false, 
      successUserData: false, 
      errorUserData: errorMessage
    });
  });

  it("should handle CLEAR_USER_DATA", () => {
    expect(userDataReducer(
      initialState, 
      { 
        type: CLEAR_USER_DATA
      }
    ))
    .toEqual({
      ...initialState, 
      requestUserData: false, 
      successUserData: false, 
      errorUserData: undefined,
    });
  });
});
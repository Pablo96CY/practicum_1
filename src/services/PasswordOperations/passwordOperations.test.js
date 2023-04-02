import { 
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  CLEAR_RESET_PASSWORD
} from "./actions";

import { 
  passwordOperations, 
  initialState 
} from "./reducers";

const errorMessage = 'failed';

describe('passwordOperations', () => {
  it("should return the initial state", () => {
    expect(passwordOperations(undefined, {}))
    .toEqual(initialState);
  });

  it("should handle FORGOT_PASSWORD_REQUEST", () => {
    expect(passwordOperations(
      initialState, 
      { 
        type: FORGOT_PASSWORD_REQUEST 
      }
    ))
    .toEqual({
      ...initialState, 
      requestPassword: true, 
      successPassword: false, 
      errorPassword: null, 
      isReadyForChange: false  
    });
  });

  it("should handle FORGOT_PASSWORD_SUCCESS", () => {
    expect(passwordOperations(
      initialState, 
      { 
        type: FORGOT_PASSWORD_SUCCESS 
      }
    ))
    .toEqual({
      ...initialState, 
      requestPassword: false, 
      successPassword: true, 
      isReadyForChange: true
    });
  });

  it("should handle FORGOT_PASSWORD_ERROR", () => {
    expect(passwordOperations(
      initialState, 
      { 
        type: FORGOT_PASSWORD_ERROR,
        message: errorMessage 
      }
    ))
    .toEqual({
      ...initialState, 
      requestPassword: true, 
      successPassword: false, 
      errorPassword: errorMessage,
    });
  });

  it("should handle RESET_PASSWORD_REQUEST", () => {
    expect(passwordOperations(
      initialState, 
      { 
        type: RESET_PASSWORD_REQUEST 
      }
    ))
    .toEqual({
      ...initialState, 
      requestPassword: true, 
      successPassword: false, 
      errorPassword: null,  
    });
  });

  it("should handle RESET_PASSWORD_SUCCESS", () => {
    expect(passwordOperations(
      initialState, 
      { 
        type: RESET_PASSWORD_SUCCESS 
      }
    ))
    .toEqual({
      ...initialState, 
      requestPassword: false, 
      successPassword: true,  
    });
  });

  it("should handle RESET_PASSWORD_ERROR", () => {
    expect(passwordOperations(
      initialState, 
      { 
        type: RESET_PASSWORD_ERROR,
        message: errorMessage  
      }
    ))
    .toEqual({
      ...initialState, 
      requestPassword: false, 
      successPassword: false, 
      errorPassword: errorMessage,
    });
  });

  it("should handle CLEAR_RESET_PASSWORD", () => {
    expect(passwordOperations(
      initialState, 
      { 
        type: CLEAR_RESET_PASSWORD
      }
    ))
    .toEqual({
      ...initialState, 
      requestPassword: false, 
      successPassword: false, 
      errorPassword: null,
    });
  });
});
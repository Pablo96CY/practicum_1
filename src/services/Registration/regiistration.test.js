import { 
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  CLEAR_REGISTRATION
} from "./actions";

import { 
  registrationReducer, 
  initialState 
} from "./reducers";

const errorMessage = 'failed';

describe('registrationReducer', () => {
  it("should return the initial state", () => {
    expect(registrationReducer(undefined, {}))
    .toEqual(initialState);
  });

  it("should handle REGISTRATION_REQUEST", () => {
    expect(registrationReducer(
      initialState, 
      { 
        type: REGISTRATION_REQUEST 
      }
    ))
    .toEqual({
      ...initialState, 
      requestRegistration: true, 
      successRegistration: false, 
      errorRegistration: null   
    });
  });

  it("should handle REGISTRATION_SUCCESS", () => {
    expect(registrationReducer(
      initialState, 
      { 
        type: REGISTRATION_SUCCESS 
      }
    ))
    .toEqual({
      ...initialState, 
      requestRegistration: false, 
      successRegistration: true, 
      errorRegistration: null   
    });
  });

  it("should handle REGISTRATION_ERROR", () => {
    expect(registrationReducer(
      initialState, 
      { 
        type: REGISTRATION_ERROR,
        message: errorMessage 
      }
    ))
    .toEqual({
      ...initialState, 
      requestRegistration: false, 
      successRegistration: false, 
      errorRegistration: errorMessage,   
    });
  });

  it("should handle CLEAR_REGISTRATION", () => {
    expect(registrationReducer(
      initialState, 
      { 
        type: CLEAR_REGISTRATION 
      }
    ))
    .toEqual({
      ...initialState, 
      requestRegistration: false, 
      successRegistration: false, 
      errorRegistration: null,    
    });
  });
});
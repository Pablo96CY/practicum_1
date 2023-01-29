import { INGREDIENTS_DATA_REQUEST, INGREDIENTS_DATA_SUCCESS, INGREDIENTS_DATA_ERROR } from './actions';

const ingredientsDataState = {
  isLoad: false,
  isError: false,
  data: []
}

export const ingredientsDataReducer = (state = ingredientsDataState, action) => {
  switch (action.type) {
    case INGREDIENTS_DATA_REQUEST:
      return { 
        ...state, 
        isLoad: true, 
      };
    case INGREDIENTS_DATA_SUCCESS:
      return { 
        ...state, 
        isLoad: false, 
        isError: false, 
        data: action.data 
      };
    case INGREDIENTS_DATA_ERROR:
      return { 
        ...state, 
        isLoad: false, 
        isError: true, 
        data: action.data 
      };
    default:
      return state;
  }
}
import { getIngredientsMainData } from "../../utils/methods";

export const INGREDIENTS_DATA_REQUEST = "INGREDIENTS_DATA_REQUEST";
export const INGREDIENTS_DATA_SUCCESS = "INGREDIENTS_DATA_SUCCESS";
export const INGREDIENTS_DATA_ERROR = "INGREDIENTS_DATA_ERROR";

export const ingredientsData = () => {
  return (dispatch) => {
    dispatch({
      type: INGREDIENTS_DATA_REQUEST,
    });
    getIngredientsMainData().then(res => {
      dispatch({
        type: INGREDIENTS_DATA_SUCCESS,
        data: res.data,
      });
    }).catch(err => {
      dispatch({
        type: INGREDIENTS_DATA_ERROR,
      });
    });
  };
}
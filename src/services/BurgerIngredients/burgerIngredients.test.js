import { 
  INGREDIENTS_DATA_REQUEST, 
  INGREDIENTS_DATA_SUCCESS, 
  INGREDIENTS_DATA_ERROR,
} from "./actions";

import { 
  ingredientsDataReducer, 
  ingredientsDataState 
} from "./reducers";

const ingredients = [
  {
    "_id": "60d3b41abdacab0026a733c9",
    "name": "Мясо бессмертных моллюсков Protostomia",
    "type": "main",
    "proteins": 433,
    "fat": 244,
    "carbohydrates": 33,
    "calories": 420,
    "price": 1337,
    "image": "https://code.s3.yandex.net/react/code/meat-02.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
    "__v": 0
  },
  {
    "_id": "60d3b41abdacab0026a733cd",
    "name": "Соус фирменный Space Sauce",
    "type": "sauce",
    "proteins": 50,
    "fat": 22,
    "carbohydrates": 11,
    "calories": 14,
    "price": 80,
    "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    "__v": 0
  },
];

describe('ingredientsDataReducer', () => {
  it("should return the initial state", () => {
    expect(ingredientsDataReducer(undefined, {}))
    .toEqual(ingredientsDataState);
  });

  it("should handle INGREDIENTS_DATA_REQUEST", () => {
    expect(ingredientsDataReducer(
      ingredientsDataState, 
      { 
        type: INGREDIENTS_DATA_REQUEST
      }
    ))
    .toEqual({
      ...ingredientsDataState, 
      isLoad: true,
    });
  });

  it("should handle INGREDIENTS_DATA_SUCCESS", () => {
    expect(ingredientsDataReducer(
      ingredientsDataState, 
      { 
        type: INGREDIENTS_DATA_SUCCESS,
        data: ingredients
      }
    ))
    .toEqual({
      ...ingredientsDataState, 
      isLoad: false, 
      isError: false, 
      data: ingredients
    });
  });
  it("should handle INGREDIENTS_DATA_ERROR", () => {
    expect(ingredientsDataReducer(
      ingredientsDataState, 
      { 
        type: INGREDIENTS_DATA_ERROR
      }
    ))
    .toEqual({
      ...ingredientsDataState, 
      isLoad: false, 
      isError: true, 
      data: []
    });
  });
});
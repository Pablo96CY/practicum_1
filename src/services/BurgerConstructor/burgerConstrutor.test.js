import { 
  ADD_ITEM, 
  DELETE_ITEM, 
  REPLACE_ITEM,
  CLEAR_ITEMS 
} from "./actions";

import { 
  constructorReducer, 
  constructorState 
} from "./reducers";

const ingredient = {
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
};

describe('constructorReducer', () => {
  it("should return the initial state", () => {
    expect(constructorReducer(undefined, {}))
    .toEqual(constructorState);
  });

  it("should handle ADD_ITEM", () => {
    expect(constructorReducer(
      constructorState, 
      { 
        type: ADD_ITEM,
        item: ingredient
      }
    ))
    .toEqual({
      ...constructorState, 
      items: [
        ingredient,
      ],
    });
  });

  it("should handle REPLACE_ITEM", () => {
    expect(constructorReducer(
      constructorState, 
      { 
        type: REPLACE_ITEM,
        index: 0 
      }
    ))
    .toEqual({
      ...constructorState, 
      items: [],
    });
  });
  it("should handle DELETE_ITEM", () => {
    expect(constructorReducer(
      constructorState, 
      { 
        type: DELETE_ITEM,
        from: 0,
        to: 0
      }
    ))
    .toEqual({
      ...constructorState, 
      bun: undefined,
      items: [],
    });
  });
  it("should handle CLEAR_ITEMS", () => {
    expect(constructorReducer(
      constructorState, 
      { 
        type: CLEAR_ITEMS 
      }
    ))
    .toEqual({
      ...constructorState, 
      items: [],
    });
  });
});
import { INGREDIENTS_DATA_API_URL } from "./const";
import { Methods } from "./enum";
import localize from "./localize";

export const getIngredientsMainData = async() => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/ingredients`);
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
};

export const createNewOrders = async(ingredientsId) => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/orders`, 
  {
    method: Methods.POST,
    body: { ingredients: ingredientsId },
  })
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
};
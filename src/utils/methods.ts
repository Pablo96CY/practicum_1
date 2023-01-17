import { INGREDIENTS_DATA_API_URL } from "./const";
import localize from "./localize";

const getIngredientsMainData = async() => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/ingredients`);
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
};

export default getIngredientsMainData;
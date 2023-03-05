export interface Ingredient {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image?: string,
  image_mobile?: string,
  image_large?: string,
  __v?: number,
};

export interface IngredientsProps {
  items: Ingredient[],
  bun: Ingredient
}

export interface IUser {
  user: {
    name: string,
    email: string
  }
}
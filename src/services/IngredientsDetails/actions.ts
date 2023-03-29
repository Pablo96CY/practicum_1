export const INGREDIENT_INFO_MODAL_OPEN = 'INGREDIENT_INFO_MODAL_OPEN';
export const INGREDIENT_INFO_MODAL_CLOSE = 'INGREDIENT_INFO_MODAL_CLOSE';

export interface IngredientModalOpen {
  readonly type: typeof INGREDIENT_INFO_MODAL_OPEN;
}

export interface IngredientModalClose {
  readonly type: typeof INGREDIENT_INFO_MODAL_CLOSE;
}
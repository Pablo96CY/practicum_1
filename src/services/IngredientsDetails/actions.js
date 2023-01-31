export const INGREDIENT_INFO_MODAL_OPEN = 'INGREDIENT_INFO_MODAL_OPEN';
export const INGREDIENT_INFO_MODAL_CLOSE = 'INGREDIENT_INFO_MODAL_CLOSE';

export const openModal = () => ({
  type: INGREDIENT_INFO_MODAL_OPEN,
})

export const closeModal = () => ({
  type: INGREDIENT_INFO_MODAL_CLOSE,
})
import React, { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { REPLACE_ITEM } from '../../services/BurgerConstructor/actions';
import style from "./style.module.css";
import { Ingredient } from '../../utils/interfaces';
import { useDispatch } from '../../utils/helpers';

interface IProps {
  item: Ingredient,
  index: number,
  onDelete: (i: number) => void
}

const BurgerConstructorMainIngredient: FC<IProps> = ({ item, index, onDelete }) => {
  const ref = useRef(null);
  
  const dispatch = useDispatch();

  const [, Drag] = useDrag({
    type: "replace",
    item: { index }
  });

  const [, Drop] = useDrop({
    accept: "replace",
    drop(item: any) {
      if (index !== item.index) {
        dispatch({ 
          type: REPLACE_ITEM, 
          from: index, 
          to: item.index 
        });
      }
    }
  });

  Drag(Drop(ref));

  return (
    <li 
      className={style.main_item_container} 
      key={item._id} 
      ref={ref}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image || ''}
        extraClass={style.ingredient_item}
        handleClose={() => {
          onDelete(index);
        }}
      />
    </li>
  );
}

export default BurgerConstructorMainIngredient;
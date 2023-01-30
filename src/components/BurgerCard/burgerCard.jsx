import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import Modal from "../Modal/modal";
import IngredientDetails from "../IngredientDetails/ingredientDetails";
import { mainDataPropTypes } from "../../utils/propTypes";
import localize from "../../utils/localize";

const Card = ({data, numberOfItems}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [, dragRef] = useDrag({
    type: data.type,
    item: data
  });

  const onOpen = () => {
    setIsOpen(true);
  };
  
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose} info={localize.IngredientsDetails}>
          <IngredientDetails data={data}/>
        </Modal>
      )}
      <div className={style.ingredient} onClick={onOpen} ref={dragRef}>
        <img src={data.image}/>
        <div className={style.ingredients_icon_box}>
          <span className="text_type_digits-default">{data.price}</span>
          <CurrencyIcon type="primary"/>
        </div>
        <div className={style.ingredients_name_box}>
          <span>{data.name}</span>
          {numberOfItems && (
            <Counter 
              count={numberOfItems} 
              size="default" 
              extraClass={style.ingredients_number}
            />
          )}
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  data: mainDataPropTypes.isRequired,
};

export default Card
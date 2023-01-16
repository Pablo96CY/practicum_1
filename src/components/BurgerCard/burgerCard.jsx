import React, { useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import Modal from "../Modal/modal";
import IngredientDetails from "../IngredientDetails/ingredientDetails";
import { mainDataPropTypes } from "../../utils/propTypes";
import localize from "../../utils/localize";

const Card = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className={style.ingredient} onClick={onOpen}>
        <img src={data.image}/>
        <div className={style.ingredients_icon_box}>
          <text className="text_type_digits-default">{data.price}</text>
          <CurrencyIcon type="primary"/>
        </div>
        <div className={style.ingredients_name_box}>
          <text>{data.name}</text>
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  data: mainDataPropTypes.isRequired,
};

export default Card
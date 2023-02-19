import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import Modal from "../Modal/modal";
import IngredientDetails from "../IngredientDetails/ingredientDetails";
import { mainDataPropTypes } from "../../utils/propTypes";
import localize from "../../utils/localize";
import { BASE_ROOT, INGREDIENTS_ROOT } from "../../utils/routes";
import { INGREDIENT_INFO_MODAL_CLOSE, INGREDIENT_INFO_MODAL_OPEN } from "../../services/IngredientsDetails/actions";

const Card = ({data, numberOfItems}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isOpen } = useSelector(store => store.ingredientsDetails);

  const [, dragRef] = useDrag({
    type: data.type,
    item: data
  });

  const onOpen = () => {
    navigate(
      `${INGREDIENTS_ROOT}/${data._id}`, 
      { 
        replace: true, 
        state: { 
          background: location,
        } 
      }
    );
    dispatch({
      type: INGREDIENT_INFO_MODAL_OPEN
    })
  };
  
  const onClose = () => {
    navigate(BASE_ROOT, { replace: true });
    dispatch({
      type: INGREDIENT_INFO_MODAL_CLOSE
    })
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose} info={localize.IngredientsDetails}>
          <IngredientDetails/>
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
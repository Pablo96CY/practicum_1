import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from "react-dnd";
import { v4 as uuid } from 'uuid';
import { CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import localize from "../../utils/localize";
import Modal from "../Modal/modal";
import OrderDetails from "../OrderDetails/orderDetails";
import { Ingredients } from "../../utils/enum";
import { ADD_ITEM, DELETE_ITEM } from "../../services/BurgerConstructor/actions";
import BurgerConstructorMainIngredient from "../BurgerConstructorItem/burgerConstructorItem";
import { ORDER_CLOSE_MODAL, ORDER_OPEN_MODAL } from "../../services/OrderDetails/actions";

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const { items, bun } = useSelector(store => store.burgerConstructor);

  const { newOrderNumber, isOpen } = useSelector(store => store.orderDetails);
  
  const data = useSelector(store => store.burgerIngredients);

  useEffect(() => {
    data.data.map(item => {
      dispatch({ 
        type: ADD_ITEM, 
        item: item 
      });
    })
}, [data]);

  const [, dropTopBun] = useDrop({
    accept: [Ingredients.bun],
    drop(item) {
      dispatch({ 
        type: ADD_ITEM, 
        item: item 
      });
    }
  });

  const [, dropBottomBun] = useDrop({
    accept: [Ingredients.bun],
    drop(item) {
      dispatch({ 
        type: ADD_ITEM, 
        item: item 
      });
    }
  });

  const [, dropTargetIngredient] = useDrop({
    accept: [Ingredients.sauce, Ingredients.main],
    drop(item) {
      dispatch({ 
        type: ADD_ITEM, 
        item: item 
      });
    }
  });

  const deleteItem = (index) => {
    dispatch({ 
      type: DELETE_ITEM, 
      index: index 
    })
  }

  const sum = useMemo(() => {
    let value = 0;
    items.map(item => {
      value = value + item.price;
    })
    value = value + bun.price * 2;
    return value;
  }, [items, bun]);

  const onOpen = () => {
    dispatch({ 
      type: ORDER_OPEN_MODAL, 
    });
  };

  const onClose = () => {
    dispatch({ 
      type: ORDER_CLOSE_MODAL, 
    });
  };

  return (
    <section className={style.section}>
      {isOpen && (
        <Modal onClose={onClose}>
          <OrderDetails data={newOrderNumber}/>
        </Modal>
      )}
      <div className={style.burger_constructor}>
        <div className={style.items_scroll}>
          {bun && (
            <div key={`${bun._id}_top`} ref={dropTopBun} className={style.bun}>
              <ConstructorElement
                type="top"
                isLocked
                key={`${bun._id}_top`}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
          )}
          <ul className={style.items_scroll} ref={dropTargetIngredient}>
            {items && !!items.length && items.map((item, index) => (
              <BurgerConstructorMainIngredient 
                key={uuid()} 
                item={item} 
                index={index} 
                onDelete={deleteItem} 
              />
            ))}
          </ul>
          {bun && (
            <div key={`${bun._id}_bottom`} ref={dropBottomBun} className={style.bun}>
              <ConstructorElement
                type="bottom"
                isLocked
                key={`${bun._id}_bottom`}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
          )}
        </div>
        <div className={style.send_box}>
          <div className={style.box}>
            <text className="text_type_digits-medium">{sum}</text>
            <CurrencyIcon type="primary"/>
          </div>
          <Button 
            htmlType="button" 
            type="primary" 
            size="large"
            onClick={onOpen}
          >
            {localize.Checkout}
          </Button>  
        </div>
      </div>
    </section>
  )
}

export default BurgerConstructor
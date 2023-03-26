import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import { useDrop } from "react-dnd";
import { v4 as uuid } from 'uuid';
import { CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import localize from "../../utils/localize";
import Modal from "../ModalComponent/Modal";
import OrderDetails from "../OrderDetailsComponent/OrderDetails";
import { BunImage, Ingredients } from "../../utils/enum";
import { ADD_ITEM, CLEAR_ITEMS, DELETE_ITEM } from "../../services/BurgerConstructor/actions";
import BurgerConstructorMainIngredient from "../BurgerConstructorItemComponent/BurgerConstructorItem";
import { createNewOrder, ORDER_CLOSE_MODAL, ORDER_OPEN_MODAL } from "../../services/OrderDetails/actions";
import { LOGIN_ROOT } from "../../utils/routes";
import { getUserDataAction } from "../../services/UserData/actions";
import { TRootState } from "../../utils/types";
import { IngredientsProps, IUser } from "../../utils/interfaces";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, bun }: IngredientsProps = useSelector((store: TRootState) => store.burgerConstructor);

  const { newOrderNumber, isOpen } = useSelector((store: TRootState) => store.orderDetails);

  const { user }: IUser = useSelector((store: TRootState) => store.userReducer);

  useEffect(() => {
    dispatch<any>(getUserDataAction());
  }, [dispatch]);

  useEffect(() => {
    if(newOrderNumber) {
      dispatch({ 
        type: ORDER_OPEN_MODAL, 
      });
      dispatch({ 
        type: CLEAR_ITEMS, 
      });
    }
  }, [dispatch, newOrderNumber]);

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

  const deleteItem = (index: number) => {
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
    if(bun) {
      value = value + bun.price * 2;
    }
    return value;
  }, [items, bun]);

  const onOpen = () => {
    if(!!user?.name && user.name !== '') {
      dispatch<any>(createNewOrder([...items, bun, bun]));
    } else {
      navigate(LOGIN_ROOT, { replace: true });
    }
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
        <div key={`${bun && bun._id}_top`} ref={dropTopBun}>
          <ConstructorElement
            type="top"
            isLocked
            key={`${bun && bun._id}_top`}
            text={bun ? `${bun.name} (верх)` : `${localize.AddBun}`}
            price={bun ? bun.price : 0}
            thumbnail={bun ? bun.image! : BunImage.BUN_1}
            extraClass={style.bun}
          />
        </div>
        <ul className={style.items_scroll} ref={dropTargetIngredient}>
          {items && !!items.length ? items.map((item, index) => (
            <BurgerConstructorMainIngredient 
              key={uuid()} 
              item={item} 
              index={index} 
              onDelete={deleteItem} 
            />
          )) : (
            <div className={style.no_item}>
              <div className={`${style.no_item_text} text text_type_main-default`}>
                {localize.AddIngredient}
              </div>
            </div>
          )}
        </ul>
        <div key={`${bun && bun._id}_bottom`} ref={dropBottomBun}>
          <ConstructorElement
            type="bottom"
            isLocked
            key={`${bun && bun._id}_top`}
            text={bun ? `${bun.name} (низ)` : `${localize.AddBun}`}
            price={bun ? bun.price : 0}
            thumbnail={bun ? bun.image! : BunImage.BUN_2}
            extraClass={style.bun}
          />
        </div>
      </div>
      <div className={style.send_box}>
        <div className={style.box}>
          {sum && (
            <span className="text_type_digits-medium">{sum}</span>
          )}
          <CurrencyIcon type="primary"/>
        </div>
        <Button 
          htmlType="button" 
          type="primary" 
          size="large"
          disabled={!bun}
          onClick={onOpen}
        >
          {localize.Checkout}
        </Button>  
      </div>
    </section>
  )
}

export default BurgerConstructor
import React, { useState, useMemo } from "react";
import { useSelector } from 'react-redux';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import localize from "../../utils/localize";
import BurgerConstructorItem from "../BurgerConstrutorItem/burgerConstructorItem";
import Modal from "../Modal/modal";
import OrderDetails from "../OrderDetails/orderDetails";

const BurgerConstructor = () => {
  const { data } = useSelector((state) => state.burgerIngredients);

  const sum = useMemo(() => {
    let value = 0;
    data.map(item => {
      value = value + item.price;
    })
    return value;
  }, [data]);


  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <section className={style.section}>
      {isOpen && (
        <Modal onClose={onClose}>
          <OrderDetails data={327424}/>
        </Modal>
      )}
      <div className={style.burger_constructor}>
        <div className={style.items_scroll}>
          <BurgerConstructorItem data={data}/>
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
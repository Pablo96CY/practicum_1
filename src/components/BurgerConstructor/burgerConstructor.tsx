import React from "react";

import style from "./style.module.css";
import { 
  CurrencyIcon, 
  ConstructorElement, 
  Button, 
  DragIcon 
} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../data";
import localize from "../../localize";
import BurgerConstructorItem from "../BurgerConstrutorItem/burgerConstructorItem";

const BurgerConstructor = () => {
  const sum: () => number = () => {
    let value: number = 0;
    data.map(item => {
      value = value + item.price;
    })
    return value;
  }

  return (
    <section className={style.section}>
      <div className={style.burger_constructor}>
        <div className={style.items_scroll}>
          <BurgerConstructorItem/>
        </div>
        <div className={style.send_box}>
          <div className={style.box}>
            <text className="text_type_digits-medium">{sum()}</text>
            <CurrencyIcon type="primary"/>
          </div>
          <Button htmlType="button" type="primary" size="large">{localize.Checkout}</Button>  
        </div>
      </div>
    </section>
  )
}

export default BurgerConstructor
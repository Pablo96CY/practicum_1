import React from "react";

import "./style.css"
import { CurrencyIcon, ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../data";
import localize from "../../localize";

const BurgerConstructor = () => {
  return (
    <section className="section">
      <div className="constructor">
        <div className="items_scroll">
          {data.map(item => (
            <div className="item" key={item._id}>
              <ConstructorElement
                type="top"
                isLocked={true}
                key={item._id}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          ))}
        </div>
        <div className="send_box">
          <div className="box">
            <text className="text_type_digits-medium">610</text>
            <CurrencyIcon type="primary"/>
          </div>
          <Button htmlType="button" type="primary" size="large">{localize.Checkout}</Button>  
        </div>
      </div>
    </section>
  )
}

export default BurgerConstructor
import React from "react";
import { ConstructorElement,DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import { Ingredients } from "../../utils/enum";

const BurgerConstructorItem = ({data}) => {
  return (
    <>
      {data.map(item => (
        <div key={item._id}
          className={item.type === Ingredients.bun ? style.bun : style.item} 
        >
          {item.type !== Ingredients.bun && (
            <DragIcon type="primary" />
          )}
          <ConstructorElement
            type="top"
            isLocked={item.type === Ingredients.bun}
            key={item._id}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
        </div>
      ))}
    </>
  )
}

export default BurgerConstructorItem
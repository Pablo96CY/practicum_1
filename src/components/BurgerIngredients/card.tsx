import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import "./style.css";

const Card = ({ data } : any, ) => {
  return (
    <div className="ingredient">
      <img className={``} src={data.image}></img>
      <div className="ingredients_icon_box">
        <text className="text_type_digits-default">{data.price}</text>
        <CurrencyIcon type="primary"/>
      </div>
      <div className="ingredients_name_box">
        <text>{data.name}</text>
      </div>
    </div>
  )
}

export default Card
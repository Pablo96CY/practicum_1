import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";

interface IProps {
  data: {
    _id: string
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
  }
}

const Card = ({data} : IProps) => {
  return (
    <div className={style.ingredient}>
      <img className={``} src={data.image}></img>
      <div className={style.ingredients_icon_box}>
        <text className="text_type_digits-default">{data.price}</text>
        <CurrencyIcon type="primary"/>
      </div>
      <div className={style.ingredients_name_box}>
        <text>{data.name}</text>
      </div>
    </div>
  )
}

export default Card
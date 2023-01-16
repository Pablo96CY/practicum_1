import React from "react";

import style from "./style.module.css";

interface IProps {
  data: any
}

function IngredientDetails({ data }: IProps) {
  return (
    <div className={style.modal_content}>
      <img
        src={data.image_large}
        alt={data.name}
        className={style.image}
      />
      <p className="mt-4 mb-8 text text_type_main-medium">{data.name}</p>
      <div className={`mb-10 ${style.composition}`}>
        <div className={`mr-5 ${style.composition_item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Калории, ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.calories}
          </p>
        </div>
        <div className={`mr-5 ${style.composition_item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.proteins}
          </p>
        </div>
        <div className={`mr-5 ${style.composition_item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.fat}
          </p>
        </div>
        <div className={style.composition_item}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
import React from "react";
import localize from "../../utils/localize";

import style from "./style.module.css";

const IngredientDetails = ({ data }) => {
  return (
    <div className={style.modal_content}>
      <img
        src={data.image_large}
        alt={data.name}
        className={style.image}
      />
      <p className={`text text_type_main-medium ${style.modal_content_title}`}>{data.name}</p>
      <div className={style.modal_content_body}>
        <div className={style.modal_content_body_item}>
          <p className="text text_type_main-default text_color_inactive">
            {localize.Callories}
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.calories}
          </p>
        </div>
        <div className={style.modal_content_body_item}>
          <p className="text text_type_main-default text_color_inactive">
            {localize.Proteins}
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.proteins}
          </p>
        </div>
        <div className={style.modal_content_body_item}>
          <p className="text text_type_main-default text_color_inactive">
            {localize.Fats}
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.fat}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            {localize.Carbohydrates}
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
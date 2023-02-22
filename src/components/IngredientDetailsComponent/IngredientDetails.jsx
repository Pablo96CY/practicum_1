import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import localize from "../../utils/localize";
import style from "./style.module.css";

const IngredientDetails = () => {
  const params = useParams();

  const { data } = useSelector(store => store.burgerIngredients);

  let item = data.find(d => params.id ? d._id === params.id : d._id === window.location.pathname.split('/')[2]);

  return (
    <>
      {item && (
        <>
          <div className={style.modal_content}>
            <img
              src={item.image_large}
              alt={item.name}
              className={style.image}
            />
            <p className={`text text_type_main-medium ${style.modal_content_title}`}>{item.name}</p>
            <div className={style.modal_content_body}>
              <div className={style.modal_content_body_item}>
                <p className="text text_type_main-default text_color_inactive">
                  {localize.Callories}
                </p>
                <p className="text text_type_digits-default text_color_inactive">
                  {item.calories}
                </p>
              </div>
              <div className={style.modal_content_body_item}>
                <p className="text text_type_main-default text_color_inactive">
                  {localize.Proteins}
                </p>
                <p className="text text_type_digits-default text_color_inactive">
                  {item.proteins}
                </p>
              </div>
              <div className={style.modal_content_body_item}>
                <p className="text text_type_main-default text_color_inactive">
                  {localize.Fats}
                </p>
                <p className="text text_type_digits-default text_color_inactive">
                  {item.fat}
                </p>
              </div>
              <div>
                <p className="text text_type_main-default text_color_inactive">
                  {localize.Carbohydrates}
                </p>
                <p className="text text_type_digits-default text_color_inactive">
                  {item.carbohydrates}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default IngredientDetails;
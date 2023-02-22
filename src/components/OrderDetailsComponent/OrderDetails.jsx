import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import style from "./style.module.css";
import image from "../../images/success.png";
import localize from "../../utils/localize";
import { LOGIN_ROOT } from "../../utils/routes";

const OrderDetails = ({ data }) => {
  const navigate = useNavigate();

  const { user } = useSelector(store => store.userReducer);
  
  useEffect(() => {
    if(!user || user.name === '') {
      navigate(LOGIN_ROOT, { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className={style.modal_content}>
      <p className={`text text_type_digits-large ${style.identificator_order}`}>
        {data}
      </p>
      <p
        className={`text text_type_digits-small ${style.identificator_order_text}`}
      >
        {localize.OrderIdentificator}
      </p>
      <div className={style.success_icon}>
        <img src={image}/>
      </div>
      <p className={`text text_type_main-default ${style.identificator_order_text}`}>
        {localize.OrderPreparing}
      </p>
      <p className={`text text_type_main-default text_color_inactive ${style.order_waiting}`}>
        {localize.OrderWaiting}
      </p>
    </div>
  );
}

export default OrderDetails;
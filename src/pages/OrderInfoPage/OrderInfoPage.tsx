import React from 'react';

import OrderInfo from '../../components/OrderInfoComponent/OrderInfo';
import commonStyle from "../../utils/commonPageStyles.module.css";

const OrderInfoPage = () => {
  return (
    <main className={commonStyle.pages_orders_info_main}>
      <OrderInfo/>
    </main>
  );
}

export default OrderInfoPage;
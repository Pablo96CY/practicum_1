import React, { FC } from 'react';

import OrdersItem from '../OrderItemComponent/OrderItem';
import { TOrdersList } from '../../utils/types';
import style from './style.module.css';

interface IProps {
  data: TOrdersList
  personal: boolean;
};

const OrdersList: FC<IProps> = ({ data, personal }) => {
  return (
    <div className={personal ? `${style.order_list_main_personal} ${style.order_list_main}` : style.order_list_main}>
      {data.orders && data.orders.map(
        (
          elem: any, 
          index: number
        ) =>
        <OrdersItem 
          key={index} 
          order={elem} 
          personal={personal} 
        />
      )}
    </div>
  );
}

export default OrdersList;
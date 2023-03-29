import React, { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { 
  MAX_ORDERS_VALUE_END, 
  MAX_ORDERS_VALUE_START 
} from '../../utils/const';
import { OrderStatus } from '../../utils/enum';
import localize from '../../utils/localize';
import { TOrder, TOrdersList } from '../../utils/types';
import style from './style.module.css';

interface IProps {
  data: TOrdersList
};

const OrdersStatus: FC<IProps> = ({data}) => {
  const location = useLocation();

  const completedOrders = useMemo(() => 
    data.orders.filter(
      (order: TOrder) => order.status === OrderStatus.done).map(
        (order: TOrder) => order.number),
    [data.orders]
  );

  const inProgressOrders = useMemo(() => 
    data.orders.filter(
      (order: TOrder) => order.status === OrderStatus.pending).map(
        (order: TOrder) => order.number),
    [data.orders]
  );

  const completedOrdersStart = useMemo(() => 
    completedOrders.slice(undefined, MAX_ORDERS_VALUE_START),
    [completedOrders]
  );

  const completedOrdersEnd = useMemo(() => 
    completedOrders.slice(MAX_ORDERS_VALUE_START, MAX_ORDERS_VALUE_END),
    [completedOrders]
  );

  const inProgressOrdersStart = useMemo(() => 
    inProgressOrders.slice(undefined, MAX_ORDERS_VALUE_START),
    [inProgressOrders]
  );

  const inProgressOrdersEnd = useMemo(() => 
    inProgressOrders.slice(MAX_ORDERS_VALUE_START, MAX_ORDERS_VALUE_END),
    [inProgressOrders]
  );

  return (
    <>
      <div className={style.orders_board}>
        <section>
          <p className="text text_type_main-medium">
            {localize.Ready}
          </p>
          <div className={`${style.orders_board_number} ${style.orders_board_ready_color}`}>
            <ul className={style.orders_board_ul}>
              {completedOrdersStart.map((item: number, index: number) =>
                <li 
                  key={index} 
                  className={style.orders_board_li}
                >
                  <Link 
                    to={`${item}`} 
                    state={{ 
                      location: location 
                    }} 
                    className={style.orders_board_ready_link}
                  >
                    <span className="text text_type_digits-default">
                      {item}
                    </span>
                  </Link>
                </li>
              )}
            </ul>
            <ul className={style.orders_board_ul}>
              {completedOrdersEnd.map((item: any, index: any) =>
                <li 
                  key={index} 
                  className={style.orders_board_li}
                >
                  <Link 
                    to={`${item}`} 
                    state={{ 
                      location: location 
                    }} 
                    className={style.orders_board_ready_link}
                  >
                    <span className="text text_type_digits-default">
                      {item}
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </section>
        <section>
          <p className="text text_type_main-medium">
            {localize.IsProgress}
          </p>
          <div className={style.orders_board_number}>
            <ul className={style.orders_board_ul}>
              {inProgressOrdersStart.map((item: number, index: number) =>
                <li 
                  key={index} 
                  className={style.orders_board_li}
                >
                  <Link 
                    to={`${item}`} 
                    state={{ location: location }} 
                    className={style.orders_board_in_progress}
                  >
                    <span className="text text_type_digits-default">
                      {item}
                    </span>
                  </Link>
                </li>
              )}
            </ul>
            <ul className={style.orders_board_ul}>
              {inProgressOrdersEnd.map((item: number, index: number) =>
                <li 
                  key={index} 
                  className={style.orders_board_li}
                >
                  <Link 
                    to={`${item}`} 
                    state={{ location: location }} 
                    className={style.orders_board_in_progress}
                  >
                    <span className="text text_type_digits-default">
                      {item}
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </section>
      </div>
      <section>
        <p className="text text_type_main-medium">
          {localize.IsDoneForAllTime}
        </p>
        <p className={`${style.orders_board_text} text text_type_digits-large`}>
          {data.total}
        </p>
      </section>
      <section>
        <p className="text text_type_main-medium">
          {localize.IsDoneToday}
        </p>
        <p className={`${style.orders_board_text} text text_type_digits-large`}>
          {data.totalToday}
        </p>
      </section>
    </>
  );
}

export default OrdersStatus;
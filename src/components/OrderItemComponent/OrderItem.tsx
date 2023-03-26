import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { 
  CurrencyIcon, 
  FormattedDate 
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Ingredient } from "../../utils/interfaces";
import { TOrder, TRootState } from "../../utils/types";
import { OrderStatus } from "../../utils/enum";
import { MAX_ITEMS_VALUE } from "../../utils/const";
import localize from "../../utils/localize";
import style from './style.module.css';

interface IProps {
  order: TOrder,
  personal?: boolean
};

const OrderItem: FC<IProps> = ({order, personal}) => {
  const location = useLocation(); 
  
  const { data } = useSelector((store: TRootState) => store.burgerIngredients);

  const items = useMemo(() => 
    order.ingredients.map((id: string) => 
      {
        return data.find((item: Ingredient) => item._id === id)
      }
    ), 
    [data.data, order]
  );

  const visibleItems = useMemo(() => 
    items.slice(undefined, MAX_ITEMS_VALUE), 
    [items]
  );

  const sum = useMemo(() => 
    items.reduce( 
      (sum: number, item: Ingredient | undefined) => item!.price + sum, 0
    ), 
    [items]
  );

  const status = useMemo(() => 
    {
      if(order?.status) {
        switch (order!.status) {
          case OrderStatus.done: 
            return localize.Done;
          case OrderStatus.created: 
            return localize.Created;
          case OrderStatus.pending: 
            return localize.Pending;
          default:
            return order!.status;
        }
      }
    }, 
    [order]
  );

  const statusColor = useMemo(() => 
    order.status === OrderStatus.done 
      ? style.order_item_status_done : style.order_item_status_default, 
      [order]
  );


  return (
    <Link 
      to={`${location.pathname}/${order.number}`}
      state={{ location: location }}
      className={style.order_item_link}
    > 
      <div className='m-6'>
        <div className={style.order_item_header}>
          <p className='text text_type_digits-default'>
            #{order.number}
          </p>
          <FormattedDate 
            date={new Date(order.createdAt)} 
            className='text text_type_main-default text_color_inactive' 
          />
        </div>
      </div>
      <p className={`${style.order_item_title} text text_type_main-medium`}>
        {order.name}
      </p>
      {personal && status &&
        <p className={`${style.order_item_status} ${statusColor} text text_type_main-default`}>
          {status}
        </p>
      }
      <div className={style.order_item_body}>
        <div className={style.order_item_body_image}>
          {visibleItems && visibleItems.map((item: Ingredient | undefined, i: number) => {
            return (
              <li
                key={i}
                style={{ marginRight: -20 }}
                className={style.order_item_body_image_li}>
                <img
                  style={{ 
                    opacity: MAX_ITEMS_VALUE === (i + 1) && order.ingredients.length - MAX_ITEMS_VALUE > 0 ? 
                    '0.4' : '1' 
                  }}
                  src={item!.image_mobile}
                  alt={item!.name}
                  className={style.order_item_body_image_main} 
                />
                {order.ingredients.length - MAX_ITEMS_VALUE > 0 && i === (MAX_ITEMS_VALUE - 1) &&
                  <span className={`${style.order_item_body_invissible_count} text text_type_main-default`}>
                    {`+${order.ingredients.length - MAX_ITEMS_VALUE}`}
                  </span>
                }
              </li>
            )
          })}
        </div>
        <div className={style.order_item_price}>
          <span className={`text text_type_digits-default`}>
            {sum}
          </span>
          <CurrencyIcon 
            type="primary" 
          />
        </div>
      </div>
    </Link>
  );
}

export default OrderItem;
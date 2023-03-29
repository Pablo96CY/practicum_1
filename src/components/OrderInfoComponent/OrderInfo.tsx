import React, { useMemo, useEffect } from 'react';
import { useParams } from 'react-router';
import { 
  CurrencyIcon, 
  FormattedDate 
} from '@ya.praktikum/react-developer-burger-ui-components';

import { Ingredient } from '../../utils/interfaces';
import { getOrderInfoAction } from '../../services/OrderInfo/actions';
import { OrderStatus } from '../../utils/enum';
import localize from '../../utils/localize';
import style from './style.module.css';
import { useDispatch, useSelector } from '../../utils/helpers';
import { TIngredientWithCount } from '../../utils/types';

const OrderInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOrderInfoAction(id));
  }, [dispatch, id]);

  const { order } = useSelector(store => store.orderInfoReducer);
  const { data } = useSelector(store => store.burgerIngredients);

  const items: Array<TIngredientWithCount> = useMemo(() => 
    {
      if(order?.ingredients) {
        let group: any = {};
        order!.ingredients.map((item) => {
          let ingredient = data.find((ingredient: Ingredient) => ingredient._id === item);
          if (ingredient) {
            if (!group[item]) {
              group[item] = {
                ...ingredient, 
                numberOfItems: 0
              };
            }
            group[item].numberOfItems = group[item].numberOfItems + 1;
          }
        })
        let result = [] as any;
        order!.ingredients.map((item) => {
          if (group[item]) {
            result.push(group[item]);
            delete group[item];
          }
        })
        return result;
      }
      
    }, 
    [data, order]
  );

  const sum = useMemo(() => 
    {
      if(items) {
        return items!.reduce(
          (currentSum: number, item) => 
          item!.price * item!.numberOfItems + currentSum, 0)
      }
    }, 
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

  return (
    <main className={style.order_info_container}>
      <>
        <p className={`text text_type_digits-default ${style.order_info_number}`}>
          #{order?.number}
        </p>
        <p className={`text text_type_main-medium ${style.order_info_name}`}>
          {order?.name}
        </p>
        <p className={`text text_type_main-default ${style.order_info_status}`}>
          {status}
        </p>
        <p className={`text text_type_main-medium ${style.order_info_compound}`}>
          {localize.Compound}
        </p>
        <section className={style.order_info_body}>
          {items && items.map((item, index: number) => {
            return (
              <li key={index} className={style.order_info_body_li}>
                <div className={style.order_info_body_row}>
                  <div className={style.order_info_body_image_name}>
                    <div className={style.order_info_body_image}>
                      <img src={item!.image_mobile} alt={item!.name} />
                    </div>
                    <p className={`text text_type_main-default ${style.order_info_body_name}`}>
                      {item.name}
                    </p>
                  </div>
                  <div className={style.order_info_body_item_price}>
                    <span className={`text text_type_digits-default ${style.order_info_body_item}`}>
                      {`${item.numberOfItems} x ${item.price}`}
                    </span>
                    <CurrencyIcon 
                      type="primary"
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </section>
        <section className={`text text_type_main-default ${style.order_info_footer}`}>
          <p className={`text text_type_main-default text_color_inactive`}>
            <FormattedDate 
              date={new Date(order?.createdAt ? order?.createdAt : '')} 
              className={`text text_type_main-default text_color_inactive`}
            />
          </p>
          <div className={style.order_info_body_item_price}>
            <span className={`text text_type_digits-default ${style.order_info_body_item}`}>
              {sum}
            </span>
            <CurrencyIcon 
              type="primary" 
            />
          </div>
        </section>
      </>
    </main>
  );
}

export default OrderInfo;
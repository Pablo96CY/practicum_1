import React, { useEffect } from 'react';

import { 
  COMMON_ORDERS_END, 
  COMMON_ORDERS_START 
} from '../../services/CommonOrders/actions';
import { WS_BASE_API_URL } from '../../utils/const';
import commonStyle from "../../utils/commonPageStyles.module.css";
import OrderList from '../../components/OrderListComponent/OrderList';
import OrderBoard from '../../components/OrderBoardComponent/OrderBoard';
import localize from '../../utils/localize';
import { useDispatch, useSelector } from '../../utils/helpers';

const FeedPage = () => {
  const dispatch = useDispatch();
  
  const { isConnected, error, message } = useSelector(store => store.commonOrderReducer);

  useEffect(() => {
    dispatch({ 
      type: COMMON_ORDERS_START, 
      url: `${WS_BASE_API_URL}/orders/all` 
    });
    return () => {
      dispatch({ 
        type: COMMON_ORDERS_END 
      });
    }
  }, [dispatch]);

  return (
    <div className={commonStyle.pages_feed}>
      {!isConnected && localize.Loading}
      {!!error && 
        <p className={`${commonStyle.pages_orders_container_p} error-text text text_type_main-default`}>
          {error}
        </p>
      }
      {isConnected && !!message && (
        <main className={commonStyle.pages_content}>
          <section className={commonStyle.pages_left_block}>
            <p className={`${commonStyle.pages_feed_top_margin} text text_type_main-large`}>
              {localize.Feed}
            </p>
            <OrderList 
              data={message}
              personal={false} 
            />
          </section>
          <section className={commonStyle.pages_right_block}>
            <OrderBoard 
              data={message} 
            />
          </section>
        </main>
      )}
    </div>
  );
}

export default FeedPage;
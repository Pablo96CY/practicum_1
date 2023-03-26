import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
  PERSONAL_ORDERS_START, 
  PERSONAL_ORDERS_END 
} from '../../../services/PersonalOrders/actions';
import { WS_BASE_API_URL } from '../../../utils/const';
import { TOrdersList, TRootState } from '../../../utils/types';
import commonStyle from "../../../utils/commonPageStyles.module.css";
import OrderList from '../../../components/OrderListComponent/OrderList';
import localize from '../../../utils/localize';

const ProfileOrderPage = () => {
  const dispatch = useDispatch();
  const { isConnected, error, message } = useSelector((store: TRootState) => store.personalOrderReducer);

  const messages: TOrdersList | undefined = useMemo(() => {
    if (message) {
      let orders = [...message.orders];
      return { 
        ...message, 
        orders: orders.sort((one, other) => other.number - one.number) 
      };
    }
  }, [message]);

  useEffect(() => {
    dispatch({ 
      type: PERSONAL_ORDERS_START, 
      url: `${WS_BASE_API_URL}/orders`, 
      addToken: true 
    });
    return () => {
      dispatch({ 
        type: PERSONAL_ORDERS_END 
      });
    }
  }, [dispatch]);

  return (
    <div className={commonStyle.pages_orders_container}>
      {!isConnected && localize.Loading}
      {!!error && 
        <p className={`${commonStyle.pages_orders_container_p} error-text text text_type_main-default`}>
          {error}
        </p>
      }
      {isConnected && messages && (
        <OrderList 
          data={messages!}
          personal={true} 
        />
      )}
    </div>
  )
}

export default ProfileOrderPage
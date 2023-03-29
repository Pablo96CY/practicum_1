import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';
import { socketMiddleware } from './socketMiddleware';
import { webSocketCommonOrdersActions } from './CommonOrders/actions';
import { webSocketPersonalOrdersActions } from './PersonalOrders/actions';

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(socketMiddleware(webSocketCommonOrdersActions))
    .concat(socketMiddleware(webSocketPersonalOrdersActions)),
    devTools: process.env.NODE_ENV !== 'production'
});
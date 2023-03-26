import { TOrdersList, TWebSocketCommonOrdersActions } from '../../utils/types';

export const COMMON_ORDERS_START = "COMMON_ORDERS_START";
export const COMMON_ORDERS_OPEN = "COMMON_ORDERS_OPEN";
export const COMMON_ORDERS_SUCCESS = "COMMON_ORDERS_SUCCESS";
export const COMMON_ORDERS_ERROR = "COMMON_ORDERS_ERROR";
export const COMMON_ORDERS_END = "COMMON_ORDERS_END";
export const COMMON_ORDERS_CLOSED = "COMMON_ORDERS_CLOSED";
export const COMMON_ORDERS_MESSAGE = "COMMON_ORDERS_MESSAGE";

export interface ICommonOrdersStartAction {
  readonly type: typeof COMMON_ORDERS_START;
  readonly url: string;
}

export interface ICommonOrdersOpenAction {
  readonly type: typeof COMMON_ORDERS_OPEN;
}

export interface ICommonOrdersSuccessAction {
  readonly type: typeof COMMON_ORDERS_SUCCESS;
}

export interface ICommonOrdersErrorAction {
  readonly type: typeof COMMON_ORDERS_ERROR;
  readonly error: string;
}

export interface ICommonOrdersEndAction {
  readonly type: typeof COMMON_ORDERS_END;
}

export interface ICommonOrdersClosedAction {
  readonly type: typeof COMMON_ORDERS_CLOSED;
}

export interface ICommonOrdersMessageAction {
  readonly type: typeof COMMON_ORDERS_MESSAGE;
  readonly message: TOrdersList;
}

export const webSocketCommonOrdersActions: TWebSocketCommonOrdersActions = {
  onStart: COMMON_ORDERS_START,
  onOpen: COMMON_ORDERS_OPEN,
  onSuccess: COMMON_ORDERS_SUCCESS,
  onClosed: COMMON_ORDERS_CLOSED,
  onEnd: COMMON_ORDERS_END,
  onError: COMMON_ORDERS_ERROR,
  onMessage: COMMON_ORDERS_MESSAGE
};
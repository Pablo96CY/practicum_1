import { TOrdersList, TWebSocketPersonalOrdersActions } from '../../utils/types';

export const PERSONAL_ORDERS_START = "PERSONAL_ORDERS_START";
export const PERSONAL_ORDERS_OPEN = "PERSONAL_ORDERS_OPEN";
export const PERSONAL_ORDERS_SUCCESS = "PERSONAL_ORDERS_SUCCESS";
export const PERSONAL_ORDERS_ERROR = "PERSONAL_ORDERS_ERROR";
export const PERSONAL_ORDERS_END = "PERSONAL_ORDERS_END";
export const PERSONAL_ORDERS_CLOSED = "PERSONAL_ORDERS_CLOSED";
export const PERSONAL_ORDERS_MESSAGE = "PERSONAL_ORDERS_MESSAGE";

export interface IPersonalOrdersStartAction {
  readonly type: typeof PERSONAL_ORDERS_START;
  readonly url: string;
}

export interface IPersonalOrdersOpenAction {
  readonly type: typeof PERSONAL_ORDERS_OPEN;
}

export interface IPersonalOrdersSuccessAction {
  readonly type: typeof PERSONAL_ORDERS_SUCCESS;
}

export interface IPersonalOrdersErrorAction {
  readonly type: typeof PERSONAL_ORDERS_ERROR;
  readonly error: string;
}

export interface IPersonalOrdersEndAction {
  readonly type: typeof PERSONAL_ORDERS_END;
}

export interface IPersonalOrdersClosedAction {
  readonly type: typeof PERSONAL_ORDERS_CLOSED;
}

export interface IPersonalOrdersMessageAction {
  readonly type: typeof PERSONAL_ORDERS_MESSAGE;
  readonly message: TOrdersList;
}

export const webSocketPersonalOrdersActions: TWebSocketPersonalOrdersActions = {
  onStart: PERSONAL_ORDERS_START,
  onOpen: PERSONAL_ORDERS_OPEN,
  onSuccess: PERSONAL_ORDERS_SUCCESS,
  onClosed: PERSONAL_ORDERS_CLOSED,
  onEnd: PERSONAL_ORDERS_END,
  onError: PERSONAL_ORDERS_ERROR,
  onMessage: PERSONAL_ORDERS_MESSAGE
}; 
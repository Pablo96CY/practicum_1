import type { 
  AnyAction, 
  Middleware, 
  MiddlewareAPI 
} from 'redux';

import localize from '../utils/localize';
import { refreshToken } from '../utils/methods';
import { 
  TIMEOUT, 
  WEBSOCKET_ERROR, 
  WEBSOCKET_TOKEN_ERROR_MESSAGE 
} from '../utils/const';
import { 
  TWebSocketCommonOrdersActions, 
  TWebSocketPersonalOrdersActions 
} from '../utils/types';

export const socketMiddleware = (
  webSocketsActions: TWebSocketPersonalOrdersActions | TWebSocketCommonOrdersActions
  ): Middleware => {
  return (store: MiddlewareAPI<any, any>) => {
    let socketMiddleware: {
      socket: WebSocket | undefined,
      timer: number,
      connected: boolean,
      url: string
    } = {
      socket: undefined,
      timer: 0,
      connected: false,
      url: ''
    }
    
    return next => (action: AnyAction) => {
      const { dispatch } = store;
      if (action.type === webSocketsActions.onStart) {
        socketMiddleware.url = action.url;
        if (action.addToken) {
          socketMiddleware.url = 
            `${socketMiddleware.url}?token=${localStorage.getItem("accessToken")}`;
        }
        socketMiddleware.socket = new WebSocket(socketMiddleware.url);
        socketMiddleware.connected = true;
        window.clearTimeout(socketMiddleware.timer);
        dispatch({ 
          type: webSocketsActions.onSuccess 
        });
      }
      if (socketMiddleware.socket) {
        socketMiddleware.socket.onopen = () => {
          dispatch({ 
            type: webSocketsActions.onOpen 
          });
        };
        socketMiddleware.socket.onclose = event => {
          if (event.code !== WEBSOCKET_ERROR) {
            dispatch({ 
              type: webSocketsActions.onError,
              error: localize.Error 
            });
            socketMiddleware.socket!.close();
          }
          if (socketMiddleware.connected) {
            dispatch({ 
              type: webSocketsActions.onClosed 
            });
            socketMiddleware.timer = window.setTimeout(
              () => {
                dispatch({ 
                  type: webSocketsActions.onStart, 
                  url: socketMiddleware.url
                });
              }, 
              TIMEOUT
            )
          }
        };
        socketMiddleware.socket.onmessage = event => {
          if (!JSON.parse(event.data)?.success) {
            if (JSON.parse(event.data)?.message === WEBSOCKET_TOKEN_ERROR_MESSAGE) {
              refreshToken();
            }
            dispatch({ 
              type: webSocketsActions.onError, 
              error: JSON.parse(event.data)?.message 
            });
          } else {
            const { 
              success, 
              ...restParsedData 
            } = JSON.parse(event.data);
            dispatch({ 
              type: webSocketsActions.onMessage, 
              message: restParsedData 
            });
          }
        };
        socketMiddleware.socket.onerror = () => {
          dispatch({ 
            type: webSocketsActions.onError, 
            error: localize.Error });
        };
        if (action.type === webSocketsActions.onEnd) {
          socketMiddleware = {
            ...socketMiddleware,
            connected: false,
            timer: 0
          }
          window.clearTimeout(socketMiddleware.timer);
          socketMiddleware.socket!.close();
          dispatch({ 
            type: webSocketsActions.onClosed 
          });
        }
      }
      next(action);
    };
  };
};
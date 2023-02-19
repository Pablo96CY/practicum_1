import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { BrowserRouter } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './index.css';
import App from './components/Main/main';
import * as serviceWorker from './serviceWorker';
import mainStore from './services/mainStore';

render(
  <React.StrictMode>
      <Provider store={mainStore}>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DndProvider>
      </Provider>
    </React.StrictMode>, 
  document.getElementById('root'));

serviceWorker.unregister();

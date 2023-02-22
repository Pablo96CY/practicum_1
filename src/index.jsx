import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { BrowserRouter } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './components/MainComponent/Main';
import * as serviceWorker from './serviceWorker';
import mainStore from './services/mainStore';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={mainStore}>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DndProvider>
      </Provider>
    </React.StrictMode>
)

serviceWorker.unregister();
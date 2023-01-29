import React from 'react';
import { render } from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/Main/main';
import * as serviceWorker from './serviceWorker';
import mainStore from './services/mainStore';

render(
    <Provider store={mainStore}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>, 
  document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/Main/main';
import * as serviceWorker from './serviceWorker';
import mainStore from './services/mainStore';

render(
  <React.StrictMode>
      <Provider store={mainStore}>
        <App />
      </Provider>
    </React.StrictMode>, 
  document.getElementById('root'));

serviceWorker.unregister();

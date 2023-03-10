/*eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.scss';
import { Provider } from 'react-redux';
import stor from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={stor}>
    {/*    <React.StrictMode> */}
    <App />
    {/*     </React.StrictMode> */}
  </Provider>,
);

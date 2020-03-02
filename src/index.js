import React from 'react';
import { render } from 'react-dom';
import AppRouter from '@/router';
import store from '@/state/store';
import { Provider } from 'react-redux';

import './main.scss';

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  rootElement,
);

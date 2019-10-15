import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';
import { StateProvider } from './state';
import reducer from './reducers';
import initialState from './utils/initialState';
import * as serviceWorker from './serviceWorker';

ReactDOM
  .render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

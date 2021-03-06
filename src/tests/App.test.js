import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from '../components/App.js';
import '../css/index.css';

import settingsReducer from '../reducers/settingsReducer.js';
import playStateReducer from '../reducers/playStateReducer.js';
import historyReducer from '../reducers/historyReducer.js';

/* combine all reducers in the ./reducers folder */
const reducer = combineReducers({
  settings: settingsReducer,
  history: historyReducer,
  playState: playStateReducer,
});

const store = createStore(reducer);

/* this test just emulates the index.js and checks that it didn't crash */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={ store } >
      <App />
    </Provider>,
    div
  );
});
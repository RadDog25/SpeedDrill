import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import App from './components/App.js';
import './css/index.css';

import settingsReducer from './reducers/settingsReducer.js';
import playStateReducer from './reducers/playStateReducer.js';
import historyReducer from './reducers/historyReducer.js';
import submitReducer from './reducers/submitReducer.js';

/* combine all reducers in the ./reducers folder */
const reducer = combineReducers({
  settings: settingsReducer,
  history: historyReducer,
  playState: playStateReducer,
  submit: submitReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
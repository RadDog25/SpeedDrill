import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './components/App.js';
import './css/index.css';

/*note that reducer does not yet exist */
import settingsReducer from './reducers/settingsReducer.js';

/* combine all reducers in the ./reducers folder */
const reducer = combineReducers({
  settings: settingsReducer,
});

const store = createStore(reducer);

/* this listener will just log any changes to the console for dev purposes */
store.subscribe(() => {
  console.log("state change", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*

const store = createStore(reducer, {
  category: "Additon",
  difficulty: "Easy",
  pastCorrectAnswers: 0,
  pastIncorrectAnswers: 0,
  currentAnswerTime: 0,
  averageAnswerTime: 0,
  paused: false,
  transitioning: false,
  question: "2 + 2 = ",
  answers: [2, 3, 4, 5],
  correctAnswer: 4
});

*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.js';
import './css/index.css';

/*note that reducer does not yet exist */

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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

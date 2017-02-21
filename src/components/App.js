import React, { Component } from 'react';
import '../css/App.css';

/* Get bootstrap up and running with help from jQuery and Tether */
window.Tether = require('tether');
window.jQuery = window.$ = require('jquery');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.js');
require('../myBootstrap.js'); //this file is used to initiate any needed bootstrap elements
/* end bootstrap stuff */

import Dropdown from './Dropdown.js';
import Question from './Question.js';
import Answer from './Answer.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title" >SpeedDrill</h1>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Dropdown label="Category" lis={  ["Addition", "Subtraction", "Multiplication", "Divison"] }/>
          </div>
          <div className="col-xs-6 col-md-3 col-md-offset-6">
            <Dropdown label="Difficulty" lis={ ["Easy", "Medium", "Hard"] } />
          </div>
        </div>
        <Question />
        <div className="row">
          {
            [0, 1, 2, 3].map(i => {
              return <Answer key={i} />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;

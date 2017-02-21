import React, { Component } from 'react';
import '../css/App.css'; //custom css

require('../setupBootstrap.js'); //this script gets bootstrap up and running

import Dropdown from './Dropdown.js'; //bring in components
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
          { //make 4 answers (this will map from state later)
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
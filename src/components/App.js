import React, { Component } from 'react';
import '../css/App.css'; //custom css
import { connect } from 'react-redux';

require('../setupBootstrap.js'); //this script gets bootstrap up and running

import DropdownMenu from './DropdownMenu.js'; //bring in components
import Question from './Question.js';
import Answer from './Answer.js';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title" >SpeedDrill</h1>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <DropdownMenu title={this.props.settings.category} label="Category" lis={  ["Addition", "Subtraction", "Multiplication", "Divison"] }/>
          </div>
          <div className="col-xs-6 col-md-3 col-md-offset-6">
            <DropdownMenu title={this.props.settings.difficulty} label="Difficulty" lis={ ["Easy", "Medium", "Hard"] } />
          </div>
        </div>
        <Question />
        <div className="row">
          { //make 4 answers
            this.props.answers.map( (answer, index) => {
              return <Answer answer={ answer } key={ index } index={ index } />
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    answers: state.playState.answers,
  }
}

export default connect (mapStateToProps) (App);
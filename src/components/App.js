import React, { Component } from 'react';
import '../css/App.css'; //custom css
import { connect } from 'react-redux';

require('../setupBootstrap.js'); //this script gets bootstrap up and running

import DropdownMenu from './DropdownMenu.js'; //bring in components
import Question from './Question.js';
import Answer from './Answer.js';
import ScoreAlert from './ScoreAlert.js';
import StartGameModal from './StartGameModal.js';
import EndCompeteModal from './EndCompeteModal.js';
import EndPracticeModal from './EndPracticeModal.js';
import SubmitUsernameModal from './SubmitUsernameModal.js';
import Restart from './Restart.js';


class App extends Component {
  render() {
    return (
      <div className={/* apply colored backgound when competing */`myWrapper ${this.props.competing ? "myCompeting" : ""}`} >
        <div className="container" >
          <StartGameModal />
          <EndCompeteModal />
          <EndPracticeModal />
          <SubmitUsernameModal />
          <h1 className="title" >
            <span className="glyphicon glyphicon-flash" aria-hidden="true"></span>
            Speed Drill
          <Restart />
          </h1>
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <DropdownMenu title={this.props.settings.category} label="Category" lis={["Addition", "Subtraction", "Multiplication", "Division", "Random"]} />
            </div>
            <div className="col-xs-6 col-md-3">
              <DropdownMenu title={this.props.settings.difficulty} label="Difficulty" lis={["Easy", "Medium", "Hard"]} />
            </div>
          </div>
          <Question />
          {/* alert needs text, alert class and glyphicon class props  */}
          <div className="row">
            <div className="col-xs-12">
              <ScoreAlert alert="success" glyphicon="ok" text={this.props.history.pastCorrectAnswers} />
              <ScoreAlert alert="danger" glyphicon="remove" text={this.props.history.pastIncorrectAnswers} />
              <ScoreAlert alert="info" glyphicon="" text={`${this.props.history.pastCorrectAnswers + this.props.history.pastIncorrectAnswers} / 20`} />
            </div>
          </div>
          <div className="row">
            { //make 4 answers
              this.props.answers.map((answer, index) => {
                return <Answer answer={answer} key={index} index={index} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    answers: state.playState.answers,
    history: state.history,
    competing: state.playState.competing,
  }
}

export default connect(mapStateToProps)(App);
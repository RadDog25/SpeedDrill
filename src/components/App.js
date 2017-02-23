import React, { Component } from 'react';
import '../css/App.css'; //custom css
import { connect } from 'react-redux';

require('../setupBootstrap.js'); //this script gets bootstrap up and running

import DropdownMenu from './DropdownMenu.js'; //bring in components
import Question from './Question.js';
import Answer from './Answer.js';
import ScoreAlert from './ScoreAlert.js';
import Modal from './Modal.js';


class App extends Component {
  render() {
    return (
      <div className="container">

        <Modal />

        <h1 className="title" >
          <span className="glyphicon glyphicon-flash" aria-hidden="true"></span>
          SpeedDrill
          </h1>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <DropdownMenu title={this.props.settings.category} label="Category" lis={["Addition", "Subtraction", "Multiplication", "Divison", "Random"]} />
          </div>
          <div className="col-xs-6 col-md-3">
            <DropdownMenu title={this.props.settings.difficulty} label="Difficulty" lis={["Easy", "Medium", "Hard"]} />
          </div>
        </div>
        <Question />
        {/* alert needs text, alert and glyphicon props  */}
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
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    answers: state.playState.answers,
    history: state.history,
  }
}

export default connect(mapStateToProps)(App);
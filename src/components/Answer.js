import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { questionAnswered, transitionCompleted } from '../actions/playStateActions.js';
import { gameOver } from '../actions/endGameActions.js';

const $ = require('jquery'); //need jquery to handle bootrap modals, please forgive me

class Answer extends Component {
    handleClick() {
        /* only accept answer if game state is not paused or transitioning */ //should add a tooltip for that
        if ( !this.props.paused && !this.props.transitioning /* && !this.props.isGameOver {{{ this isn't really needed as this is a static modal }}}*/ ) {
            this.props.questionAnswered(
                this.props.index,
                this.props.index === this.props.correctIndex,
                this.props.currentAnswerTime,
                this.props.averageAnswerTime,
            );
            //have the transitionCompleted function call itself after a delay
            setTimeout(() => {
                if(this.props.numQuestionsAnswered >= 20) { //change back to 2 for testing
                    this.props.gameOver();
                    $('#myModal').modal({ show: true}); //lol jQuery in React
                }
                this.props.transitionCompleted(this.props.category, this.props.difficulty);
            }, 1000);
        }
    }
    render() {
        return (
            <div className="col-xs-12 col-md-3">
                <button onClick={this.handleClick.bind(this)} type="button"
                    //if the game is paused then change the style of the answer buttons to be disabled
                    className={`btn btn-block btn-lg btn-default answer-btn ${this.props.paused ? "disabled" : ""} ${this.props.buttonStyles[this.props.index]}`}>
                    {this.props.answer}
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //these are for the playStateReducer
        paused: state.playState.paused,
        transitioning: state.playState.transitioning,
        buttonStyles: state.playState.buttonStyles,
        category: state.settings.category,
        difficulty: state.settings.difficulty,
        averageAnswerTime: state.history.averageAnswerTime,
        //to prevent things from running when the modal comes up
        isGameOver: state.playState.isGameOver,
        //the two below are for the historyReducer
        correctIndex: state.playState.correctIndex,
        currentAnswerTime: state.playState.currentAnswerTime,
        //history is needed to know if the game is over
        numQuestionsAnswered: state.history.pastCorrectAnswers + state.history.pastIncorrectAnswers,    
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ questionAnswered: questionAnswered,
        transitionCompleted: transitionCompleted,
        gameOver: gameOver,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Answer);
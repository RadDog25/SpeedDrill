import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickedPause, updateTimer } from '../actions/playStateActions.js';

class Question extends Component {
    componentDidMount() {
        /* after timer mounts, increment the clock every 1 second as long as the game is not paused */
        let increment = 0.1; /*changed from 1 to 0.1 feb 28 12:43 PM, from 0.1  */
        setInterval(() => {
            if (!this.props.paused && !this.props.isGameOver) { this.props.updateTimer(this.props.currentAnswerTime, increment); }
        }, 1000 * increment);
    }
    handleClick() {
        if (!this.props.competing) { /* pausing is not allowed when competing */
            this.props.clickedPause(this.props.paused);
        }
    }
    render() {
        return (
            <div className={`jumbotron ${this.props.questionStyle}`}>
                <div className="btn-group" role="group" aria-label="...">
                    {/* the target shows the average time or 10 for the first question */}
                    <button className="btn btn-default btn-md disabled timer">
                        <span className="glyphicon glyphicon-screenshot" aria-hidden="true"></span>
                        {`${Math.round(this.props.averageAnswerTime * 10) / 10 || 10}s`}
                    </button>

                    <button onClick={this.handleClick.bind(this)} className={`btn btn-default btn-md ${this.props.competing ? "disabled" : ""}`}>
                        {/* toggle the glyphicon depending on if the game is paused or not */}
                        <span className={`glyphicon glyphicon-${this.props.paused ? "play" : "pause"}`} aria-hidden="true"></span>
                    </button>

                    <button className={`btn btn-default btn-md disabled timer ${this.props.timerStyle}`}>
                        {/* show the nearest second of the currentAnswerTime */}
                        {`${Math.floor(this.props.currentAnswerTime)}s`}
                    </button>
                </div>
                {/* if transitioning then the answer is shown in bold */}
                <h1>
                    {this.props.question}
                    { /* if transitioning and the class is set to myCorrect or myIncorrect, then show the answer during transition */
                        this.props.transitioning && this.props.questionStyle !== "myDropdownClick" ? <b>{" " + this.props.correctAnswer}</b> : ""}
                </h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        question: state.playState.question,
        currentAnswerTime: state.playState.currentAnswerTime,
        averageAnswerTime: state.history.averageAnswerTime,
        correctAnswer: state.playState.correctAnswer,
        //don't increment the timer if paused or game over
        paused: state.playState.paused,
        isGameOver: state.playState.isGameOver,
        transitioning: state.playState.transitioning,
        questionStyle: state.playState.questionStyle,
        timerStyle: state.playState.timerStyle,
        //need this to disable the pause button when competing
        competing: state.playState.competing,
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ clickedPause: clickedPause, updateTimer: updateTimer }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Question);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickedPause, updateTimer } from '../actions/playStateActions.js';

class Question extends Component {
    componentDidMount() {
        /* after timer mounts, increment the clock every 1 second as long as the game is not paused */
        let increment = 1;
        setInterval(() => {
            if (!this.props.paused && !this.props.isGameOver) { this.props.updateTimer(this.props.currentAnswerTime, increment); }
        }, 1000 * increment);
    }
    handleClick() {
        this.props.clickedPause(this.props.paused);
    }
    render() {
        return (
            <div className={`jumbotron ${this.props.questionStyle}`}>
                <div className="btn-group" role="group" aria-label="...">
                    {/* the target shows the average time or 10 for the first question */}
                    <button className="btn btn-default btn-md disabled timer">
                        <span className="glyphicon glyphicon-screenshot" aria-hidden="true"></span>
                        {`${Math.round( this.props.averageAnswerTime * 10) / 10 || 10}s`}
                    </button>

                    <button onClick={this.handleClick.bind(this)} className="btn btn-default btn-md" >
                        {/* toggle the glyphicon depending on if the game is paused or not */}
                        <span className={`glyphicon glyphicon-${this.props.paused ? "play" : "pause"}`} aria-hidden="true"></span>
                    </button>

                    <button className={`btn btn-default btn-md disabled timer ${this.props.timerStyle}`}>
                        {`${this.props.currentAnswerTime}s`}
                    </button>
                </div>
                {/* if transitioning then the answer is shown in bold */}
                <h1>{this.props.question} {this.props.transitioning ? <b>{this.props.correctAnswer}</b> : ""} </h1>
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
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ clickedPause: clickedPause, updateTimer: updateTimer }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Question);
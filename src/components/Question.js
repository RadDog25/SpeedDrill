import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickedPause, updateTimer } from '../actions/playStateActions.js';


class Question extends Component {
    componentDidMount() {
        /* after timer mounts, increment the clock every 1 second as long as the game is not paused */
        let increment = 1;
        setInterval(() => {
            if (!this.props.paused) { this.props.updateTimer(this.props.currentAnswerTime, increment); }
        }, 1000 * increment);
    }
    handleClick() {
        this.props.clickedPause(this.props.paused);
    }
    render() {
        return (
            <div className={`jumbotron ${this.props.questionStyle}`}>
                {/* clicking on either the pause button or the time will pause / play the timer */}
                <div className="btn-group" role="group" aria-label="...">
                    <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-default btn-md">
                        {/* toggle the glyphicon depending on if the game is paused or not */}
                        <span className={`glyphicon glyphicon-${this.props.paused ? "play" : "pause"}`} aria-hidden="true"></span>
                    </button>
                    <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-default btn-md">
                        <span className="timer"> { /* the line below will show currentAnswerTime  as MM:SS*/}
                            {`${("0" + (Math.floor(this.props.currentAnswerTime / 60))).slice(-2)}:${("0" + (this.props.currentAnswerTime % 60)).slice(-2)}`}
                        </span> 
                    </button>
                </div>
                {/* if transitioning then the answer is shown in bold */}
                <h1>{ this.props.question } { this.props.transitioning ? <b>{ this.props.correctAnswer }</b> : "" } </h1>

            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        question: state.playState.question,
        currentAnswerTime: state.playState.currentAnswerTime,
        correctAnswer: state.playState.correctAnswer,
        paused: state.playState.paused,
        transitioning: state.playState.transitioning,
        questionStyle: state.playState.questionStyle,
    }
}

let matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ clickedPause: clickedPause, updateTimer: updateTimer }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Question);

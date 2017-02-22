import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { questionAnswered, transitionCompleted } from '../actions/playStateActions.js';

class Answer extends Component {
    handleClick() {
        /* only accept answer if game state is not paused */ //should add a tooltip for that
        if (!this.props.paused && !this.props.transitioning) {
            this.props.questionAnswered(this.props.index);
            //have the transitionCompleted function call itself after a delay
            setTimeout( () => {
                this.props.transitionCompleted(this.props.category, this.props.difficulty);
            }, 1000);
        }
    }
    render() {
        return (
            <div className="col-xs-12 col-md-3">
                <button onClick={this.handleClick.bind(this)} type="button" className={`btn btn-block btn-lg btn-default ${this.props.buttonStyles[this.props.index]}`}>
                    {this.props.answer}
                </button>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        paused: state.playState.paused,
        transitioning: state.playState.transitioning,
        buttonStyles: state.playState.buttonStyles,
        category: state.settings.category,
        difficulty: state.settings.difficulty,
    }
}

let matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ questionAnswered: questionAnswered, transitionCompleted: transitionCompleted }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Answer);

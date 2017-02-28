import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickedRestart, transitionCompleted } from '../actions/playStateActions.js';

class Restart extends Component {
    handleClick() {
        /* only accept answer if game state is not paused or transitioning */ //should add a tooltip for that
        this.props.clickedRestart();
        //have the transitionCompleted function call itself after a delay
        setTimeout(() => {
            this.props.transitionCompleted(this.props.category, this.props.difficulty);
        }, 1000);
    }
    render() {
        return (
            <a className="restartTest" onClick={this.handleClick.bind(this)} href="#" data-toggle="tooltip" data-placement="bottom" title="Restart Quiz" >
                <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
            </a>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //need these for transitionCompleted
        category: state.settings.category,
        difficulty: state.settings.difficulty,
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ clickedRestart: clickedRestart, transitionCompleted: transitionCompleted }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Restart);
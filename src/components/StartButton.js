import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickedStartMode } from '../actions/startGameActions.js';
import { transitionCompleted } from '../actions/playStateActions.js';

class StartGameButton extends Component {
    handleClick() {
        this.props.clickedStartMode(this.props.action);
        //execute transition then show new quiz
        setTimeout(() => {
          this.props.transitionCompleted(this.props.category, this.props.difficulty);
        }, 1000);
    }
    render() {
        return (
            <button onClick={this.handleClick.bind(this)} type="button" className={`btn btn-lg ${this.props.btnClass} btn-block myStartGame`} data-dismiss="modal">
                { this.props.text }
            </button>
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
    return bindActionCreators({ clickedStartMode: clickedStartMode, transitionCompleted: transitionCompleted }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(StartGameButton);
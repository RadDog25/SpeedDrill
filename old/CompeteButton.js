import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickedCompeteMode } from '../actions/startGameActions.js';
import { transitionCompleted } from '../actions/playStateActions.js';

class CompeteButton extends Component {
    handleClick() {
        this.props.clickedCompeteMode();
        //execute transition then show new quiz
        setTimeout(() => {
          this.props.transitionCompleted(this.props.category, this.props.difficulty);
        }, 1000);
    }
    render() {
        return (
            <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-lg btn-primary btn-block myStartGame" data-dismiss="modal">
                <b>Compete!</b>
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
    return bindActionCreators({ clickedCompeteMode: clickedCompeteMode, transitionCompleted: transitionCompleted }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CompeteButton);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickedPracticeMode } from '../actions/startGameActions.js';

class PracticeButton extends Component {
    handleClick() {
        this.props.clickedPracticeMode();
    }
    render() {
        return (
            <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-lg btn-info btn-block myStartGame" data-dismiss="modal">
                Practice
            </button>
        );
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ clickedPracticeMode: clickedPracticeMode }, dispatch);
}

export default connect (null, matchDispatchToProps) (PracticeButton);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const $ = require('jquery'); //need jquery to handle bootrap modals

import { clickedRestart, transitionCompleted } from '../actions/playStateActions.js';

class Restart extends Component {
    handleClick() {
        $('#StartGameModal').modal({ backdrop: "static", keyboard: false, show: true });
    }
    render() {
        return (
            <button className="btn restartTest" onClick={ this.handleClick.bind(this) } data-toggle="tooltip" data-placement="bottom" title="Restart Quiz"  >
                <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
            </button >
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
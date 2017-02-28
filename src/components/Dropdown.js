import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickedSetting } from '../actions/settingsActions.js';
import { transitionCompleted } from '../actions/playStateActions.js';

class Dropdown extends Component {
    handleClick() { //trigger clicked setting action, but only if the category clicked is different than the existing state
        if (!this.props.transitioning && !this.props.isGameOver && this.props.string !== this.props.category) {
            this.props.clickedSetting(this.props.label, this.props.string);
            //have the transitionCompleted function call itself after a delay
            setTimeout(() => {
                this.props.transitionCompleted(this.props.category, this.props.difficulty);
            }, 1000);
        }
    }
    render() { /* make the currently selected category and difficulty bold */
        return <li onClick={this.handleClick.bind(this)} key={this.props.index} ><a href="#"> 
            { [this.props.category, this.props.difficulty].indexOf(this.props.string) === -1 ? this.props.string : <b>{this.props.string}</b>  }
        </a></li>
    }
}

const mapStateToProps = (state) => {
    return {
        //need these for transitionCompleted
        category: state.settings.category,
        difficulty: state.settings.difficulty,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ clickedSetting: clickedSetting, transitionCompleted: transitionCompleted }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Dropdown);
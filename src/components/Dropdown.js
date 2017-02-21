import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickedCategory, clickedDifficulty } from '../actions/settingsActions.js';

class Dropdown extends Component {
    handleClick() {
        switch (this.props.label) {
            case "Category":
                this.props.clickedCategory(this.props.string);
                break;
            case "Difficulty":
                this.props.clickedDifficulty(this.props.string);
                break;
            default:
                break;
        }
    }
    render() {
        return <li onClick={this.handleClick.bind(this)} key={this.props.index} ><a href="#"> {this.props.string} </a></li>
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ clickedCategory: clickedCategory, clickedDifficulty: clickedDifficulty }, dispatch);
}

export default connect(null, matchDispatchToProps)(Dropdown);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clickedSetting } from '../actions/settingsActions.js';

class Dropdown extends Component {
    handleClick() {
        //trigger clicked setting action
        this.props.clickedSetting(this.props.label, this.props.string);
    }
    render() {
        return <li onClick={this.handleClick.bind(this)} key={this.props.index} ><a href="#"> {this.props.string} </a></li>
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ clickedSetting: clickedSetting }, dispatch);
}

export default connect(null, matchDispatchToProps)(Dropdown);

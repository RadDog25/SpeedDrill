import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clickedSetting } from '../actions/settingsActions.js';

class Alert extends Component {
    render() {
        return (
            <div className={`alert alert-${this.props.alert}`} role="alert">
                {this.props.text}
                <span className={`glyphicon glyphicon-${this.props.glyphicon}`} aria-hidden="true"></span><span className="sr-only">Error:</span>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        //props i need
    }
}

export default connect(mapStateToProps)(Alert);

/* glyphicon-th-list glyphicon glyphicon-ok */

/* glyphicon glyphicon-remove */
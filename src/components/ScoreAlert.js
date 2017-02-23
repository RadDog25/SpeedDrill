import React, { Component } from 'react';

class ScoreAlert extends Component {
    render() {
        return (
            <div className={`alert alert-${this.props.alert} scoreAlert`} role="alert">
                {this.props.text}
                <span className={`glyphicon glyphicon-${this.props.glyphicon}`} aria-hidden="true"></span><span className="sr-only">Error:</span>
            </div>
        );
    }
}

export default ScoreAlert;

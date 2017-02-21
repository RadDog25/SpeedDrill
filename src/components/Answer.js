import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Answer extends Component {
    render() {
        return (
            <div className="col-xs-12 col-md-3">
                <button type="button" className="btn btn-block btn-lg btn-default">Right</button>
            </div>
        );
    }
}

export default Answer;

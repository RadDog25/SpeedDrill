import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Question extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default btn-md">
                        <span className="glyphicon glyphicon-pause" aria-hidden="true"></span>
                    </button>
                    <button type="button" className="btn btn-default btn-md">
                        <span className="timer">00:00:00</span> { /* this will show currentAnswerTime */ }
                    </button>
                </div>

                <h1>3 x 3 = </h1> { /* this will show the question */}

            </div>
        );
    }
}

export default Question;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { newSession } from '../actions/endGameActions';

const $ = require('jquery'); //need jquery to handle bootrap modals, please forgive me

import Results from './Results.js';

class EndPracticeModal extends Component {
  newSessionClick() {
    $('#StartGameModal').modal({ backdrop: "static", keyboard: false, show: true });
    this.props.newSession();
  }
  render() {
    return (
      <div className="modal fade" id="EndPracticeModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header"> {/* reset quiz if the close button is clicked */}
              <button onClick={this.newSessionClick.bind(this)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h3 className="modal-title" id="myModalLabel">
                <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
                <span>Session Complete!</span>
              </h3>
            </div>

            <div className="modal-body">
              <Results />
            </div>

            <div className="modal-footer">
              {/* trigger the NEW_SESSION action when the new session button is pressed to reset the quiz */}
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <button onClick={this.newSessionClick.bind(this)} type="button" className="btn btn-lg btn-block btn-primary myEndGame" data-dismiss="modal">
                    New Session</button>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <a href="https://github.com/RadDog25" className="btn btn-lg btn-block btn-success myEndGame">My Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ newSession: newSession }, dispatch);
}

export default connect(null, matchDispatchToProps)(EndPracticeModal);
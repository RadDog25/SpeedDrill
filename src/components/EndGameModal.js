import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { newSession } from '../actions/endGameActions';

const $ = require('jquery'); //need jquery to handle bootrap modals, please forgive me

import Highscore from './Highscore.js';
import Results from './Results.js';

class EndGameModal extends Component {
  usernameClick() {
    console.log("username click!");
    $('#SubmitUsernameModal').modal({ backdrop: "static", keyboard: false, show: true });
  }
  newSessionClick() {
    $('#StartGameModal').modal({ backdrop: "static", keyboard: false, show: true });
    this.props.newSession();
  }
  render() {
    return (
      <div className="modal fade" id="EndGameModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header"> {/* reset quiz if the close button is clicked */}
              <button onClick={this.usernameClick.bind(this)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h3 className="modal-title" id="myModalLabel">
                <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
                <span>{this.props.competing ? "Leaderboard" : "Session Complete!"}</span>
              </h3>
            </div>
            {
              (this.props.highscore && this.props.competing) &&
              <div className="modal-body">
                <Highscore />
              </div>
            }
            {
              !this.props.competing &&
              <div className="modal-body">
                <Results />
              </div>
            }
            <div className="modal-footer">
              {/* trigger the NEW_SESSION action when the new session button is pressed to reset the quiz */}
              <div className="row">
                {
                  ( this.props.competing && !this.props.submitted ) &&
                  <div className="col-xs-12 col-sm-6">
                    <button onClick={this.usernameClick.bind(this)} type="button" className="btn btn-lg btn-block btn-success myEndGame" data-dismiss="modal">
                      <b>Leave your username!</b></button>
                  </div>
                }
                <div className="col-xs-12 col-sm-6">
                  <button onClick={this.newSessionClick.bind(this)} type="button" className="btn btn-lg btn-block btn-primary myEndGame" data-dismiss="modal">
                    New Session</button>
                </div>
                {
                  !this.props.competing &&
                  <div className="col-xs-12 col-sm-6">
                    <a href="https://github.com/RadDog25" className="btn btn-lg btn-block btn-success myEndGame">My Github</a>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //highscore to print if competing
    competing: state.playState.competing,
    highscore: state.history.highscore,
    submitted: state.submit.submitted,
  }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ newSession: newSession }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EndGameModal);
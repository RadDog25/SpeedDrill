import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { formChange, submitForm, newSession } from '../actions/endGameActions';

const $ = require('jquery'); //need jquery to handle bootrap modals, please forgive me

class SubmitUsernameModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.props.username, this.props.playerId, this.props.scores);
    $('#SubmitUsernameModal').modal('hide');
    $('#EndCompeteModal').modal({ backdrop: "static", keyboard: false, show: true });
  }

  handleChange(e) {
    const maxLength = 10;
    const username = e.target.value;
    if(username.length <= maxLength) {
      this.props.formChange(e.target.value);
    }
  }

  render() {
    return (
      <div className="modal fade" id="SubmitUsernameModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="myModalLabel">
                <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
                <span>Submit Username!</span>
              </h3>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" value={this.props.username} onChange={this.handleChange} className="form-control" id="usr" />
                  <input type="submit" value="Submit" className="btn btn-lg btn-block btn-primary mySubmit" />
                </form>
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
    username: state.submit.username,
    //playerId and log needed for submit form action
    playerId: state.history.playerId,
    scores: state.history.scores,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    newSession: newSession,
    formChange: formChange,
    submitForm: submitForm,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SubmitUsernameModal);
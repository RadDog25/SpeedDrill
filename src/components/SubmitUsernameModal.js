import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { formChange, submitForm } from '../actions/endGameActions';

const $ = require('jquery'); //need jquery to handle bootrap modals, please forgive me

class SubmitUsernameModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    console.log("submission:", this.props.username);
    e.preventDefault();
    this.props.submitForm();
    $('#SubmitUsernameModal').modal('hide');
    $('#EndGameModal').modal({ backdrop: "static", keyboard: false, show: true });
  }

  handleChange(e) {
    this.props.formChange(e.target.value);
  }

  render() {
    return (
      <div className="modal fade" id="SubmitUsernameModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header"> {/* reset quiz if the close button is clicked */}
              <button onClick={this.handleSubmit} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
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
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    formChange: formChange,
    submitForm: submitForm,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SubmitUsernameModal);
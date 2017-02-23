import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { newSession } from '../actions/endGameActions.js';

class Modal extends Component {
  handleClick() {
    this.props.newSession();
  }
  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header"> {/* reset quiz if the close button is clicked */}
              <button onClick={this.handleClick.bind(this)} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h2 className="modal-title" id="myModalLabel">Session Complete!</h2>
            </div>

            <div className="modal-body">
              <table>
                <tbody>
                  <tr>
                    <td>Score: </td>{/* green if better than 75% red if less than 50%  for both score and accuracy*/}
                    <td className={this.props.accuracy >= 75 ? "goodResult" : this.props.accuracy < 50 ? "badResult" : ""} >{`${this.props.pastCorrectAnswers} / 20`}</td>
                  </tr>
                  <tr>
                    <td>Accuracy: </td>
                    <td className={this.props.accuracy >= 75 ? "goodResult" : this.props.accuracy < 50 ? "badResult" : ""} >{`${this.props.accuracy}%`}</td>
                  </tr>
                  { /* only render speed if it is not 0. turn green from speed <= 4 and red if > 7 !! operator comes in handy here */
                    !!this.props.speed &&
                    <tr>
                      <td>Unit Speed: </td>
                      <td className={this.props.speed <= 4 ? "goodResult" : this.props.accuracy > 7 ? "badResult" : ""}>{`${this.props.speed}s`}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>

            <div className="modal-footer">
              {/* trigger the NEW_SESSION action when the new session button is pressed to reset the quiz */}
              <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-primary" data-dismiss="modal">New Session</button>
              <a href="https://github.com/RadDog25" className="btn btn-success">My Github</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pastCorrectAnswers: state.history.pastCorrectAnswers,
    accuracy: Math.round((state.history.pastCorrectAnswers / 20) * 100), //round accuracy and speed
    speed: Math.round((state.history.averageAnswerTime) * 10) / 10,
  }
}

let matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ newSession: newSession }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Modal);
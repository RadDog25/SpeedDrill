import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { newSession } from '../actions/endGameActions.js';
import { transitionCompleted } from '../actions/playStateActions.js';

class Modal extends Component {
  handleClick() {
    this.props.newSession();
    //execute transition then show new quiz
    setTimeout(() => {
      this.props.transitionCompleted(this.props.category, this.props.difficulty);
    }, 1000);
  }
  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header"> {/* reset quiz if the close button is clicked */}
              <button onClick={this.handleClick.bind(this)} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h3 className="modal-title" id="myModalLabel">
                <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
                <span>Session Complete!</span>
              </h3>
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

const mapStateToProps = (state) => {
  return {
    pastCorrectAnswers: state.history.pastCorrectAnswers,
    accuracy: Math.round((state.history.pastCorrectAnswers / 20) * 100), //round accuracy and speed
    speed: Math.round((state.history.averageAnswerTime) * 10) / 10,
    //needed for transitionCompleted
    category: state.settings.category,
    difficulty: state.settings.difficulty,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ newSession: newSession, transitionCompleted: transitionCompleted }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Modal);
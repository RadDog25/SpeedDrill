import React, { Component } from 'react';
import { connect } from 'react-redux';

const $ = require('jquery'); //need jquery to handle bootrap modals

import StartButton from './StartButton.js';

class StartGameModal extends Component {
    componentDidMount() {
        //have the modal slide down when page loads
        $('#StartGameModal').modal({ backdrop: "static", keyboard: false, show: true });
    }
    render() {
        return (
            <div className="modal fade" id="StartGameModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {
                                !!this.props.numAnswers && //only give option to close once the user has answered at least 1 question
                                <button onClick={console.log("click!")} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                            }

                            <h3 className="modal-title" id="myModalLabel">
                                <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
                                <span>Select Game Mode</span>
                            </h3>
                        </div>

                        <div className="modal-body">
                            <h4>Practice alone or compete for the SpeedDrill high score!</h4>
                        </div>

                        <div className="modal-footer">
                            {/* trigger the NEW_SESSION action when the new session button is pressed to reset the quiz */}
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <StartButton action="CLICKED_PRACTICE_MODE" text="Practice" btnClass="btn-info" />
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <StartButton action="CLICKED_COMPETE_MODE" text={<b>Compete!</b>} btnClass="btn-primary" />
                                </div>
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
        //need these for close button
        numAnswers: state.history.pastCorrectAnswers + state.history.pastIncorrectAnswers,
    }
}

export default connect(mapStateToProps)(StartGameModal);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
    render() {
        return (
            <table className="myResults table table-striped">
                <tbody>
                    <tr>
                        <th>Score</th>
                        <th>Accuracy</th>
                        {!!this.props.speed && /* only render speed if it is not 0. turn green from speed <= 4 and red if > 7 !! operator comes in handy here */
                            <th>Speed</th>
                        }
                    </tr>
                    <tr>
                        {/* green if better than 75% red if less than 50%  for both score and accuracy */}
                        <td className={this.props.accuracy >= 75 ? "goodResult" : this.props.accuracy < 50 ? "badResult" : ""} >
                            {`${this.props.pastCorrectAnswers} / 20`}</td>
                        <td className={this.props.accuracy >= 75 ? "goodResult" : this.props.accuracy < 50 ? "badResult" : ""} >{`${this.props.accuracy}%`}</td>
                        { /* only render speed if it is not 0. turn green from speed <= 4 and red if > 7 !! operator comes in handy here */
                            !!this.props.speed &&
                            <td className={this.props.speed <= 4 ? "goodResult" : this.props.accuracy > 7 ? "badResult" : ""}>{`${this.props.speed}s`}</td>
                        }
                    </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pastCorrectAnswers: state.history.pastCorrectAnswers,
        accuracy: Math.round((state.history.pastCorrectAnswers / 20) * 100), //round accuracy and speed
        speed: Math.round((state.history.averageAnswerTime) * 10) / 10,
    }
}

export default connect(mapStateToProps)(Results);
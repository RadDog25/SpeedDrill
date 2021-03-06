import React, { Component } from 'react';
import { connect } from 'react-redux';

class Highscore extends Component {
    render() {
        return (
            <table className="table table-striped" >
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Unit Time</th>
                    </tr>
                    {/* the code below takes our scores, assigns it a rank, removes scoes not in top 5 but not the user, then renders to DOM */}
                    {
                        this.props.scores &&
                        this.props.scores.map((score, index) => {
                            return Object.assign({}, score, {
                                rank: index + 1,
                            });
                        }).filter((score) => {
                            return score.rank <= 5 || score.id === this.props.playerId;
                        }).map((score) => {
                            return (
                                <tr className={this.props.playerId === score.id ? "myBold" : ""} key={ score.id } >
                                    <td>{ score.rank }</td>
                                    <td>{ score.name }</td>
                                    <td>{ score.score }%</td>
                                    <td>{ score.time.toFixed(1) }s</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //highscore to print if competing
        scores: state.history.scores,
        playerId: state.history.playerId,
    }
}

export default connect(mapStateToProps) (Highscore);
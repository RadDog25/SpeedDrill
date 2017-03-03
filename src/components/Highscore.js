import React, { Component } from 'react';
import { connect } from 'react-redux';

class Highscore extends Component {
    render() {
        return ( // take the highscore array and map it to the DOM
            <table className="table table-striped" >
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                    {
                        this.props.highscore.map((score, index) => {
                            return (
                                <tr key={index} >
                                    <td>{index + 1}</td>
                                    <td>{score.name}</td>
                                    <td>{score.score}</td>
                                    <td>{score.time}</td>
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
        highscore: state.history.highscore
    }
}

export default connect(mapStateToProps) (Highscore);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Dropdown extends Component {
    render() {
        return (
            <div className="dropdown">
                <label> {this.props.label} </label>
                <button className="btn btn-block btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Dropdown<span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    {
                        this.props.lis.map( (string, index) => {
                            return <li key={ index } ><a href="#"> { string } </a></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Dropdown;

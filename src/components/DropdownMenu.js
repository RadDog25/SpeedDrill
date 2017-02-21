import React, { Component } from 'react';
import DropDown from './DropDown.js';


class DropdownMenu extends Component {
    render() {
        return (
            <div className="dropdown">
                <label> {this.props.label} </label>
                <button  className="btn btn-block btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    { this.props.title }<span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    { //take the lis from props
                        this.props.lis.map( (string, index) => {
                            return <DropDown key={ index } label={ this.props.label } string={ string } />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default DropdownMenu;

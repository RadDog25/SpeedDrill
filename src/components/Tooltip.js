import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Tooltips extends Component {
    render() {
        return (
            <div>
                <button onClick={ () => this.props.increment(this.props.count) } type="button" className="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
            </div>
        );
    }
}

export default Tooltips;

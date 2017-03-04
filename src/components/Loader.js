import React, { Component } from 'react';


class Loader extends Component { //loader has a css animation to spin
    render() {
        return (
            <span className="myCog glyphicon glyphicon-cog" aria-hidden="true"></span>
        );
    }
}

export default Loader;
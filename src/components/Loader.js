import React, { Component } from 'react';

class Loader extends Component { //loader has a css animation to spin
    render() {
        return <img src="cog6.svg" className="myCog" alt="loading cog"/>
    }
}

export default Loader;
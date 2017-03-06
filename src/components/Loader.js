import React, { Component } from 'react';
import ReactSVG from 'react-svg';


class Loader extends Component { //loader has a css animation to spin
    render() {
        /*
        return (
            <span className="myCog glyphicon glyphicon-cog" aria-hidden="true"></span>
        );
        */
        /*
        return (
            <img className="myCog" src='cog5.svg' />
        );
        */
        /*
        return (
            <object className="myCog" data="cog5.svg">
                Your browser does not support SVG
        </object>
        );
        */
        /*
        return (
            <svg className="myCog">
                <use xLinkHref='cog5.svg' />
            </svg>
        );
        */
        /*
        return(
            <ReactSVG path="cog5.svg" className="myCog" />
        );
        */
        return <img src="cog6.svg" className="myCog" />
    }
}

export default Loader;
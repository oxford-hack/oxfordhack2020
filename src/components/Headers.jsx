import React, { Component } from 'react';
import Overlay from './Overlay';
import '../css/Headers.css'
import '../css/App.css'

import logo from '../media/logo.png'


const FullHeader = () => (
    <div className="header">
        <img src={logo} alt="Logo" style={{maxHeight: "75px"}} />
        <div className="bar">
            <p className="element"> About </p>
            <p className="element"> Event </p>
            <p className="element"> Sponsors </p>
            <p className="element"> Committee </p>
            <p className="element"> FAQ </p>
            <p className="element"> Register </p>
            <a id="mlh-trust-badge" style={{
                maxWidth: '100px',
                minWidth: '60px',
                width:'10%',
                zIndex: '10000'}}
                href="https://mlh.io/seasons/eu-2021/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=yellow"
                target="_blank"
            >
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-yellow.svg"
                alt="Major League Hacking 2021 Hackathon Season"
                style={{width: '100%'}}
            />
            </a>
        </div>
    </div>
);

const HamburgerHeader = () => (
    <div className="header">
        <p className="element"> MLH Logo </p>
        <img src={logo} alt="Logo" style={{maxHeight: "50px", padding: "5px"}} />
        <Overlay>
            <p>
                Bottom text
            </p>
        </Overlay>
    </div>
);

export {
    FullHeader,
    HamburgerHeader
};
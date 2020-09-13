import React, { Component } from 'react';
import Overlay from './Overlay';
import '../css/Headers.css'
import '../css/App.css'

import logo from '../media/logo.png'


const FullHeader = () => (
    <div className="header">
        <a href="#landingscreen" onclick="return false;"><img src={logo} alt="Logo" style={{maxHeight: "75px"}} /></a>
        <div className="bar">
            <a href="#about"><p className="element"> About </p></a>
            <a href="#event" onclick="return false;"><p className="element"> Event </p></a>
            <a href="#timetable" onclick="return false;"><p className="element"> Timetable </p></a>
            <a href="#committee" onclick="return false;"><p className="element"> Committee </p></a>
            <a href="#faq" onclick="return false;"><p className="element"> FAQ </p></a>
            <a href="#sponsors" onclick="return false;"><p className="element"> Sponsors </p></a>
            <a href="#register" onclick="return false;"><p className="element"> Register </p></a>
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
        <a href="#landingscreen" onclick="return false;"><img src={logo} alt="Logo" style={{maxHeight: "50px", padding: "5px"}} /></a>
        <Overlay>
            <a href="#about"><p className="element"> About </p></a>
            <a href="#event" onclick="return false;"><p className="element"> Event </p></a>
            <a href="#timetable" onclick="return false;"><p className="element"> Timetable </p></a>
            <a href="#committee" onclick="return false;"><p className="element"> Committee </p></a>
            <a href="#faq" onclick="return false;"><p className="element"> FAQ </p></a>
            <a href="#sponsors" onclick="return false;"><p className="element"> Sponsors </p></a>
            <a href="#register" onclick="return false;"><p className="element"> Register </p></a>
        </Overlay>
    </div>
);

export {
    FullHeader,
    HamburgerHeader
};
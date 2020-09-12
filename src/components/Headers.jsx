import React, { Component } from 'react';
import Overlay from './Overlay';
import '../css/Headers.css'
import '../css/App.css'


const FullHeader = () => (
    <div className="header">
        <p className="element"> OxfordHack Logo </p>
        <div className="bar">
            <p className="element"> About </p>
            <p className="element"> Event </p>
            <p className="element"> Sponsors </p>
            <p className="element"> Committee </p>
            <p className="element"> FAQ </p>
            <p className="element"> Register Now! </p>
            <p className="mlh-element"> MLH Logo </p>
        </div>
    </div>
);

const HamburgerHeader = () => (
    <div className="header">
        <p className="element"> MLH Logo </p>
        <p className="element"> OxfordHack Logo </p>
        <Overlay />
    </div>
);

export {
    FullHeader,
    HamburgerHeader
};
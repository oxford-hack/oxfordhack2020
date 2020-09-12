import React, { Component } from 'react';
import Overlay from './Overlay';

import logo from '../media/logo.png'


const FullHeader = () => (
        <div style={{
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            position: "fixed",
            width: "100%",
        }}>
            <img src={logo} alt="Logo" style={{maxHeight: "75px"}} />
            <div style={{justifyContent: 'right', display: 'flex', flexDirection: 'row'}}>
                <div style={{justifyContent: 'right', display: 'flex', flexDirection: 'row', maxHeight: "60px"}}>
                    <p style={{margin: '15px'}}> About </p>
                    <p style={{margin: '15px'}}> Event </p>
                    <p style={{margin: '15px'}}> Sponsors </p>
                    <p style={{margin: '15px'}}> Committee </p>
                    <p style={{margin: '15px'}}> FAQ </p>
                    <p style={{margin: '15px'}}> Register </p>
                </div>
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
                <div style={{width: "50px"}} />
            </div>
        </div>
);

const HamburgerHeader = () => (
    <div style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: "fixed",
        width: "100%"
    }}>
        <p style={{margin: '15px'}}> MLH Logo </p>
        <img src={logo} alt="Logo" style={{maxHeight: "50px", padding: "5px"}} />
        <Overlay>
            <p>
                Bottom text
            </p>
        </Overlay>
    </div>
)

export {
    FullHeader,
    HamburgerHeader
};
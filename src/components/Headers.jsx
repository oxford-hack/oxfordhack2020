import React, { Component } from 'react';
import Overlay from './Overlay';


const FullHeader = () => (
        <div style={{
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            position: "fixed",
            width: "100%"
        }}>
            <p style={{margin: '15px'}}> OxfordHack Logo </p>
            <div style={{justifyContent: 'right', display: 'flex', flexDirection: 'row'}}>
                <p style={{margin: '15px'}}> About </p>
                <p style={{margin: '15px'}}> Event </p>
                <p style={{margin: '15px'}}> Sponsors </p>
                <p style={{margin: '15px'}}> Committee </p>
                <p style={{margin: '15px'}}> FAQ </p>
                <p style={{margin: '15px'}}> Register Now! </p>
                <p style={{margin: '15px 15px 15px 50px'}}> MLH Logo </p>
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
        <p style={{margin: '15px'}}> OxfordHack Logo </p>
        <Overlay />
    </div>
)

export {
    FullHeader,
    HamburgerHeader
};
/* eslint-disable max-len */
import React from 'react';
import '../css/LandingScreen.css';
import '../css/App.css';
import {useMediaQuery} from 'react-responsive';
import {isSafari} from 'react-device-detect';

import RegisterButton from './RegisterButton';
import LandingArrow from './LandingArrow';

import landingVideo from '../media/twoo_landing.webm';
import landingVideoBack from '../media/twoo-flying.gif';

const LandingScreen = () => {
    const isDesktop = !useMediaQuery({query: '(max-width: 1224px)'});

    return (
        <div className="landing">
            {isDesktop ? (
                <p style={{width: '100%'}}>
                    {!isSafari ? (
                    <video autoPlay loop muted width={'40%'}>
                        <source src={landingVideo}
                                type="video/webm"/>
                        Sorry, your browser doesn&apos;t support embedded videos.
                    </video>) : (
                        <img src={landingVideoBack} alt="Look at him go!" style={{width: '40%'}} />
                    )}
                </p>) : (<p>
                {!isSafari ? (
                <video autoPlay loop muted width={'90%'} style={{paddingTop: '50px'}}>
                    <source src={landingVideo}
                            type="video/webm"/>
                    Sorry, your browser doesn&apos;t support embedded videos.
                </video>
                ) : (
                    <img src={landingVideoBack} alt="Look at him go!" style={{width: '90%', paddingTop: '50px'}} />
                )}</p>
                )
            }
            <p className="coding">
                LET YOUR IDEAS TAKE FLIGHT, <br/>
                SLEEP ALL DAY AND CODE ALL NIGHT!
            </p>

            {/* TODO:why do we only allow this for mobile??*/}
            {!isDesktop && <RegisterButton place="front" />}
            <LandingArrow />
        </div>
    );
};

export default LandingScreen;

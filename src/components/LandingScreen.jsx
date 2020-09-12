import React from 'react';
import '../css/LandingScreen.css';
import { useMediaQuery } from 'react-responsive'

import RegisterButton from './RegisterButton';

import landing_video from '../media/twoo_landing_cropped.webm';

const LandingScreen = () => {

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div style={{color: 'white', paddingTop: "50px"}} className="landing">
            {isDesktop ? (
                <p style={{width: '100%'}}>
                    <video autoPlay loop width={'50%'}>
                        <source src={landing_video}
                                type="video/webm"/>
                                
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </p>) : (
                <video autoPlay loop width={'90%'} style={{paddingTop: '50px'}}>
                    <source src={landing_video}
                            type="video/webm"/>
                            
                    Sorry, your browser doesn't support embedded videos.
                </video>)
            }
            <p>
                LET YOUR IDEAS TAKE FLIGHT, <br/>
                SLEEP ALL DAY AND CODE ALL NIGHT!
            </p>
            {!isDesktop && <RegisterButton place="front" />}
            {!isDesktop && <p style={{marginBlockEnd: "0"}}>Find out more</p>}
            <p style={{backgroundColor: 'orange'}}>
                Hi, I'm a clickable arrow
            </p>
        </div>
    );
}

export default LandingScreen;
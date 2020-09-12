import React from 'react';
import '../css/LandingScreen.css';
import { useMediaQuery } from 'react-responsive'

import RegisterButton from './RegisterButton';

const LandingScreen = () => {

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div style={{color: 'white', paddingTop: "50px"}} className="landing">
            {isDesktop ? (
                <p style={{width: '100%', paddingTop: "30%", backgroundColor: 'blue'}}>
                    Hi, I'm a desktop video
                </p>) : (
                    <p style={{width: '100%', paddingTop: "56.25%", backgroundColor: 'blue'}}>
                    Hi, I'm a mobile video
                </p>)
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
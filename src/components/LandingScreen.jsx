import React from 'react';
import '../css/LandingScreen.css';
import '../css/App.css'
import { useMediaQuery } from 'react-responsive'

import RegisterButton from './RegisterButton';

const LandingScreen = () => {

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div className="landing">
            <p className={isDesktop ? ("example-media-desktop") : ("example-media-mobile")}>
                {isDesktop ? ("Hi, I'm a desktop video") : ("Hi, I'm a mobile video")}
            </p>
            <p className="coding">
                LET YOUR IDEAS TAKE FLIGHT, <br/>
                SLEEP ALL DAY AND CODE ALL NIGHT!
            </p>

            {/*TODO:why do we only allow this for mobile??*/}
            {!isDesktop && <RegisterButton place="front" />}
            {!isDesktop && <p style={{marginBlockEnd: "0"}}>Find out more</p>}
            <p style={{backgroundColor: 'orange'}}>
                Hi, I'm a clickable arrow
            </p>
        </div>
    );
}

export default LandingScreen;
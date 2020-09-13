import React from 'react';
import '../css/LandingScreen.css';
import '../css/App.css'
import { useMediaQuery } from 'react-responsive'

import RegisterButton from './RegisterButton';
import LandingArrow from './LandingArrow';

import landing_video from '../media/twoo_landing_cropped.webm';

const LandingScreen = () => {

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div className="landing">
            {isDesktop ? (
                <p style={{width: '100%'}}>
                    <video autoPlay loop width={'45%'}>
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
            <p className="coding">
                LET YOUR IDEAS TAKE FLIGHT, <br/>
                SLEEP ALL DAY AND CODE ALL NIGHT!
            </p>

            {/*TODO:why do we only allow this for mobile??*/}
            {!isDesktop && <RegisterButton place="front" />}
            {!isDesktop && <p style={{marginBlockEnd: "0"}}>Find out more</p>}
            <LandingArrow />
        </div>
    );
}

export default LandingScreen;
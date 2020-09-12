import React from 'react';
import { useMediaQuery } from 'react-responsive';

import faq_video from '../media/twoo_event_tmp.png'

const Description = () => {
    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div style={{display: "flex",flexDirection: "row", color: "white"}}>
            {isDesktop && (
                <div style={{display: "flex", width: "50%", minHeight: "500px", alignItems: "center", justifyContent: "center"}}>
                    <img src={faq_video} alt="Bottom text"/>
                </div>
            )}

            <div style={{width: isDesktop ? "50%" : "100%", minHeight: "500px", alignItems: "center", justifyContent: "center", display: "flex"}}>
                <p>Truly the most lorem of ipsums.</p>
            </div>
        </div>
    );
}

export default Description;
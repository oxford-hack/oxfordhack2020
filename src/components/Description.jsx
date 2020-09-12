import React from 'react';
import { useMediaQuery } from 'react-responsive'

const Description = () => {
    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div style={{display: "flex",flexDirection: "row", color: "white"}}>
            {isDesktop && (
                <div style={{display: "flex", width: "50%", minHeight: "500px", backgroundColor: "blue", alignItems: "center", justifyContent: "center"}}>
                    <p>Why hello there, I'm supposed to be a Twoo</p>
                </div>
            )}

            <div style={{width: isDesktop ? "50%" : "100%", minHeight: "500px", alignItems: "center", justifyContent: "center", display: "flex"}}>
                <p>Truly the most lorem of ipsums.</p>
            </div>
        </div>
    );
}

export default Description;
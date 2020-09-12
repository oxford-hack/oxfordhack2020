import React from 'react';
import Crossfade from './Crossfade';

import yes from '../media/yes.png'
import no from '../media/no.png'

const Sponsors = () => (
    <div style={{color: "white", textAlign: "left", paddingLeft: "50px", paddingRight: "50px"}}>
        <h2>SPONSORS</h2>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <img src={yes} alt="nicememe.website" style={{height: "200px", width: "200px", borderRadius: "50%", padding: "30px"}}/>
            <img src={yes} alt="nicememe.website" style={{height: "200px", width: "200px", borderRadius: "50%", padding: "30px"}}/>
            <img src={yes} alt="nicememe.website" style={{height: "200px", width: "200px", borderRadius: "50%", padding: "30px"}}/>
            <img src={yes} alt="nicememe.website" style={{height: "200px", width: "200px", borderRadius: "50%", padding: "30px"}}/>
        </div>
    </div>
);

export default Sponsors;
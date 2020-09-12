import React from 'react';
import '../css/Crossfade.css';

const Crossfade = (props) => (
    <div class="cf">
        <img class="bottom" src={props.img1} alt={props.alt} style={{height: "350px", width: "350px", borderRadius: "50%"}}/>
        <img class="top" src={props.img2} alt={props.alt} style={{height: "350px", width: "350px", borderRadius: "50%"}}/>
    </div>
);

export default Crossfade;
import React from 'react';
import '../css/Crossfade.css';
import '../css/App.css';

const Crossfade = (props) => (
    <div class="cf">
        <img class="bottom" src={props.img1} alt={props.alt} className="default-image"/>
        <img class="top" src={props.img2} alt={props.alt} className="default-image"/>
    </div>
);

export default Crossfade;
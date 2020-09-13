import React from 'react';
import Crossfade from './Crossfade';
import '../css/Sponsors.css'
import '../css/App.css'

import yes from '../media/yes.png'
import no from '../media/no.png'

const Sponsors = () => (
    <div classname="default">
        <div className="title">SPONSORS</div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div className="col-3">
                    <img src={yes} alt="nicememe.website" className="image"/>
                </div>
                <div className="col-3">
                    <img src={yes} alt="nicememe.website" className="image"/>
                </div>
                <div className="col-3">
                    <img src={yes} alt="nicememe.website" className="image"/>
                </div>
                <div className="col-3">
                    <img src={yes} alt="nicememe.website" className="image"/>
                </div>
            </div>
        </div>
    </div>
);

export default Sponsors;
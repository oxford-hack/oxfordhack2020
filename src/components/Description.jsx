import React from 'react';
import '../css/Description.css'
import '../css/App.css'
import faq_video from '../media/twoo_event_tmp.png'

const Description = () => (
    <div className="default">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-12 order-first">
                    <img src={faq_video} alt="Bottom text" width="50%"/>
                </div>
                <div className="col-lg-6 col-md-12 order-last">
                    <div className="title">OXFORD HACK 2020 ONLINE</div>
                    <p className="main-text">
                        Truly the most lorem of ipsums.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Description;
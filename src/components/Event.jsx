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
                        Oxford Hack 2020 will be the official Oxford student hackathon this year. We want to bring together as many like minded people together with the purpose of creating cool things. Though we can’t be together in person, in 24 hours we will provide our hackers with APIs, mentoring and prize categories to provide direction. We also want to stay engaged with our community despite the distance, so we will run unrelated but fun activities. The aim of these is to help teams come together, provide a break from work and simulate the random interactions that happen when a Hackathon is physical.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Description;
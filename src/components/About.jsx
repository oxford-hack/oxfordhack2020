import React from 'react';
import Video from './Youtube.jsx';


const About = () => (
    <div className="default">
        <div className="title">ABOUT OXFORD HACK</div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-12 order-lg-first order-last">
                    <p className="main-text">
                    Oxford Hack is the official Oxford student Hackathon, where over 300 people gather every year to collaborate, innovate, learn and experiment while creating a project from scratch in 24 hours. We give you all the resources you need, from hardware and APIs to workshops, sponsors and volunteers who can help you with whatever questions you might have. In a few words, you attend to have fun, learn things you didn’t even know existed and see your ideas come to life. This year we are moving everything digitally - for more information about what is going to change, check out the Event page or the FAQs.
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 order-lg-last order-first">
                    <Video
                        title="Previous Event"
                        src="https://www.youtube-nocookie.com/embed/FqBxnolqFpk"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default About;
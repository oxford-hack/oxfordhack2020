import React from 'react';
import Video from './Youtube.jsx';


const About = () => (
    <div className="default">
        <div className="title">ABOUT OXFORD HACK</div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-12 order-lg-first order-last">
                    <p className="main-text">
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
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
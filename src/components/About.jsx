import React from 'react';
import { useMediaQuery } from 'react-responsive'


const About = () => {
    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });
    
    return (
        <div style={{display: "flex", flexDirection: isDesktop ? "row" : "column-reverse", color: "white", alignItems: "center", justifyContent: "center"}}>
            <div style={{width: isDesktop ? '50%': '100%', textAlign: "justify", textAlignLast: "center"}}>
                <p style={{margin: "20px"}}>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                </p>
            </div>
            <div style={{width: isDesktop ? '50%': '100%'}}>
                <p style={{paddingTop: "56.25%", margin: "20px", backgroundColor: 'blue'}}>
                    Insert video here
                </p>
            </div>
        </div>
    );
}

export default About;
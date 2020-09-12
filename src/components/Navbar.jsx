import React from 'react';
import '../css/Navbar.css';

import { useMediaQuery } from 'react-responsive'

import { FullHeader, HamburgerHeader } from './Headers';


const Navbar = () => {
    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });
    
    return (
        <div class="navbar" id="myNavbar" style={{position: 'sticky', top: '0', zIndex: '100'}}>
            {isDesktop ? (<FullHeader />) : (<HamburgerHeader /> )}
        </div>
    );
}

export default Navbar;
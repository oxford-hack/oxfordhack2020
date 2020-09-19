import React from 'react';
import Crossfade from './Crossfade';

import alexnormal from '../media/committee/Alex normal.JPG';
import alexfun from '../media/committee/Alex haha.JPG';
import ilianormal from '../media/committee/Ilia_normal.png';
import iliafun from '../media/committee/Ilia_fun.png';
import jonnynormal from '../media/committee/Jonny normal.jpg';
import jonnyfun from '../media/committee/Jonny fun.jpg';
import serbinormal from '../media/committee/Serbi normal.jpg';
import serbifun from '../media/committee/Serbi haha.jpg';
import sonianormal from '../media/committee/Sonia 1.jpg';
import soniafun from '../media/committee/Sonia2.jpg';
import dennormal from '../media/committee/Den_normal.jpg';
import denfun from '../media/committee/Den_fun.jpg';

import '../css/Committee.css';
import '../css/App.css';


const Committee = () => (
    <div>
        <div className="title">MEET THE TEAM</div>
        <div className="committee-row">
            <div className="committee-col">
                <Crossfade img1={ilianormal} img2={iliafun}/>
            </div>
            <div className="committee-col">
                <Crossfade img1={alexnormal} img2={alexfun}/>
            </div>
            <div className="committee-col">
                <Crossfade img1={jonnynormal} img2={jonnyfun}/>
            </div>
            <div className="committee-col">
                <Crossfade img1={serbinormal} img2={serbifun}/>
            </div>
            <div className="committee-col">
                <Crossfade img1={sonianormal} img2={soniafun}/>
            </div>
            <div className="committee-col">
                <Crossfade img1={dennormal} img2={denfun}/>
            </div>
        </div>
    </div>  
);


export default Committee;
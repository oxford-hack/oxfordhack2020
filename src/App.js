import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Navbar from './components/Navbar'; 
import LandingScreen from './components/LandingScreen';
import About from './components/About';
import Event from './components/Event';
import Sponsors from './components/Sponsors';
import TimeTable from './components/Timetable';
import FAQ from './components/FAQ';

import BackgroundEffect from './components/BackgroundEffect';

import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";

/*
import Committee from './components/Committee';
import Footer from './components/Footer';
*/ 

const App = () => (
  <div className="App">
    <BackgroundEffect />
    <div className="App-body" style={{position: 'relative'}}>
      <Navbar />
      <div style={{scrollBehavior: 'smooth'}}>
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="landingscreen"><LandingScreen /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "15vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="about"><About /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "15vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="event"><Event /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "15vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        </ScrollAnimation>
        <div style={{marginBottom: "15vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="faq"><FAQ /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "15vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="sponsors"><Sponsors /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "15vw"}} />
      </div>
    </div>
  </div>
);

export default App;

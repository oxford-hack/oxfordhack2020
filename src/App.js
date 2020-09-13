import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Navbar from './components/Navbar'; 
import LandingScreen from './components/LandingScreen';
import About from './components/About';
import Event from './components/Event';
import Sponsors from './components/Sponsors';
import TimeTable from './components/Timetable';
import FAQ from './components/FAQ';

import 'bootstrap/dist/css/bootstrap.min.css';

/*
import Committee from './components/Committee';
import Footer from './components/Footer';
*/ 

const App = () => (
  <div className="App">
    <div className="App-body">
      <Navbar />
      <div style={{scrollBehavior: 'smooth'}}>
        <div id="landingscreen"><LandingScreen /></div>
        <div style={{marginBottom: "500px"}} />
        <div id="about"><About /></div>
        <div style={{marginBottom: "500px"}} />
        <div id="event"><Event /></div>
        <div style={{marginBottom: "500px"}} />
        <div id="timetable"><TimeTable /></div>
        <div style={{marginBottom: "500px"}} />
        <div id="faq"><FAQ /></div>
        <div style={{marginBottom: "500px"}} />
        <div id="sponsors"><Sponsors /></div>
        <div style={{marginBottom: "500px"}} />
      </div>
    </div>
  </div>
);

export default App;

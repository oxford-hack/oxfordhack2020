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
      <a href="/" id="landingscreen" style={{padding:"100px"}}> </a>
      <LandingScreen />
      <div style={{marginBottom: "500px"}} />
      <a href="/" id="about" style={{padding:"100px"}}> </a>
      <About />
      <div style={{marginBottom: "500px"}} />
      <a href="/" id="event" style={{padding:"100px"}}> </a>
      <Event />
      <div style={{marginBottom: "500px"}} />
      <a href="/" id="timetable" style={{padding:"100px"}}> </a>
      <TimeTable />
      <div style={{marginBottom: "500px"}} />
      <a href="/" id="faq" style={{padding:"100px"}}> </a>
      <FAQ />
      <div style={{marginBottom: "500px"}} />
      <a href="/" id="sponsors" style={{padding:"100px"}}> </a>
      <Sponsors />
      <div style={{marginBottom: "500px"}} />
    </div>
  </div>
);

export default App;

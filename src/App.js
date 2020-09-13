import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Navbar from './components/Navbar'; 
import LandingScreen from './components/LandingScreen';
import About from './components/About';
import Description from './components/Description';
import Sponsors from './components/Sponsors';
import TimeTable from './components/TimeTable';

/*
import FAQ from './FAQ';
import Committee from './Committee';
import Footer from './Footer';

*/ 

const App = () => (
  <div className="App">
    <div className="App-body">
      <Navbar />
      <a id="landingscreen"><LandingScreen /></a>
      <div style={{marginBottom: "500px"}} />
      <a id="about" style={{padding:"100px"}}><About /></a>
      <div style={{marginBottom: "500px"}} />
      <a id="digithon" style={{padding:"100px"}}><Description /></a>
      <div style={{marginBottom: "500px"}} />
      <a id="event" style={{padding:"100px"}}><TimeTable /></a>
      <div style={{marginBottom: "500px"}} />
      <a id="sponsors" style={{padding:"100px"}}><Sponsors /></a>
      <div style={{marginBottom: "500px"}} />

    </div>
  </div>
);

export default App;

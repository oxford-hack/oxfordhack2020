import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Navbar from './components/Navbar'; 
import LandingScreen from './components/LandingScreen';
import About from './components/About';
import Event from './components/Event';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';

/*
import Committee from './components/Committee';
import Footer from './components/Footer';
*/ 

const App = () => (
  <div className="App">
    <div className="App-body">
      <Navbar />
      <LandingScreen />
      <div style={{marginBottom: "500px"}} />
      <About />
      <div style={{marginBottom: "500px"}} />
      <Event />
      <div style={{marginBottom: "500px"}} />
      <Sponsors />
      <div style={{marginBottom: "500px"}} />

    </div>
  </div>
);

export default App;

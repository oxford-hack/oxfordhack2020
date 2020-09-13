import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Navbar from './components/Navbar'; 
import LandingScreen from './components/LandingScreen';
import About from './components/About';
import Description from './components/Description';
import Sponsors from './components/Sponsors';
import TimeTable from './components/TimeTable';
import FAQ from './components/FAQ';

import 'bootstrap/dist/css/bootstrap.min.css';

/*
import FAQ from './FAQ';
import Committee from './Committee';
import Footer from './Footer';

*/ 

const App = () => (
  <div className="App">
    <div className="App-body">
      <Navbar />
      <LandingScreen />
      <div style={{marginBottom: "500px"}} />
      <About />
      <div style={{marginBottom: "500px"}} />
      <Description />
      <div style={{marginBottom: "500px"}} />
      <TimeTable />
      <div style={{marginBottom: "500px"}} />
      <FAQ />
      <div style={{marginBottom: "500px"}} />
      <Sponsors />
      <div style={{marginBottom: "500px"}} />
    </div>
  </div>
);

export default App;

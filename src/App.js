import './App.css';

import React from 'react';

import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Intro />
      <Education />
      <Footer />
      <ScrollToTop />
    </div>
  )
};

export default App;
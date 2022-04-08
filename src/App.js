import './App.css';

import React from 'react';

import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      App
    </div>
  )
};

export default App;
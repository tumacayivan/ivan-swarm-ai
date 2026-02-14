import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Architecture from './components/Architecture';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Capabilities />
      <Architecture />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;

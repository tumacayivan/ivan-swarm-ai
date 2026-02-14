import React from 'react';
import logo from '../logo.png';

function Hero() {
  return (
    <section className="hero">
      <img src={logo} alt="IvanSwarmAI Logo" className="hero-logo" />
      <h1 className="hero-title">IvanSwarmAI</h1>
      <p className="hero-subtitle">
        Advanced Machine Learning Model for Financial Market Prediction
      </p>
      <p className="hero-description">
        A comprehensive learning system powered by advanced deep learning architecture 
        that analyzes price patterns, cross-asset correlations, volatility regimes, and economic 
        indicators across multiple symbols and timeframes to deliver intelligent market predictions.
      </p>
      <p className="hero-developer">Researcher/Developer: Ivan Tumacay</p>
    </section>
  );
}

export default Hero;

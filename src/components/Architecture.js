import React from 'react';

function Architecture() {
  const components = [
    {
      title: 'Advanced Pattern Recognition',
      description: 'Identifies complex market patterns and structures through proprietary algorithms designed for financial market analysis.'
    },
    {
      title: 'Temporal Intelligence',
      description: 'Understands market dynamics over time, recognizing how historical patterns influence future market behavior.'
    },
    {
      title: 'Contextual Awareness',
      description: 'Analyzes market conditions across different time horizons to provide comprehensive market insights.'
    },
    {
      title: 'Intelligent Integration',
      description: 'Synthesizes multiple data streams and analytical perspectives to generate accurate market predictions.'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Architecture</h2>
      <p className="section-subtitle">
        Advanced deep learning system for comprehensive market analysis
      </p>
      <div className="architecture-grid">
        {components.map((component, index) => (
          <div key={index} className="architecture-card">
            <h3 className="architecture-card-title">{component.title}</h3>
            <p className="architecture-card-description">{component.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Architecture;

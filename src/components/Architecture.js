import React from 'react';

function Architecture() {
  const components = [
    {
      title: 'Local Pattern Extraction',
      description: 'Extracts local price patterns and micro-structures through advanced filters that detect specific patterns at a local level.'
    },
    {
      title: 'Sequential Learning',
      description: 'Learns temporal sequences and remembers important patterns from earlier in sequences, understanding when trends continue or reverse.'
    },
    {
      title: 'Long-Range Dependencies',
      description: 'Uses attention mechanisms to identify which time steps are most important and understand long-range dependencies across the sequence.'
    },
    {
      title: 'Multi-Scale Fusion',
      description: 'Combines outputs from all components, learning optimal ways to integrate local patterns, sequences, and attention for superior predictions.'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Architecture</h2>
      <p className="section-subtitle">
        Hybrid deep learning design for comprehensive market analysis
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

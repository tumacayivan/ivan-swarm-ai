import React from 'react';

function Architecture() {
  const components = [
    {
      title: 'CNN Branch',
      description: 'Extracts local price patterns and micro-structures through convolutional filters that detect specific patterns at a local level.'
    },
    {
      title: 'LSTM Branch',
      description: 'Learns temporal sequences and remembers important patterns from earlier in sequences, understanding when trends continue or reverse.'
    },
    {
      title: 'Transformer Branch',
      description: 'Uses attention mechanisms to identify which time steps are most important and understand long-range dependencies across the sequence.'
    },
    {
      title: 'Bilinear Fusion',
      description: 'Combines outputs from all three branches, learning optimal ways to integrate local patterns, sequences, and attention for superior predictions.'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Architecture</h2>
      <p className="section-subtitle">
        Hybrid CNN-LSTM-Transformer design for comprehensive market analysis
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

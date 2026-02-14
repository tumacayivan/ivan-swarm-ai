import React from 'react';

function Stats() {
  const stats = [
    { number: '28', label: 'Symbols' },
    { number: '9', label: 'Timeframes' },
    { number: '15', label: 'VIX Indicators' },
    { number: '1,500+', label: 'Features' }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Model Scale</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;

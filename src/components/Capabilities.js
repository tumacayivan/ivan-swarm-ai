import React from 'react';

function Capabilities() {
  const capabilities = [
    {
      title: 'Price Data Analysis',
      description: 'Analyzes market data across multiple asset classes including equity indices, cryptocurrencies, commodities, and forex pairs.',
      features: [
        'Price patterns and momentum',
        'Volume analysis and correlations',
        'Support/resistance levels',
        'Volatility patterns'
      ]
    },
    {
      title: 'Multi-Timeframe Learning',
      description: 'Analyzes patterns across multiple time periods to understand trend hierarchy and market dynamics.',
      features: [
        'Time hierarchy recognition',
        'Multi-scale pattern detection',
        'Noise filtering',
        'Trend context understanding'
      ]
    },
    {
      title: 'Cross-Asset Correlation',
      description: 'Discovers relationships between different asset classes and learns how markets move together or diverge.',
      features: [
        'Cross-asset correlations',
        'Market relationship patterns',
        'Market regime detection',
        'Risk sentiment signals'
      ]
    },
    {
      title: 'Volatility & Market Indicators',
      description: 'Integrates multiple volatility and credit market indicators to assess market conditions and risk levels.',
      features: [
        'Volatility regime detection',
        'Credit market signals',
        'Yield analysis',
        'Financial sector assessment'
      ]
    },
    {
      title: 'Global Indices',
      description: 'Monitors international stock markets to understand global economic health and cross-regional market performance.',
      features: [
        'Global economic health assessment',
        'Regional divergence detection',
        'Cross-regional correlation analysis',
        'International market confirmation signals'
      ]
    },
    {
      title: 'Economic Data Integration',
      description: 'Learns from economic indicators and events to understand macroeconomic impacts on market movements.',
      features: [
        'Economic indicator analysis',
        'Employment data analysis',
        'Policy impact assessment',
        'Economic event timing'
      ]
    },
    {
      title: 'Temporal Pattern Recognition',
      description: 'Recognizes recurring patterns in market behavior across different time horizons.',
      features: [
        'Short-term patterns',
        'Recurring market behaviors',
        'Periodic trends',
        'Seasonal variations'
      ]
    },
    {
      title: 'Advanced Learning System',
      description: 'Utilizes sophisticated deep learning techniques to process and synthesize complex market information.',
      features: [
        'Multi-dimensional analysis',
        'Intelligent data synthesis',
        'Adaptive learning mechanisms',
        'Predictive accuracy optimization'
      ]
    },
    {
      title: 'Adaptive Learning',
      description: 'Adapts predictions based on changing market conditions and economic environments.',
      features: [
        'Market condition detection',
        'Economic environment awareness',
        'Pattern adaptation',
        'Dynamic adjustment'
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Learning Capabilities</h2>
      <p className="section-subtitle">
        Comprehensive analysis across multiple dimensions of financial markets
      </p>
      <div className="capabilities-grid">
        {capabilities.map((capability, index) => (
          <div key={index} className="capability-card">
            <h3 className="capability-card-title">{capability.title}</h3>
            <p className="capability-card-description">{capability.description}</p>
            <ul className="capability-list">
              {capability.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Capabilities;

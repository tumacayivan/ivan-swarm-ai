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
      description: 'Analyzes patterns across hourly, daily, weekly, and monthly timeframes to understand trend hierarchy and confluence.',
      features: [
        'Timeframe hierarchy recognition',
        'Multi-scale pattern detection',
        'Noise filtering',
        'Trend context understanding'
      ]
    },
    {
      title: 'Cross-Symbol Correlation',
      description: 'Discovers relationships between different asset classes and learns how markets move together or diverge.',
      features: [
        'Cross-asset correlations',
        'Sector rotation patterns',
        'Market regime detection',
        'Risk-on/risk-off signals'
      ]
    },
    {
      title: 'VIX & Volatility Features',
      description: 'Integrates multiple volatility and credit market indicators including VIX, Treasury yields, and sector ETFs.',
      features: [
        'Volatility regime detection',
        'Credit market signals',
        'Yield curve analysis',
        'Financial sector health'
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
        'GDP and inflation signals',
        'Employment data analysis',
        'Central bank policy effects',
        'Economic event timing'
      ]
    },
    {
      title: 'Temporal Pattern Recognition',
      description: 'Recognizes intraday, daily, weekly, monthly, and seasonal patterns in market behavior.',
      features: [
        'Intraday patterns',
        'Day-of-week effects',
        'Monthly patterns',
        'Seasonal trends'
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
      title: 'Regime-Dependent Learning',
      description: 'Adapts predictions based on market conditions including bull/bear markets and volatility regimes.',
      features: [
        'Market regime detection',
        'Economic regime awareness',
        'Pattern adaptation',
        'Confidence calibration'
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

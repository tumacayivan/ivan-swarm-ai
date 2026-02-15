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
      title: 'Volatility & Risk Indicators',
      description: 'Integrates volatility, credit stress, and market indicators to assess market conditions and provide early-warning signals.',
      features: [
        'Volatility regime detection',
        'Credit market health assessment',
        'Early-warning stress signals',
        'Financial sector assessment'
      ]
    },
    {
      title: 'Global Markets & Forex',
      description: 'Monitors international equity markets and currency pairs to understand global economic health, liquidity flows, and capital movements.',
      features: [
        'Global economic health assessment',
        'Regional market analysis',
        'Currency correlation analysis',
        'Global liquidity flow detection'
      ]
    },
    {
      title: 'Market Breadth Analysis',
      description: 'Monitors market participation quality and internal market health beyond index-level price movements.',
      features: [
        'Market participation assessment',
        'Breadth divergence detection',
        'Internal market health signals',
        'Distribution pattern recognition'
      ]
    },
    {
      title: 'Commodities & Energy',
      description: 'Monitors energy commodities and precious metals to understand inflation pressures and economic growth signals.',
      features: [
        'Energy cost impact analysis',
        'Inflation pressure detection',
        'Economic growth indicators',
        'Commodity correlation patterns'
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
      title: 'Advanced Learning System',
      description: 'Utilizes sophisticated deep learning techniques with cooperative learning mechanisms to adapt predictions based on changing market conditions.',
      features: [
        'Multi-dimensional analysis',
        'Cooperative learning mechanisms',
        'Pattern adaptation',
        'Predictive accuracy optimization'
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

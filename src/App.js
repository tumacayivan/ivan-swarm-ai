import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Stamp from './components/Stamp';
import InkBleedFilter from './components/InkBleedFilter';

const capabilities = [
  {
    title: 'Price Data Analysis',
    body:
      'Surveillance of price data across multiple asset classes — equity indices, cryptocurrencies, commodity contracts, and foreign-exchange pairs — with particular attention to momentum, volume, support and resistance, and volatility patterns observable within and across instruments.',
  },
  {
    title: 'Multi-Timeframe Learning',
    body:
      'Pattern extraction across nine concurrent timeframes ranging from sub-minute to monthly. Hierarchies of trend, multi-scale signature detection, and contextual filtering of short-period noise constitute the principal yield of this channel.',
  },
  {
    title: 'Cross-Asset Correlation',
    body:
      'Identification of latent relationships between disparate asset classes; recognition of regimes in which markets covary, decouple, or invert; and the derivation of risk-sentiment indicators from such joint motion.',
  },
  {
    title: 'Volatility & Risk Indicators',
    body:
      'Integration of volatility surfaces, credit-stress instruments, and broader market indicators for the purpose of regime classification and the generation of early-warning stress signals affecting the financial sector.',
  },
  {
    title: 'Global Markets & Foreign Exchange',
    body:
      'Continuous observation of international equity venues and currency pairings in order to assess global economic health, regional capital movement, currency correlation, and liquidity flow.',
  },
  {
    title: 'Market Breadth Analysis',
    body:
      'Examination of participation quality beneath index-level price movement, including breadth divergence, internal-health signals, and distribution patterns indicative of accumulation or distribution.',
  },
  {
    title: 'Commodities and Energy',
    body:
      'Monitoring of energy commodities and precious metals as proxies for inflationary pressure and as leading indicators of macro-economic growth or contraction.',
  },
  {
    title: 'Economic Data Integration',
    body:
      'Assimilation of scheduled economic releases, employment statistics, and policy events, with attention to their timing relative to the price record.',
  },
  {
    title: 'Advanced Learning System',
    body:
      'Cooperative deep-learning mechanism producing pattern adaptation under shifting market conditions; multi-dimensional analysis and continuous optimization of predictive accuracy.',
  },
];

const architecture = [
  {
    title: 'Pattern Recognition',
    body:
      'Identifies complex market patterns and structures through proprietary algorithms purpose-built for financial-market analysis.',
  },
  {
    title: 'Temporal Intelligence',
    body:
      'Understands market dynamics across time; recognizes how historical patterns inform future behavior of the same instruments.',
  },
  {
    title: 'Contextual Awareness',
    body:
      'Examines conditions across simultaneous horizons, furnishing a composite picture rather than a single-scale reading.',
  },
  {
    title: 'Cooperative Integration',
    body:
      'Synthesizes multiple data streams and analytical perspectives through integration mechanisms which generate the final forecast.',
  },
];

const letter = (i) => String.fromCharCode(97 + i); // 'a', 'b', 'c', ...

function App() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  return (
    <>
      <InkBleedFilter />
      <div className="app">
        <div className="classification-banner">TOP SECRET</div>

        <main className="page-frame">
          {/* ============ DOCUMENT TOP ============ */}
          <div className="doc-top">
            <div className="doc-id">3 5 6 0 8 1 6</div>

            {/* big faded stamp top-center */}
            <Stamp
              size="large"
              rotation={-3}
              double
              faint
              className="float-stamp"
              style={{ top: '0.2rem', left: '50%', marginLeft: '-7rem' }}
            >
              TOP SECRET
            </Stamp>

            {/* smaller secondary stamp top-right */}
            <Stamp
              size="small"
              rotation={11}
              ghost
              className="float-stamp"
              style={{ top: '1.2rem', right: '0.5rem' }}
            >
              SECRET
            </Stamp>

            <div className="agency-block">
              <div className="agency-name">PREDICTIVE INTELLIGENCE DIVISION</div>
              <div className="agency-location">Research Memorandum &middot; Internal Distribution</div>
            </div>

            <div className="decl-box">
              <strong>Declassified and approved for release</strong> on{' '}
              {today} pursuant to E.O. 12958, as amended.
              <br />
              Declass. <strong>58017</strong>
            </div>

            <div className="vertical-stamp">RECORD COPY &middot; DO NOT REMOVE</div>
          </div>

          {/* ============ TITLE BLOCK ============ */}
          <div className="title-block">
            <div className="title-block-pre">— Technical Memorandum —</div>
            <h1>
              The IvanSwarmAI Predictive Model for Financial Market Intelligence
              as Applied to Multi-Asset Cross-Correlation, Global Equity Markets,
              and Macroeconomic Indicator Integration
            </h1>
            <div className="title-block-by">
              Prepared by Ivan Tumacay, Researcher &amp; Developer
            </div>
          </div>

          {/* ============ I — SUBJECT ============ */}
          <section className="section">
            <h2 className="section-heading">
              <span className="section-heading-no">I.</span>
              <span>Subject</span>
            </h2>
            <p>
              The subject system, hereinafter referred to as{' '}
              <strong>IvanSwarmAI</strong>, is an advanced deep-learning
              apparatus engineered for the analysis and forecasting of financial
              market signals across multiple asset classes and temporal scales.
              The system ingests, harmonizes, and adapts to a continuous stream
              of market intelligence comprising equity indices, foreign-exchange
              pairs, commodity benchmarks, and macro-economic indicators.
            </p>
            <p>
              Field trials conducted under varying market conditions have
              demonstrated operational viability across{' '}
              <span className="redacted">&nbsp;CLASSIFIED&nbsp;</span> theaters
              of trade, with measurable improvement over conventional
              pattern-recognition baselines. The present memorandum sets forth
              the capabilities of the subject system, summarizes its
              architectural composition, and identifies the Researcher of
              Record for purposes of correspondence.
            </p>
          </section>

          {/* ============ II — OPERATIONAL FIGURES ============ */}
          <section className="section">
            <h2 className="section-heading">
              <span className="section-heading-no">II.</span>
              <span>Operational Figures</span>
            </h2>
            <p>
              The principal parameters of the subject system, as configured for
              the current evaluation period, are tabulated below.
            </p>
            <table className="figures-table">
              <tbody>
                <tr>
                  <th>Symbols Monitored</th>
                  <td className="num">28</td>
                </tr>
                <tr>
                  <th>Concurrent Timeframes</th>
                  <td className="num">9</td>
                </tr>
                <tr>
                  <th>Volatility Indicators</th>
                  <td className="num">15</td>
                </tr>
                <tr>
                  <th>Features (total)</th>
                  <td className="num">&gt; 1,500</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* ============ III — CAPABILITIES ============ */}
          <section className="section" style={{ position: 'relative' }}>
            <h2 className="section-heading">
              <span className="section-heading-no">III.</span>
              <span>Learning Capabilities</span>
            </h2>
            <p>
              The subject system exhibits the following capabilities, recorded
              in order of operational significance to the predictive output:
            </p>
            <ol className="lettered-list">
              {capabilities.map((c, i) => (
                <li key={i} data-letter={letter(i)}>
                  <strong>{c.title}.</strong> {c.body}
                </li>
              ))}
            </ol>

            <Stamp
              size="small"
              rotation={-7}
              faint
              className="float-stamp"
              style={{ bottom: '-0.5rem', right: '1rem' }}
            >
              REVIEWED
            </Stamp>
          </section>

          {/* ============ IV — ARCHITECTURE ============ */}
          <section className="section">
            <h2 className="section-heading">
              <span className="section-heading-no">IV.</span>
              <span>System Architecture</span>
            </h2>
            <p>
              The architectural composition of the subject system is broken
              down into the following functional components:
            </p>
            <ol className="lettered-list">
              {architecture.map((c, i) => (
                <li key={i} data-letter={letter(i)}>
                  <strong>{c.title}.</strong> {c.body}
                </li>
              ))}
            </ol>
            <p>
              Further technical detail, including specific topology, training
              regime, and parameter counts, is{' '}
              <span className="redacted">
                &nbsp;WITHHELD UNDER POLICY 1948-A&nbsp;
              </span>{' '}
              and is available only upon written request of the appropriate
              clearance level.
            </p>
          </section>

          {/* ============ V — RESEARCHER OF RECORD ============ */}
          <section className="section">
            <h2 className="section-heading">
              <span className="section-heading-no">V.</span>
              <span>Researcher of Record</span>
            </h2>
            <p>
              Correspondence pertaining to the subject system, including
              inquiries with respect to collaboration, technical evaluation, or
              licensure, shall be routed to the individual identified below.
            </p>
            <div className="field-row">
              <div className="field-label">Surname</div>
              <div className="field-value">Tumacay</div>
            </div>
            <div className="field-row">
              <div className="field-label">Given Name</div>
              <div className="field-value">Ivan</div>
            </div>
            <div className="field-row">
              <div className="field-label">Designation</div>
              <div className="field-value">Researcher / Developer</div>
            </div>
            <div className="field-row">
              <div className="field-label">Correspondence</div>
              <div className="field-value">
                <a
                  href="mailto:tumacayivan@gmail.com"
                  style={{ color: 'var(--ink)' }}
                >
                  tumacayivan@gmail.com
                </a>
              </div>
            </div>
            <div className="field-row">
              <div className="field-label">Station</div>
              <div className="field-value">
                <span className="redacted">&nbsp;LOCATION WITHHELD&nbsp;</span>
              </div>
            </div>
          </section>

          {/* ============ SIGNATURE BLOCK ============ */}
          <div className="signature-block">
            <div className="col-left">
              <div className="signature-line" />
              <div>Researcher of Record</div>
            </div>
            <div className="col-right">
              <div className="signature-line" />
              <div>Date</div>
            </div>
          </div>
        </main>

        <Footer />
        <div className="classification-banner classification-banner--bottom">
          TOP SECRET
        </div>
      </div>
    </>
  );
}

export default App;

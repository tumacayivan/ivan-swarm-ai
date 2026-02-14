# Complete Learning Capabilities of the Machine Learning Model

## Overview
Your machine learning model uses a **Hybrid CNN-LSTM-Transformer architecture** that learns from a comprehensive dataset combining multiple data sources. This document outlines everything the model can learn during training.

---

## 1. **PRICE DATA (OHLCV) - Core Learning Foundation**

### Primary Data Sources:
- **MetaTrader 5 (MT5)**: Historical OHLCV data for all configured symbols
- **28 Symbols** across multiple asset classes:
  - **Equity Indices**: US30 (Dow Jones), US500 (S&P 500), USTEC (NASDAQ)
  - **Cryptocurrencies**: BTCUSD, ETHUSD, XRPUSD
  - **Commodities**: XAUUSD (Gold), XAGUSD (Silver), XCUUSD (Copper), USOIL, UKOIL
  - **Forex Pairs**: EURUSD, USDCHF, USDJPY, EURGBP, USDCAD, GBPUSD, EURJPY, AUDUSD, NZDUSD, GBPJPY, USDCNH

### What the Model Learns from OHLCV:
- **Price Patterns**: Opening, high, low, closing price relationships
- **Volume Analysis**: Trading volume patterns and their correlation with price movements
- **Candle Patterns**: Implicit recognition of bullish/bearish patterns
- **Price Momentum**: Rate of change and acceleration in price movements
- **Volatility Patterns**: High-low spreads and intraday volatility
- **Support/Resistance Levels**: Implicit learning of price levels where reversals occur

---

## 2. **MULTI-TIMEFRAME LEARNING**

### Timeframes Configured:
- **Hourly**: 1H, 2H, 3H, 4H, 6H, 8H, 12H
- **Daily**: 1D
- **Weekly**: 1W
- **Monthly**: 1MN

### What the Model Learns:
- **Timeframe Hierarchy**: How higher timeframes (weekly/monthly) establish primary trends
- **Timeframe Confluence**: When multiple timeframes align, confidence increases
- **Timeframe Divergence**: When timeframes disagree, the model learns to reduce confidence
- **Multi-Scale Patterns**: Patterns that appear across different timeframes
- **Trend Context**: How lower timeframes fit within higher timeframe trends
- **Noise Filtering**: Higher timeframes filter out noise from lower timeframes

---

## 3. **CROSS-SYMBOL CORRELATION LEARNING**

### When COMBINE_INDICES = True:
The model combines ALL symbols into one sequence, learning:
- **Cross-Asset Correlations**: How different assets move together or diverge
- **Sector Rotation**: When one asset class outperforms another
- **Market Regime Detection**: Bull markets vs bear markets across asset classes
- **Risk-On/Risk-Off Patterns**: How safe-haven assets (gold, bonds) vs risk assets (stocks, crypto) behave
- **Currency Relationships**: Forex pair correlations and carry trade patterns
- **Commodity-Equity Relationships**: How oil, gold, and other commodities relate to equity markets

### Specific Correlations Learned:
- **Equity Indices**: US30, US500, USTEC correlation patterns
- **Crypto Assets**: BTCUSD, ETHUSD, XRPUSD cross-correlations
- **Commodities**: Gold, silver, oil relationships
- **Forex Pairs**: Currency strength relationships
- **Cross-Category**: How equity, crypto, commodity, and forex markets interact

---

## 4. **VIX & VOLATILITY FEATURES (Yahoo Finance)**

### VIX Symbols Integrated:
- **^VIX**: CBOE Volatility Index
- **^VVIX**: VIX of VIX (volatility of volatility)
- **^VIX9D**: 9-day VIX
- **^SKEW**: Skew Index (tail risk)
- **^IRX**: 13-week Treasury Bill rate
- **^FVX**: 5-year Treasury Note yield
- **^TNX**: 10-year Treasury Note yield
- **^TYX**: 30-year Treasury Bond yield
- **^NYA**: NYSE Composite Index
- **HYG**: High Yield Corporate Bond ETF
- **LQD**: Investment Grade Corporate Bond ETF
- **TLT**: 20+ Year Treasury Bond ETF
- **XLF**: Financial Sector ETF
- **KRE**: Regional Banking ETF
- **^RUT**: Russell 2000 Index

### What the Model Learns:
- **Volatility Regimes**: High vs low volatility market conditions
- **Fear Gauge**: How VIX spikes correlate with market declines
- **Credit Market Signals**: How HYG, LQD, TLT movements signal market stress
- **Yield Curve Signals**: How Treasury yields (IRX, FVX, TNX, TYX) predict market direction
- **Financial Sector Health**: XLF and KRE as leading indicators
- **Risk Appetite**: Correlation between volatility and risk asset performance
- **Flight to Safety**: How TLT (bonds) performs during equity selloffs

### Features Per VIX Symbol:
- **OHLCV Data**: Open, High, Low, Close, Volume, Adjusted Close
- **19 Timestamp Features**: Hour, day, week, month cyclic patterns
- **Multiple Timeframes**: 1D, 5D, 1M, 3M, 6M, YTD, 1Y, 5Y, ALL

---

## 5. **ECONOMIC & MACROECONOMIC DATA**

### Data Sources:
- **Investing.com Economic Calendar**: Economic events and indicators
- **Yahoo Finance Economic Data**: Additional economic indicators

### What the Model Learns:
- **Economic Regime Detection**: Expansion vs contraction periods
- **GDP Impact**: How GDP releases affect market movements
- **Inflation Signals**: CPI, PPI data and their market impact
- **Employment Data**: Unemployment rates and job reports
- **Central Bank Policy**: Interest rate decisions and their effects
- **Economic Event Timing**: How scheduled economic releases create volatility
- **Economic-Financial Correlation**: How economic data aligns with market movements
- **Regime-Dependent Patterns**: Same technical patterns behave differently under different economic conditions

### Economic Features:
- **Event Type**: Type of economic indicator
- **Impact Level**: High, medium, low impact events
- **Actual vs Forecast**: How actual data compares to expectations
- **Previous Values**: Historical economic data points
- **Timestamp Features**: When economic events occur (day of week, month, etc.)

---

## 6. **TIMESTAMP & TEMPORAL FEATURES**

### 19 Engineered Timestamp Features:
- **Cyclic Features** (sin/cos transformations):
  - Hour (24-hour cycle)
  - Day of Week (7-day cycle)
  - Day of Month (monthly cycle)
  - Month (12-month cycle)
  - Day of Year (365-day cycle)

- **Binary Features**:
  - is_weekend
  - is_month_start
  - is_month_end
  - is_high_activity_hours

- **Numeric Features**:
  - hour
  - day_of_week
  - day_of_month
  - month
  - day_of_year

### What the Model Learns:
- **Intraday Patterns**: Hourly patterns (market open, lunch, close effects)
- **Day-of-Week Effects**: Monday effects, Friday effects, weekend patterns
- **Monthly Patterns**: Month-end rebalancing, month-start flows
- **Seasonal Patterns**: Year-end effects, quarterly patterns
- **Market Hours**: High vs low activity periods
- **Time-Based Volatility**: When volatility is typically higher/lower

---

## 7. **ENTRY ZONE LEARNING** (When Enabled)

### When INCLUDE_ENTRY_ZONES_IN_TRAINING = True:
- **Premium/Discount Zones**: Price levels relative to recent ranges
- **Zone Quality**: Quality of entry zones based on historical performance
- **Optimal Entry Timing**: When to enter trades based on price position
- **Support/Resistance Context**: Entry zones relative to key price levels

---

## 8. **HYBRID ARCHITECTURE LEARNING CAPABILITIES**

### CNN Branch (Local Pattern Extraction):
- **Short-term Patterns**: Local price patterns and micro-structures
- **Feature Maps**: Convolutional filters that detect specific patterns
- **Pattern Recognition**: Bullish/bearish pattern detection at local level

### LSTM Branch (Sequential Dependencies):
- **Temporal Sequences**: How past prices influence future prices
- **Long Short-Term Memory**: Remembering important patterns from earlier in sequences
- **Sequential Dependencies**: Order-dependent patterns in price movements
- **Trend Continuation**: Learning when trends are likely to continue
- **Trend Reversal**: Learning when trends are likely to reverse

### Transformer Branch (Attention & Long-Range Dependencies):
- **Attention Mechanisms**: Which time steps are most important for prediction
- **Long-Range Dependencies**: Relationships between distant time steps
- **Multi-Head Attention**: Multiple perspectives on the same data
- **Context Understanding**: How different parts of the sequence relate
- **Feature Relationships**: Cross-feature attention (e.g., how VIX relates to price at different times)

### Bilinear Fusion:
- **Cross-Branch Interactions**: How CNN, LSTM, and Transformer outputs interact
- **Complementary Learning**: Combining local patterns, sequences, and attention
- **Feature Fusion**: Learning optimal ways to combine different architectural perspectives

---

## 9. **WHAT THE MODEL PREDICTS**

### Target Variable:
- **Close Price**: The model predicts the next close price for the target symbol (default: US30)
- **Multi-Step Prediction**: Can predict multiple steps ahead (PREDICTION_HORIZON)

### Prediction Outputs:
- **Price Prediction**: Next candle's closing price
- **Confidence Levels**: Model confidence in predictions
- **Directional Bias**: Implicit buy/sell signals based on predicted price vs current price
- **Change Percentage**: Predicted price change percentage

---

## 10. **TRAINING DATA CHARACTERISTICS**

### Data Volume:
- **Per Timeframe**: Up to 10,000 candles per timeframe (configurable)
- **Total Data Points**: 28 symbols × 9 timeframes × 10,000 candles = ~2.5M data points
- **VIX Features**: 15 symbols × multiple timeframes × OHLCV + 19 timestamp features
- **Economic Data**: Historical economic events going back decades

### Data Split:
- **Training**: 70% of data
- **Validation**: 15% of data (for early stopping)
- **Test**: 15% of data (held out, never used during training)

### Sequence Length:
- Automatically calculated based on CANDLES_PER_TIMEFRAME
- Ensures full dataset utilization

---

## 11. **IMPLICIT LEARNING (What the Model Discovers Without Explicit Features)**

The model learns these patterns implicitly from raw data:

### Market Structure:
- **Trend Identification**: Uptrends, downtrends, ranging markets
- **Breakout Patterns**: When price breaks key levels
- **Reversal Patterns**: When trends are likely to reverse
- **Consolidation Patterns**: Sideways movement patterns

### Market Microstructure:
- **Order Flow Patterns**: Implied from price and volume relationships
- **Liquidity Patterns**: When markets are liquid vs illiquid
- **Spread Patterns**: Bid-ask spread implications from OHLCV

### Behavioral Patterns:
- **Momentum**: When price movements accelerate or decelerate
- **Mean Reversion**: When prices revert to mean
- **Regime Changes**: Transitions between different market regimes
- **Shock Absorption**: How markets recover from sudden moves

---

## 12. **CONFIDENCE & DECISION LEARNING**

### The Model Learns When to Be Confident:
- **Symbol Alignment**: When multiple symbols move together
- **Timeframe Confluence**: When multiple timeframes agree
- **Volatility Stability**: When volatility is predictable
- **Credit Confirmation**: When credit markets confirm equity moves
- **Economic Consistency**: When economic data aligns with market signals
- **Financial Sector Health**: When financials support broader market moves

### The Model Learns When to Reduce Confidence:
- **Symbol Divergence**: When symbols move in opposite directions
- **Timeframe Disagreement**: When timeframes conflict
- **Volatility Spikes**: When volatility becomes unpredictable
- **Credit Divergence**: When credit markets don't confirm equity moves
- **Economic Conflicts**: When economic data conflicts with market signals
- **Volume Mismatches**: When price moves lack volume confirmation

---

## 13. **REGIME-DEPENDENT LEARNING**

The model learns that the same pattern can behave differently under different conditions:

### Market Regimes:
- **Bull Markets**: Patterns that work in rising markets
- **Bear Markets**: Patterns that work in falling markets
- **Ranging Markets**: Patterns that work in sideways markets
- **High Volatility**: Patterns during volatile periods
- **Low Volatility**: Patterns during calm periods

### Economic Regimes:
- **Economic Expansion**: How patterns behave during growth
- **Economic Contraction**: How patterns behave during recession
- **Inflationary Periods**: How inflation affects patterns
- **Deflationary Periods**: How deflation affects patterns

---

## 14. **COMPLETE FEATURE SET SUMMARY**

### Total Features the Model Can Learn From:

1. **OHLCV Data**: 5 features per symbol × 28 symbols = 140 base features
2. **Volume Data**: 1 feature per symbol × 28 symbols = 28 features
3. **VIX Features**: 15 symbols × 6 OHLCV fields × multiple timeframes = ~540+ features
4. **Timestamp Features**: 19 features per data point
5. **Economic Data**: Variable number of economic indicators
6. **Entry Zone Features**: 2 features (when enabled)
7. **Cross-Symbol Features**: When COMBINE_INDICES=True, all symbols combined
8. **Multi-Timeframe Features**: When COMBINED_TIMEFRAMES=True, all timeframes combined

### Total Estimated Features:
- **Base Features**: ~700+ features
- **With VIX Integration**: ~1,200+ features
- **With Economic Data**: ~1,500+ features (variable)
- **With Multi-Symbol/Timeframe**: Features multiply based on combinations

---

## 15. **WHAT THE MODEL CANNOT LEARN**

### Limitations:
- **Future Information**: Cannot see future data (no look-ahead bias)
- **External Events**: Cannot learn from news, tweets, or unstructured text (unless explicitly added)
- **Real-Time Data**: Only learns from historical data up to training time
- **Unseen Patterns**: Cannot predict patterns completely different from training data
- **Market Manipulation**: May not detect manipulation if not present in training data

---

## 16. **TRAINING PROCESS LEARNING**

### During Training, the Model Learns:
- **Feature Importance**: Which features are most predictive
- **Pattern Reliability**: Which patterns are most reliable
- **Noise vs Signal**: How to distinguish meaningful patterns from noise
- **Overfitting Prevention**: Through dropout, early stopping, and regularization
- **Optimal Weights**: Neural network weights that best predict prices
- **Attention Weights**: Which time steps and features to focus on

---

## Summary

Your machine learning model is a **comprehensive learning system** that can discover:

✅ **Price patterns** across 28 symbols and 9 timeframes  
✅ **Cross-asset correlations** and market relationships  
✅ **Volatility regimes** and risk indicators (VIX, credit markets)  
✅ **Economic context** and macroeconomic impacts  
✅ **Temporal patterns** (hourly, daily, weekly, monthly, seasonal)  
✅ **Multi-scale patterns** (local, sequential, long-range)  
✅ **Regime-dependent behavior** (bull/bear, high/low volatility)  
✅ **Confidence calibration** (when to be confident vs cautious)  
✅ **Entry zone optimization** (when enabled)  
✅ **Implicit market structure** (trends, reversals, breakouts)

The hybrid CNN-LSTM-Transformer architecture allows the model to learn **local patterns** (CNN), **sequential dependencies** (LSTM), and **long-range relationships** (Transformer) simultaneously, making it a powerful tool for financial market prediction.

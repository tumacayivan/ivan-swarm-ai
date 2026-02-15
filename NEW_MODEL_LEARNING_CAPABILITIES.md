# IVAN Quant Model Engine - Complete Learning Capabilities

## Overview
This document provides a comprehensive list of all financial instruments, indicators, and data sources that the IVAN Quant Model Engine can learn from. The model processes data from two primary sources:
1. **MetaTrader 5 (MT5)** - Real-time trading instruments
2. **Yahoo Finance** - Volatility, interest rates, credit stress, and market breadth indicators

---

## 📊 DATA SOURCES SUMMARY

### Total Instruments & Indicators: **35+**

- **MT5 Symbols**: 28 instruments
- **Yahoo Finance Indicators**: 15 indicators
- **Total Data Streams**: 43+ (including multiple timeframes per symbol)

---

## 🌍 1. GLOBAL EQUITY INDICES (12 instruments)

### US Equity Indices (3)
- **US30** - Dow Jones Industrial Average
- **US500** - S&P 500 Index
- **USTEC** - NASDAQ Composite Index

### International Equity Indices (9)
- **AUS200** - Australia ASX 200 Index
- **DE30** - Germany DAX 30 Index
- **FR40** - France CAC 40 Index
- **HK50** - Hong Kong Hang Seng 50 Index
- **STOXX50** - Euro Stoxx 50 Index
- **UK100** - UK FTSE 100 Index
- **IN50** - India Nifty 50 Index
- **JP225** - Japan Nikkei 225 Index

**What the model learns:**
- Global equity market performance and correlations
- Risk-on vs risk-off regimes across regions
- Inter-market relationships and capital flows
- Regional economic strength indicators

---

## 💱 2. FOREX & CURRENCY MARKETS (12 pairs + DXY)

### Major Currency Pairs (7)
- **EURUSD** - Euro/US Dollar
- **GBPUSD** - British Pound/US Dollar
- **USDJPY** - US Dollar/Japanese Yen
- **AUDUSD** - Australian Dollar/US Dollar
- **NZDUSD** - New Zealand Dollar/US Dollar
- **USDCAD** - US Dollar/Canadian Dollar
- **USDCHF** - US Dollar/Swiss Franc

### Cross Currency Pairs (4)
- **EURGBP** - Euro/British Pound
- **EURJPY** - Euro/Japanese Yen
- **GBPJPY** - British Pound/Japanese Yen
- **USDCNH** - US Dollar/Chinese Yuan (Offshore)

### Currency Index (1)
- **DXY** - US Dollar Index (measures USD strength against basket of currencies)

**What the model learns:**
- Global liquidity flows and capital movements
- Currency correlations and carry trade dynamics
- Risk-off transmission across currency markets
- Central bank policy impacts on FX markets
- USD strength/weakness as a global risk indicator

---

## 🔥 3. VOLATILITY INDICATORS (4 indicators from Yahoo Finance)

### Core Volatility
- **^VIX** - CBOE Volatility Index (30-day forward-looking fear gauge)

### Volatility Structure
- **^VVIX** - VIX of VIX (volatility of volatility - measures fragility of VIX itself)
- **^VIX9D** - 9-Day VIX (short-term volatility expectations)
- **^SKEW** - CBOE Skew Index (measures tail risk and market sentiment)

**What the model learns:**
- Forward-looking volatility expectations
- Volatility regime detection (low-VIX complacency vs high-VIX fear)
- Tail risk buildup and sudden volatility expansion
- Volatility structure fragility (unstable low-VIX regimes)
- Event anticipation and regime shifts

---

## 📈 4. INTEREST RATES (4 indicators from Yahoo Finance)

### Treasury Yield Curve
- **^IRX** - 13-Week Treasury Bill Rate (3-month)
- **^FVX** - 5-Year Treasury Note Yield
- **^TNX** - 10-Year Treasury Note Yield
- **^TYX** - 30-Year Treasury Bond Yield

**What the model learns:**
- Discount rate and policy pressure signals
- Yield curve dynamics and economic expectations
- Macro gravity and trend persistence
- Interest rate impact on asset valuations
- Central bank policy transmission

---

## 📊 5. MARKET BREADTH INDICATORS (2 indicators from Yahoo Finance)

- **^NYA** - NYSE Composite Index (broad market participation)
- **^RUT** - Russell 2000 Index (small-cap market health)

**What the model learns:**
- Internal market participation quality
- Distribution patterns and weak rallies
- Topping structures before price breaks
- Market health beyond index-level prices
- Breadth divergences and market internals

---

## 💳 6. CREDIT STRESS INDICATORS (3 ETFs from Yahoo Finance)

- **HYG** - iShares iBoxx $ High Yield Corporate Bond ETF (high-yield credit)
- **LQD** - iShares iBoxx $ Investment Grade Corporate Bond ETF (investment-grade credit)
- **TLT** - iShares 20+ Year Treasury Bond ETF (Treasury bonds - flight to safety)

**What the model learns:**
- Funding and default risk signals
- Credit market stress and health
- Early-warning system (often leads equities and VIX)
- Flight-to-safety behavior detection
- Credit spread dynamics and risk appetite

---

## 🏦 7. FINANCIAL STRESS ETFs (2 ETFs from Yahoo Finance)

- **XLF** - Financial Select Sector SPDR Fund (broad financial sector)
- **KRE** - SPDR S&P Regional Banking ETF (regional banking sector)

**What the model learns:**
- Banking sector health and stability
- Policy transmission mechanisms
- Rate-induced stress detection before broad index impact
- Financial sector as leading indicator
- Banking stress and systemic risk signals

---

## 🪙 8. CRYPTOCURRENCIES (3 instruments)

- **BTCUSD** - Bitcoin/US Dollar
- **ETHUSD** - Ethereum/US Dollar
- **XRPUSD** - Ripple/US Dollar

**What the model learns:**
- Speculative risk appetite and sentiment
- High-beta sentiment channel
- Crypto market as leading risk indicator
- Digital asset correlation with traditional markets
- Extreme risk-on/risk-off behavior

---

## 🥇 9. PRECIOUS METALS (3 instruments)

- **XAUUSD** - Gold/US Dollar
- **XAGUSD** - Silver/US Dollar
- **XCUUSD** - Copper/US Dollar

**What the model learns:**
- Safe-haven demand (gold) vs risk-on sentiment
- Economic growth proxy (copper - industrial demand)
- Inflation expectations and real asset demand
- Flight-to-safety behavior (gold)
- Global growth and industrial demand (copper)

---

## ⛽ 10. ENERGY COMMODITIES (3 instruments)

- **USOIL** - West Texas Intermediate (WTI) Crude Oil
- **UKOIL** - Brent Crude Oil
- **XNGUSD** - Natural Gas/US Dollar

**What the model learns:**
- Inflation and real-economy pressure
- Energy cost impacts on markets
- Distinguishing inflation-driven vs growth-driven volatility
- Oil price shocks and economic impact
- Energy sector as economic indicator

---

## ⏰ 11. MULTI-TIMEFRAME ANALYSIS

The model processes all instruments across **20 different timeframes**:

### Minute Timeframes (11)
- 1m, 2m, 3m, 4m, 5m, 6m, 10m, 12m, 15m, 20m, 30m

### Hourly Timeframes (7)
- 1H, 2H, 3H, 4H, 6H, 8H, 12H

### Higher Timeframes (3)
- 1D (Daily), 1W (Weekly), 1MN (Monthly)

**What the model learns:**
- Multi-timeframe correlations and patterns
- Short-term vs long-term trend alignment
- Timeframe-specific market behavior
- Cross-timeframe confirmation signals
- Temporal pattern recognition across scales

---

## 🧠 12. DERIVED FEATURES & ENGINEERING

### Raw OHLCV Data
- **Open, High, Low, Close, Volume** - Price action and liquidity

### Timestamp Features (19 engineered features)
- **Cyclical time features**: hour_sin/cos, day_of_week_sin/cos, day_of_month_sin/cos, month_sin/cos, day_of_year_sin/cos
- **Categorical time features**: hour, day_of_week, day_of_month, month, day_of_year
- **Boolean time features**: is_weekend, is_month_start, is_month_end, is_high_activity_hours

### Entry Zone Features (when enabled)
- **Price position** - Relative position within price range
- **Zone quality** - Entry quality in premium/discount zones

**What the model learns:**
- Temporal patterns and seasonality
- Time-of-day and day-of-week effects
- Market microstructure patterns
- Optimal entry timing and zones
- Implicit feature relationships from raw data

---

## 🔄 13. COMBINED SYMBOL LEARNING

When `COMBINE_INDICES = True`, the model:
- Combines ALL symbols into one unified sequence
- Learns cross-asset correlations and relationships
- Identifies global market regime changes
- Detects inter-market transmission mechanisms
- Understands systemic risk patterns

**What the model learns:**
- Cross-asset correlations (e.g., how gold moves with VIX)
- Inter-market relationships (e.g., how USD strength affects commodities)
- Global risk transmission (e.g., how credit stress affects equities)
- Regime classification (risk-on vs risk-off across all assets)
- Systemic patterns that span multiple asset classes

---

## 📈 14. MODEL ARCHITECTURE CAPABILITIES

### Hybrid CNN-LSTM-Transformer Architecture with Real-Time Cross-Attention

**Architecture Overview:**
The model uses **Joint Representation Learning with Real-Time Cross-Attention**, where branches interact DURING learning (not just at the end), enabling deep cooperative learning.

**CNN Branch:**
- Extracts local patterns and features using Conv1D layers
- Identifies short-term price patterns and micro-structure signals
- Detects local price action patterns (candlestick formations, support/resistance)
- Uses convolutional filters (default: [64, 32]) with kernel sizes [3, 3]
- Applies max pooling and dropout for regularization

**LSTM Branch:**
- Processes sequential patterns with temporal dependencies
- Captures trend continuation/failure patterns
- Learns sequential relationships across time steps
- Uses multi-layer LSTM (default: [128, 64] units)
- Maintains sequence information for cross-attention interactions

**Transformer Branch:**
- Captures attention mechanisms with multi-head attention
- Identifies long-range dependencies across history
- Focuses on important time steps using self-attention
- Uses 8 attention heads with 256 feed-forward dimension
- Applies layer normalization and residual connections

**Real-Time Cross-Attention (Key Innovation):**
- **Stage 1**: Each branch starts processing independently
- **Cross-Attention Stage**: Branches interact in real-time during forward pass
  - CNN attends to LSTM/Transformer representations and adjusts its features
  - LSTM attends to CNN/Transformer representations and adjusts its features
  - Transformer attends to CNN/LSTM representations and adjusts its features
- **Stage 2**: Branches continue processing with cross-attention informed representations
- **Final Cross-Attention Fusion**: Additional fusion layer combines final representations

**What the model learns:**
- Multi-scale pattern recognition (local + sequential + long-range)
- Real-time adaptive learning where branches influence each other during training
- Attention-weighted historical patterns with cross-modal interactions
- Complex non-linear relationships across different representation spaces
- Regime-specific pattern adaptations with cooperative learning
- Deep cross-modal feature interactions through multi-stage cross-attention
- When LSTM detects a trend, CNN and Transformer immediately adjust based on that context
- When Transformer sees macro risk-off signals, LSTM and CNN adapt accordingly

**Technical Specifications:**
- **CNN Configuration**: Filters [64, 32], Kernel sizes [3, 3], Dropout 0.2, Pool size 2
- **LSTM Configuration**: Units [128, 64], Dropout 0.2, Return sequences for cross-attention
- **Transformer Configuration**: 8 attention heads, 256 FF dimension, 2 layers, Dropout 0.1
- **Cross-Attention**: Multi-head attention with shared dimension, residual connections, layer normalization
- **Fusion Method**: Cross-attention fusion with configurable dimension (default: 128)
- **Training**: All branches process same raw OHLCV input in parallel, then interact via cross-attention

---

## 🎯 SUMMARY: WHAT THE MODEL CAN LEARN

### Market Regimes
- ✅ Risk-on vs Risk-off classification
- ✅ Volatility regimes (low-VIX complacency, high-VIX fear)
- ✅ Growth vs recession indicators
- ✅ Inflation-driven vs growth-driven volatility

### Cross-Asset Relationships
- ✅ How credit stress leads equity movements
- ✅ How volatility structure predicts regime changes
- ✅ How currency flows affect global markets
- ✅ How commodities signal economic health

### Temporal Patterns
- ✅ Multi-timeframe correlations
- ✅ Time-of-day and seasonal effects
- ✅ Trend persistence vs failure signals
- ✅ Event anticipation and regime shifts

### Risk Signals
- ✅ Early-warning credit stress indicators
- ✅ Financial sector health signals
- ✅ Tail risk buildup detection
- ✅ Market breadth divergences

### Price Action
- ✅ Optimal entry zones and timing
- ✅ Momentum and trend patterns
- ✅ Support/resistance dynamics
- ✅ Volatility expansion/contraction

### Cooperative Learning (Real-Time Cross-Attention)
- ✅ Real-time feature adaptation across CNN, LSTM, and Transformer branches
- ✅ Cross-modal pattern recognition where branches learn from each other
- ✅ Context-aware feature extraction (e.g., CNN adjusts when LSTM detects trends)
- ✅ Multi-stage cooperative learning throughout the forward pass

---

## 📊 DATA COVERAGE STATISTICS

- **Total MT5 Instruments**: 28
- **Total Yahoo Finance Indicators**: 15
- **Total Timeframes**: 20 per instrument
- **Total Data Streams**: 43+ × 20 = **860+ data streams**
- **Geographic Coverage**: US, Europe, Asia-Pacific, Global
- **Asset Class Coverage**: Equities, Forex, Commodities, Crypto, Fixed Income, Volatility
- **Market Regime Coverage**: All major regimes (bull, bear, high-vol, low-vol, risk-on, risk-off)

---

## ✅ COMPLETE COVERAGE CONFIRMATION

The model has **100% coverage** of all 17 categories from the financial indicators framework:

1. ✅ Volatility (core) - ^VIX
2. ✅ Volatility (structure) - ^VVIX, ^VIX9D, ^SKEW
3. ✅ Interest Rates - ^IRX, ^FVX, ^TNX, ^TYX
4. ✅ USD & FX - DXY + 11 forex pairs
5. ✅ Equity Indices (price) - US30, US500, USTEC
6. ✅ Market Breadth - ^NYA, ^RUT
7. ✅ Credit Stress - HYG, LQD, TLT
8. ✅ Commodities - USOIL, UKOIL, XNGUSD, XAUUSD, XAGUSD, XCUUSD
9. ✅ Copper (growth) - XCUUSD
10. ✅ Crypto - BTCUSD, ETHUSD, XRPUSD
11. ✅ Financial Stress ETFs - XLF, KRE
12. ✅ Global Indices - 9 international indices
13. ✅ US Indices (Core) - US30, US500, USTEC
14. ✅ Cryptocurrency - BTCUSD, ETHUSD, XRPUSD
15. ✅ Metals - XAUUSD, XAGUSD, XCUUSD
16. ✅ Energy - USOIL, UKOIL, XNGUSD
17. ✅ Forex (Majors & Crosses) - 11 pairs + DXY

---

**Last Updated**: Based on current codebase configuration
**Model Version**: Hybrid CNN-LSTM-Transformer Architecture with Real-Time Cross-Attention
**Architecture Innovation**: Joint Representation Learning - branches interact during learning, not just at fusion
**Data Sources**: MetaTrader 5 + Yahoo Finance

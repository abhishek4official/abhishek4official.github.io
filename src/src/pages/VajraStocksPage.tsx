import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   Icons (Custom detailed SVGs for the premium look)
   ───────────────────────────────────────────────────────────────────────────── */
const ArrowLeft = () => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M17 10H3M7 6l-4 4 4 4" />
    </svg>
);

const GitHub = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.507.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
);

const ExternalLink = () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);

/* ─────────────────────────────────────────────────────────────────────────────
   Constant Datasets
   ───────────────────────────────────────────────────────────────────────────── */
const STATS = [
    { value: '2,365+', label: 'NSE Stocks tracked' },
    { value: '7',      label: 'Autonomous AI Agents' },
    { value: '4',      label: 'Chart Types' },
    { value: '< 5ms',  label: 'Screener response' },
];

const DOWNLOADS = [
    {
        os: 'Windows',
        icon: '🪟',
        label: 'Windows 10 / 11',
        file: 'VajraStocks-Setup.exe',
        desc: 'One-click installer with Start Menu & Desktop shortcut',
        url: 'https://github.com/abhishek4official/VajraStocks/releases/download/v1.3.0/VajraStocks-Setup.exe',
        color: 'border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5',
        badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    },
    {
        os: 'Linux',
        icon: '🐧',
        label: 'Debian / Ubuntu',
        file: 'VajraStocks.deb',
        desc: 'dpkg installer — installs to /opt/vajrastocks',
        url: 'https://github.com/abhishek4official/VajraStocks/releases/download/v1.3.0/VajraStocks.deb',
        color: 'border-orange-500/30 hover:border-orange-500/60 bg-orange-500/5',
        badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    },
    {
        os: 'Linux',
        icon: '🐧',
        label: 'Fedora / RHEL',
        file: 'VajraStocks.rpm',
        desc: 'RPM package for Red Hat-based distros',
        url: 'https://github.com/abhishek4official/VajraStocks/releases/download/v1.3.0/VajraStocks.rpm',
        color: 'border-orange-500/30 hover:border-orange-500/60 bg-orange-500/5',
        badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    },
    {
        os: 'Linux',
        icon: '🐧',
        label: 'Universal Linux',
        file: 'VajraStocks.AppImage',
        desc: 'Portable — runs on any Linux distro, no install needed',
        url: 'https://github.com/abhishek4official/VajraStocks/releases/download/v1.3.0/VajraStocks.AppImage',
        color: 'border-orange-500/30 hover:border-orange-500/60 bg-orange-500/5',
        badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    },
    {
        os: 'macOS',
        icon: '🍎',
        label: 'macOS 12+',
        file: 'VajraStocks.dmg',
        desc: 'Drag-to-Applications DMG for Intel & Apple Silicon',
        url: 'https://github.com/abhishek4official/VajraStocks/releases/download/v1.3.0/VajraStocks.dmg',
        color: 'border-slate-500/30 hover:border-slate-400/60 bg-slate-500/5',
        badge: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    },
];

const CAPABILITIES = [
    {
        id: 'explorer',
        title: 'Explorer Dashboard',
        tagline: 'Deep Quantitative Chart Analysis',
        badge: 'Quant Insights',
        image: '/vajrastocks_explorer.png',
        desc: 'Analyze Indian equities with Heikin-Ashi, Renko, Three Line Break, and standard Candlestick models. View technical indicators (RSI, MACD, and SMA) overlaid with precise mathematical alignments.',
        bullets: [
            'Interactive synchronized cursor across sub-panes',
            'Full support for major technical indicators: SMA 20/50/200, MACD, RSI',
            'Time-independent price analysis with ATR-calibrated Renko bricks',
            'Noise-filtered trend direction indicators using Heikin-Ashi calculations'
        ],
        gradient: 'from-violet-600/20 to-purple-600/5',
        border: 'border-violet-500/30 hover:border-violet-500/60'
    },
    {
        id: 'screener',
        title: 'Technical Screener',
        tagline: 'Multi-Filter Scan in Milliseconds',
        badge: 'Database Performance',
        image: '/vajrastocks_screener.png',
        desc: 'Filter the entire NSE universe using a denormalized snapshot cache. Perform scans based on volume breakouts, RSI levels, MACD crossovers, and multi-chart trend indicators instantly.',
        bullets: [
            'Sub-5ms query performance with Zero-Join tables',
            '11 highly customizable technical indicator filters',
            'Interactive data grid with sortable columns and CSV export',
            'Seamless integration — click any row to load the chart explorer'
        ],
        gradient: 'from-blue-600/20 to-indigo-600/5',
        border: 'border-blue-500/30 hover:border-blue-500/60'
    },
    {
        id: 'ai_console',
        title: 'AI Research Console',
        tagline: '7-Agent Autonomous Quantitative Analysis',
        badge: 'Multi-Agent AI',
        image: '/vajrastocks_ai_console.png',
        desc: 'Ask complex quantitative questions in plain English. Watch a Directed Acyclic Graph (DAG) of seven specialized AI agents retrieve data, backtest strategies, assess risk, and generate institutional reports.',
        bullets: [
            'Orchestrated with Microsoft Agent Framework and local LLMs',
            'Watch task execution live via Server-Sent Events (SSE) telemetry',
            'Generates complete, publication-ready Markdown reports with INR notation',
            'Performs automated win-rate, CAGR, and maximum drawdown backtests'
        ],
        gradient: 'from-fuchsia-600/20 to-pink-600/5',
        border: 'border-fuchsia-500/30 hover:border-fuchsia-500/60'
    },
    {
        id: 'sync_center',
        title: 'Data Sync Engine',
        tagline: 'Resilient Audited Market Data Pipeline',
        badge: 'Data Pipelines',
        image: '/vajrastocks_sync_center.png',
        desc: 'A robust, self-recovering incremental crawler built to update historical market prices with yFinance. Employs advanced rate-limiting, transaction isolation, and detailed run-logs.',
        bullets: [
            'Warm delta synchronization checks recent records to save bandwidth',
            'Cold-start crawler handles bulk historical backfills reliably',
            'Self-recovering batching loops protect against API rate-limits',
            'Full database transaction rollbacks protect schema integrity'
        ],
        gradient: 'from-emerald-600/20 to-teal-600/5',
        border: 'border-emerald-500/30 hover:border-emerald-500/60'
    },
    {
        id: 'ml_training',
        title: 'Machine Learning Training',
        tagline: 'Walk-Forward Validation & Feature Selection',
        badge: 'VajraML Engine',
        image: '/vajrastocks_ai_console.png',
        desc: 'Train and validate predictive models locally. Features a 6-fold walk-forward validation framework utilizing LightGBM as the primary non-linear model and Ridge regression as the linear benchmark.',
        bullets: [
            'Automated 6-fold walk-forward validation avoids lookahead bias',
            'Feature selection ranking powered by RSI, ATR, SMA, CMF, StochRSI, and OBV',
            'Real-time console logging and GPU acceleration (OpenCL/CPU auto-fallback)',
            'Computes Information Coefficient (IC) and validation metrics on held-out folds'
        ],
        gradient: 'from-amber-600/20 to-yellow-600/5',
        border: 'border-amber-500/30 hover:border-amber-500/60'
    },
    {
        id: 'portfolio_rotation',
        title: 'Portfolio Rotation Engine',
        tagline: 'Weakness Detection & Momentum Re-Ranking',
        badge: 'Risk & Rotation',
        image: '/vajrastocks_explorer.png',
        desc: 'Import Zerodha holdings CSV to compute portfolio-level health metrics. Automatically flags weak positions in the bottom quartile of Relative Strength (RS) and recommends high-momentum rotation candidates.',
        bullets: [
            'Dynamic Portfolio Heat limits automatically adjusted for bull/bear regimes',
            'Volatility-scaled position sizing and stops calculated via ATR percentages',
            'Identifies ROTATE candidates with confluence-based multi-stage targets (T1, T2, T3)',
            'Computes net P&L, Alpha vs Nifty, and weekly-confirmed multi-timeframe trends'
        ],
        gradient: 'from-rose-600/20 to-red-600/5',
        border: 'border-rose-500/30 hover:border-rose-500/60'
    }
];

const ARCHITECTURE_LAYERS = [
    { num: '01', layer: 'Presentation Layer', desc: 'React 19 & TypeScript single-page application. Features custom chart canvases powered by TradingView Lightweight Charts, state coordination via Zustand, and elegant layouts.', color: 'text-violet-400 bg-violet-950/40 border-violet-500/20' },
    { num: '02', layer: 'FastAPI Gateway', desc: 'Asynchronous Python web server optimized for high-throughput JSON array transmissions. Implements GZIP compression and strict schema validations.', color: 'text-indigo-400 bg-indigo-950/40 border-indigo-500/20' },
    { num: '03', layer: 'AI Orchestrator', desc: 'A Directed Acyclic Graph (DAG) state coordinator utilizing Microsoft Agent Framework. Leverages structured JSON outputs and streams logs via SSE.', color: 'text-fuchsia-400 bg-fuchsia-950/40 border-fuchsia-500/20' },
    { num: '04', layer: 'Quantitative Engine', desc: 'Highly performant mathematical formulas using pandas-ta to evaluate technical signals (RSI, MACD, Renko, Three Line Break) without stochastic deviations.', color: 'text-blue-400 bg-blue-950/40 border-blue-500/20' },
    { num: '05', layer: 'Data Sync Engine', desc: 'Incremental, audited market data crawler connecting with yFinance. Includes batch-level fallback recovery, database isolation, and logs.', color: 'text-teal-400 bg-teal-950/40 border-teal-500/20' },
    { num: '06', layer: 'Persistence Layer', desc: 'SQL Server LocalDB database managed via SQLAlchemy 2.0 and Alembic migrations. Uses denormalized database indexes to hit sub-5ms screener queries.', color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/20' }
];

const AGENT_LIST = [
    { id: 'orchestrator', name: 'orchestrator', role: 'Intent Parser', color: 'border-violet-500/30 text-violet-400 bg-violet-500/5', log: `[orchestrator] Natural language query received: "Run a full scan and backtest on RELIANCE"
[orchestrator] Identifying target stock ticker... "RELIANCE" verified.
[orchestrator] Instantiating graph execution. Delegating history retrieval to sql_data_agent.` },
    { id: 'sql_data', name: 'sql_data_agent', role: 'Database Specialist', color: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/5', log: `[sql_data_agent] Generating read-only SQL query:
  SELECT date, open, high, low, close, volume FROM daily_prices WHERE ticker = 'RELIANCE' ORDER BY date ASC;
[sql_data_agent] Executed SELECT. Fetched 504 rows of daily historical data.
[sql_data_agent] Formatting raw prices into pandas-ready arrays. Passing data to market_regime_agent.` },
    { id: 'market_regime', name: 'market_regime_agent', role: 'Macro Strategist', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5', log: `[market_regime_agent] Calculating SMA 20, 50, and 200 indicators.
[market_regime_agent] Price: ₹2,983.45 is above SMA 50 (₹2,912.10) and SMA 200 (₹2,840.15).
[market_regime_agent] Trend classified as: STRONGLY BULLISH.
[market_regime_agent] Triggering risk analysis via trade_planner_agent.` },
    { id: 'trade_planner', name: 'trade_planner_agent', role: 'Risk & Execution', color: 'border-pink-500/30 text-pink-400 bg-pink-500/5', log: `[trade_planner_agent] Loading 14-day Average True Range (ATR)... ATR is ₹52.40.
[trade_planner_agent] Calculating Risk-Reward ratios:
  - Stop Loss: ₹2,878.65 (2x ATR below entry)
  - Target 1: ₹3,088.25 (2x ATR above entry)
  - Target 2: ₹3,193.05 (4x ATR above entry)
[trade_planner_agent] Forwarding execution targets to backtester_service.` },
    { id: 'backtester', name: 'backtester_service', role: 'Performance Engine', color: 'border-teal-500/30 text-teal-400 bg-teal-500/5', log: `[backtester_service] Running historical backtest on RELIANCE (2024-2026).
[backtester_service] Strategy: Golden Cross (SMA 50 crossing above SMA 200).
[backtester_service] Backtest Completed. Metrics computed:
  - Win Rate: 68.4% (13/19 trades)
  - CAGR: 21.8%
  - Sharpe Ratio: 1.62
  - Max Drawdown: -12.4%
[backtester_service] Exporting tables to stock_analysis_agent.` },
    { id: 'stock_analysis', name: 'stock_analysis_agent', role: 'Quant Researcher', color: 'border-fuchsia-500/30 text-fuchsia-400 bg-fuchsia-500/5', log: `[stock_analysis_agent] Aggregating Heikin-Ashi trends and Renko bricks.
[stock_analysis_agent] Renko status: 3 green bricks added.
[stock_analysis_agent] Scoring stock momentum:
  - Trend Score: 92/100
  - Momentum Score: 85/100
  - Risk Multiplier: Low
[stock_analysis_agent] Sending full structured payload to report_agent.` },
    { id: 'report_agent', name: 'report_agent', role: 'Chief Reporter', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5', log: `[report_agent] Compiling Markdown presentation.
[report_agent] Formatted stock price metrics, backtest indicators, and stop losses.
[report_agent] Final Report compiled: RELIANCE_INVESTMENT_SUMMARY.md.
[report_agent] Execution complete. Final payload pushed to UI client.` }
];

const SCREENER_STOCKS = [
    { ticker: 'RELIANCE', name: 'Reliance Industries', price: '₹2,983.45', change: '+1.82%', bullish: true, rsi: 58.4, macd: 'Bullish', vol: '2.1x', tag: 'High Volume' },
    { ticker: 'TCS', name: 'Tata Consultancy Services', price: '₹3,845.10', change: '-0.42%', bullish: false, rsi: 41.2, macd: 'Bearish', vol: '0.8x', tag: 'Standard' },
    { ticker: 'INFY', name: 'Infosys Limited', price: '₹1,420.15', change: '+2.45%', bullish: true, rsi: 72.8, macd: 'Bullish', vol: '3.4x', tag: 'Oversold / High Vol' },
    { ticker: 'HDFCBANK', name: 'HDFC Bank Limited', price: '₹1,562.30', change: '+0.15%', bullish: true, rsi: 52.1, macd: 'Bullish', vol: '1.2x', tag: 'Standard' },
    { ticker: 'ICICIBANK', name: 'ICICI Bank Limited', price: '₹1,085.60', change: '-1.20%', bullish: false, rsi: 28.5, macd: 'Bearish', vol: '2.3x', tag: 'Oversold' },
    { ticker: 'TATAMOTORS', name: 'Tata Motors Limited', price: '₹945.75', change: '+3.12%', bullish: true, rsi: 65.3, macd: 'Bullish', vol: '2.8x', tag: 'High Volume' }
];

/* ─────────────────────────────────────────────────────────────────────────────
   Main Redesigned Component
   ───────────────────────────────────────────────────────────────────────────── */
export const VajraStocksPage = () => {
    // UI state interactions
    const [activeCapability, setActiveCapability] = useState('explorer');
    const [selectedAgent, setSelectedAgent] = useState('orchestrator');
    const [screenerFilter, setScreenerFilter] = useState('all');
    const [selectedChartType, setSelectedChartType] = useState('candlestick');

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'VajraStocks — Quantitative Analysis Platform';
        return () => { document.title = 'Abhishek Kumar'; };
    }, []);

    // Filter logic for Screener Demo
    const filteredStocks = SCREENER_STOCKS.filter(stock => {
        if (screenerFilter === 'bullish') return stock.bullish;
        if (screenerFilter === 'oversold') return stock.rsi < 35 || stock.rsi > 70;
        if (screenerFilter === 'volume') return parseFloat(stock.vol) >= 2.0;
        return true;
    });

    const activeAgentData = AGENT_LIST.find(a => a.id === selectedAgent) || AGENT_LIST[0];

    return (
        <div className="min-h-screen text-slate-300 antialiased relative selection:bg-purple-500/30 selection:text-white" style={{ background: '#0a0b0e' }}>
            {/* Ambient Background Lights */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[1200px] right-10 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[800px] left-10 w-[500px] h-[500px] bg-emerald-950/10 rounded-full blur-[130px] pointer-events-none" />

            {/* ── STICKY HEADER ── */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 backdrop-blur-lg bg-[#0a0b0e]/75 transition-all">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold group">
                        <span className="transform group-hover:-translate-x-1 transition-transform inline-flex">
                            <ArrowLeft />
                        </span>
                        Back to Portfolio
                    </Link>

                    {/* Quick navigation */}
                    <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        <a href="#overview" className="hover:text-white transition-colors">Overview</a>
                        <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
                        <a href="#orchestration" className="hover:text-white transition-colors">AI Pipeline</a>
                        <a href="#download" className="hover:text-emerald-400 transition-colors text-emerald-500">Download</a>
                    </div>

                    <a
                        href="https://github.com/abhishek4official/VajraStocks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-bold transition-all shadow-sm"
                    >
                        <GitHub />
                        <span>Star on GitHub</span>
                    </a>
                </div>
            </header>

            {/* ── HERO SECTION ── */}
            <section id="overview" className="pt-32 pb-24 px-6 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    {/* Glowing pill badge */}
                    <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 rounded-full px-4.5 py-1.5 mb-8 animate-fade-in shadow-inner">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-[11px] font-bold text-purple-300 tracking-widest uppercase">Institutional NSE Technical Analysis</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                        Vajra<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-500">Stocks</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                        A local-first, open-source NSE stock research platform. Screens 2,365+ Indian equities in under 5ms, charts with 4 advanced models, and generates AI investment reports entirely on your machine — no cloud, no subscriptions.
                    </p>

                    {/* CTAs */}
                    <div className="flex items-center justify-center flex-wrap gap-4 mb-20">
                        <a
                            href="#download"
                            className="flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            Download Free
                        </a>
                        <a
                            href="https://github.com/abhishek4official/VajraStocks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-300 hover:text-white hover:border-slate-700 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <GitHub />
                            <span>View on GitHub</span>
                        </a>
                        <a
                            href="#capabilities"
                            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-800/50 bg-transparent text-slate-500 hover:text-slate-300 hover:border-slate-700 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>Explore Platform</span>
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M8 3v10M4 9l4 4 4-4" />
                            </svg>
                        </a>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-800/50 mb-20">
                        {STATS.map((s, i) => (
                            <div key={i} className="px-6 py-6 bg-[#0a0b0e]/80">
                                <p className="text-3xl font-extrabold text-white mb-1.5 tracking-tight">{s.value}</p>
                                <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Hero Mockup image */}
                    <div className="relative rounded-2xl border border-slate-800 bg-[#0d0f14]/80 p-3 shadow-2xl max-w-5xl mx-auto overflow-hidden group">
                        {/* Fake browser bar */}
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 px-3 mb-3">
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="text-[11px] font-semibold text-slate-600 bg-slate-950/50 rounded px-6 py-0.5 border border-slate-900/60 font-mono">
                                localhost:5175/explorer/RELIANCE
                            </div>
                            <div className="w-12" />
                        </div>
                        {/* Angled highlight glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-1000" />
                        
                        <img 
                            src="/vajrastocks_hero.png" 
                            alt="VajraStocks Explorer Interface Mockup"
                            className="w-full rounded-lg object-cover shadow-inner transition-transform duration-700 group-hover:scale-[1.008]" 
                        />
                    </div>
                </div>
            </section>

            {/* ── CORE CAPABILITIES (TABBED INTERACTIVE SCREENSHOTS) ── */}
            <section id="capabilities" className="py-24 px-6 border-t border-slate-900/80 bg-slate-950/30 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">Modular Capabilities</p>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Engineered for Technical Traders</h2>
                        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base font-normal">
                            Explore the core subsystems that make up the VajraStocks stock research environment.
                        </p>
                    </div>

                    {/* Interactive Selector Tabs */}
                    <div className="flex justify-center flex-wrap gap-2.5 mb-12">
                        {CAPABILITIES.map((cap) => (
                            <button
                                key={cap.id}
                                onClick={() => setActiveCapability(cap.id)}
                                className={`px-5 py-3 rounded-xl text-xs font-bold transition-all border tracking-wider uppercase ${
                                    activeCapability === cap.id
                                        ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/30 scale-105'
                                        : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                                }`}
                            >
                                {cap.title}
                            </button>
                        ))}
                    </div>

                    {/* Active tab display */}
                    {(() => {
                        const cap = CAPABILITIES.find(c => c.id === activeCapability) || CAPABILITIES[0];
                        return (
                            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-12 rounded-3xl border bg-gradient-to-br ${cap.gradient} ${cap.border} transition-all duration-500`}>
                                {/* Text Section */}
                                <div className="lg:col-span-5 flex flex-col justify-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-3 block">
                                        {cap.badge}
                                    </span>
                                    <h3 className="text-2xl md:text-3.5xl font-extrabold text-white mb-2 leading-tight">
                                        {cap.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-slate-400 mb-6 font-mono tracking-wide">
                                        {cap.tagline}
                                    </p>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-8 font-normal">
                                        {cap.desc}
                                    </p>

                                    <div className="space-y-3.5">
                                        {cap.bullets.map((b, bi) => (
                                            <div key={bi} className="flex items-start gap-3 text-xs leading-relaxed text-slate-400">
                                                <span className="shrink-0 w-4 h-4 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold mt-0.5">✓</span>
                                                <span>{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mockup Image Frame */}
                                <div className="lg:col-span-7">
                                    <div className="relative rounded-xl border border-slate-800/80 bg-[#0d0f14] p-2 shadow-2xl overflow-hidden group">
                                        <div className="flex items-center justify-between border-b border-slate-800/50 pb-2 px-2.5 mb-2.5">
                                            <div className="flex gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                            </div>
                                            <div className="text-[9px] font-semibold text-slate-600 bg-slate-950/40 rounded px-4 py-0.5 border border-slate-900/40 font-mono">
                                                localhost:5175/{cap.id}
                                            </div>
                                            <div className="w-8" />
                                        </div>
                                        <img
                                            src={cap.image}
                                            alt={cap.title}
                                            className="w-full rounded-md object-cover transition-all duration-700 group-hover:scale-[1.01]"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>

            {/* ── INTERACTIVE CHART LAB (WIDGET DEMO) ── */}
            <section id="lab" className="py-24 px-6 border-t border-slate-900/80">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Live Interactive Sandbox</p>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">The Charting Engine Lab</h2>
                        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base font-normal">
                            Switch between the four quant charts rendered by VajraStocks to see how price noise is filtered in real-time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Selector Controls */}
                        <div className="lg:col-span-4 flex flex-col justify-between gap-4">
                            <div className="space-y-2">
                                {[
                                    { id: 'candlestick', label: 'Standard Candlestick', desc: 'Detailed OHLCV representation displaying exact stock transaction bounds.' },
                                    { id: 'heikin',      label: 'Heikin-Ashi',         desc: 'Averages prices to smooth out market noise and clearly highlight trends.' },
                                    { id: 'renko',       label: 'Renko Brick (ATR)',   desc: 'Path-dependent blocks that register when price moves a set threshold.' },
                                    { id: 'three-line',  label: 'Three Line Break',    desc: 'Analyzes high/low reversals to signal shifts in momentum.' }
                                ].map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setSelectedChartType(type.id)}
                                        className={`w-full p-4 rounded-xl border text-left transition-all ${
                                            selectedChartType === type.id
                                                ? 'bg-indigo-950/30 border-indigo-500/40 shadow-inner'
                                                : 'bg-slate-900/20 border-slate-800/40 hover:border-slate-800'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`w-2 h-2 rounded-full ${selectedChartType === type.id ? 'bg-indigo-400 animate-pulse' : 'bg-slate-700'}`} />
                                            <span className={`text-xs font-extrabold tracking-wider uppercase ${selectedChartType === type.id ? 'text-white' : 'text-slate-400'}`}>
                                                {type.label}
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-normal font-normal">
                                            {type.desc}
                                        </p>
                                    </button>
                                ))}
                            </div>

                            {/* Quant overlays */}
                            <div className="p-4 rounded-xl border border-slate-800 bg-[#0d0f14] flex flex-wrap gap-2.5 justify-between items-center text-xs">
                                <span className="font-mono text-slate-500 text-[10px] uppercase font-bold">Indicator overlays</span>
                                <div className="flex gap-2">
                                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono font-bold text-[10px]">RSI: 58.4</span>
                                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px]">MACD: BULL</span>
                                    <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono font-bold text-[10px]">SMA: CROSS</span>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Dynamic Graph Renderer */}
                        <div className="lg:col-span-8 bg-[#0d0f14] rounded-2xl border border-slate-800 p-5 flex flex-col justify-between">
                            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 text-[9px] bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-black rounded uppercase">RELIANCE</span>
                                    <span className="text-[11px] text-slate-400 font-mono">1D Chart · Technical Indicators Active</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-mono">
                                    <span className="text-emerald-400">O: 2975.2</span>
                                    <span className="text-emerald-400">H: 2990.0</span>
                                    <span className="text-rose-400">L: 2962.1</span>
                                    <span className="text-emerald-400">C: 2983.4</span>
                                </div>
                            </div>

                            {/* Chart Canvas Area */}
                            <div className="h-64 relative flex items-end justify-center w-full px-4 overflow-hidden">
                                {/* Grid lines background */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                                    <div className="border-b border-white w-full h-px" />
                                    <div className="border-b border-white w-full h-px" />
                                    <div className="border-b border-white w-full h-px" />
                                    <div className="border-b border-white w-full h-px" />
                                </div>

                                {/* Custom SVGs matching chosen tab */}
                                <svg viewBox="0 0 500 220" className="w-full h-full">
                                    {selectedChartType === 'candlestick' && (
                                        <>
                                            {/* Candlesticks & Volume overlay */}
                                            {/* Candle 1 */}
                                            <line x1="40" y1="120" x2="40" y2="40" stroke="#f43f5e" strokeWidth="2" />
                                            <rect x="32" y="60" width="16" height="40" fill="#f43f5e" rx="1" />
                                            {/* Candle 2 */}
                                            <line x1="90" y1="140" x2="90" y2="70" stroke="#10b981" strokeWidth="2" />
                                            <rect x="82" y="80" width="16" height="45" fill="#10b981" rx="1" />
                                            {/* Candle 3 */}
                                            <line x1="140" y1="100" x2="140" y2="30" stroke="#10b981" strokeWidth="2" />
                                            <rect x="132" y="45" width="16" height="45" fill="#10b981" rx="1" />
                                            {/* Candle 4 */}
                                            <line x1="190" y1="90" x2="190" y2="160" stroke="#f43f5e" strokeWidth="2" />
                                            <rect x="182" y="100" width="16" height="40" fill="#f43f5e" rx="1" />
                                            {/* Candle 5 */}
                                            <line x1="240" y1="180" x2="240" y2="110" stroke="#10b981" strokeWidth="2" />
                                            <rect x="232" y="125" width="16" height="45" fill="#10b981" rx="1" />
                                            {/* Candle 6 */}
                                            <line x1="290" y1="130" x2="290" y2="50" stroke="#10b981" strokeWidth="2" />
                                            <rect x="282" y="70" width="16" height="40" fill="#10b981" rx="1" />
                                            {/* Candle 7 */}
                                            <line x1="340" y1="90" x2="340" y2="20" stroke="#10b981" strokeWidth="2" />
                                            <rect x="332" y="30" width="16" height="50" fill="#10b981" rx="1" />
                                            {/* Candle 8 */}
                                            <line x1="390" y1="80" x2="390" y2="150" stroke="#f43f5e" strokeWidth="2" />
                                            <rect x="382" y="90" width="16" height="40" fill="#f43f5e" rx="1" />
                                            {/* Candle 9 */}
                                            <line x1="440" y1="120" x2="440" y2="40" stroke="#10b981" strokeWidth="2" />
                                            <rect x="432" y="50" width="16" height="50" fill="#10b981" rx="1" />

                                            {/* SMA Trend overlay line */}
                                            <path d="M 40 85 Q 115 110 190 100 T 340 55 T 440 60" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="3" className="opacity-90" />
                                        </>
                                    )}

                                    {selectedChartType === 'heikin' && (
                                        <>
                                            {/* Smoothed trend representation */}
                                            <line x1="40" y1="110" x2="40" y2="50" stroke="#f43f5e" strokeWidth="2" />
                                            <rect x="32" y="65" width="16" height="35" fill="#f43f5e" rx="1" />
                                            
                                            <line x1="90" y1="100" x2="90" y2="60" stroke="#f43f5e" strokeWidth="2" />
                                            <rect x="82" y="70" width="16" height="25" fill="#f43f5e" rx="1" />

                                            <line x1="140" y1="110" x2="140" y2="50" stroke="#10b981" strokeWidth="2" />
                                            <rect x="132" y="60" width="16" height="40" fill="#10b981" rx="1" />

                                            <line x1="190" y1="90" x2="190" y2="30" stroke="#10b981" strokeWidth="2" />
                                            <rect x="182" y="40" width="16" height="40" fill="#10b981" rx="1" />

                                            <line x1="240" y1="70" x2="240" y2="20" stroke="#10b981" strokeWidth="2" />
                                            <rect x="232" y="30" width="16" height="35" fill="#10b981" rx="1" />

                                            <line x1="290" y1="80" x2="290" y2="30" stroke="#10b981" strokeWidth="2" />
                                            <rect x="282" y="40" width="16" height="35" fill="#10b981" rx="1" />

                                            <line x1="340" y1="90" x2="340" y2="40" stroke="#10b981" strokeWidth="2" />
                                            <rect x="332" y="50" width="16" height="35" fill="#10b981" rx="1" />

                                            <line x1="390" y1="100" x2="390" y2="50" stroke="#10b981" strokeWidth="2" />
                                            <rect x="382" y="60" width="16" height="35" fill="#10b981" rx="1" />

                                            <line x1="440" y1="90" x2="440" y2="30" stroke="#10b981" strokeWidth="2" />
                                            <rect x="432" y="40" width="16" height="45" fill="#10b981" rx="1" />

                                            {/* Smoothed trendline indicator */}
                                            <path d="M 40 82 Q 115 88 190 55 T 340 62 T 440 50" fill="none" stroke="#06b6d4" strokeWidth="3.5" />
                                        </>
                                    )}

                                    {selectedChartType === 'renko' && (
                                        <>
                                            {/* Renko brick stair steps */}
                                            {/* Row 1 Down */}
                                            <rect x="30" y="110" width="30" height="15" fill="#f43f5e" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 2 Down */}
                                            <rect x="65" y="125" width="30" height="15" fill="#f43f5e" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 3 Up */}
                                            <rect x="100" y="110" width="30" height="15" fill="#10b981" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 4 Up */}
                                            <rect x="135" y="95" width="30" height="15" fill="#10b981" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 5 Up */}
                                            <rect x="170" y="80" width="30" height="15" fill="#10b981" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 6 Down */}
                                            <rect x="205" y="95" width="30" height="15" fill="#f43f5e" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 7 Up */}
                                            <rect x="240" y="80" width="30" height="15" fill="#10b981" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 8 Up */}
                                            <rect x="275" y="65" width="30" height="15" fill="#10b981" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 9 Up */}
                                            <rect x="310" y="50" width="30" height="15" fill="#10b981" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 10 Up */}
                                            <rect x="345" y="35" width="30" height="15" fill="#10b981" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 11 Down */}
                                            <rect x="380" y="50" width="30" height="15" fill="#f43f5e" rx="1.5" stroke="#000" strokeWidth="1" />
                                            {/* Row 12 Up */}
                                            <rect x="415" y="35" width="30" height="15" fill="#10b981" rx="1.5" stroke="#000" strokeWidth="1" />
                                        </>
                                    )}

                                    {selectedChartType === 'three-line' && (
                                        <>
                                            {/* Three Line Break blocks */}
                                            {/* Block 1 */}
                                            <rect x="40" y="100" width="40" height="60" fill="#f43f5e" stroke="#000" strokeWidth="1" rx="1" />
                                            {/* Block 2 */}
                                            <rect x="90" y="80" width="40" height="20" fill="#10b981" stroke="#000" strokeWidth="1" rx="1" />
                                            {/* Block 3 */}
                                            <rect x="140" y="50" width="40" height="30" fill="#10b981" stroke="#000" strokeWidth="1" rx="1" />
                                            {/* Block 4 */}
                                            <rect x="190" y="50" width="40" height="70" fill="#f43f5e" stroke="#000" strokeWidth="1" rx="1" />
                                            {/* Block 5 */}
                                            <rect x="240" y="30" width="40" height="90" fill="#10b981" stroke="#000" strokeWidth="1" rx="1" />
                                            {/* Block 6 */}
                                            <rect x="290" y="20" width="40" height="10" fill="#10b981" stroke="#000" strokeWidth="1" rx="1" />
                                            {/* Block 7 */}
                                            <rect x="340" y="20" width="40" height="60" fill="#f43f5e" stroke="#000" strokeWidth="1" rx="1" />
                                            {/* Block 8 */}
                                            <rect x="390" y="10" width="40" height="70" fill="#10b981" stroke="#000" strokeWidth="1" rx="1" />
                                        </>
                                    )}
                                </svg>
                            </div>

                            {/* Chart status footer */}
                            <div className="flex items-center justify-between mt-4 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                <span>Vol: 24,561,080</span>
                                <span className="flex items-center gap-1.5 text-indigo-400">
                                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" />
                                    TradingView Lightweight Charts GPU Canvas
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INTERACTIVE SCREENER PREVIEW ── */}
            <section className="py-24 px-6 border-t border-slate-900/80 bg-slate-950/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">Live Cache Simulation</p>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Technical Screener Grid</h2>
                        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base font-normal">
                            Filter the stock database snapshot in under 5 milliseconds. Try clicking different technical query buttons below.
                        </p>
                    </div>

                    <div className="bg-[#0d0f14] rounded-2xl border border-slate-800 p-6">
                        {/* Filters panel */}
                        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-slate-800/80 pb-4">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mr-2">Query Filter</span>
                            <button
                                onClick={() => setScreenerFilter('all')}
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    screenerFilter === 'all'
                                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                                        : 'bg-slate-950/60 border border-slate-900 text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                All Stocks
                            </button>
                            <button
                                onClick={() => setScreenerFilter('bullish')}
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    screenerFilter === 'bullish'
                                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                                        : 'bg-slate-950/60 border border-slate-900 text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                MACD Crossover (Bullish)
                            </button>
                            <button
                                onClick={() => setScreenerFilter('oversold')}
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    screenerFilter === 'oversold'
                                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                                        : 'bg-slate-950/60 border border-slate-900 text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                Extremes (RSI &lt; 35 or &gt; 70)
                            </button>
                            <button
                                onClick={() => setScreenerFilter('volume')}
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    screenerFilter === 'volume'
                                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                                        : 'bg-slate-950/60 border border-slate-900 text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                High Vol Breakout (&gt;= 2x)
                            </button>
                        </div>

                        {/* Database Grid Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-800/80 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                        <th className="pb-3 pl-2">Ticker</th>
                                        <th className="pb-3">Name</th>
                                        <th className="pb-3 text-right">Price</th>
                                        <th className="pb-3 text-right">Change</th>
                                        <th className="pb-3 text-right">RSI (14)</th>
                                        <th className="pb-3 text-center">MACD Trend</th>
                                        <th className="pb-3 text-right">Vol Mult</th>
                                        <th className="pb-3 text-right pr-2">Flags</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/40 text-xs font-mono font-medium">
                                    {filteredStocks.map((stock) => (
                                        <tr key={stock.ticker} className="hover:bg-slate-900/30 transition-all group">
                                            <td className="py-3.5 pl-2 font-bold text-white group-hover:text-emerald-400 transition-colors">
                                                {stock.ticker}
                                            </td>
                                            <td className="py-3.5 text-slate-400 group-hover:text-slate-300 transition-colors">
                                                {stock.name}
                                            </td>
                                            <td className="py-3.5 text-right font-bold text-white">
                                                {stock.price}
                                            </td>
                                            <td className={`py-3.5 text-right font-extrabold ${stock.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                {stock.change}
                                            </td>
                                            <td className={`py-3.5 text-right font-bold ${stock.rsi < 35 ? 'text-blue-400' : stock.rsi > 70 ? 'text-rose-400' : 'text-slate-300'}`}>
                                                {stock.rsi}
                                            </td>
                                            <td className="py-3.5 text-center">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${
                                                    stock.macd === 'Bullish'
                                                        ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                                                        : 'bg-rose-500/10 border border-rose-500/20 text-rose-400'
                                                }`}>
                                                    {stock.macd}
                                                </span>
                                            </td>
                                            <td className="py-3.5 text-right text-slate-300">
                                                {stock.vol}
                                            </td>
                                            <td className="py-3.5 text-right pr-2">
                                                <span className="px-2 py-0.5 rounded-full bg-slate-950 text-slate-500 border border-slate-900 text-[9px] uppercase font-bold">
                                                    {stock.tag}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── AI MULTI-AGENT DAG ORCHESTRATION ── */}
            <section id="orchestration" className="py-24 px-6 border-t border-slate-900/80 bg-slate-950/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 mb-3">AI Agent Telemetry</p>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Directed Acyclic Graph (DAG)</h2>
                        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base font-normal">
                            VajraStocks orchestrates seven specialized AI agents inside Microsoft Agent Framework. Click a node below to review its live telemetry logs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Visual graph nodes flow */}
                        <div className="lg:col-span-6 flex flex-col justify-center gap-3">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Active Pipeline Nodes</span>
                            {AGENT_LIST.map((agent) => (
                                <button
                                    key={agent.id}
                                    onClick={() => setSelectedAgent(agent.id)}
                                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                                        selectedAgent === agent.id
                                            ? 'bg-purple-950/20 border-purple-500/40 shadow-md scale-[1.01]'
                                            : 'bg-slate-900/20 border-slate-800/40 hover:border-slate-800'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-2 h-2 rounded-full ${selectedAgent === agent.id ? 'bg-purple-400 animate-ping' : 'bg-slate-600'}`} />
                                            <span className="font-mono text-xs font-bold text-white">
                                                {agent.name}
                                            </span>
                                        </div>
                                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide border ${agent.color}`}>
                                            {agent.role}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Telemetry Output console */}
                        <div className="lg:col-span-6 flex flex-col">
                            <div className="flex-1 rounded-2xl border border-slate-800 bg-[#0d0f14] p-5 font-mono text-[11px] leading-relaxed flex flex-col justify-between shadow-2xl relative overflow-hidden">
                                <div>
                                    {/* Terminal Header */}
                                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                                        <span>Agent Console Log</span>
                                        <span className="flex items-center gap-1 text-purple-400">
                                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
                                            Active System Stream
                                        </span>
                                    </div>

                                    {/* Active log display */}
                                    <pre className="text-purple-300 font-medium whitespace-pre-wrap leading-relaxed select-text">
                                        {activeAgentData.log}
                                    </pre>
                                </div>

                                <div className="mt-8 border-t border-slate-800/80 pt-4 flex items-center justify-between text-[10px] text-slate-600 font-bold uppercase tracking-wider">
                                    <span>Model: ollama / gemma4</span>
                                    <span>SSE Stream Status: OK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TECHNICAL ARCHITECTURE & DEEP DIVE ── */}
            <section id="architecture" className="py-24 px-6 border-t border-slate-900/80 bg-slate-950/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">System Blueprint</p>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">6-Layer Quant Architecture</h2>
                        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base font-normal">
                            Engineered for strict separation of concerns, high throughput data streaming, and predictable strategy execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {ARCHITECTURE_LAYERS.map((layer, index) => (
                            <div key={index} className="rounded-2xl border border-slate-800/80 bg-[#0d0f14]/85 p-6 hover:border-slate-700/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-sm font-extrabold text-white">{layer.layer}</h4>
                                        <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold font-mono border ${layer.color}`}>
                                            {layer.num}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                                        {layer.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DOWNLOAD SECTION ── */}
            <section id="download" className="py-24 px-6 border-t border-slate-900/80 bg-slate-950/30">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">Free & Open Source</p>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Download VajraStocks</h2>
                        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm font-normal">
                            One-click installers for every platform. No Python or Node.js required — everything is bundled.
                            Available on{' '}
                            <a href="https://github.com/abhishek4official/VajraStocks/releases/tag/v1.3.0" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                                GitHub Releases v1.3.0
                            </a>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {DOWNLOADS.map((dl, i) => (
                            <a
                                key={i}
                                href={dl.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex flex-col gap-3 p-5 rounded-2xl border ${dl.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">{dl.icon}</span>
                                        <span className="text-sm font-extrabold text-white">{dl.label}</span>
                                    </div>
                                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${dl.badge}`}>
                                        {dl.os}
                                    </span>
                                </div>
                                <p className="text-[11px] text-slate-400 leading-relaxed font-normal">{dl.desc}</p>
                                <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/[0.05]">
                                    <span className="font-mono text-[10px] text-slate-500">{dl.file}</span>
                                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors">
                                        Download
                                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="text-center">
                        <a
                            href="https://github.com/abhishek4official/VajraStocks/releases/tag/v1.3.0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
                        >
                            <GitHub />
                            View all release assets and checksums on GitHub
                            <ExternalLink />
                        </a>
                    </div>
                </div>
            </section>

            {/* ── PERSISTENT CTA CARD ── */}
            <section className="py-28 px-6 border-t border-slate-900/80 text-center relative overflow-hidden bg-slate-950/20">
                {/* Visual glow backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Your Personal Trading Terminal
                    </h2>
                    <p className="text-slate-400 mb-10 text-base max-w-lg mx-auto leading-relaxed">
                        VajraStocks is free, open-source, and runs entirely on your machine. No subscriptions. No data sent to the cloud. Just install and start screening.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#download"
                            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            Download Free — v1.3.0
                        </a>
                        <a
                            href="https://github.com/abhishek4official/VajraStocks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-800 bg-slate-950/50 text-slate-300 hover:text-white hover:border-slate-700 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            <GitHub />
                            Star on GitHub
                            <ExternalLink />
                        </a>
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-800/50 bg-transparent text-slate-500 hover:text-slate-300 hover:border-slate-700 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            <ArrowLeft />
                            Back to Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="border-t border-slate-900/60 px-6 py-10 bg-[#07080a]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    <span>
                        Built by{' '}
                        <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                            Abhishek Kumar
                        </Link>{' '}
                        · MIT License
                    </span>
                    <span>React 19 · FastAPI · Python · SQLite · Ollama · TradingView Charts · GitHub Actions</span>
                </div>
            </footer>
        </div>
    );
};

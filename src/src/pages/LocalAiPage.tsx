import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArrowLeft = () => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M17 10H3M7 6l-4 4 4 4" />
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.507.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
);

export const LocalAiPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Local AI & Offline Multi-Agent Systems — Abhishek Kumar';
        return () => { document.title = 'Abhishek Kumar'; };
    }, []);

    const agents = [
        { name: '1. Orchestrator', role: 'Intent Parsing & DAG Dispatch', desc: 'Parses natural language requests into ticker symbols and initiates execution graph.' },
        { name: '2. SQL Specialist', role: 'Database Extraction', desc: 'Generates verified read-only SQL queries against local SQLite database of 2,365+ stocks.' },
        { name: '3. Market Regime', role: 'Macro Trend Evaluation', desc: 'Computes SMA 20/50/200 price action and classifies market trend as Bullish or Bearish.' },
        { name: '4. Trade Planner', role: 'Risk Management & Position Sizing', desc: 'Calculates ATR-calibrated stop loss and multi-tiered profit targets with strict R:R ratios.' },
        { name: '5. Backtester', role: 'Performance Validation', desc: 'Simulates historical strategy execution and calculates Win Rate, CAGR, Sharpe ratio, and Drawdown.' },
        { name: '6. Quant Researcher', role: 'Multi-Model Synthesis', desc: 'Synthesizes Renko bricks, Heikin-Ashi candles, and momentum indicators.' },
        { name: '7. Report Writer', role: 'Markdown Publication & SSE', desc: 'Assembles publication-ready investment reports streamed live via Server-Sent Events.' },
    ];

    return (
        <div className="min-h-screen text-slate-300 antialiased relative selection:bg-teal-500/30 selection:text-white" style={{ background: '#0a0b0e' }}>
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-[800px] left-10 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[160px] pointer-events-none" />

            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 backdrop-blur-lg bg-[#0a0b0e]/80">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold group">
                        <span className="transform group-hover:-translate-x-1 transition-transform inline-flex">
                            <ArrowLeft />
                        </span>
                        Back to Portfolio
                    </Link>
                    <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        <Link to="/ai-agents" className="hover:text-white transition-colors">AI Agents</Link>
                        <Link to="/mcp" className="hover:text-white transition-colors">MCP</Link>
                        <Link to="/agent-frameworks" className="hover:text-white transition-colors">Frameworks</Link>
                        <Link to="/local-ai" className="text-teal-400">Local AI</Link>
                        <Link to="/vajrastocks" className="hover:text-white transition-colors">VajraStocks</Link>
                    </div>
                    <a
                        href="https://github.com/abhishek4official/VajraStocks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white text-xs font-bold transition-all shadow-sm"
                    >
                        <GitHubIcon />
                        <span>VajraStocks Repo</span>
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 border border-teal-500/30 bg-teal-500/10 rounded-full px-4.5 py-1.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-teal-300 tracking-widest uppercase">Privacy-First Offline Intelligence</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                    Local AI &amp; Private Multi-Agent Architectures
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                    Running high-performance multi-agent systems entirely on consumer hardware using Ollama, SQLite, and local LLMs — eliminating cloud subscriptions, external API latency, and data leakage.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        to="/vajrastocks"
                        className="px-6 py-3 rounded-xl bg-teal-600 text-white font-bold text-sm hover:bg-teal-500 transition-all shadow-lg shadow-teal-950/40"
                    >
                        View VajraStocks Platform Case Study
                    </Link>
                    <a
                        href="https://github.com/abhishek4official/VajraStocks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white text-sm font-semibold transition-all"
                    >
                        GitHub Source Code
                    </a>
                </div>
            </section>

            {/* Case Study: VajraStocks 7-Agent DAG */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-2">Production Architecture</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">The 7-Agent Financial Research DAG</h2>
                    <p className="text-slate-400 mt-2 text-sm max-w-xl mx-auto">
                        In VajraStocks, seven specialized agents coordinate to analyze 2,365+ Indian equities without leaving the local machine.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {agents.map((ag, idx) => (
                        <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-[#0d0f14] flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-base font-bold text-white">{ag.name}</h3>
                                    <span className="text-[10px] font-mono text-teal-400 bg-teal-950/40 border border-teal-500/20 px-2 py-0.5 rounded">
                                        {ag.role}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed">{ag.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

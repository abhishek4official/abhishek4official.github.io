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

export const McpPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Model Context Protocol (MCP) Developer Guide — Abhishek Kumar';
        return () => { document.title = 'Abhishek Kumar'; };
    }, []);

    const pythonCode = `from mcp.server import MCPServer
from mcp.types import Tool, TextContent

# Initialize dedicated MCP server instance
server = MCPServer("quant-analysis-tools")

@server.tool(
    name="calculate_position_size",
    description="Calculate risk-weighted position size and R:R ratios based on ATR and capital."
)
def calculate_position_size(
    account_size: float,
    risk_percentage: float,
    entry_price: float,
    stop_loss: float
) -> dict:
    risk_amount = account_size * (risk_percentage / 100.0)
    per_share_risk = abs(entry_price - stop_loss)
    
    if per_share_risk == 0:
        return {"error": "Stop loss cannot equal entry price"}
        
    suggested_shares = int(risk_amount / per_share_risk)
    total_exposure = round(suggested_shares * entry_price, 2)
    
    return {
        "account_size": account_size,
        "max_risk_amount": risk_amount,
        "per_share_risk": round(per_share_risk, 2),
        "suggested_shares": suggested_shares,
        "total_exposure": total_exposure
    }

if __name__ == "__main__":
    server.run(transport="stdio")`;

    return (
        <div className="min-h-screen text-slate-300 antialiased relative selection:bg-purple-500/30 selection:text-white" style={{ background: '#0a0b0e' }}>
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-[900px] left-10 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none" />

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
                        <Link to="/mcp" className="text-purple-400">MCP</Link>
                        <Link to="/agent-frameworks" className="hover:text-white transition-colors">Frameworks</Link>
                        <Link to="/local-ai" className="hover:text-white transition-colors">Local AI</Link>
                        <Link to="/vajrastocks" className="hover:text-white transition-colors">VajraStocks</Link>
                    </div>
                    <a
                        href="https://github.com/modelcontextprotocol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white text-xs font-bold transition-all shadow-sm"
                    >
                        <GitHubIcon />
                        <span>MCP Official</span>
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 rounded-full px-4.5 py-1.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-purple-300 tracking-widest uppercase">Open Standard by Anthropic</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                    Model Context Protocol (MCP) Developer Guide
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                    A comprehensive technical breakdown of Model Context Protocol: client-server architecture, building production Python MCP servers, transport protocols, and MCP vs Function Calling.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="https://modelcontextprotocol.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-500 transition-all shadow-lg shadow-purple-950/40"
                    >
                        Official Specification Docs
                    </a>
                    <Link
                        to="/ai-agents"
                        className="px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white text-sm font-semibold transition-all"
                    >
                        Autonomous AI Agents
                    </Link>
                </div>
            </section>

            {/* Answer-First Executive Summary */}
            <section className="py-10 px-6 max-w-5xl mx-auto">
                <div className="border border-purple-500/20 bg-purple-950/10 rounded-2xl p-6 sm:p-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2 font-mono">What Is Model Context Protocol (MCP)?</h2>
                    <p className="text-white text-lg font-medium leading-relaxed mb-4">
                        The <strong>Model Context Protocol (MCP)</strong> is an open protocol created by Anthropic that standardizes how artificial intelligence applications (clients) discover, authenticate, and interact with external data sources, prompts, and executable tools (servers).
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Rather than maintaining proprietary tool integrations for every individual AI model or IDE harness, MCP functions as the <strong>USB-C for AI</strong>: developers write an MCP server once, and any MCP-compliant client (Claude Desktop, Cursor, Antigravity, or custom agent runtimes) can instantly consume its tools and resources.
                    </p>
                </div>
            </section>

            {/* Core MCP Architecture & Primitives */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Protocol Architecture</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">The Three Core MCP Primitives</h2>
                    <p className="text-slate-400 mt-2 text-sm max-w-xl mx-auto">
                        Every MCP server exposes its functionality through three standardized primitives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl border border-purple-500/30 bg-[#0d0f14] flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-black uppercase tracking-wider font-mono px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-4 inline-block">
                                01. Tools
                            </span>
                            <h3 className="text-xl font-bold text-white mb-2">Executable Tools</h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                Functions that perform computation or state modification (e.g. running a stock backtest, executing a git commit, or querying an external API). Each tool exposes a JSON-Schema parameter definition.
                            </p>
                        </div>
                        <div className="text-[11px] font-mono text-purple-400 bg-purple-950/20 p-2.5 rounded border border-purple-900/30">
                            Protocol: tools/list &amp; tools/call
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl border border-indigo-500/30 bg-[#0d0f14] flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-black uppercase tracking-wider font-mono px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-4 inline-block">
                                02. Resources
                            </span>
                            <h3 className="text-xl font-bold text-white mb-2">Context Resources</h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                Read-only data payloads similar to files or database rows (e.g. historical price data, system logs, or configuration manifests) that LLMs ingest into context.
                            </p>
                        </div>
                        <div className="text-[11px] font-mono text-indigo-400 bg-indigo-950/20 p-2.5 rounded border border-indigo-900/30">
                            Protocol: resources/list &amp; resources/read
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl border border-cyan-500/30 bg-[#0d0f14] flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-black uppercase tracking-wider font-mono px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-4 inline-block">
                                03. Prompts
                            </span>
                            <h3 className="text-xl font-bold text-white mb-2">Prompt Templates</h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                Pre-packaged prompt workflows and instructions that can be parameterized by users or client applications to streamline repetitive multi-step agent behaviors.
                            </p>
                        </div>
                        <div className="text-[11px] font-mono text-cyan-400 bg-cyan-950/20 p-2.5 rounded border border-cyan-900/30">
                            Protocol: prompts/list &amp; prompts/get
                        </div>
                    </div>
                </div>
            </section>

            {/* MCP vs Function Calling Table */}
            <section className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">MCP vs Traditional Function Calling</h2>
                    <p className="text-slate-400 mt-2 text-sm max-w-xl mx-auto">
                        Why the open client-server architecture replaces proprietary function schemas.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800">
                    <table className="w-full text-left text-xs border-collapse">
                        <thead>
                            <tr className="bg-slate-900/60 text-slate-400 border-b border-slate-800 uppercase tracking-wider font-mono">
                                <th className="p-4">Feature Dimension</th>
                                <th className="p-4 text-purple-400">Model Context Protocol (MCP)</th>
                                <th className="p-4 text-slate-400">Traditional Function Calling</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-300">
                            <tr>
                                <td className="p-4 font-bold text-white">Coupling</td>
                                <td className="p-4 text-emerald-400">Decoupled client-server architecture</td>
                                <td className="p-4 text-rose-400">Tightly coupled to specific model API schemas</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">Portability</td>
                                <td className="p-4 text-emerald-400">Universal: runs in Claude, Cursor, Antigravity, custom</td>
                                <td className="p-4 text-rose-400">Proprietary: rewritten per provider (OpenAI, Anthropic)</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">Execution Sandbox</td>
                                <td className="p-4 text-emerald-400">Isolated process boundary via stdio or SSE</td>
                                <td className="p-4 text-amber-400">Direct in-process execution or custom webhook server</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">Resource Streaming</td>
                                <td className="p-4 text-emerald-400">Native resource subscriptions &amp; real-time updates</td>
                                <td className="p-4 text-rose-400">No standardized resource or streaming primitives</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">Discovery</td>
                                <td className="p-4 text-emerald-400">Dynamic discovery at runtime via handshake</td>
                                <td className="p-4 text-amber-400">Static tools registered during API payload initialization</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Python Code Example */}
            <section className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Building a Production Python MCP Server</h2>
                        <p className="text-xs text-slate-400 mt-1">Example: A quantitative position-sizing tool built with the official Python SDK.</p>
                    </div>
                    <span className="text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-lg">
                        python-sdk: mcp.server
                    </span>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#0d0f14] overflow-hidden p-4 sm:p-6 shadow-2xl">
                    <pre className="text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed">
                        <code>{pythonCode}</code>
                    </pre>
                </div>
            </section>
        </div>
    );
};

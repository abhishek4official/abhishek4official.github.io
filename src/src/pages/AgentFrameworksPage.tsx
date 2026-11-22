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

export const AgentFrameworksPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Microsoft Agent Framework vs LangGraph — Architecture Comparison — Abhishek Kumar';
        return () => { document.title = 'Abhishek Kumar'; };
    }, []);

    return (
        <div className="min-h-screen text-slate-300 antialiased relative selection:bg-blue-500/30 selection:text-white" style={{ background: '#0a0b0e' }}>
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-[800px] right-10 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />

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
                        <Link to="/agent-frameworks" className="text-blue-400">Frameworks</Link>
                        <Link to="/local-ai" className="hover:text-white transition-colors">Local AI</Link>
                        <Link to="/vajrastocks" className="hover:text-white transition-colors">VajraStocks</Link>
                    </div>
                    <a
                        href="https://github.com/microsoft/semantic-kernel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white text-xs font-bold transition-all shadow-sm"
                    >
                        <GitHubIcon />
                        <span>Microsoft Framework</span>
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-4.5 py-1.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-blue-300 tracking-widest uppercase">Enterprise Multi-Agent Architecture</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                    Microsoft Agent Framework vs LangGraph
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                    An architectural evaluation of enterprise multi-agent frameworks: comparing Microsoft Agent Framework (unifying AutoGen and Semantic Kernel) against LangGraph and native Directed Acyclic Graphs (DAGs).
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        to="/ai-agents"
                        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-950/40"
                    >
                        Explore Autonomous AI Agents
                    </Link>
                    <Link
                        to="/local-ai"
                        className="px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white text-sm font-semibold transition-all"
                    >
                        View Local AI Systems
                    </Link>
                </div>
            </section>

            {/* Answer-First Executive Summary */}
            <section className="py-10 px-6 max-w-5xl mx-auto">
                <div className="border border-blue-500/20 bg-blue-950/10 rounded-2xl p-6 sm:p-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 font-mono">Executive Architectural Summary</h2>
                    <p className="text-white text-lg font-medium leading-relaxed mb-4">
                        The <strong>Microsoft Agent Framework</strong> represents Microsoft’s unification of <strong>Semantic Kernel</strong> (enterprise security, thread state, model connectors, and telemetry) and <strong>AutoGen</strong> (multi-agent conversational handoffs). It is purpose-built for enterprise .NET and Python environments on Azure AI Foundry.
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        In contrast, <strong>LangGraph</strong> excels at cyclic, graph-based state machines requiring arbitrary human-in-the-loop breakpoints and time-travel state rollbacks. For ultra-low latency local execution (such as VajraStocks), a <strong>pure Directed Acyclic Graph (DAG)</strong> orchestrator offers predictable execution times without framework overhead.
                    </p>
                </div>
            </section>

            {/* Comparative Breakdown Table */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Side-by-Side Framework Matrix</h2>
                    <p className="text-slate-400 mt-2 text-sm max-w-xl mx-auto">
                        Evaluating key engineering criteria across enterprise and open-source frameworks.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800">
                    <table className="w-full text-left text-xs border-collapse">
                        <thead>
                            <tr className="bg-slate-900/60 text-slate-400 border-b border-slate-800 uppercase tracking-wider font-mono">
                                <th className="p-4">Criteria</th>
                                <th className="p-4 text-blue-400">Microsoft Agent Framework</th>
                                <th className="p-4 text-emerald-400">LangGraph</th>
                                <th className="p-4 text-purple-400">Custom DAG Orchestrator</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-300">
                            <tr>
                                <td className="p-4 font-bold text-white">Language Support</td>
                                <td className="p-4 text-slate-200">First-class Python &amp; C# (.NET Core)</td>
                                <td className="p-4 text-slate-200">Python &amp; JavaScript/TypeScript</td>
                                <td className="p-4 text-slate-200">Any (Pure Python in VajraStocks)</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">Enterprise Cloud</td>
                                <td className="p-4 text-emerald-400">Native Azure AI Foundry &amp; Azure Functions</td>
                                <td className="p-4 text-slate-200">LangSmith &amp; LangGraph Cloud</td>
                                <td className="p-4 text-slate-200">Self-hosted / Local-first</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">Graph Topology</td>
                                <td className="p-4 text-slate-200">Sequential handoffs, Magentic-One, group chats</td>
                                <td className="p-4 text-emerald-400">Cyclic state graphs with conditional branching</td>
                                <td className="p-4 text-purple-300">Strict Directed Acyclic Graphs (no cycles)</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">State Management</td>
                                <td className="p-4 text-slate-200">Thread-based session state with Azure storage</td>
                                <td className="p-4 text-emerald-400">Checkpointer-backed persistence with time-travel</td>
                                <td className="p-4 text-slate-200">Immutable JSON payloads &amp; SQLite snapshots</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">MCP Integration</td>
                                <td className="p-4 text-emerald-400">Native support for Model Context Protocol</td>
                                <td className="p-4 text-emerald-400">Community adapters &amp; tool wrappers</td>
                                <td className="p-4 text-emerald-400">Direct stdio/SSE client connections</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

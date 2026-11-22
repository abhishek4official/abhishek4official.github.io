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

export const AiAgentsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Autonomous AI Agents & Multi-Agent Architecture — Abhishek Kumar';
        return () => { document.title = 'Abhishek Kumar'; };
    }, []);

    const phases = [
        {
            num: 'Phase 1',
            gate: 'GATE 1 (Approval Gate)',
            title: 'Requirement Alignment & Scope',
            badge: 'Read-Only Exploration',
            desc: 'The agent explores the codebase in read-only mode, inspects MEMORY.md, and produces a strict technical specification with acceptance criteria and ticket references before any code changes are planned.',
            rule: 'No filesystem modifications or dependencies can be touched until human approves Gate 1.',
            color: 'border-blue-500/30 bg-blue-500/5 text-blue-400'
        },
        {
            num: 'Phase 2',
            gate: 'GATE 2 (Approval Gate)',
            title: 'Implementation Plan & Documentation Strategy',
            badge: 'Deterministic Blueprint',
            desc: 'Formulates an atomic, step-by-step implementation plan: exact files to create, edit, or delete; SemVer version bump strategy; and changelog/spec updates.',
            rule: 'Requires explicit human confirmation before creating branches or editing files.',
            color: 'border-indigo-500/30 bg-indigo-500/5 text-indigo-400'
        },
        {
            num: 'Phase 3',
            gate: 'Circuit Breaker Active',
            title: 'Implementation & Verification',
            badge: 'Automated 3-Strike Safety',
            desc: 'Executes the approved plan on a dedicated feature branch. Runs non-interactive test suites and linters. If tests fail after 3 consecutive attempts, execution immediately halts to eliminate infinite hallucinated patch loops.',
            rule: 'Strictly prohibits deviation from approved architecture without reverting to Phase 2.',
            color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400'
        },
        {
            num: 'Phase 4',
            gate: 'GATE 3 (Pre-Commit Gate)',
            title: 'Diff Review & Iteration',
            badge: 'Human Governance',
            desc: 'Presents a concise summary of file diffs, test outputs, version bumps, and documentation updates for human verification.',
            rule: 'No git staging or committing is permitted until the human operator signs off on the diffs.',
            color: 'border-purple-500/30 bg-purple-500/5 text-purple-400'
        },
        {
            num: 'Phase 5',
            gate: 'Memory Retention',
            title: 'Safe Git Commit & Pattern Retention',
            badge: 'Zero-Leak Hygiene',
            desc: 'Records new architectural patterns and platform gotchas into persistent MEMORY.md for future sessions. Commits using Conventional Commits. Pushing to remote is strictly manual.',
            rule: 'Never runs git push unless explicitly requested by the user.',
            color: 'border-pink-500/30 bg-pink-500/5 text-pink-400'
        }
    ];

    return (
        <div className="min-h-screen text-slate-300 antialiased relative selection:bg-emerald-500/30 selection:text-white" style={{ background: '#0a0b0e' }}>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[140px] pointer-events-none" />
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
                        <Link to="/ai-agents" className="text-emerald-400">AI Agents</Link>
                        <Link to="/mcp" className="hover:text-white transition-colors">MCP</Link>
                        <Link to="/agent-frameworks" className="hover:text-white transition-colors">Frameworks</Link>
                        <Link to="/local-ai" className="hover:text-white transition-colors">Local AI</Link>
                        <Link to="/vajrastocks" className="hover:text-white transition-colors">VajraStocks</Link>
                    </div>
                    <a
                        href="https://github.com/abhishek4official/CodingAgent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white text-xs font-bold transition-all shadow-sm"
                    >
                        <GitHubIcon />
                        <span>CodingAgent Repo</span>
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 rounded-full px-4.5 py-1.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-emerald-300 tracking-widest uppercase">Autonomous AI Systems & Governance</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                    Deterministic AI Agents &amp; Multi-Agent Systems
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                    Moving beyond naive LLM prompt loops into production-grade multi-agent architectures governed by human-in-the-loop safety gates, automated test circuit breakers, and persistent cross-session memory.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="https://github.com/abhishek4official/CodingAgent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-950/40"
                    >
                        <GitHubIcon />
                        <span>Explore Strict Coding Pipeline</span>
                    </a>
                    <Link
                        to="/agent-frameworks"
                        className="px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white text-sm font-semibold transition-all"
                    >
                        Compare Agent Frameworks
                    </Link>
                </div>
            </section>

            {/* Answer-First Executive Summary */}
            <section className="py-12 px-6 max-w-5xl mx-auto">
                <div className="border border-emerald-500/20 bg-emerald-950/10 rounded-2xl p-6 sm:p-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 font-mono">What Is An Autonomous AI Agent?</h2>
                    <p className="text-white text-lg font-medium leading-relaxed mb-4">
                        An <strong>Autonomous AI Agent</strong> is a computational system powered by large language models that perceives task objectives, decomposes goals into sequential execution sub-tasks, calls external tools and APIs, observes real-world environment feedback, and iterates towards completion without requiring step-by-step human prompts.
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        In enterprise software engineering, unconstrained autonomous agents frequently produce hallucinations, destructive file rewrites, and circular debugging loops. Production architectures resolve this via <strong>deterministic state machines</strong>, <strong>approval gates</strong>, and <strong>test circuit breakers</strong>.
                    </p>
                </div>
            </section>

            {/* 5-Phase Gated Pipeline */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">Architectural Blueprint</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">The 5-Phase Strict Gated Coding Pipeline</h2>
                    <p className="text-slate-400 mt-3 text-sm max-w-2xl mx-auto">
                        Developed and open-sourced by Abhishek Kumar in <span className="font-mono text-emerald-400">abhishek4official/CodingAgent</span>, this protocol standardizes autonomous software development across all major agent harnesses.
                    </p>
                </div>

                <div className="space-y-6">
                    {phases.map((phase, idx) => (
                        <div key={idx} className={`p-6 sm:p-8 rounded-2xl border ${phase.color} transition-all`}>
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-black uppercase tracking-wider font-mono px-3 py-1 rounded bg-black/40 border border-white/10">
                                        {phase.num}
                                    </span>
                                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400">
                                        {phase.gate}
                                    </span>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-current">
                                    {phase.badge}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                            <p className="text-sm text-slate-300 leading-relaxed mb-3">{phase.desc}</p>
                            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 border-t border-white/10 pt-3">
                                <span className="text-emerald-400 font-bold">Rule:</span>
                                <span>{phase.rule}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Universal Cross-Agent Parity */}
            <section className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Universal Cross-Harness Configuration Parity</h2>
                    <p className="text-slate-400 mt-2 text-sm max-w-xl mx-auto">
                        A single behavioral specification mapped directly to the configuration native to each coding agent.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { harness: 'Google Antigravity', config: 'rules/AGENTS.md & SKILL.md', desc: 'Native plugin configuration with built-in pipeline enforcement.' },
                        { harness: 'Claude Code', config: 'CLAUDE.md', desc: 'Project-level system instructions loaded on every CLI conversation start.' },
                        { harness: 'Cursor', config: '.cursorrules', desc: 'Rules applied across IDE composer and chat sessions.' },
                        { harness: 'GitHub Copilot', config: '.github/copilot-instructions.md', desc: 'Repository-level instructions for Copilot workspace and pull requests.' },
                        { harness: 'Windsurf', config: '.windsurfrules', desc: 'Cascade memory and execution rules for multi-file edits.' },
                        { harness: 'Gemini CLI', config: 'GEMINI.md', desc: 'Command-line agent workspace instructions and execution boundaries.' },
                    ].map((item, idx) => (
                        <div key={idx} className="p-5 rounded-xl border border-slate-800 bg-[#0d0f14] flex flex-col justify-between">
                            <div>
                                <h3 className="text-sm font-bold text-white mb-1">{item.harness}</h3>
                                <p className="text-xs font-mono text-emerald-400 mb-2">{item.config}</p>
                                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-slate-800/80">
                <h2 className="text-3xl font-extrabold text-white mb-4">Integrate the Strict Agentic Pipeline</h2>
                <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto">
                    Eliminate hallucinated bugfix loops and take governance over your AI engineering teams today.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="https://github.com/abhishek4official/CodingAgent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-md"
                    >
                        View CodingAgent on GitHub
                    </a>
                    <Link
                        to="/mcp"
                        className="px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white text-sm font-semibold transition-all"
                    >
                        Explore Model Context Protocol
                    </Link>
                </div>
            </section>
        </div>
    );
};

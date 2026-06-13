import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { resumeData } from '../data/resume';

export const Hero = () => {
    return (
        <Section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-visible bg-grid-mesh">
            {/* Dark Ambient Glow Backdrops */}
            <div className="absolute top-0 right-0 -z-10 opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-900/20 to-indigo-950/5 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 -z-10 opacity-40 -translate-x-1/4 translate-y-1/4 pointer-events-none">
                <div className="w-[500px] h-[500px] bg-gradient-to-tr from-amber-900/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* ── LEFT: Bio text ── */}
                <div className="lg:col-span-7 max-w-xl relative">
                    <Reveal delay={100}>
                        <div className="inline-flex items-center gap-2 border border-amber-500/25 bg-amber-500/5 rounded-full px-3.5 py-1 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase">Open for new opportunities</span>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 relative">
                            {resumeData.name}
                            <span className="absolute -top-6 -left-6 w-12 h-12 bg-purple-500/10 rounded-full -z-10 blur-xl"></span>
                        </h1>
                    </Reveal>
                    <Reveal delay={200}>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-300 mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-amber-500 rounded-full shrink-0"></span>
                            {resumeData.title}
                        </h2>
                    </Reveal>
                    <Reveal delay={300}>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl font-normal">
                            Architecting scalable enterprise cloud systems and autonomous AI-driven solutions for over a decade.
                        </p>
                    </Reveal>
                    <Reveal delay={400}>
                        <div className="flex flex-wrap gap-4">
                            <a href="/ResumeAbhishek.pdf" download>
                                <Button variant="primary" size="lg" className="shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    Download Resume
                                </Button>
                            </a>
                            <a href="#contact">
                                <Button variant="outline" size="lg" className="hover:scale-[1.02] active:scale-[0.98] transition-all text-white border-white/10 hover:border-white/20">
                                    Contact Me
                                </Button>
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* ── RIGHT: VajraStocks featured project card ── */}
                <div className="lg:col-span-5">
                    <Reveal delay={350}>
                        <Link to="/vajrastocks" className="block group hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                            <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl bg-surface hover:border-purple-500/30 transition-all duration-500">
                                
                                {/* Background gradients inside card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f14] to-[#141824] -z-10" />

                                {/* Subtle card glow accents */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-16 -left-10 w-48 h-48 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

                                {/* Content */}
                                <div className="p-8">

                                    {/* Eyebrow */}
                                    <div className="flex items-center gap-2 mb-5">
                                        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/15 rounded-full px-3 py-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                            Featured Project
                                        </span>
                                    </div>

                                    {/* Logo + name */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center shrink-0">
                                            <svg viewBox="0 0 20 20" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                                <polyline points="2,15 6,9 9,12 14,5 18,8" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-extrabold text-white tracking-tight">VajraStocks</h3>
                                            <p className="text-slate-500 text-xs">NSE Quantitative Analysis Platform</p>
                                        </div>
                                    </div>

                                    {/* One-liner */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                                        A full-stack stock research platform with 7 autonomous AI agents, 6 quant strategies, and a sub-5ms screener across 2,365+ NSE stocks — runs entirely on your machine.
                                    </p>

                                    {/* 3 key stats */}
                                    <div className="grid grid-cols-3 gap-3 mb-6">
                                        {[
                                            { num: '2,365+', label: 'NSE Stocks' },
                                            { num: '7',      label: 'AI Agents' },
                                            { num: '6',      label: 'Quant Strategies' },
                                        ].map(s => (
                                            <div key={s.label} className="bg-white/[0.02] rounded-xl p-3 border border-white/[0.05] text-center">
                                                <p className="text-lg font-bold text-white tracking-tight">{s.num}</p>
                                                <p className="text-[10px] text-slate-500 mt-0.5 font-bold uppercase tracking-wider">{s.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tag strip */}
                                    <div className="flex flex-wrap gap-2">
                                        {['React 19', 'FastAPI', 'Agentic DAG', 'Lightweight Charts'].map(t => (
                                            <span key={t} className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.06] font-semibold">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom CTA bar */}
                                <div className="relative border-t border-white/[0.06] bg-white/[0.01] px-8 py-4 flex items-center justify-between">
                                    <span className="text-xs text-slate-500 font-mono">abhishek4official/VajraStocks</span>
                                    <span className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                                        View full case study
                                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                                            <path d="M3 8h10M9 4l4 4-4 4" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
};

import { useState } from 'react';
import { Section } from '../components/layout/Section';
import { DynamicCard } from '../components/ui/DynamicCard';
import { Reveal } from '../components/ui/Reveal';
import { resumeData } from '../data/resume';

export const Experience = () => {
    const [activeRoleIndex, setActiveRoleIndex] = useState(0);

    const activeRole = resumeData.experience[activeRoleIndex] || resumeData.experience[0];

    return (
        <Section id="experience" className="bg-surface/30 border-b border-white/[0.04] relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-16 text-center md:text-left">
                <Reveal>
                    <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-3">Professional History</h3>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Experience Timeline</h2>
                    <p className="text-slate-400 mt-3 text-sm max-w-xl leading-relaxed">
                        An interactive timeline of Abhishek's 11+ years of software architecture and developer history. Click a node to view detailed outcomes.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* ── LEFT COLUMN: Interactive Trunk Timeline ── */}
                <div className="lg:col-span-5 relative pl-6 md:pl-8 border-l border-white/[0.08] space-y-6">
                    {resumeData.experience.map((role, index) => {
                        const isActive = activeRoleIndex === index;
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveRoleIndex(index)}
                                className="w-full text-left group focus:outline-none select-none relative pb-2 block"
                            >
                                {/* Timeline Node Dot Indicator */}
                                <span className={`absolute -left-[30px] md:-left-[38px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                                    isActive
                                        ? 'bg-amber-400 border-amber-500 shadow-md shadow-amber-500/20 scale-125'
                                        : 'bg-[#07080b] border-white/[0.12] group-hover:border-amber-500/50'
                                }`} />

                                <div className="transition-all duration-300">
                                    <span className={`text-[10px] font-bold tracking-wider uppercase font-mono block ${
                                        isActive ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-400'
                                    }`}>
                                        {role.period}
                                    </span>
                                    <h4 className={`text-base font-extrabold transition-all ${
                                        isActive ? 'text-white scale-[1.01]' : 'text-slate-400 group-hover:text-slate-200'
                                    }`}>
                                        {role.company}
                                    </h4>
                                    <p className={`text-xs ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                                        {role.role}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* ── RIGHT COLUMN: Metric Details Card ── */}
                <div className="lg:col-span-7">
                    <Reveal key={activeRoleIndex} delay={100} width="100%">
                        <DynamicCard className="border border-white/[0.06] bg-surface p-8 shadow-2xl relative min-h-[350px] flex flex-col justify-between">
                            <div>
                                {/* Header Info */}
                                <div className="flex items-start justify-between border-b border-white/[0.06] pb-5 mb-6">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/15 rounded-full px-3 py-1 mb-2.5 inline-block">
                                            {activeRole.type}
                                        </span>
                                        <h3 className="text-2xl font-extrabold text-white tracking-tight">
                                            {activeRole.role}
                                        </h3>
                                        <p className="text-sm font-semibold text-slate-400 font-mono">
                                            {activeRole.company} · {activeRole.period}
                                        </p>
                                    </div>
                                </div>

                                {/* Key Highlights List */}
                                <ul className="space-y-4">
                                    {activeRole.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start gap-3.5">
                                            <span className="shrink-0 w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-extrabold text-xs mt-0.5 select-none">
                                                ✓
                                            </span>
                                            <span className="text-sm text-slate-300 leading-relaxed font-normal">
                                                {highlight}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Timeline Context Badge footer */}
                            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-600 font-bold uppercase tracking-wider font-mono select-none">
                                <span>Abhishek Kumar</span>
                                <span>Milestone Node {activeRoleIndex + 1} of {resumeData.experience.length}</span>
                            </div>
                        </DynamicCard>
                    </Reveal>
                </div>

            </div>
        </Section>
    );
};

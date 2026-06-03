import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { DynamicCard } from '../components/ui/DynamicCard';
import { Reveal } from '../components/ui/Reveal';
import { resumeData } from '../data/resume';

// Detailed SVG icons
const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5 inline-block align-middle">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.507.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block align-middle ml-1">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);

export const Projects = () => {
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    // Extract all unique technologies from across all projects
    const allTechs = Array.from(
        new Set(resumeData.projects.flatMap((project) => project.techStack))
    ).sort();

    const handleTechClick = (tech: string) => {
        if (selectedTech === tech) {
            setSelectedTech(null); // Clear filter
        } else {
            setSelectedTech(tech); // Set filter
        }
    };

    return (
        <Section id="projects" className="bg-surface/10 border-b border-white/[0.04]">
            <div className="mb-14 text-center md:text-left">
                <Reveal>
                    <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">Selected Projects</h3>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Engineering Case Studies</h2>
                    <p className="text-slate-400 mt-3 text-sm max-w-xl leading-relaxed">
                        A list of core enterprise platforms built by Abhishek. Click a tag below to dynamically filter matching stacks.
                    </p>
                </Reveal>
            </div>

            {/* ── Filter Tech tags strip ── */}
            <div className="mb-12 flex flex-wrap gap-2 justify-center md:justify-start border-b border-white/[0.06] pb-6">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mr-3 self-center select-none font-mono">
                    Filter Stack:
                </span>
                {allTechs.map((tech) => {
                    const isFiltered = selectedTech === tech;
                    return (
                        <button
                            key={tech}
                            onClick={() => handleTechClick(tech)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono tracking-wider transition-all duration-300 hover:scale-105 ${
                                isFiltered
                                    ? 'bg-purple-600 border border-purple-500 text-white shadow-md shadow-purple-900/30'
                                    : 'bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white hover:border-white/[0.12]'
                            }`}
                        >
                            {tech}
                        </button>
                    );
                })}
                {selectedTech && (
                    <button
                        onClick={() => setSelectedTech(null)}
                        className="px-3 py-1.5 rounded-lg text-[10px] font-black font-mono tracking-wider bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20"
                    >
                        Clear Filter [x]
                    </button>
                )}
            </div>

            {/* ── Case Studies listings ── */}
            <div className="space-y-8">
                {resumeData.projects.map((project, index) => {
                    const isVajra = project.title.toLowerCase().includes('vajrastocks');
                    const hasSelectedTech = selectedTech ? project.techStack.includes(selectedTech) : true;
                    
                    return (
                        <Reveal key={index} delay={index * 80} className="w-full">
                            <div className={`transition-all duration-500 ${
                                selectedTech && !hasSelectedTech 
                                    ? 'opacity-20 blur-[1px] scale-[0.99] pointer-events-none' 
                                    : 'opacity-100 scale-100'
                            }`}>
                                <DynamicCard className={`border border-white/[0.06] bg-surface p-8 shadow-2xl relative ${
                                    isVajra ? 'hover:border-purple-500/40' : 'hover:border-emerald-500/30'
                                }`}>
                                    <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                                        
                                        {/* Left Side: Info */}
                                        <div className="flex-1 space-y-4">
                                            {/* Badge Row */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                                                    isVajra 
                                                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' 
                                                        : 'bg-white/[0.03] border-white/[0.08] text-slate-400'
                                                }`}>
                                                    {isVajra ? 'Quant Platform & Flagship' : 'Enterprise Engineering'}
                                                </span>
                                                {project.github && (
                                                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2.5 py-1">
                                                        Open Source
                                                    </span>
                                                )}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                                                {project.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-slate-400 leading-relaxed font-normal">
                                                {project.description}
                                            </p>

                                            {/* Outcome block */}
                                            <div className="pt-2">
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono block mb-1.5">Outcome</span>
                                                <p className="text-slate-300 font-medium text-xs border-l-2 border-emerald-500/50 pl-3.5 leading-relaxed font-sans">
                                                    {project.outcome}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Right Side: Stacks & Links */}
                                        <div className="w-full md:w-80 shrink-0 flex flex-col justify-between self-stretch gap-6">
                                            {/* Tech Badge Grid */}
                                            <div>
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono block mb-3">Deployment Stack</span>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.techStack.map((tech) => {
                                                        const isMatchingFilter = selectedTech === tech;
                                                        return (
                                                            <span
                                                                key={tech}
                                                                className={`px-2.5 py-1 rounded text-[9px] font-bold font-mono tracking-wide border transition-all ${
                                                                    isMatchingFilter
                                                                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 font-black'
                                                                        : 'bg-white/[0.03] border-white/[0.06] text-slate-400'
                                                                }`}
                                                            >
                                                                {tech}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Links container */}
                                            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs font-bold text-slate-300 hover:text-white transition-colors"
                                                    >
                                                        <GitHubIcon />
                                                        GitHub Codebase
                                                    </a>
                                                )}
                                                {isVajra ? (
                                                    <Link
                                                        to="/vajrastocks"
                                                        className="text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
                                                    >
                                                        Case Study Review
                                                        <ExternalLinkIcon />
                                                    </Link>
                                                ) : null}
                                            </div>

                                        </div>

                                    </div>
                                </DynamicCard>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
};

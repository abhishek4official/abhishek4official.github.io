import { Section } from '../components/layout/Section';
import { DynamicCard } from '../components/ui/DynamicCard';
import { Reveal } from '../components/ui/Reveal';
import { resumeData } from '../data/resume';

const categoryColors: Record<string, { badge: string; text: string; bg: string; dot: string }> = {
    "Cloud & Architecture": {
        badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
        text: "text-indigo-400",
        bg: "hover:border-indigo-500/30",
        dot: "bg-indigo-400"
    },
    "AI & LLM Systems": {
        badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        text: "text-purple-400",
        bg: "hover:border-purple-500/30",
        dot: "bg-purple-400"
    },
    "Quantitative & Data": {
        badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        text: "text-emerald-400",
        bg: "hover:border-emerald-500/30",
        dot: "bg-emerald-400"
    },
    "Backend Engineering": {
        badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
        text: "text-blue-400",
        bg: "hover:border-blue-500/30",
        dot: "bg-blue-400"
    },
    "Frontend & Web": {
        badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
        text: "text-cyan-400",
        bg: "hover:border-cyan-500/30",
        dot: "bg-cyan-400"
    },
    "DevOps & Leadership": {
        badge: "bg-teal-500/10 text-teal-300 border-teal-500/20",
        text: "text-teal-400",
        bg: "hover:border-teal-500/30",
        dot: "bg-teal-400"
    }
};

const gridSpans: Record<string, string> = {
    "AI & LLM Systems": "md:col-span-2",
    "Cloud & Architecture": "md:col-span-2",
    "DevOps & Leadership": "md:col-span-2",
    "Quantitative & Data": "md:col-span-1",
    "Backend Engineering": "md:col-span-1",
    "Frontend & Web": "md:col-span-1"
};

export const Expertise = () => {
    return (
        <Section id="expertise" className="bg-slate-950/10 border-b border-white/[0.04]">
            <div className="mb-16 text-center md:text-left">
                <Reveal>
                    <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-3">Core Expertise</h3>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Technical Domain Bento</h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resumeData.expertise.map((group, index) => {
                    const colors = categoryColors[group.category] || {
                        badge: "bg-white/5 text-slate-300 border-white/10",
                        text: "text-white",
                        bg: "",
                        dot: "bg-white"
                    };
                    const span = gridSpans[group.category] || "col-span-1";

                    return (
                        <Reveal key={index} delay={index * 80} className={`${span} h-full`}>
                            <DynamicCard className={`h-full border border-white/[0.06] bg-surface ${colors.bg}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className={`w-2.5 h-2.5 rounded-full ${colors.dot} animate-pulse shrink-0`} />
                                    <h4 className="text-lg font-bold text-white tracking-tight font-sans">{group.category}</h4>
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    {group.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className={`px-3 py-1.5 rounded-xl border text-[11px] font-bold font-mono tracking-wide transition-all duration-300 hover:scale-105 select-none ${colors.badge}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </DynamicCard>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
};

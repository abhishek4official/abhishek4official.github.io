// React import removed
import { Section } from '../components/layout/Section';
import { Reveal } from '../components/ui/Reveal';
import { resumeData } from '../data/resume';

export const Experience = () => {
    return (
        <Section id="experience" className="bg-surface/30">
            <div className="mb-12">
                <Reveal>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Professional History</h3>
                    <h2 className="text-3xl font-bold text-slate-900">Experience Highlights</h2>
                </Reveal>
            </div>

            <div className="space-y-12">
                {resumeData.experience.map((role, index) => (
                    <Reveal key={index} width="100%">
                        <div className="grid md:grid-cols-12 gap-6 md:gap-12 group">
                            <div className="md:col-span-4">
                                <h4 className="text-xl font-bold text-slate-900">{role.company}</h4>
                                <p className="text-emerald-accent font-medium">{role.role}</p>
                                <p className="text-sm text-slate-500 mt-1">{role.period} | {role.type}</p>
                            </div>
                            <div className="md:col-span-8">
                                <ul className="space-y-4">
                                    {role.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start">
                                            <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-accent group-hover:bg-emerald-800 transition-colors"></span>
                                            <span className="text-slate-700 leading-relaxed">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

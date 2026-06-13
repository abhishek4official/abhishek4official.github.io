import { Section } from '../components/layout/Section';
import { Reveal } from '../components/ui/Reveal';
import { resumeData } from '../data/resume';

export const Certifications = () => {
    return (
        <Section id="certifications" className="bg-surface/30 border-b border-white/[0.04] text-white">
            <div className="md:flex md:justify-between md:items-center">
                <div>
                    <Reveal>
                        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-3">Qualifications</h3>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Certifications & Education</h2>
                    </Reveal>
                </div>
                <div className="space-y-4 md:text-right mt-6 md:mt-0">
                    {resumeData.certifications.map((cert, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div className="text-lg text-slate-300 font-medium">
                                {cert}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
};

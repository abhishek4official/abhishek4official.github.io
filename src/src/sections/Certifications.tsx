// React import removed
import { Section } from '../components/layout/Section';
import { Reveal } from '../components/ui/Reveal';
import { resumeData } from '../data/resume';

export const Certifications = () => {
    return (
        <Section id="certifications" className="bg-surface text-white">
            <div className="md:flex md:justify-between md:items-center">
                <div>
                    <Reveal>
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Qualifications</h3>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Certifications & Education</h2>
                    </Reveal>
                </div>
                <div className="space-y-4 md:text-right">
                    {resumeData.certifications.map((cert, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div className="text-lg text-slate-700 font-medium">
                                {cert}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
};

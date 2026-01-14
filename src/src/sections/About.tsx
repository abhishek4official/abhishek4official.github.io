// React import removed
import { Section } from '../components/layout/Section';
import { Reveal } from '../components/ui/Reveal';
import { resumeData } from '../data/resume';

export const About = () => {
    return (
        <Section id="about" className="bg-surface/30">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <Reveal>
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest">About</h3>
                    </Reveal>
                </div>
                <div className="md:col-span-8">
                    <Reveal delay={200}>
                        <div className="prose prose-lg prose-slate text-slate-600">
                            <p className="mb-6 text-xl leading-relaxed text-slate-800">
                                {resumeData.summary}
                            </p>
                            <p className="leading-relaxed">
                                My core capability lies in bridging the gap between complex business requirements and robust technical implementations.
                                I specialize in designing microservices on Azure, optimizing legacy systems, and recently, integrating Large Language Models (LLMs) to automate enterprise workflows.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
};

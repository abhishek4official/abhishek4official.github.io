// React import removed
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { resumeData } from '../data/resume';

export const Hero = () => {
    return (
        <Section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-visible">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -z-10 opacity-30 translate-x-1/3 -translate-y-1/4 pointer-events-none">
                <div className="w-96 h-96 bg-gradient-to-br from-indigo-100 to-emerald-50 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-3xl relative">
                <Reveal delay={100}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 relative">
                        {resumeData.name}
                        <span className="absolute -top-6 -left-6 w-12 h-12 bg-emerald-400/10 rounded-full -z-10 blur-xl"></span>
                    </h1>
                </Reveal>
                <Reveal delay={200}>
                    <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
                        {resumeData.title}
                    </h2>
                </Reveal>
                <Reveal delay={300}>
                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-10 max-w-2xl">
                        Architecting scalable enterprise cloud systems and AI-driven solutions for over a decade.
                    </p>
                </Reveal>
                <Reveal delay={400}>
                    <div className="flex flex-wrap gap-4">
                        <a href="/ResumeAbhishek.pdf" download>
                            <Button variant="primary" size="lg" className="shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30">
                                Download Resume
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button variant="outline" size="lg">
                                Contact Me
                            </Button>
                        </a>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
};

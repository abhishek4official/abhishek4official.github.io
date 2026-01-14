// React import removed
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { resumeData } from '../data/resume';

export const Hero = () => {
    return (
        <Section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32">
            <div className="max-w-3xl">
                <Reveal delay={100}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                        {resumeData.name}
                    </h1>
                </Reveal>
                <Reveal delay={200}>
                    <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-8">
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
                            <Button variant="primary" size="lg">
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

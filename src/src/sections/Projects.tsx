// React import removed
import { Section } from '../components/layout/Section';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { Badge } from '../components/ui/Badge';
import { resumeData } from '../data/resume';

export const Projects = () => {
    return (
        <Section id="projects">
            <div className="mb-12">
                <Reveal>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Case Studies</h3>
                    <h2 className="text-3xl font-bold text-slate-900">Selected Projects</h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {resumeData.projects.map((project, index) => (
                    <Reveal key={index} delay={index * 100} className="h-full">
                        <Card className="flex flex-col h-full bg-surface hover:bg-slate-50 hover:border-slate-300 transition-all">
                            <div className="mb-6 flex-grow">
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h4>
                                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                                <div className="mb-4">
                                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2">Outcome</span>
                                    <p className="text-slate-800 font-medium text-sm border-l-2 border-emerald-accent pl-3">
                                        {project.outcome}
                                    </p>
                                </div>
                            </div>


                            <div className="pt-4 border-t border-gray-800">
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, tIndex) => (
                                        <Badge key={tIndex} variant="neutral">{tech}</Badge>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

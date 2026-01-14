// React import removed
import { Section } from '../components/layout/Section';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { Badge } from '../components/ui/Badge';
import { resumeData } from '../data/resume';

export const Expertise = () => {
    return (
        <Section id="expertise">
            <div className="mb-12">
                <Reveal>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Core Expertise</h3>
                    <h2 className="text-3xl font-bold text-slate-900">Technical Domain</h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumeData.expertise.map((group, index) => (
                    <Reveal key={index} delay={index * 100}>
                        <Card className="h-full">
                            <h4 className="text-lg font-semibold text-slate-900 mb-4">{group.category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, skillIndex) => (
                                    <Badge key={skillIndex} variant="default">{skill}</Badge>
                                ))}
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

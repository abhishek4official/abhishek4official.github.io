// React import removed
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { SecureText } from '../components/ui/SecureText';
import { resumeData } from '../data/resume';

export const Contact = () => {
    return (
        <Section id="contact" className="border-t border-gray-800">
            <div className="max-w-2xl mx-auto text-center">
                <Reveal>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Connect</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        I'm always open to discussing new opportunities, architectural challenges, and the future of enterprise AI.
                    </p>
                </Reveal>

                <div className="flex flex-col items-center gap-8">
                    <Reveal delay={200} width="100%">
                        <div className="flex flex-col items-center gap-4 p-8 bg-surface rounded-2xl border border-slate-200 w-full">
                            <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
                                <div className="flex flex-col items-center">
                                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Email</span>
                                    <SecureText text={resumeData.email} />
                                </div>

                                {resumeData.phone && (
                                    <div className="flex flex-col items-center">
                                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Phone</span>
                                        <SecureText text={resumeData.phone} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]">
                                    LinkedIn Profile
                                </Button>
                            </a>
                            <a href="https://github.com/abhishek4official" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]">
                                    GitHub Profile
                                </Button>
                            </a>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-16 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
                </div>
            </div>
        </Section>
    );
};

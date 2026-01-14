// React import removed
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { SecureText } from '../components/ui/SecureText';
import { resumeData } from '../data/resume';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 mb-2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 mb-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export const Contact = () => {
    return (
        <Section id="contact" className="border-t border-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                <Reveal>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Connect</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities, architectural challenges, and the future of enterprise AI.
                    </p>
                </Reveal>

                <div className="flex flex-col items-center gap-8">
                    <Reveal delay={200} width="100%">
                        <div className="flex flex-col items-center gap-4 p-8 bg-surface rounded-2xl border border-slate-200 w-full hover:shadow-lg transition-shadow duration-300">
                            <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full">
                                <div className="flex flex-col items-center group">
                                    <div className="p-3 bg-emerald-50 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                        <MailIcon />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Email</span>
                                    <SecureText text={resumeData.email} />
                                </div>

                                {resumeData.phone && (
                                    <div className="flex flex-col items-center group">
                                        <div className="p-3 bg-emerald-50 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                            <PhoneIcon />
                                        </div>
                                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Phone</span>
                                        <SecureText text={resumeData.phone} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
                            <a href={`mailto:${resumeData.email}`} className="w-full md:w-auto">
                                <Button variant="primary" size="lg" className="w-full min-w-[200px] flex items-center justify-center gap-2">
                                    <MailIcon />
                                    <span className="text-white">Send me an Email</span>
                                </Button>
                            </a>
                            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                                <Button variant="outline" size="lg" className="w-full min-w-[200px]">
                                    LinkedIn Profile
                                </Button>
                            </a>
                            <a href="https://github.com/abhishek4official" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                                <Button variant="outline" size="lg" className="w-full min-w-[200px]">
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

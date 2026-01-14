import { useState, useEffect } from 'react';
import { resumeData } from '../../data/resume';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="container-custom flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tight text-slate-900 hover:text-emerald-accent transition-colors">
                    {resumeData.name}
                </a>

                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="text-sm font-medium text-slate-900 border-b-2 border-slate-900 pb-0.5 hover:border-transparent transition-all"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

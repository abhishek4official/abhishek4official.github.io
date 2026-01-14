import React, { type ReactNode } from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
    return (
        <section id={id} className={`py-20 md:py-32 ${className}`}>
            <div className="container-custom">
                {children}
            </div>
        </section>
    );
};

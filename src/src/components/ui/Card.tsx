import React, { type ReactNode } from 'react';

interface CardProps {
    className?: string;
    children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = "", children }) => {
    return (
        <div className={`bg-surface border border-white/[0.06] rounded-2xl p-6 hover:border-emerald-accent/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.01)] transition-all duration-300 ${className}`}>
            {children}
        </div>
    );
};

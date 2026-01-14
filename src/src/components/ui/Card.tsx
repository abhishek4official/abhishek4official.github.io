import React, { type ReactNode } from 'react';

interface CardProps {
    className?: string;
    children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = "", children }) => {
    return (
        <div className={`bg-surface border border-slate-200 rounded-lg p-6 hover:border-emerald-accent/40 hover:shadow-md transition-all duration-300 ${className}`}>
            {children}
        </div>
    );
};

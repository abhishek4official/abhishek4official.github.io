import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'neutral';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
    const variants = {
        default: "bg-slate-100 text-slate-700 border border-slate-200",
        outline: "bg-transparent text-slate-600 border border-slate-300",
        neutral: "bg-gray-50 text-gray-600 border border-gray-100"
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${variants[variant]}`}>
            {children}
        </span>
    );
};

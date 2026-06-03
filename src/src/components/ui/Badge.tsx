import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'neutral';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
    const variants = {
        default: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
        outline: "bg-transparent text-slate-400 border border-white/[0.08]",
        neutral: "bg-white/[0.03] text-slate-400 border border-white/[0.06]"
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold font-mono tracking-wider uppercase ${variants[variant]}`}>
            {children}
        </span>
    );
};

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    className = "",
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-accent/50 focus:ring-offset-2 focus:ring-offset-carbon disabled:opacity-50 disabled:pointer-events-none select-none";

    const variants = {
        primary: "bg-emerald-accent text-slate-950 hover:bg-emerald-400 hover:scale-[1.02] shadow-lg shadow-emerald-950/20 active:scale-[0.98]",
        secondary: "bg-purple-600 text-white hover:bg-purple-500 hover:scale-[1.02] shadow-lg shadow-purple-950/20 active:scale-[0.98]",
        outline: "border border-white/10 text-slate-300 bg-white/[0.02] hover:bg-white/[0.06] hover:text-white hover:border-white/20 active:scale-[0.98]",
        ghost: "hover:bg-white/[0.04] text-slate-400 hover:text-white active:scale-[0.98]",
    };

    const sizes = {
        sm: "h-8 px-3.5 text-xs tracking-wider uppercase",
        md: "h-10 px-4.5 py-2 text-sm",
        lg: "h-12 px-6.5 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        />
    );
};

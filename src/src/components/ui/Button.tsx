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
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-accent focus:ring-offset-2 custom-focus-offset disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-slate-900 text-white hover:bg-emerald-accent hover:text-white font-bold shadow-lg shadow-slate-200",
        secondary: "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-slate-300",
        outline: "border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400",
        ghost: "hover:bg-slate-100 text-slate-600 hover:text-slate-900",
    };

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        />
    );
};

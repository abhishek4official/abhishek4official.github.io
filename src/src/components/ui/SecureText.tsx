import React, { useRef, useState, useEffect } from 'react';

interface SecureTextProps {
    text: string;
    className?: string;
    copyable?: boolean;
}

export const SecureText: React.FC<SecureTextProps> = ({ text, className = "", copyable = true }) => {
    const [width, setWidth] = useState(0);
    const textRef = useRef<SVGTextElement>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            // Add a small padding approx 10px
            setWidth(textRef.current.getComputedTextLength() + 20);
        }
    }, [text]);

    const handleCopy = () => {
        if (!copyable) return;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className={`relative inline-flex items-center group cursor-pointer ${className}`}
            onClick={handleCopy}
            title={copyable ? "Click to copy" : undefined}
        >
            <svg
                width={width || '100%'}
                height="40"
                className="overflow-visible select-none pointer-events-none"
                aria-label="Contact Detail"
                role="img"
            >
                <defs>
                    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="transparent" />
                <text
                    ref={textRef}
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="url(#textGradient)"
                    className="text-lg font-bold font-mono tracking-wider"
                    style={{ userSelect: 'none' }}
                >
                    {text}
                </text>
            </svg>

            {copyable && (
                <span className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-surface border border-gray-700 text-white text-xs rounded opacity-0 transition-opacity duration-200 ${copied ? 'opacity-100' : 'group-hover:opacity-100'}`}>
                    {copied ? 'Copied!' : 'Copy'}
                </span>
            )}
        </div>
    );
};

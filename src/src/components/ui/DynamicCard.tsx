import React, { useRef } from 'react';

interface DynamicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const DynamicCard = ({ children, className = '', ...props }: DynamicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl border border-white/[0.06] bg-surface p-6 overflow-hidden transition-all duration-300
                  before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(800px_circle_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_rgba(139,92,246,0.06),_transparent_40%)]
                  hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.02)] ${className}`}
      {...props}
    >
      {/* Dynamic border glow on card edges */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{
             background: 'radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139,92,246,0.15), transparent 60%)',
             padding: '1px',
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             maskComposite: 'exclude',
           }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

import React from 'react';
import Reveal from '@/components/Reveal';

const SectionHeading = ({ eyebrow, title, description, align = 'center', className = '' }) => {
    const alignCls = align === 'left' ? 'items-start text-left' : 'items-center text-center';
    return (
        <Reveal className={`flex flex-col ${alignCls} ${className}`}>
            {eyebrow && (
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-pulse" />
                    {eyebrow}
                </span>
            )}
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
            </h2>
            {description && (
                <p className={`mt-5 max-w-2xl text-base leading-relaxed text-mist/80 ${align === 'left' ? '' : 'mx-auto'}`}>
                    {description}
                </p>
            )}
        </Reveal>
    );
};

export default SectionHeading;

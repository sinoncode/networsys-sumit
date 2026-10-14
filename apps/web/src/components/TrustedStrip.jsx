import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { TRUSTED_ITEMS } from '@/data/solutions';

const TrustedStrip = () => (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-4" aria-label="Certifications and trust">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
            {[...TRUSTED_ITEMS, ...TRUSTED_ITEMS, ...TRUSTED_ITEMS].map((item, i) => (
                <span key={i} className="flex items-center gap-2.5 whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] text-mist/60">
                    <BadgeCheck size={15} className="text-pulse" strokeWidth={1.5} />
                    {item}
                </span>
            ))}
        </div>
    </div>
);

export default TrustedStrip;

import React from 'react';

import Link from 'next/link';
import { ArrowRight, ArrowLeft, Construction } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralMesh from '@/components/NeuralMesh';
import Reveal from '@/components/Reveal';

const PlaceholderPage = ({ parent, title, description, solutionSlug }) => {
    const parentLink = solutionSlug ? `/${solutionSlug}` : '/';
    const parentLabel = parent || 'Networsys';

    return (
        <div className="min-h-screen bg-ink text-mist">
            {/* Helmet removed for Next.js metadata */}

            <Navbar />

            <section className="section-glow-ink relative flex min-h-[80dvh] items-center overflow-hidden">
                <NeuralMesh className="absolute inset-0 h-full w-full opacity-50" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.92),transparent)]" />

                <div className="relative z-10 mx-auto w-full max-w-3xl px-5 pb-20 pt-36 text-center sm:px-8">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-pulse" />
                            {parentLabel}
                        </span>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>
                    </Reveal>

                    {description && (
                        <Reveal delay={0.2}>
                            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
                                {description}
                            </p>
                        </Reveal>
                    )}

                    <Reveal delay={0.3}>
                        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-2 text-sm font-medium text-ember">
                            <Construction size={15} />
                            Full content coming soon
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold"
                        >
                            Talk to an Expert
                            <ArrowRight size={16} />
                        </Link>
                        <Link
                            to={parentLink}
                            className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold"
                        >
                            <ArrowLeft size={15} />
                            Back to {parentLabel}
                        </Link>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PlaceholderPage;

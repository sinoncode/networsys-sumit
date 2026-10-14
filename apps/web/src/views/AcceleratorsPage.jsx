import React from 'react';

import Link from 'next/link';
import { ArrowRight, Zap, Clock, PackageCheck } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IconTile from '@/components/IconTile';
import Reveal from '@/components/Reveal';
import { ACCELERATORS } from '@/data/site';

const solutionHref = (name) => {
    if (name === 'NeuralCore') return '/neuralcore';
    if (name === 'Aegis360') return '/aegis360';
    if (name === 'AppMind') return '/appmind';

    return '/contact';
};

const AcceleratorsPage = () => {
    return (
        <div className="min-h-screen bg-ink text-mist">
            <Navbar />

            {/* HERO */}
            <section className="section-glow-ink relative overflow-hidden pt-36 pb-20">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />

                <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70 backdrop-blur">
                            <Zap size={13} className="text-ember" />
                            Accelerators
                        </span>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Start in Days,{' '}
                            <span className="text-gradient">Not Months.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
                            Fixed-price, fixed-duration packages that deliver a
                            concrete result — then scale into a full engagement.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <Link
                            href="/contact"
                            className="btn-solid mt-8 inline-flex min-h-[48px] items-center gap-2 px-6 py-3 text-sm font-semibold"
                        >
                            Get Started
                            <ArrowRight size={15} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ACCELERATOR CARDS */}
            <section className="py-20 sm:py-28">
                <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {ACCELERATORS.map((a, i) => (
                            <div
                                key={a.slug}
                                id={a.slug}
                                className="scroll-mt-28"
                            >
                                <Reveal delay={0.05 * (i % 3)}>
                                    <div className="glass-card flex h-full flex-col p-7">
                                        <div className="flex items-center justify-between">
                                            <IconTile icon={a.icon} />

                                            <Link
                                                href={solutionHref(a.solution)}
                                                className="rounded-full border border-pulse/30 bg-pulse/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-pulse transition hover:bg-pulse/20"
                                            >
                                                {a.solution}
                                            </Link>
                                        </div>

                                        <h2 className="mt-5 font-display text-xl font-bold leading-snug text-white">
                                            {a.title}
                                        </h2>

                                        <p className="mt-3 text-sm leading-relaxed text-mist/75">
                                            {a.blurb}
                                        </p>

                                        <div className="mt-5 space-y-2.5 border-t border-white/5 pt-5">
                                            <div className="flex items-center gap-2.5 text-sm text-mist/85">
                                                <Clock
                                                    size={15}
                                                    className="shrink-0 text-ember"
                                                />
                                                <span className="font-medium text-white">
                                                    {a.duration}
                                                </span>
                                            </div>

                                            <div className="flex items-start gap-2.5 text-sm text-mist/85">
                                                <PackageCheck
                                                    size={15}
                                                    className="mt-0.5 shrink-0 text-pulse"
                                                />
                                                <span>{a.deliverable}</span>
                                            </div>
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="btn-gradient mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 px-5 py-3 text-sm font-semibold"
                                        >
                                            Get Started
                                            <ArrowRight size={15} />
                                        </Link>
                                    </div>
                                </Reveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AcceleratorsPage;
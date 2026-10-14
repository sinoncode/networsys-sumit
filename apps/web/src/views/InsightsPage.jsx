"use client";
import React, { useMemo, useState } from 'react';

import Link from 'next/link';
import { ArrowRight, Clock, FileText, Search, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { INSIGHTS_POSTS, SOLUTION_FILTERS, INDUSTRY_FILTERS } from '@/data/resources';

const FILTER_LABELS = {
    all: 'All',
    neuralcore: 'NeuralCore',
    aegis360: 'Aegis360',
    appmind: 'AppMind',
    fintech: 'Fintech',
    healthcare: 'Healthcare',
    banking: 'Banking',
};

const InsightsPage = () => {
    const [solution, setSolution] = useState('all');
    const [industry, setIndustry] = useState('all');
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return INSIGHTS_POSTS.filter((p) => {
            if (solution !== 'all' && p.solution !== solution) return false;
            if (industry !== 'all' && p.industry !== industry) return false;
            if (q && !(`${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q))) return false;
            return true;
        });
    }, [solution, industry, query]);

    const resetAll = () => {
        setSolution('all');
        setIndustry('all');
        setQuery('');
    };

    const Chip = ({ active, onClick, children }) => (
        <button
            type="button"
            onClick={onClick}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                active
                    ? 'border-transparent bg-[linear-gradient(135deg,#F26B21,#22D3EE)] text-ink'
                    : 'border-white/10 bg-white/[0.03] text-mist/70 hover:border-pulse/50 hover:text-white'
            }`}
        >
            {children}
        </button>
    );

    return (
        <div className="min-h-screen bg-ink text-mist">
            {/* Helmet removed for Next.js metadata */}
            <Seo
                title="Insights Hub — Engineering & Strategy Notes | Networsys Technologies"
                description="Engineering and strategy notes on AI infrastructure, cybersecurity and AI-native app engineering for fintech, hospitals and financial institutions."
                siteName="Networsys Technologies"
            />

            <Navbar />

            {/* HERO */}
            <section className="section-glow-ink relative overflow-hidden pt-36 pb-16">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />
                <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70 backdrop-blur">
                            <FileText size={13} className="text-ember" />
                            Insights Hub
                        </span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Thinking, out loud. <span className="text-gradient">From the lab to your inbox.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
                            Engineering and strategy notes from the people who build, defend and ship for regulated
                            industries.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* FILTERS + GRID */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    {/* Filter bar */}
                    <div className="glass-card flex flex-col gap-5 p-5 sm:p-6">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="mr-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mist/50">Solution</span>
                                {SOLUTION_FILTERS.map((f) => (
                                    <Chip key={f} active={solution === f} onClick={() => setSolution(f)}>
                                        {FILTER_LABELS[f]}
                                    </Chip>
                                ))}
                            </div>
                            <div className="relative w-full sm:w-72">
                                <Search size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-mist/40" />
                                <input
                                    type="search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search insights…"
                                    className="field-dark pl-10"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="mr-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mist/50">Industry</span>
                            {INDUSTRY_FILTERS.map((f) => (
                                <Chip key={f} active={industry === f} onClick={() => setIndustry(f)}>
                                    {FILTER_LABELS[f]}
                                </Chip>
                            ))}
                            {(solution !== 'all' || industry !== 'all' || query) && (
                                <button
                                    type="button"
                                    onClick={resetAll}
                                    className="ml-1 inline-flex items-center gap-1 text-xs font-medium text-mist/60 transition hover:text-pulse"
                                >
                                    <X size={13} /> Clear
                                </button>
                            )}
                        </div>
                    </div>

                    <p className="mt-6 text-sm text-mist/55">
                        {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
                    </p>

                    {/* Grid */}
                    {filtered.length > 0 ? (
                        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((post, i) => (
                                <Reveal key={post.slug} delay={0.05 * (i % 3)} className="h-full">
                                    <Link href={`/insights/${post.slug}`} className="glass-card group flex h-full flex-col overflow-hidden">
                                        <div className="relative h-40 overflow-hidden">
                                            <img
                                                src={post.heroImage}
                                                alt={post.title}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
                                        </div>
                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ember">
                                                <FileText size={12} strokeWidth={1.5} />
                                                {post.category}
                                            </div>
                                            <h2 className="mt-3 font-display text-lg font-bold leading-snug text-white transition group-hover:text-pulse">
                                                {post.title}
                                            </h2>
                                            <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{post.excerpt}</p>
                                            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-mist/55">
                                                <span>{post.date}</span>
                                                <span className="inline-flex items-center gap-1.5">
                                                    <Clock size={12} strokeWidth={1.5} />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    ) : (
                        <div className="glass-card mt-6 flex flex-col items-center px-8 py-16 text-center">
                            <span className="icon-tile !h-12 !w-12 !rounded-xl">
                                <Search size={20} strokeWidth={1.5} />
                            </span>
                            <p className="mt-5 font-display text-lg font-bold text-white">No insights match your filters.</p>
                            <p className="mt-2 max-w-sm text-sm text-mist/70">Try clearing a filter or searching for a different term.</p>
                            <button type="button" onClick={resetAll} className="btn-gradient mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden py-20 sm:py-24">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-12 text-center sm:px-12">
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_50%_120%,rgba(242,107,33,0.22),transparent_60%),radial-gradient(40rem_24rem_at_50%_-20%,rgba(34,211,238,0.18),transparent_60%)]" />
                            <div className="relative z-10 mx-auto max-w-2xl">
                                <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    Want these notes <span className="text-gradient">in your inbox?</span>
                                </h2>
                                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist/80">
                                    Talk to a senior Networsys consultant about your workload, security posture or product
                                    idea — free, in 30 minutes.
                                </p>
                                <Link href="/contact" className="btn-solid mt-7 inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                                    Talk to an Expert
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default InsightsPage;

"use client";
import React, { useMemo, useState } from 'react';

import Link from 'next/link';
import { AlertTriangle, ArrowRight, ShieldAlert } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { SECURITY_ADVISORIES, SEVERITY_STYLES } from '@/data/resources';

const SEVERITY_FILTERS = ['all', 'critical', 'high', 'medium'];

const SecurityAdvisoriesPage = () => {
    const [severity, setSeverity] = useState('all');

    const filtered = useMemo(
        () => (severity === 'all' ? SECURITY_ADVISORIES : SECURITY_ADVISORIES.filter((a) => a.severity === severity)),
        [severity],
    );

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
                title="Security Advisories — Live Threat Bulletins | Networsys Technologies"
                description="Chronological security advisories from the Networsys Noida SOC — critical, high and medium severity bulletins with affected products and remediation guidance."
                siteName="Networsys Technologies"
            />

            <Navbar />

            {/* HERO */}
            <section className="section-glow-ink relative overflow-hidden pt-36 pb-16">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />
                <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70 backdrop-blur">
                            <ShieldAlert size={13} className="text-ember" />
                            Security Advisories
                        </span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Live threat bulletins <span className="text-gradient">from our Noida SOC.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
                            Curated, prioritised advisories on vulnerabilities affecting enterprise infrastructure —
                            with one-line summaries and remediation guidance.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* LIST */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mist/50">Severity</span>
                        {SEVERITY_FILTERS.map((f) => (
                            <Chip key={f} active={severity === f} onClick={() => setSeverity(f)}>
                                {f === 'all' ? 'All' : f}
                            </Chip>
                        ))}
                    </div>

                    <div className="mt-8 space-y-4">
                        {filtered.map((a, i) => (
                            <Reveal key={a.slug} delay={0.04 * (i % 4)}>
                                <article className="glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex flex-1 items-start gap-4">
                                        <span className={`mt-0.5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] ${SEVERITY_STYLES[a.severity]}`}>
                                            {a.severity === 'critical' && <AlertTriangle size={11} strokeWidth={2.5} />}
                                            {a.severity}
                                        </span>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mist/55">
                                                <span className="font-mono font-semibold text-pulse">{a.slug.toUpperCase()}</span>
                                                <span>·</span>
                                                <span>{a.date}</span>
                                                <span>·</span>
                                                <span className="font-medium text-white">{a.product}</span>
                                            </div>
                                            <p className="mt-2 text-sm leading-relaxed text-mist/85">{a.summary}</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-white transition hover:text-pulse"
                                    >
                                        Read advisory
                                        <ArrowRight size={14} />
                                    </Link>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="glass-card mt-8 px-8 py-12 text-center text-sm text-mist/70">
                            No advisories at this severity level.
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
                                    Want these advisories <span className="text-gradient">in your inbox?</span>
                                </h2>
                                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist/80">
                                    Talk to our SOC team about a 24×7 monitoring subscription tailored to your stack.
                                </p>
                                <Link href="/contact" className="btn-solid mt-7 inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                                    Talk to a Security Expert
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

export default SecurityAdvisoriesPage;

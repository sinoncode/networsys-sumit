"use client";
import React from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, ChevronRight, Cpu, Target, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import NotFoundPage from '@/views/NotFoundPage';
import { getStoryBySlug } from '@/data/resources';

const CaseStudyPage = () => {
    const { slug } = useParams();
    const story = getStoryBySlug(slug);

    if (!story) return <NotFoundPage />;

    return (
        <div className="min-h-screen bg-ink text-mist">
            {/* Helmet removed for Next.js metadata */}
            <Seo title={story.title} description={story.result} image={story.heroImage} siteName="Networsys Technologies" />

            <Navbar />

            {/* HERO */}
            <section className="section-glow-ink relative overflow-hidden pt-32 pb-12">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />
                <div className="relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-8">
                    <Reveal>
                        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-mist/55">
                            <Link href="/" className="transition hover:text-pulse">Home</Link>
                            <ChevronRight size={13} className="text-mist/30" />
                            <Link href="/success-stories" className="transition hover:text-pulse">Success Stories</Link>
                            <ChevronRight size={13} className="text-mist/30" />
                            <span className="font-semibold text-pulse">{story.clientType}</span>
                        </nav>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-pulse">
                            {story.tag}
                        </span>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mist/55">{story.clientType}</p>
                        <h1 className="mt-2 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                            {story.title}
                        </h1>
                    </Reveal>

                    <Reveal delay={0.24} className="mt-8">
                        <div className="glass-card inline-flex items-center gap-3 px-5 py-3">
                            <TrendingUp size={18} className="text-ember" />
                            <span className="font-display text-lg font-bold text-white">{story.metric}</span>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* HERO IMAGE */}
            <section className="relative">
                <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
                    <Reveal>
                        <div className="glass-card overflow-hidden p-2">
                            <img src={story.heroImage} alt={story.title} loading="lazy" className="w-full rounded-2xl object-cover" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* BODY */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
                    <div className="grid gap-8">
                        <Reveal>
                            <div className="glass-card p-7">
                                <div className="flex items-center gap-2.5">
                                    <span className="icon-tile !h-10 !w-10 !rounded-xl">
                                        <Target size={18} strokeWidth={1.5} />
                                    </span>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember">Challenge</p>
                                </div>
                                <p className="mt-4 text-base leading-relaxed text-mist/85">{story.challenge}</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <div className="glass-card p-7">
                                <div className="flex items-center gap-2.5">
                                    <span className="icon-tile !h-10 !w-10 !rounded-xl">
                                        <Cpu size={18} strokeWidth={1.5} />
                                    </span>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pulse">Solution</p>
                                </div>
                                <p className="mt-4 text-base leading-relaxed text-mist/85">{story.solution}</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.16}>
                            <div className="glass-card p-7">
                                <div className="flex items-center gap-2.5">
                                    <span className="icon-tile !h-10 !w-10 !rounded-xl">
                                        <TrendingUp size={18} strokeWidth={1.5} />
                                    </span>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Result</p>
                                </div>
                                <p className="mt-4 text-base leading-relaxed text-mist/85">{story.result}</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.24}>
                            <div className="glass-card p-7">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist/55">Tech used</p>
                                <div className="mt-4 flex flex-wrap gap-2.5">
                                    {story.tech.map((t) => (
                                        <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-mist/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal className="mt-8">
                        <Link href="/success-stories" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-pulse">
                            <ArrowLeft size={15} />
                            Back to all success stories
                        </Link>
                    </Reveal>
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
                                    Want a result <span className="text-gradient">like this one?</span>
                                </h2>
                                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist/80">
                                    Book a free 30-minute consultation. We’ll map your path to a measurable outcome.
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

export default CaseStudyPage;

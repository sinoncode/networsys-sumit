"use client";
import React from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import NotFoundPage from '@/views/NotFoundPage';
import { getInsightBySlug, resolveRelatedInsights } from '@/data/resources';

const BlogPostPage = () => {
    const { slug } = useParams();
    const post = getInsightBySlug(slug);

    if (!post) return <NotFoundPage />;

    const related = resolveRelatedInsights(post.related);

    return (
        <div className="min-h-screen bg-ink text-mist">
            {/* Helmet removed for Next.js metadata */}
            <Seo title={post.title} description={post.excerpt} image={post.heroImage} siteName="Networsys Technologies" />

            <Navbar />

            {/* HERO */}
            <section className="section-glow-ink relative overflow-hidden pt-32 pb-12">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />
                <div className="relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-8">
                    <Reveal>
                        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-mist/55">
                            <Link href="/" className="transition hover:text-pulse">Home</Link>
                            <ChevronRight size={13} className="text-mist/30" />
                            <Link href="/insights" className="transition hover:text-pulse">Insights</Link>
                            <ChevronRight size={13} className="text-mist/30" />
                            <span className="font-semibold text-pulse">{post.category}</span>
                        </nav>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ember">
                            {post.category}
                        </span>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <h1 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                            {post.title}
                        </h1>
                    </Reveal>

                    <Reveal delay={0.24} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-mist/65">
                        <span className="font-medium text-white">{post.author}</span>
                        <span className="text-mist/40">·</span>
                        <span>{post.authorRole}</span>
                        <span className="text-mist/40">·</span>
                        <span>{post.date}</span>
                        <span className="inline-flex items-center gap-1.5">
                            <Clock size={12} strokeWidth={1.5} />
                            {post.readTime}
                        </span>
                    </Reveal>
                </div>
            </section>

            {/* HERO IMAGE */}
            <section className="relative">
                <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
                    <Reveal>
                        <div className="glass-card overflow-hidden p-2">
                            <img src={post.heroImage} alt={post.title} loading="lazy" className="w-full rounded-2xl object-cover" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* BODY */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
                    <Reveal>
                        <p className="font-display text-xl leading-relaxed text-white sm:text-2xl">{post.excerpt}</p>
                    </Reveal>

                    <div className="mt-10 space-y-10">
                        {post.body.map((section, i) => (
                            <Reveal key={section.heading} delay={0.04 * i}>
                                <div>
                                    <h2 className="font-display text-xl font-bold text-white sm:text-2xl">{section.heading}</h2>
                                    {section.paragraphs.map((p, j) => (
                                        <p key={j} className="mt-4 text-base leading-relaxed text-mist/85">{p}</p>
                                    ))}
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Author card */}
                    <Reveal className="mt-14">
                        <div className="glass-card flex items-center gap-4 p-6">
                            <span className="icon-tile !h-12 !w-12 !rounded-full">
                                <span className="font-display text-lg font-bold">{post.author.split(' ').map((n) => n[0]).join('')}</span>
                            </span>
                            <div>
                                <p className="font-display text-sm font-bold text-white">{post.author}</p>
                                <p className="text-xs text-mist/65">{post.authorRole}</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal className="mt-8">
                        <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-pulse">
                            <ArrowLeft size={15} />
                            Back to all insights
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* RELATED */}
            {related.length > 0 && (
                <section className="section-glow relative overflow-hidden py-20 sm:py-24">
                    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Related insights</h2>
                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            {related.map((r, i) => (
                                <Reveal key={r.slug} delay={0.08 * i} className="h-full">
                                    <Link href={`/insights/${r.slug}`} className="glass-card group flex h-full flex-col p-6">
                                        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ember">{r.category}</span>
                                        <h3 className="mt-3 font-display text-base font-bold leading-snug text-white transition group-hover:text-pulse">{r.title}</h3>
                                        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{r.excerpt}</p>
                                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-pulse">
                                            Read <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </span>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="relative overflow-hidden py-20 sm:py-24">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-12 text-center sm:px-12">
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_50%_120%,rgba(242,107,33,0.22),transparent_60%),radial-gradient(40rem_24rem_at_50%_-20%,rgba(34,211,238,0.18),transparent_60%)]" />
                            <div className="relative z-10 mx-auto max-w-2xl">
                                <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    Put this thinking <span className="text-gradient">to work.</span>
                                </h2>
                                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist/80">
                                    Book a free 30-minute consultation with the team behind these notes.
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

export default BlogPostPage;

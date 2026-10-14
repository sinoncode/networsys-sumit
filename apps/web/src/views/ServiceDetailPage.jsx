import React from 'react';

import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    ChevronRight,
    Check,
    Clock,
    FileText,
    Layers,
    Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralSphere from '@/components/NeuralSphere';
import GpuChip from '@/components/GpuChip';
import ShieldMesh from '@/components/ShieldMesh';
import PhoneDashboard from '@/components/PhoneDashboard';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { getSiblings, resolveInsights } from '@/data/serviceDetails';
import { SOLUTIONS } from '@/data/solutions';

const VISUALS = {
    gpu: GpuChip,
    shield: ShieldMesh,
    phone: PhoneDashboard,
    sphere: NeuralSphere,
};

const DEFAULT_VISUAL = {
    neuralcore: 'gpu',
    aegis360: 'shield',
    appmind: 'phone',
};

/**
 * Reusable Service Detail template.
 * Driven entirely by a `content` object — see src/data/serviceDetails.js schema.
 */
const ServiceDetailPage = ({ content }) => {
    const {
        slug,
        solutionSlug,
        parentName,
        label,
        title,
        paragraph,
        cta = 'Book a Free Consultation',
        visual,
        included,
        audience,
        process,
        successStory,
        insights,
        finalCta,
        seo,
    } = content;

    const parent = SOLUTIONS[solutionSlug];
    const Visual = VISUALS[visual || DEFAULT_VISUAL[solutionSlug] || 'sphere'] || NeuralSphere;
    const siblings = getSiblings(solutionSlug, slug);
    const insightPosts = resolveInsights(solutionSlug, insights?.posts);
    const parentImage = parent?.image;

    return (
        <div className="min-h-screen bg-ink text-mist">
            {/* Helmet removed for Next.js metadata */}
            <Seo
                title={seo?.title || `${title} | Networsys Technologies`}
                description={seo?.description || paragraph || `${title} — ${parentName}.`}
                image={parentImage}
                siteName="Networsys Technologies"
            />

            <Navbar />

            {/* HERO */}
            <section className="section-glow-ink relative flex min-h-[100dvh] items-center overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />

                <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-6 lg:pb-20">
                    {/* Left: copy */}
                    <div className="max-w-2xl">
                        <Reveal>
                            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-mist/55">
                                <Link href="/" className="transition hover:text-pulse">Home</Link>
                                <ChevronRight size={13} className="text-mist/30" />
                                <Link href={`/${solutionSlug}`} className="transition hover:text-pulse">{parentName}</Link>
                                <ChevronRight size={13} className="text-mist/30" />
                                <span className="font-semibold text-pulse">{label}</span>
                            </nav>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-pulse" />
                                {parentName} · {label}
                            </span>
                        </Reveal>

                        <Reveal delay={0.16}>
                            <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                {title}
                            </h1>
                        </Reveal>

                        <Reveal delay={0.24}>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
                                {paragraph}
                            </p>
                        </Reveal>

                        <Reveal delay={0.32} className="mt-10 flex flex-wrap items-center gap-4">
                            <Link href="/contact" className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                                {cta}
                                <ArrowRight size={16} />
                            </Link>
                            <Link href={`/${solutionSlug}`} className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                                Back to {parentName}
                            </Link>
                        </Reveal>
                    </div>

                    {/* Right: abstract glowing visual */}
                    <Reveal delay={0.25} className="relative">
                        <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
                            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,107,33,0.18),transparent_62%)]" />
                            <Visual className="h-full w-full" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* WHAT'S INCLUDED — 2-column glass card with bullet list */}
            {included && (
                <section className="section-glow relative overflow-hidden py-24 sm:py-32">
                    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                        <SectionHeading
                            eyebrow={included.eyebrow || "What's included"}
                            title={included.title}
                            description={included.description}
                        />

                        <Reveal delay={0.1} className="mt-14">
                            <div className="glass-card p-8 sm:p-12">
                                <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
                                    {included.items.map((item, i) => (
                                        <Reveal key={i} delay={0.04 * (i % 2)} className="flex items-start gap-3">
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ember to-pulse">
                                                <Check size={12} strokeWidth={3} className="text-ink" />
                                            </span>
                                            <span className="text-sm leading-relaxed text-mist/85">
                                                {typeof item === 'string' ? item : (
                                                    <>
                                                        {item.text}
                                                        {item.href && (
                                                            <Link href={item.href} className="ml-1.5 inline-flex items-center gap-1 font-semibold text-pulse transition hover:text-white">
                                                                {item.linkLabel || 'Learn more'}
                                                                <ArrowRight size={13} />
                                                            </Link>
                                                        )}
                                                    </>
                                                )}
                                            </span>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* WHO IT'S FOR — 3 industry chips */}
            {audience && (
                <section className="py-24 sm:py-32">
                    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                        <SectionHeading
                            eyebrow={audience.eyebrow || "Who it's for"}
                            title={audience.title}
                            description={audience.description}
                        />

                        <div className="mt-16 grid gap-6 md:grid-cols-3">
                            {audience.chips.map((chip, i) => (
                                <Reveal key={chip.title} delay={0.07 * i} className="h-full">
                                    <div className="glass-card flex h-full flex-col p-7">
                                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-pulse">
                                            <Sparkles size={16} strokeWidth={1.6} />
                                        </span>
                                        <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">{chip.title}</h3>
                                        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{chip.body}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* OUR PROCESS — horizontal timeline */}
            {process && (
                <section className="section-glow relative overflow-hidden py-24 sm:py-32">
                    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                        <SectionHeading
                            eyebrow={process.eyebrow || 'Our process'}
                            title={process.title}
                            description={process.description}
                        />

                        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            {process.steps.map((p, i) => (
                                <Reveal key={p.step} delay={0.07 * i} className="h-full">
                                    <div className="glass-card relative h-full p-6">
                                        <span className="font-display text-4xl font-bold text-white/10">0{i + 1}</span>
                                        <h3 className="mt-3 font-display text-lg font-bold text-white">{p.step}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-mist/70">{p.body}</p>
                                        <span className="absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-pulse" />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* SUCCESS STORY */}
            {successStory && (
                <section className="py-24 sm:py-32">
                    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
                        <SectionHeading
                            eyebrow={successStory.eyebrow || 'Success story'}
                            title={successStory.title}
                        />

                        <Reveal delay={0.1} className="mt-14">
                            <article className="glass-card p-8 sm:p-12">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-pulse">
                                        {successStory.client}
                                    </p>
                                    <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ember">
                                        Sample — replace with real client data
                                    </span>
                                </div>
                                <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                                    {successStory.headline}
                                </h3>
                                <div className="mt-8 grid gap-8 md:grid-cols-3">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember">Challenge</p>
                                        <p className="mt-3 text-sm leading-relaxed text-mist/80">{successStory.challenge}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pulse">Solution</p>
                                        <p className="mt-3 text-sm leading-relaxed text-mist/80">{successStory.solution}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Result</p>
                                        <p className="mt-3 text-sm leading-relaxed text-mist/80">{successStory.result}</p>
                                    </div>
                                </div>
                                <Link
                                    href="/success-stories"
                                    className="btn-gradient mt-9 inline-flex min-h-[48px] items-center gap-2 px-7 py-3 text-sm font-semibold"
                                >
                                    Read Case Study
                                    <ArrowRight size={15} />
                                </Link>
                            </article>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* RELATED INSIGHTS — 3 blog cards */}
            {insights && (
                <section className="section-glow relative overflow-hidden py-24 sm:py-32">
                    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                        <SectionHeading
                            eyebrow={insights.eyebrow || 'Related insights'}
                            title={insights.title}
                            description={insights.description}
                        />

                        <div className="mt-16 grid gap-6 md:grid-cols-3">
                            {insightPosts.map((post, i) => (
                                <Reveal key={post.slug + i} delay={0.08 * i} className="h-full">
                                    <Link href="/insights" className="glass-card group flex h-full flex-col p-7">
                                        <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ember">
                                            <FileText size={13} strokeWidth={1.5} />
                                            {post.category}
                                        </div>
                                        <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white transition group-hover:text-pulse">
                                            {post.title}
                                        </h3>
                                        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{post.excerpt}</p>
                                        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-mist/55">
                                            <span>{post.date}</span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <Clock size={12} strokeWidth={1.5} />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CLOSING CTA BAND */}
            {finalCta && (
                <section className="relative overflow-hidden py-24 sm:py-28">
                    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                        <Reveal>
                            <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-12 sm:py-20">
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_50%_120%,rgba(242,107,33,0.22),transparent_60%),radial-gradient(40rem_24rem_at_50%_-20%,rgba(34,211,238,0.18),transparent_60%)]" />
                                <div className="relative z-10 mx-auto max-w-2xl">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/70 backdrop-blur">
                                        <Layers size={13} className="text-ember" />
                                        {parentName}
                                    </span>
                                    <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                                        {finalCta.headline}
                                    </h2>
                                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                                        {finalCta.body}
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold"
                                    >
                                        {finalCta.button}
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* MORE IN THIS SOLUTION — sibling pages */}
            {siblings.length > 0 && (
                <section className="section-glow-ink relative overflow-hidden py-20 sm:py-24">
                    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                        <Reveal>
                            <div className="flex flex-wrap items-end justify-between gap-3">
                                <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    More in <span className="text-gradient">{parentName}</span>
                                </h2>
                                <Link
                                    href={`/${solutionSlug}`}
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-pulse transition hover:text-white"
                                >
                                    View all {parentName}
                                    <ArrowRight size={15} />
                                </Link>
                            </div>
                        </Reveal>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {siblings.map((sib, i) => (
                                <Reveal key={sib.slug} delay={0.05 * (i % 3)} className="h-full">
                                    <Link
                                        href={`/${solutionSlug}/${sib.slug}`}
                                        className="glass-card group flex h-full flex-col p-6"
                                    >
                                        <h3 className="font-display text-base font-bold leading-snug text-white transition group-hover:text-pulse">
                                            {sib.title}
                                        </h3>
                                        {sib.body && (
                                            <p className="mt-2 flex-1 text-sm leading-relaxed text-mist/70">{sib.body}</p>
                                        )}
                                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-pulse">
                                            Explore
                                            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </span>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
};

export default ServiceDetailPage;

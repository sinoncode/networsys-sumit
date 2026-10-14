"use client";
import React, { useRef } from 'react';

import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    FileText,
    Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralSphere from '@/components/NeuralSphere';
import TrustedStrip from '@/components/TrustedStrip';
import SectionHeading from '@/components/SectionHeading';
import IconTile from '@/components/IconTile';
import EnquiryForm from '@/components/EnquiryForm';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import TypedHeadline from '@/components/TypedHeadline';
import { SOLUTION_LIST } from '@/data/solutions';
import { INDUSTRY_CARDS, ACCELERATORS, INSIGHTS_POSTS, FEATURED_STORY } from '@/data/site';

const HERO_IMAGE = 'https://images.hostinger.com/21c0fa20-d7b6-4e12-b8aa-8710f822a063.png';

const WHY_STATS = [
    { value: 10, suffix: '+', label: 'Years engineering AI, security & cloud' },
    { value: 100, suffix: '+', label: 'Clients across regulated industries' },
    { value: 24, suffix: '×7', label: 'SOC monitoring from our Noida center' },
    { value: 3, suffix: '', label: 'Core certifications: ISO 27001, AWS, CEH' },
];

const HomePage = () => {
    const accelRef = useRef(null);

    const scrollAccel = (dir) => {
        const el = accelRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * 340, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-ink text-mist">
            {/* Helmet removed for Next.js metadata */}

            <Navbar />

            {/* HERO */}
            <section className="section-glow-ink relative flex min-h-[100dvh] items-center overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />

                <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-6 lg:pb-20">
                    {/* Left: copy */}
                    <div className="max-w-2xl">
                        <Reveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                                <Sparkles size={13} className="text-ember" />
                                AI-First Technology Partner for Regulated Industries
                            </span>
                        </Reveal>

                        <Reveal delay={0.12} className="mt-7">
                            <TypedHeadline className="text-4xl sm:text-5xl lg:text-6xl" />
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="mt-7 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
                                Networsys designs AI data centers, defends regulated enterprises 24×7 and builds
                                AI-native products for fintech, hospitals and financial institutions.
                            </p>
                        </Reveal>

                        <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
                            <a href="#contact" className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                                Book a Free Consultation
                                <ArrowRight size={16} />
                            </a>
                            <a href="#solutions" className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                                Explore Solutions
                            </a>
                        </Reveal>
                    </div>

                    {/* Right: 3D neural sphere */}
                    <Reveal delay={0.25} className="relative">
                        <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
                            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.18),transparent_62%)]" />
                            <NeuralSphere className="h-full w-full" />
                        </div>
                    </Reveal>
                </div>

                {/* Scroll-down indicator */}
                <a
                    href="#solutions"
                    className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist/50 transition hover:text-pulse sm:flex"
                    aria-label="Scroll to solutions"
                >
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
                    <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
                        <span className="h-2 w-1 animate-bounce rounded-full bg-gradient-to-b from-ember to-pulse" />
                    </span>
                    <ChevronDown size={14} className="animate-bounce" />
                </a>
            </section>

            <TrustedStrip />

            {/* SOLUTIONS */}
            <section id="solutions" className="relative py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="Three solutions, one accountable team"
                        title={<>Everything your AI ambition needs, <span className="text-gradient">under one roof.</span></>}
                        description="From the engine room to the edge — infrastructure, defense and product engineering that ship together, secure from day one."
                    />

                    <div className="mt-16 grid gap-6 lg:grid-cols-3">
                        {SOLUTION_LIST.map((s, i) => (
                            <Reveal key={s.slug} delay={0.08 * i}>
                                <Link href={`/${s.slug}`} className="glass-card group flex h-full flex-col overflow-hidden">
                                    <div className="relative h-44 overflow-hidden">
                                        <img
                                            src={s.image}
                                            alt={s.imageAlt}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
                                        <div className="absolute bottom-3 left-5">
                                            <IconTile icon={s.icon} />
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6 pt-5">
                                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-pulse">{s.tagline}</p>
                                        <h3 className="mt-2 font-display text-2xl font-bold text-white">{s.name}</h3>
                                        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{s.menuBlurb}.</p>
                                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-pulse">
                                            Explore
                                            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY NETWORSYS */}
            <section id="why" className="section-glow relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="Why Networsys"
                        title={<>Most AI projects stall on infrastructure. <span className="text-gradient">Ours don’t.</span></>}
                        description="Vendor-neutral, India-based, and built for regulated industries where uptime and data residency are non-negotiable."
                    />

                    {/* Count-up stats */}
                    <Reveal delay={0.1} className="mt-14">
                        <div className="grid grid-cols-2 gap-5 overflow-hidden rounded-2xl border-none backdrop-blur-sm lg:grid-cols-4">
                            {WHY_STATS.map((s) => (
                                <div key={s.label} className="glass-card px-6 py-8 text-center">
                                    <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                                        <CountUp value={s.value} suffix={s.suffix} />
                                    </p>
                                    <p className="mx-auto mt-3 max-w-[14rem] text-xs leading-relaxed text-mist/60">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* Supporting content */}
                    <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
                        <Reveal>
                            <ul className="space-y-4">
                                {[
                                    'ISO 27001-certified processes and CEH-certified ethical hackers',
                                    '100% in-country data residency for DPDP, RBI and HIPAA',
                                    'Vendor-neutral across NVIDIA, AMD, Dell, HPE, Supermicro and Lenovo',
                                    'Every release pen-tested before launch — security is not an add-on',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-mist/85">
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ember to-pulse">
                                            <Check size={12} strokeWidth={3} className="text-ink" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <div className="glass-card overflow-hidden p-2">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Dark AI data center hall with orange and cyan light trails converging on a neural core"
                                    loading="lazy"
                                    className="w-full rounded-2xl object-cover"
                                />
                                <div className="flex items-center justify-between px-4 py-4">
                                    <p className="text-xs uppercase tracking-[0.24em] text-mist/60">The engine room of intelligence</p>
                                    <span className="h-2 w-2 animate-pulse-glow rounded-full bg-pulse shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES — 3 image cards with hover overlay */}
            <section id="industries" className="py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="Built for your industry"
                        title={<>Regulated. High-stakes. <span className="text-gradient">Exactly our home turf.</span></>}
                        description="We speak fintech, healthcare and banking — the compliance, the latency budgets and the audit trails."
                    />

                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {INDUSTRY_CARDS.map((ind, i) => {
                            const Icon = ind.icon;
                            return (
                                <Reveal key={ind.key} delay={0.08 * i} className="h-full">
                                    <Link
                                        href={`/industries/${ind.key}`}
                                        className="group relative block h-full overflow-hidden rounded-2xl border border-white/10"
                                    >
                                        <div className="relative h-80 overflow-hidden">
                                            <img
                                                src={ind.image}
                                                alt={ind.alt}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            />
                                            {/* base gradient for legibility */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
                                            {/* hover overlay */}
                                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                                <span className="icon-tile !h-11 !w-11 !rounded-xl">
                                                    <Icon size={20} strokeWidth={1.5} />
                                                </span>
                                                <h3 className="mt-4 font-display text-xl font-bold text-white">{ind.title}</h3>
                                                {/* revealed body on hover */}
                                                <div className="grid grid-rows-[0fr] overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                                                    <p className="mt-3 min-h-0 text-sm leading-relaxed text-mist/85">{ind.body}</p>
                                                </div>
                                                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-pulse">
                                                    Explore
                                                    <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FEATURED SUCCESS STORY */}
            <section className="section-glow relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="Featured success story"
                        title={<>Proof of what <span className="text-gradient">production-ready</span> means.</>}
                        description="A sample case study — illustrative only, to be replaced with real client data before publishing."
                    />

                    <Reveal delay={0.1} className="mt-14">
                        <article className="glass-card p-8 sm:p-12">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-pulse">
                                    {FEATURED_STORY.solutionName}
                                </p>
                                <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ember">
                                    Sample
                                </span>
                            </div>
                            <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                                {FEATURED_STORY.title}
                            </h3>
                            <div className="mt-8 grid gap-8 md:grid-cols-3">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember">Challenge</p>
                                    <p className="mt-3 text-sm leading-relaxed text-mist/80">{FEATURED_STORY.challenge}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pulse">Solution</p>
                                    <p className="mt-3 text-sm leading-relaxed text-mist/80">{FEATURED_STORY.solution}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Result</p>
                                    <p className="mt-3 text-sm leading-relaxed text-mist/80">{FEATURED_STORY.result}</p>
                                </div>
                            </div>
                            <Link
                                href={`/${FEATURED_STORY.solutionSlug}#case-study`}
                                className="btn-gradient mt-9 inline-flex min-h-[48px] items-center gap-2 px-7 py-3 text-sm font-semibold"
                            >
                                Read Case Study
                                <ArrowRight size={15} />
                            </Link>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ACCELERATORS — horizontal scroll */}
            <section id="accelerators" className="py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <SectionHeading
                            align="left"
                            eyebrow="Accelerators"
                            title={<>Fast-start packages, <span className="text-gradient">fixed scope.</span></>}
                            description="Pick a sprint to de-risk a decision or ship a milestone — without committing to a full programme."
                            className="max-w-2xl"
                        />
                        <div className="hidden gap-2 sm:flex">
                            <button
                                type="button"
                                onClick={() => scrollAccel(-1)}
                                aria-label="Scroll accelerators left"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-mist transition hover:border-pulse/50 hover:text-pulse"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                type="button"
                                onClick={() => scrollAccel(1)}
                                aria-label="Scroll accelerators right"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-mist transition hover:border-pulse/50 hover:text-pulse"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={accelRef}
                        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {ACCELERATORS.map((a, i) => (
                            <article
                                key={a.title}
                                className="glass-card flex w-[20rem] shrink-0 snap-start flex-col p-6"
                            >
                                <div className="flex items-center justify-between">
                                    <IconTile icon={a.icon} />
                                    <span className="rounded-full border border-pulse/30 bg-pulse/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-pulse">
                                        {a.tag}
                                    </span>
                                </div>
                                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">{a.title}</h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{a.blurb}</p>
                                <a
                                    href={`/accelerators#${a.slug}`}
                                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-pulse"
                                >
                                    Request a brief
                                    <ArrowRight size={14} />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* LATEST INSIGHTS — 3 blog cards */}
            <section id="insights" className="section-glow relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="Latest insights"
                        title={<>Thinking, out loud. <span className="text-gradient">From the lab to your inbox.</span></>}
                        description="Engineering and strategy notes from the people who build, defend and ship for regulated industries."
                    />

                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {INSIGHTS_POSTS.map((post, i) => (
                            <Reveal key={post.slug} delay={0.08 * i} className="h-full">
                                <Link
                                    href="/insights"
                                    className="glass-card group flex h-full flex-col p-7"
                                >
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

            {/* CTA BAND */}
            <section className="relative overflow-hidden py-24 sm:py-28">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-12 sm:py-20">
                            {/* glow backdrop */}
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_50%_120%,rgba(242,107,33,0.22),transparent_60%),radial-gradient(40rem_24rem_at_50%_-20%,rgba(34,211,238,0.18),transparent_60%)]" />
                            <div className="relative z-10 mx-auto max-w-2xl">
                                <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                                    Ready to Modernise, <span className="text-gradient">Secure and Scale?</span>
                                </h2>
                                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                                    Talk to a senior Networsys consultant — not a sales rep. We’ll map your path in one
                                    free 30-minute call.
                                </p>
                                <Link
                                    href="/contact"
                                    className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold"
                                >
                                    Talk to an Expert
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="section-glow-ink relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
                    <Reveal>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-pulse" />
                            Consultation & enquiries
                        </span>
                        <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Tell us your workload. <span className="text-gradient">We’ll map the build.</span>
                        </h2>
                        <p className="mt-6 max-w-lg text-base leading-relaxed text-mist/80">
                            Book a free 30-minute consultation. We’ll tell you exactly what to build, what it costs and how
                            long it takes — and honestly, if you shouldn’t build it yet.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {[
                                'A senior consultant — never a sales rep — on every call',
                                'Scope, timeline and price mapped in the first conversation',
                                'Your data processed under GDPR-grade consent, withdrawable anytime',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-mist/85">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ember to-pulse">
                                        <Check size={12} strokeWidth={3} className="text-ink" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <EnquiryForm
                            solution="general"
                            heading="Request your free consultation"
                            subheading="Fields marked * are required. We reply within one business day."
                        />
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;

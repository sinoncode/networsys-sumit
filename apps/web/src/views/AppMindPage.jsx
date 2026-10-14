"use client";
import React, { useRef } from 'react';

import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    ChevronRight,
    ChevronLeft,
    Check,
    Clock,
    FileText,
    Bot,
    Smartphone,
    Globe,
    Rocket,
    ShieldCheck,
    PenTool,
    Layers,
    Gauge,
    Cloud,
    Code2,
    Sparkles,
    TrendingUp,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhoneDashboard from '@/components/PhoneDashboard';
import TrustedStrip from '@/components/TrustedStrip';
import SectionHeading from '@/components/SectionHeading';
import IconTile from '@/components/IconTile';
import EnquiryForm from '@/components/EnquiryForm';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { ServiceSchema } from '@/components/Schema';
import { SOLUTIONS } from '@/data/solutions';
import { INSIGHTS_POSTS } from '@/data/site';

const s = SOLUTIONS.appmind;

const WHY_STATS = [
    { icon: Rocket, stat: '8 weeks', label: 'working MVP — fixed scope, fixed price' },
    { icon: ShieldCheck, stat: 'Pen-tested', label: 'every release security-scanned before launch' },
    { icon: Cloud, stat: 'AWS-certified', label: 'cloud architecture and DevOps underneath' },
    { icon: Code2, stat: 'Full-stack', label: 'Flutter, React Native, Kotlin, Swift, React, Next.js, Node, Laravel' },
];

const CAPABILITIES = [
    { icon: Smartphone, slug: 'mobile-apps', title: 'Intelligent Mobile Apps (Android & iOS)', body: 'Native and cross-platform apps with on-device AI, biometrics and offline-first architecture.' },
    { icon: Globe, slug: 'web-platforms', title: 'AI-Powered Web Platforms', body: 'Custom portals, SaaS products and enterprise web apps with AI search, personalisation and automation.' },
    { icon: Bot, slug: 'genai-integration', title: 'GenAI & Copilot Integration', body: 'LLM chatbots, RAG over private documents, WhatsApp and voice assistants — with your data under your control.' },
    { icon: Rocket, slug: 'launchpad-mvp', title: 'LaunchPad — MVP in 8 Weeks', body: 'Idea Monday, live product in eight weeks. Built for startups and innovation teams inside banks and hospitals.' },
    { icon: ShieldCheck, slug: 'secure-engineering', title: 'Secure-by-Design App Engineering', body: 'Threat modelling, SAST/DAST in CI/CD and pre-launch penetration testing aligned to OWASP ASVS/MASVS.' },
    { icon: PenTool, slug: 'experience-design', title: 'Experience Design (UI/UX)', body: 'Research-driven design for complex products — patient journeys, trading screens, dashboards — that stay simple.' },
];

const TECH_LOGOS = [
    'Flutter', 'React Native', 'Kotlin', 'Swift', 'React', 'Next.js', 'Node.js', 'Laravel', 'AWS', 'TensorFlow',
];

const PROCESS = [
    { step: 'Discover', body: 'User research, scope and clickable prototype' },
    { step: 'Design', body: 'UI/UX, design system and technical architecture' },
    { step: 'Develop', body: 'Agile sprints with weekly demos' },
    { step: 'Test', body: 'QA, performance and security scan' },
    { step: 'Launch', body: 'App-store submission, cloud deployment and monitoring' },
    { step: 'Grow', body: 'Analytics, A/B testing and feature roadmap' },
];

const PORTFOLIO = [
    {
        slug: 'nbfc-loan-portal',
        tag: 'Fintech · Web + Mobile',
        title: 'NBFC Loan Origination Portal',
        blurb: 'AI document verification cut processing from 3 days to 4 hours and tripled loan volume.',
        accent: 'from-ember/30 to-pulse/20',
    },
    {
        slug: 'hospital-triage-app',
        tag: 'Healthcare · Mobile',
        title: 'AI Triage & Tele-Consult App',
        blurb: 'Patient app with AI symptom triage integrated with the hospital information system.',
        accent: 'from-pulse/30 to-ember/20',
    },
    {
        slug: 'whatsapp-banking',
        tag: 'Banking · Conversational AI',
        title: 'WhatsApp Banking Assistant',
        blurb: 'RAG-powered copilot answering balance, statement and service requests 24×7 in two languages.',
        accent: 'from-ember/30 to-pulse/20',
    },
    {
        slug: 'wealth-advisory-saas',
        tag: 'Fintech · SaaS',
        title: 'Wealth Advisory Platform',
        blurb: 'AI portfolio insights and goal-planning dashboards for a digital-first wealth firm.',
        accent: 'from-pulse/30 to-ember/20',
    },
    {
        slug: 'field-agent-app',
        tag: 'Fintech · Flutter',
        title: 'Field-Agent KYC App',
        blurb: 'Offline-first Flutter app with biometric KYC and sync-on-connect for remote loan officers.',
        accent: 'from-ember/30 to-pulse/20',
    },
    {
        slug: 'core-banking-copilot',
        tag: 'Banking · GenAI',
        title: 'Core-Banking Copilot',
        blurb: 'Internal LLM assistant that drafts service requests and summaries from core-banking data.',
        accent: 'from-pulse/30 to-ember/20',
    },
];

const AppMindPage = () => {
    const carouselRef = useRef(null);

    const scrollBy = (dir) => {
        const node = carouselRef.current;
        if (!node) return;
        const amount = Math.min(node.clientWidth * 0.8, 420);
        node.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-ink text-mist">
            {/* Helmet removed for Next.js metadata */}
            <Seo
                title={s.seo.title}
                description={s.seo.description}
                image={s.image}
                siteName="Networsys Technologies"
            />
            <ServiceSchema
                name="AppMind — AI-Native Web & Mobile App Engineering"
                description={s.seo.description}
                url="https://networsys.com/appmind"
                serviceType="AI-Native Application Engineering"
            />

            <Navbar />

            {/* HERO */}
            <section className="section-glow-ink relative flex min-h-[100dvh] items-center overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />

                <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-6 lg:pb-20">
                    {/* Left: copy */}
                    <div className="max-w-2xl">
                        {/* Breadcrumb */}
                        <Reveal>
                            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-mist/55">
                                <Link href="/" className="transition hover:text-pulse">Home</Link>
                                <ChevronRight size={13} className="text-mist/30" />
                                <Link href="/#solutions" className="transition hover:text-pulse">Solutions</Link>
                                <ChevronRight size={13} className="text-mist/30" />
                                <span className="font-semibold text-pulse">AppMind</span>
                            </nav>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                                <Bot size={13} className="text-pulse" />
                                AI-Native Web &amp; Mobile App Engineering
                            </span>
                        </Reveal>

                        <Reveal delay={0.16}>
                            <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Build Products Your Users <br className="hidden sm:block" />
                                Can’t <span className="text-gradient">Put Down.</span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.24}>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
                                AppMind engineers intelligent, secure and scalable web and mobile applications with AI
                                at the core — from an 8-week MVP to an enterprise platform serving millions. Every
                                product ships through our own security pipeline.
                            </p>
                        </Reveal>

                        <Reveal delay={0.32} className="mt-10 flex flex-wrap items-center gap-4">
                            <Link href="/contact" className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                                Start Your Product Sprint
                                <ArrowRight size={16} />
                            </Link>
                            <Link href="/portfolio" className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                                See Our Portfolio
                            </Link>
                        </Reveal>
                    </div>

                    {/* Right: floating phone + dashboard mockups */}
                    <Reveal delay={0.25} className="relative">
                        <PhoneDashboard />
                    </Reveal>
                </div>
            </section>

            <TrustedStrip />

            {/* WHY APPMIND — 4 glass stat cards */}
            <section className="section-glow relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="Why AppMind"
                        title={<>Anyone can build an app. <span className="text-gradient">Few build one that lasts.</span></>}
                        description="AppMind combines product design, AI engineering and Aegis360’s secure development lifecycle in one team — with AWS-certified cloud architecture underneath."
                    />

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {WHY_STATS.map((w, i) => (
                            <Reveal key={w.label} delay={0.07 * i} className="h-full">
                                <div className="glass-card flex h-full flex-col p-7">
                                    <IconTile icon={w.icon} />
                                    <p className="mt-5 font-display text-2xl font-bold leading-tight text-white">
                                        {w.stat}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-mist/75">{w.label}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT WE DO — 6 capability cards */}
            <section id="capabilities" className="py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="What we do"
                        title={<>Six disciplines. <span className="text-gradient">One product team.</span></>}
                        description="From the first prototype to the millionth user — design, AI, mobile, web, security and growth under one accountable team."
                    />

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {CAPABILITIES.map((c, i) => (
                            <Reveal key={c.title} delay={0.06 * (i % 3)} className="h-full">
                                <Link href={`/appmind/${c.slug}`} className="glass-card group flex h-full flex-col p-7">
                                    <IconTile icon={c.icon} />
                                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">{c.title}</h3>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{c.body}</p>
                                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-pulse">
                                        Explore
                                        <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH LOGO STRIP */}
            <section className="border-y border-white/5 bg-ink/80 py-10 backdrop-blur-xl">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/50">
                        The stack we build on
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        {TECH_LOGOS.map((t) => (
                            <span
                                key={t}
                                className="font-display text-base font-bold tracking-tight text-mist/55 transition hover:text-white sm:text-lg"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS TIMELINE */}
            <section className="section-glow relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="How we deliver"
                        title={<>Idea Monday. <span className="text-gradient">Live product in eight weeks.</span></>}
                        description="A six-stage delivery model that takes you from discovery to growth — with weekly demos and a security gate before every launch."
                    />

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                        {PROCESS.map((p, i) => (
                            <Reveal key={p.step} delay={0.06 * i} className="h-full">
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

            {/* SUCCESS STORY */}
            <section id="case-study" className="py-24 sm:py-32">
                <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="Success story"
                        title={<>3 days to 4 hours. <span className="text-gradient">3× the loan volume.</span></>}
                    />

                    <Reveal delay={0.1} className="mt-14">
                        <article className="glass-card p-8 sm:p-12">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-pulse">
                                    NBFC · Lending
                                </p>
                                <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ember">
                                    Sample — replace with real client data
                                </span>
                            </div>
                            <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                                NBFC loan-origination portal with AI document verification
                            </h3>
                            <div className="mt-8 grid gap-8 md:grid-cols-3">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember">Challenge</p>
                                    <p className="mt-3 text-sm leading-relaxed text-mist/80">{s.caseStudy.challenge}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pulse">Solution</p>
                                    <p className="mt-3 text-sm leading-relaxed text-mist/80">{s.caseStudy.solution}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Result</p>
                                    <p className="mt-3 text-sm leading-relaxed text-mist/80">{s.caseStudy.result}</p>
                                </div>
                            </div>

                            {/* Result metrics */}
                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                {[
                                    { icon: Gauge, stat: '3 days → 4 hrs', label: 'processing time' },
                                    { icon: TrendingUp, stat: '3×', label: 'loan volume, same team' },
                                    { icon: Check, stat: '8% →', label: 'incomplete applications' },
                                ].map((m) => (
                                    <div key={m.label} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-ember to-pulse text-ink">
                                            <m.icon size={16} strokeWidth={2} />
                                        </span>
                                        <div>
                                            <p className="font-display text-base font-bold text-white">{m.stat}</p>
                                            <p className="text-[0.7rem] text-mist/60">{m.label}</p>
                                        </div>
                                    </div>
                                ))}
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

            {/* PORTFOLIO CAROUSEL */}
            <section id="portfolio" className="section-glow relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                        <SectionHeading
                            align="left"
                            eyebrow="Portfolio"
                            title={<>Products we’ve <span className="text-gradient">shipped.</span></>}
                            description="A selection of AI-native web and mobile products built for fintech, hospitals and financial institutions."
                            className="max-w-2xl"
                        />
                        <div className="hidden gap-2 sm:flex">
                            <button
                                type="button"
                                onClick={() => scrollBy(-1)}
                                aria-label="Previous"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-mist transition hover:border-pulse/50 hover:text-pulse"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                type="button"
                                onClick={() => scrollBy(1)}
                                aria-label="Next"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-mist transition hover:border-pulse/50 hover:text-pulse"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={carouselRef}
                        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {PORTFOLIO.map((p, i) => (
                            <Reveal
                                key={p.slug}
                                delay={0.05 * (i % 3)}
                                className="w-[80%] shrink-0 snap-center sm:w-[46%] lg:w-[31%]"
                            >
                                <Link href="/portfolio" className="glass-card group flex h-full flex-col overflow-hidden">
                                    {/* Visual */}
                                    <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(20rem_12rem_at_30%_20%,rgba(255,255,255,0.08),transparent)]" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-ink/70 backdrop-blur-xl">
                                                <Sparkles size={26} className="text-pulse" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/60 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-mist/80 backdrop-blur">
                                            {p.tag}
                                        </span>
                                    </div>
                                    {/* Body */}
                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="font-display text-lg font-bold leading-snug text-white transition group-hover:text-pulse">
                                            {p.title}
                                        </h3>
                                        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{p.blurb}</p>
                                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-pulse">
                                            View project
                                            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.1} className="mt-10 text-center">
                        <Link
                            href="/portfolio"
                            className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3 text-sm font-semibold"
                        >
                            View full portfolio
                            <ArrowRight size={15} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* LATEST INSIGHTS — 3 blog cards */}
            <section id="insights" className="py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="Latest insights"
                        title={<>From the <span className="text-gradient">AppMind</span> desk.</>}
                        description="Engineering and strategy notes on AI-native product design, GenAI integration and secure app development."
                    />

                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {INSIGHTS_POSTS.filter((p) => p.solutionSlug === 'appmind').concat(INSIGHTS_POSTS).slice(0, 3).map((post, i) => (
                            <Reveal key={post.slug} delay={0.08 * i} className="h-full">
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

            {/* CLOSING CTA */}
            <section className="relative overflow-hidden py-24 sm:py-28">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-12 sm:py-20">
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_50%_120%,rgba(242,107,33,0.22),transparent_60%),radial-gradient(40rem_24rem_at_50%_-20%,rgba(34,211,238,0.18),transparent_60%)]" />
                            <div className="relative z-10 mx-auto max-w-2xl">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/70 backdrop-blur">
                                    <Layers size={13} className="text-ember" />
                                    AppMind
                                </span>
                                <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                                    Have an Idea? <span className="text-gradient">Let’s Ship It.</span>
                                </h2>
                                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                                    Book a 30-minute product call. We’ll map your idea to a scope, timeline and price —
                                    and tell you honestly if it should be an MVP or a full build.
                                </p>
                                <Link
                                    href="/contact"
                                    className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold"
                                >
                                    Start My Product Sprint
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CONTACT / ENQUIRY FORM */}
            <section id="contact" className="section-glow-ink relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
                    <Reveal>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-pulse" />
                            Consultation &amp; enquiries
                        </span>
                        <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Map your idea to a <span className="text-gradient">shippable product.</span>
                        </h2>
                        <p className="mt-6 max-w-lg text-base leading-relaxed text-mist/80">
                            Book a free 30-minute product call. We’ll map your idea to a scope, timeline and price — and
                            tell you honestly if it should be an MVP or a full build.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {[
                                'A senior product architect — never a sales rep — on every call',
                                'Scope, timeline and a fixed-price MVP estimate in one session',
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
                            solution="appmind"
                            heading="Start your Product Sprint"
                            subheading="Fields marked * are required. We reply within one business day."
                            buttonLabel="Start My Product Sprint"
                        />
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AppMindPage;

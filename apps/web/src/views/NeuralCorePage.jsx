import React from 'react';

import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    ChevronRight,
    Check,
    Clock,
    FileText,
    Gauge,
    Globe2,
    Layers,
    Server,
    Cpu,
    Snowflake,
    CloudCog,
    Building2,
    ShieldCheck,
    TrendingDown,
    Boxes,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GpuChip from '@/components/GpuChip';
import TrustedStrip from '@/components/TrustedStrip';
import SectionHeading from '@/components/SectionHeading';
import IconTile from '@/components/IconTile';
import EnquiryForm from '@/components/EnquiryForm';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { ServiceSchema } from '@/components/Schema';
import { SOLUTIONS } from '@/data/solutions';
import { INSIGHTS_POSTS } from '@/data/site';

const s = SOLUTIONS.neuralcore;

const WHY_STATS = [
    { icon: TrendingDown, stat: 'Up to 60%', label: 'lower 3-year TCO vs public-cloud GPUs' },
    { icon: Gauge, stat: '6 weeks', label: 'from blueprint to live GPU clusters' },
    { icon: Globe2, stat: '100%', label: 'in-country data residency for DPDP, RBI & HIPAA' },
    { icon: Boxes, stat: 'Vendor-neutral', label: 'NVIDIA, AMD, Dell, HPE, Supermicro, Lenovo' },
];

const CAPABILITIES = [
    { icon: Server, slug: 'data-center-architecture', title: 'AI-Ready Data Center Architecture', body: 'High-density rack layouts, cooling strategy and network fabric designed around the GPU, not retrofitted for it.' },
    { icon: Cpu, slug: 'gpu-cluster-engineering', title: 'GPU Cluster Engineering', body: 'Workload profiling and right-sized GPU selection — L40S to H200 — so you never over-buy or under-deliver.' },
    { icon: Snowflake, slug: 'power-cooling-rack', title: 'Power, Cooling & Rack Configuration', body: 'PDUs, UPS, containment and liquid cooling engineered so clusters run at 100% load without throttling.' },
    { icon: CloudCog, slug: 'ai-orchestration', title: 'AI Compute Deployment & Orchestration', body: 'Kubernetes, NVIDIA GPU Operator, vLLM/Triton serving and scheduling — bare metal to model serving in days.' },
    { icon: Building2, slug: 'hybrid-colocation', title: 'Hybrid & Colocation Enablement', body: 'Own your racks in certified Indian colocation facilities with seamless burst-to-cloud connectivity.' },
    { icon: ShieldCheck, slug: 'secure-ai-infrastructure', title: 'Secure & Compliant AI Infrastructure', body: 'Zero-trust segmentation, encryption and audit-ready documentation mapped to DPDP, RBI and ISO 27001.' },
];

const PROCESS = [
    { step: 'Assess', body: 'Site, workload and compliance discovery workshop' },
    { step: 'Architect', body: 'Blueprint, thermal modelling and bill of materials' },
    { step: 'Build', body: 'Procurement support, installation and cabling supervision' },
    { step: 'Orchestrate', body: 'Platform stack, model serving and monitoring' },
    { step: 'Operate', body: 'Managed support, capacity planning and optimisation' },
];

const NeuralCorePage = () => (
    <div className="min-h-screen bg-ink text-mist">
        {/* Helmet removed for Next.js metadata */}
        <Seo
            title={s.seo.title}
            description={s.seo.description}
            image={s.image}
            siteName="Networsys Technologies"
        />
        <ServiceSchema
            name="NeuralCore — AI Data Center Design, Configuration & Deployment"
            description={s.seo.description}
            url="https://networsys.com/neuralcore"
            serviceType="AI Infrastructure Engineering"
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
                            <span className="font-semibold text-pulse">NeuralCore</span>
                        </nav>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                            <Server size={13} className="text-pulse" />
                            AI Data Center Design, Configuration &amp; Deployment
                        </span>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Build AI Infrastructure <br className="hidden sm:block" />
                            That Never <span className="text-gradient">Blinks.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
                            NeuralCore designs, configures and deploys GPU-ready data centers and hybrid AI compute
                            environments for fintech, hospitals and financial institutions — secure, compliant and
                            production-ready from day one.
                        </p>
                    </Reveal>

                    <Reveal delay={0.32} className="mt-10 flex flex-wrap items-center gap-4">
                        <Link href="/contact" className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                            Book a Free AI Infra Readiness Call
                            <ArrowRight size={16} />
                        </Link>
                        <a href="#contact" className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                            Download the Design Checklist
                        </a>
                    </Reveal>
                </div>

                {/* Right: 3D glowing GPU chip */}
                <Reveal delay={0.25} className="relative">
                    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
                        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,107,33,0.18),transparent_62%)]" />
                        <GpuChip className="h-full w-full" />
                    </div>
                </Reveal>
            </div>
        </section>

        <TrustedStrip />

        {/* WHY NEURALCORE — 4 glass stat cards */}
        <section className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Why NeuralCore"
                    title={<>Most AI projects stall on infrastructure. <span className="text-gradient">Ours don’t.</span></>}
                    description="Vendor-neutral, India-based, and built for regulated industries where uptime and data residency are non-negotiable."
                />

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {WHY_STATS.map((w, i) => (
                        <Reveal key={w.label} delay={0.07 * i} className="h-full">
                            <div className="glass-card flex h-full flex-col p-7">
                                <IconTile icon={w.icon} />
                                <p className="mt-5 font-display text-3xl font-bold leading-tight text-white">
                                    {w.stat}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-mist/75">{w.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1} className="mt-12">
                    <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-mist/80">
                        We are vendor-neutral, India-based, and we build for regulated industries where uptime and data
                        residency are non-negotiable. From the first rack drawing to the last model served, one team owns
                        the outcome.
                    </p>
                </Reveal>
            </div>
        </section>

        {/* WHAT WE DO — 6 capability cards */}
        <section id="capabilities" className="py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="What we do"
                    title={<>Capabilities, <span className="text-gradient">end to end.</span></>}
                    description="From the rack drawing to the served model — every layer of GPU infrastructure under one accountable team."
                />

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {CAPABILITIES.map((c, i) => (
                        <Reveal key={c.title} delay={0.06 * (i % 3)} className="h-full">
                            <Link href={`/neuralcore/${c.slug}`} className="glass-card group flex h-full flex-col p-7">
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

        {/* HOW WE DELIVER — timeline */}
        <section className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="How we deliver"
                    title={<>One team. <span className="text-gradient">One accountable outcome.</span></>}
                    description="A five-stage delivery model that takes you from discovery to managed operation — without the hand-off gaps that break AI projects."
                />

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {PROCESS.map((p, i) => (
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

        {/* SUCCESS STORY */}
        <section id="case-study" className="py-24 sm:py-32">
            <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Success story"
                    title={<>Proof of what <span className="text-gradient">production-ready</span> means.</>}
                />

                <Reveal delay={0.1} className="mt-14">
                    <article className="glass-card p-8 sm:p-12">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-pulse">
                                Regional hospital group
                            </p>
                            <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ember">
                                Sample — replace with real client data
                            </span>
                        </div>
                        <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                            Regional hospital group builds on-prem AI imaging cluster
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

        {/* LATEST INSIGHTS — 3 blog cards */}
        <section id="insights" className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Latest insights"
                    title={<>From the <span className="text-gradient">NeuralCore</span> desk.</>}
                    description="Engineering and strategy notes on AI infrastructure, GPU economics and compliant data-center design."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {INSIGHTS_POSTS.filter((p) => p.solutionSlug === 'neuralcore').concat(INSIGHTS_POSTS).slice(0, 3).map((post, i) => (
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
                                NeuralCore
                            </span>
                            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                                Ready to Own Your <span className="text-gradient">AI Compute?</span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                                Tell us your workload. We’ll tell you exactly what to build, what it costs and how long it
                                takes — free, in 30 minutes.
                            </p>
                            <Link
                                href="/contact"
                                className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold"
                            >
                                Book a Readiness Call
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
                        Tell us your workload. <span className="text-gradient">We’ll map the build.</span>
                    </h2>
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-mist/80">
                        Book a free 30-minute readiness call. We’ll map your scope, timeline and price — and tell you
                        honestly if you shouldn’t build it yet.
                    </p>
                    <ul className="mt-8 space-y-4">
                        {[
                            'A senior infrastructure architect — never a sales rep — on every call',
                            'Workload profiling, GPU right-sizing and a 3-year TCO estimate',
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
                        solution="neuralcore"
                        heading="Book your AI Infra Readiness Call"
                        subheading="Fields marked * are required. We reply within one business day."
                        buttonLabel="Book a Readiness Call"
                    />
                </Reveal>
            </div>
        </section>

        <Footer />
    </div>
);

export default NeuralCorePage;

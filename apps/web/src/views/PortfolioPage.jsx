"use client";
import React, { useState, useMemo } from 'react';

import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    X,
    Smartphone,
    Globe,
    Bot,
    ShieldCheck,
    Check,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';

const FILTERS = [
    { key: 'all', label: 'All', icon: null },
    { key: 'mobile', label: 'Mobile', icon: Smartphone },
    { key: 'web', label: 'Web', icon: Globe },
    { key: 'ai', label: 'AI', icon: Bot },
    { key: 'security', label: 'Security', icon: ShieldCheck },
];

const PROJECTS = [
    {
        id: 'uppi-pay',
        name: 'UPI Pay Wallet',
        category: 'mobile',
        industry: 'Fintech',
        image: 'https://images.hostinger.com/bd7b0ee6-e5e9-4a02-973b-53518cdfaa0d.png',
        result: 'Sub-second UPI payments with on-device fraud scoring.',
        summary: 'A cross-platform mobile wallet handling UPI payments, bill-split and AI-based transaction fraud scoring — built for a Noida fintech.',
        stack: ['Flutter', 'UPI SDK', 'On-device ML', 'PCI DSS'],
        highlights: [
            'Real-time fraud scoring under 80 ms on-device',
            'PCI DSS-ready payment flow with tokenised cards',
            'Bilingual onboarding (English / Hindi) with biometric login',
        ],
    },
    {
        id: 'care-booking',
        name: 'CareBook OPD App',
        category: 'mobile',
        industry: 'Healthcare',
        image: 'https://images.hostinger.com/15f16816-8dea-48f9-8390-482761bf5d43.png',
        result: '48% lift in OPD booking completion for a hospital chain.',
        summary: 'A patient-facing mobile app for OPD appointment booking, tele-consult and report access — with patient data kept on-prem under DPDP.',
        stack: ['Flutter', 'On-prem API', 'DPDP-aligned', 'HIS integration'],
        highlights: [
            '3-step booking flow redesigned from a 7-step legacy process',
            'Tele-consult with on-prem video relay — data never leaves the building',
            'Integrated with the hospital’s HIS for live slot availability',
        ],
    },
    {
        id: 'trade-desk',
        name: 'TradeDesk Web Platform',
        category: 'web',
        industry: 'Banking',
        image: 'https://images.hostinger.com/62b4d82d-3877-405d-9ac2-09ee6f3fe012.png',
        result: 'Real-time trading dashboard serving 10k+ concurrent users.',
        summary: 'A custom web trading platform for an NBFC with live market data, watchlists and AI-assisted risk alerts on a low-latency backend.',
        stack: ['React', 'WebSockets', 'Redis', 'Kubernetes'],
        highlights: [
            'Sub-100 ms market-data updates via WebSocket fan-out',
            'AI risk alerts on portfolio concentration and volatility',
            'Role-based access aligned to RBI IT-framework controls',
        ],
    },
    {
        id: 'doc-copilot',
        name: 'DocCopilot RAG Assistant',
        category: 'ai',
        industry: 'Banking',
        image: 'https://images.hostinger.com/fd8dbdaf-05c4-42c5-8efb-5519ad996f0b.png',
        result: 'Private LLM assistant answering from 50k+ internal docs.',
        summary: 'A retrieval-augmented copilot for a bank’s operations team that answers policy and procedure questions from private documents — with no data leaving their control.',
        stack: ['vLLM', 'Vector DB', 'RAG pipeline', 'On-prem GPUs'],
        highlights: [
            'Answers grounded in source documents with citations',
            'Runs entirely on-prem — zero data egress to public LLMs',
            'Access-controlled retrieval per department and role',
        ],
    },
    {
        id: 'sentinel-soc',
        name: 'SentinelSOC Console',
        category: 'security',
        industry: 'Healthcare',
        image: 'https://images.hostinger.com/0fd81c20-8dbf-4872-8304-9902612b1f88.png',
        result: '24×7 MDR that detected ransomware in under 4 minutes.',
        summary: 'The analyst console powering our managed detection and response service — SIEM, EDR/XDR correlation and automated playbooks for a hospital chain.',
        stack: ['SIEM', 'EDR/XDR', 'Playbooks', 'MITRE ATT&CK'],
        highlights: [
            'L1–L3 analyst workflow with MITRE ATT&CK-mapped alerts',
            'Automated isolation playbook triggered on encryption behaviour',
            'Quarterly tabletop drills baked into the subscription',
        ],
    },
    {
        id: 'gpu-cluster',
        name: 'Sovereign GPU Cluster',
        category: 'ai',
        industry: 'Banking',
        image: 'https://images.hostinger.com/e8490388-9662-421d-8487-d09447e9398f.png',
        result: '6-rack, 240 kW inference cluster with 100% in-country data.',
        summary: 'A GPU-ready data center build for a cooperative bank — high-density racks, liquid cooling and Kubernetes orchestration serving risk models in milliseconds.',
        stack: ['NVIDIA H100', 'Liquid cooling', 'Kubernetes', 'Triton'],
        highlights: [
            'PUE reduced from 1.9 to 1.45 with containment + liquid cooling',
            'Inference latency under 40 ms for risk scoring',
            '100% in-country data residency clearing RBI audit',
        ],
    },
    {
        id: 'lend-risk',
        name: 'LendRisk Underwriting',
        category: 'web',
        industry: 'Fintech',
        image: 'https://images.hostinger.com/64b1ac01-031d-4a59-a7de-5ae686f68f03.png',
        result: 'AI KYC + risk scoring that cut loan approval time 60%.',
        summary: 'A lending web platform for an NBFC with AI KYC, document parsing and risk scoring — taking a loan application from upload to decision in minutes.',
        stack: ['React', 'OCR', 'Risk ML', 'Workflow engine'],
        highlights: [
            'AI KYC with document parsing and liveness verification',
            'Risk scoring model trained on the lender’s own portfolio',
            'Audit trail for every decision, RBI-aligned',
        ],
    },
    {
        id: 'resilience-vault',
        name: 'ResilienceVault DR',
        category: 'security',
        industry: 'Healthcare',
        image: 'https://images.hostinger.com/9350300e-080a-4965-9d71-c7b8b0961aa1.png',
        result: 'Immutable backups restored clinical systems in 40 minutes.',
        summary: 'A backup and disaster-recovery platform with immutable storage, tested recovery runbooks and quarterly drills for a multi-specialty hospital chain.',
        stack: ['Immutable storage', 'Runbooks', 'Air-gapped copy', 'DR drills'],
        highlights: [
            'Immutable, air-gapped backups ransomware cannot encrypt',
            'Tested recovery runbooks with RTO under one hour',
            'Quarterly drills with the hospital’s IT team',
        ],
    },
    {
        id: 'rad-ai',
        name: 'RadAI Imaging Viewer',
        category: 'ai',
        industry: 'Healthcare',
        image: 'https://images.hostinger.com/69126893-d03a-4c1e-9e6c-e8deb76ddca5.png',
        result: 'On-prem imaging AI that flags critical scans in seconds.',
        summary: 'An on-prem imaging AI viewer for a radiology department — CT/MRI triage annotations that prioritise critical cases without patient data leaving the hospital.',
        stack: ['On-prem GPUs', 'DICOM', 'Segmentation ML', 'PACS integration'],
        highlights: [
            'Critical-findings triage in under 30 seconds per scan',
            'Integrated with the hospital’s PACS — no workflow change',
            'Patient data stays on-prem, DPDP/HIPAA-aligned',
        ],
    },
];

const PortfolioPage = () => {
    const [filter, setFilter] = useState('all');
    const [active, setActive] = useState(null);

    const filtered = useMemo(
        () => (filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
        [filter],
    );

    const activeProject = active ? PROJECTS.find((p) => p.id === active) : null;

    return (
        <div className="min-h-screen bg-ink text-mist">
            {/* Helmet removed for Next.js metadata */}
            <Seo
                title="Portfolio — Networsys Technologies"
                description="Products we've shipped across mobile, web, AI and security for regulated industries."
                type="website"
            />

            <Navbar />

            {/* HERO */}
            <section className="section-glow-ink relative flex min-h-[78dvh] items-center overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(52rem_30rem_at_70%_120%,rgba(242,107,33,0.16),transparent),radial-gradient(48rem_28rem_at_20%_-10%,rgba(34,211,238,0.14),transparent)]" />
                <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                            <ArrowUpRight size={13} className="text-ember" />
                            Portfolio
                        </span>
                    </Reveal>
                    <Reveal delay={0.12} className="mt-7 max-w-4xl">
                        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Products <span className="text-gradient">We’ve Shipped.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
                            A selection of mobile, web, AI and security work for fintech, hospitals and financial
                            institutions. Filter by category and open any card for the full story.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* GRID */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <SectionHeading
                        eyebrow="Selected work"
                        title={<>Nine products, <span className="text-gradient">four disciplines.</span></>}
                        description="Illustrative case studies — to be replaced with real client work before publishing."
                    />

                    {/* Filters */}
                    <div className="mt-10 flex flex-wrap gap-2.5">
                        {FILTERS.map((f) => {
                            const isActive = filter === f.key;
                            const Icon = f.icon;
                            return (
                                <button
                                    key={f.key}
                                    type="button"
                                    onClick={() => setFilter(f.key)}
                                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                                        isActive
                                            ? 'border-transparent bg-[linear-gradient(100deg,#f26b21,#f59e6b_45%,#22d3ee)] text-ink'
                                            : 'border-white/10 bg-white/[0.03] text-mist/80 hover:border-pulse/50 hover:text-pulse'
                                    }`}
                                >
                                    {Icon && <Icon size={15} strokeWidth={1.5} />}
                                    {f.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Cards */}
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((p, i) => (
                            <Reveal key={p.id} delay={0.05 * i} className="h-full">
                                <button
                                    type="button"
                                    onClick={() => setActive(p.id)}
                                    className="glass-card group flex h-full w-full flex-col overflow-hidden text-left"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
                                        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-pulse backdrop-blur">
                                            {p.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                                            <ArrowUpRight size={16} className="text-mist/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pulse" />
                                        </div>
                                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ember">{p.industry}</p>
                                        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{p.result}</p>
                                    </div>
                                </button>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden py-24 sm:py-28">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-12 sm:py-20">
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_50%_120%,rgba(242,107,33,0.22),transparent_60%),radial-gradient(40rem_24rem_at_50%_-20%,rgba(34,211,238,0.18),transparent_60%)]" />
                            <div className="relative z-10 mx-auto max-w-2xl">
                                <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                                    Your product <span className="text-gradient">could be next.</span>
                                </h2>
                                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                                    Tell us what you want to build, defend or scale — we’ll map the build in one free call.
                                </p>
                                <Link href="/contact" className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold">
                                    Start a Project
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />

            {/* DETAIL MODAL */}
            {activeProject && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="portfolio-modal-title"
                >
                    <button
                        type="button"
                        aria-label="Close"
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setActive(null)}
                    />
                    <div className="glass-card relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto p-0">
                        <div className="relative h-56 overflow-hidden rounded-t-[20px]">
                            <img
                                src={activeProject.image}
                                alt={activeProject.name}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent" />
                            <button
                                type="button"
                                onClick={() => setActive(null)}
                                aria-label="Close"
                                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-mist transition hover:border-pulse/50 hover:text-pulse"
                            >
                                <X size={18} />
                            </button>
                            <div className="absolute bottom-4 left-5 right-5">
                                <span className="rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-pulse backdrop-blur">
                                    {activeProject.category}
                                </span>
                                <h2 id="portfolio-modal-title" className="mt-3 font-display text-2xl font-bold text-white">
                                    {activeProject.name}
                                </h2>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ember">
                                    {activeProject.industry}
                                </p>
                            </div>
                        </div>

                        <div className="p-6 sm:p-8">
                            <p className="text-sm leading-relaxed text-mist/85">{activeProject.summary}</p>

                            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-pulse">Result</p>
                            <p className="mt-2 text-sm font-semibold text-white">{activeProject.result}</p>

                            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-pulse">Highlights</p>
                            <ul className="mt-3 space-y-2.5">
                                {activeProject.highlights.map((h) => (
                                    <li key={h} className="flex items-start gap-3 text-sm text-mist/85">
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ember to-pulse">
                                            <Check size={12} strokeWidth={3} className="text-ink" />
                                        </span>
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-pulse">Stack</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {activeProject.stack.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-mist/75"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="btn-solid mt-8 inline-flex min-h-[48px] items-center gap-2 px-6 py-3 text-sm font-semibold"
                            >
                                Build something like this
                                <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioPage;

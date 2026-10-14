import React from 'react';

import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    ChevronRight,
    Clock,
    FileText,
    HeartPulse,
    ShieldAlert,
    Lock,
    Stethoscope,
    Fish,
    Server,
    ShieldCheck,
    Bot,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustedStrip from '@/components/TrustedStrip';
import SectionHeading from '@/components/SectionHeading';
import IconTile from '@/components/IconTile';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { INDUSTRY_CARDS } from '@/data/site';

const healthcare = INDUSTRY_CARDS.find((i) => i.key === 'healthcare');

const CHALLENGES = [
    {
        icon: ShieldAlert,
        title: 'Ransomware targeting clinical systems',
        body: 'Hospitals are the #1 target for ransomware. An overnight encryption event can take HIS, PACS and EMR offline for days — and put patient safety at direct risk.',
    },
    {
        icon: Lock,
        title: 'Patient-data residency & DPDP/HIPAA',
        body: 'Diagnostic images, lab reports and EMR records must stay in-country and under your control. DPDP and HIPAA demand auditable residency, access logs and consent.',
    },
    {
        icon: Stethoscope,
        title: 'Integrating AI with HIS/PACS',
        body: 'Imaging and diagnostic AI only delivers value when it slots into the radiologist’s workflow — not as a disconnected experiment that never reaches production.',
    },
    {
        icon: Fish,
        title: 'Staff phishing risk',
        body: 'Nurses, front-desk and lab staff are bombarded with phishing daily. One phished credential is all an attacker needs to reach file servers and clinical shares.',
    },
];

const SOLUTIONS_HELP = [
    {
        icon: Server,
        slug: 'neuralcore',
        name: 'NeuralCore',
        title: 'On-prem imaging & diagnostic AI clusters',
        body: 'GPU clusters inside your facility that serve radiology, pathology and triage AI in milliseconds — with patient data that never leaves the building.',
    },
    {
        icon: ShieldCheck,
        slug: 'aegis360',
        name: 'Aegis360',
        title: 'SOC, backup/recovery & PHAUSE awareness',
        body: '24×7 managed detection, immutable backups with tested recovery, and bilingual phishing simulation that turns clinical staff into a human firewall.',
    },
    {
        icon: Bot,
        slug: 'appmind',
        name: 'AppMind',
        title: 'Patient apps, tele-consult & AI triage',
        body: 'Patient apps, tele-consult platforms and AI symptom triage integrated with your HIS — secure-by-design and built through our own pen-tested SDLC.',
    },
];

const STORIES = [
    {
        tag: 'Healthcare · Aegis360',
        title: 'Multi-specialty hospital chain stops ransomware at 2 AM',
        challenge: 'An attacker gained entry through a phished nurse-station credential and began encrypting file servers overnight — with clinical rounds starting in four hours.',
        solution: 'SentinelSOC analysts detected anomalous encryption behaviour within 4 minutes, isolated three endpoints, and triggered the ResilienceVault recovery runbook while paging the hospital’s IT lead.',
        result: 'Zero patient-record loss; clinical systems restored in 40 minutes; full forensic report delivered in 48 hours.',
    },
    {
        tag: 'Healthcare · NeuralCore + AppMind',
        title: 'Regional hospital group builds on-prem AI imaging cluster',
        challenge: 'Radiology AI models running on public cloud raised patient-data residency concerns and cost ₹22 lakh a month.',
        solution: 'NeuralCore designed a 6-rack, 240 kW AI room inside the existing IT wing with rear-door cooling and a Kubernetes serving platform; AppMind built the radiologist-facing viewer integration.',
        result: '100% in-country data, 40% lower monthly compute cost, fully deployed in 11 weeks with AI live in the PACS workflow.',
    },
];

const POSTS = [
    {
        slug: 'data-center-not-ready-for-ai',
        category: 'NeuralCore · Infrastructure',
        title: 'Why Your Data Center Isn’t Ready for AI (And What to Fix First)',
        excerpt: 'Most AI stalls not on models but on racks that overheat and GPUs that sit idle. A practical fix-first checklist for regulated teams.',
        date: 'Aug 2026',
        readTime: '6 min read',
    },
    {
        slug: 'rag-explained-safely',
        category: 'AppMind · AI Engineering',
        title: 'RAG Explained: How to Let AI Read Your Documents Safely',
        excerpt: 'Retrieval-augmented generation lets LLMs answer from your private data — without it ever leaving your control. A hospital-safe pattern.',
        date: 'Jul 2026',
        readTime: '5 min read',
    },
    {
        slug: 'automating-vapt-in-2026',
        category: 'Aegis360 · Security',
        title: 'How Security Companies Automate VAPT in 2026 — SAST, DAST, SCA in CI/CD',
        excerpt: 'Pen-testing once a year no longer cuts it. Here’s how we pipeline security into every release without slowing engineers down.',
        date: 'Jul 2026',
        readTime: '8 min read',
    },
];

const HealthcarePage = () => (
    <div className="min-h-screen bg-ink text-mist">
        {/* Helmet removed for Next.js metadata */}
        <Seo
            title="Healthcare — On-Prem AI, Ransomware Defense & Patient Apps | Networsys"
            description="Networsys helps hospitals, labs and life-sciences teams put patients first — on-prem imaging AI, ransomware defence, DPDP/HIPAA compliance and patient apps."
            image={healthcare.image}
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
                        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-mist/55">
                            <Link href="/" className="transition hover:text-pulse">Home</Link>
                            <ChevronRight size={13} className="text-mist/30" />
                            <span className="transition hover:text-pulse">Industries</span>
                            <ChevronRight size={13} className="text-mist/30" />
                            <span className="font-semibold text-pulse">Healthcare</span>
                        </nav>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                            <HeartPulse size={13} className="text-ember" />
                            Industry · Healthcare
                        </span>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Technology That Puts Patients First and <span className="text-gradient">Keeps Data Safe.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
                            From on-prem imaging AI to ransomware defence and patient apps — built for hospitals, labs and
                            life-sciences teams under DPDP and HIPAA.
                        </p>
                    </Reveal>

                    <Reveal delay={0.32} className="mt-10 flex flex-wrap items-center gap-4">
                        <Link href="/contact" className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                            Talk to a Healthcare Specialist
                            <ArrowRight size={16} />
                        </Link>
                        <a href="#challenges" className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                            See Your Challenges
                        </a>
                    </Reveal>
                </div>

                {/* Right: image */}
                <Reveal delay={0.25} className="relative">
                    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
                        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.18),transparent_62%)]" />
                        <div className="glass-card overflow-hidden p-2">
                            <img
                                src={healthcare.image}
                                alt={healthcare.alt}
                                loading="lazy"
                                className="w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>

        <TrustedStrip />

        {/* YOUR CHALLENGES — 4 cards */}
        <section id="challenges" className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Your challenges"
                    title={<>Where healthcare teams <span className="text-gradient">feel the pressure.</span></>}
                    description="Patient care and data protection pull in opposite directions. These are the four pressure points we see most often — and where Networsys steps in."
                />

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {CHALLENGES.map((c, i) => (
                        <Reveal key={c.title} delay={0.07 * i} className="h-full">
                            <div className="glass-card flex h-full flex-col p-7">
                                <IconTile icon={c.icon} />
                                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">{c.title}</h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{c.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* HOW NETWORSYS HELPS — 3 cards */}
        <section id="how" className="py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="How Networsys helps"
                    title={<>Three solutions, <span className="text-gradient">one accountable team.</span></>}
                    description="Infrastructure, defense and product engineering that ship together — so your hospital can innovate on AI without compromising patient safety or compliance."
                />

                <div className="mt-16 grid gap-6 lg:grid-cols-3">
                    {SOLUTIONS_HELP.map((s, i) => (
                        <Reveal key={s.slug} delay={0.08 * i} className="h-full">
                            <Link href={`/${s.slug}`} className="glass-card group flex h-full flex-col p-7">
                                <div className="flex items-center justify-between">
                                    <IconTile icon={s.icon} />
                                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-pulse">{s.name}</span>
                                </div>
                                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">{s.title}</h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{s.body}</p>
                                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-pulse">
                                    Explore {s.name}
                                    <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* SUCCESS STORIES — 2 cards */}
        <section id="stories" className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Success stories"
                    title={<>Proof from <span className="text-gradient">healthcare production.</span></>}
                    description="Illustrative case studies — to be replaced with real client data before publishing."
                />

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    {STORIES.map((st, i) => (
                        <Reveal key={st.title} delay={0.08 * i} className="h-full">
                            <article className="glass-card flex h-full flex-col p-8">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-pulse">{st.tag}</p>
                                    <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ember">
                                        Sample
                                    </span>
                                </div>
                                <h3 className="mt-5 font-display text-xl font-bold leading-snug text-white">{st.title}</h3>
                                <div className="mt-6 space-y-5">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember">Challenge</p>
                                        <p className="mt-2 text-sm leading-relaxed text-mist/80">{st.challenge}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pulse">Solution</p>
                                        <p className="mt-2 text-sm leading-relaxed text-mist/80">{st.solution}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Result</p>
                                        <p className="mt-2 text-sm leading-relaxed text-mist/80">{st.result}</p>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* LATEST INSIGHTS — 3 blog cards */}
        <section id="insights" className="py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Latest insights"
                    title={<>Thinking, <span className="text-gradient">for healthcare builders.</span></>}
                    description="Engineering and strategy notes on on-prem AI, ransomware defence and AI-native patient experiences."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {POSTS.map((post, i) => (
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

        {/* CTA BAND */}
        <section className="relative overflow-hidden py-24 sm:py-28">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <Reveal>
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-12 sm:py-20">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_50%_120%,rgba(242,107,33,0.22),transparent_60%),radial-gradient(40rem_24rem_at_50%_-20%,rgba(34,211,238,0.18),transparent_60%)]" />
                        <div className="relative z-10 mx-auto max-w-2xl">
                            <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                                Build healthcare tech <span className="text-gradient">patients can trust.</span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                                Talk to a senior Networsys consultant who knows hospitals, labs and DPDP/HIPAA compliance —
                                not a sales rep. We’ll map your path in one free 30-minute call.
                            </p>
                            <Link
                                href="/contact"
                                className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold"
                            >
                                Talk to a Healthcare Specialist
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

export default HealthcarePage;

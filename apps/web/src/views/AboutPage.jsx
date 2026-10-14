import React from 'react';

import Link from 'next/link';
import {
    ArrowRight,
    ShieldCheck,
    Cpu,
    Code2,
    GraduationCap,
    Award,
    Users,
    Building2,
    Target,
    Briefcase,
    Heart,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustedStrip from '@/components/TrustedStrip';
import SectionHeading from '@/components/SectionHeading';
import IconTile from '@/components/IconTile';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';

const VALUES = [
    {
        icon: ShieldCheck,
        title: 'Security First',
        body: 'Every architecture, every release, every line of code starts from a threat model. We build for regulated industries where a breach is existential — so defense is the default, not an add-on.',
    },
    {
        icon: Cpu,
        title: 'Engineering Excellence',
        body: 'We measure ourselves on PUE, latency, uptime and audit pass-rates — the numbers engineers respect. No hand-waving, no buzzwords, just systems that hold up under load and scrutiny.',
    },
    {
        icon: Target,
        title: 'Client Outcomes',
        body: 'A shipped MVP, a cleared RBI audit, a ransomware stopped at 2 AM — these are our milestones, not slide decks. We win only when your team wins.',
    },
    {
        icon: GraduationCap,
        title: 'Continuous Learning',
        body: 'AI moves weekly. Our engineers spend paid time studying new models, advisories and frameworks, then turn that into playbooks our clients can use the next quarter.',
    },
];

const CERTS = [
    { code: 'ISO 27001', label: 'Information Security Management', icon: ShieldCheck },
    { code: 'AWS Partner', label: 'Cloud Infrastructure & Migration', icon: Award },
    { code: 'CEH', label: 'Certified Ethical Hackers', icon: Cpu },
];

const LEADERSHIP = [
    {
        name: 'Founder & CEO',
        role: 'Strategy & Vision',
        initials: 'NS',
        bio: 'Two decades building infrastructure and security for Indian financial institutions. Sets the AI-first direction that every engagement inherits.',
    },
    {
        name: 'Head of Security',
        role: 'Aegis360 Practice',
        initials: 'AR',
        bio: 'CEH-certified lead architect behind our SOC, VAPT and compliance practice. Has cleared more RBI and ISO 27001 audits than the team can count.',
    },
    {
        name: 'Head of Engineering',
        role: 'AppMind & NeuralCore',
        initials: 'VK',
        bio: 'GPU-cluster and product engineering lead. Ships MVPs in eight weeks and stands up inference clusters that serve in milliseconds.',
    },
];

const TIMELINE = [
    { year: '2016', title: 'Networsys founded in Noida', body: 'Started as a cybersecurity consultancy serving local banks and hospitals.' },
    { year: '2018', title: 'ISO 27001 certified', body: 'Formalised our security processes end-to-end and earned our first enterprise audits.' },
    { year: '2020', title: 'App engineering practice launched', body: 'Expanded into mobile and web product engineering for fintech and healthcare clients.' },
    { year: '2022', title: 'AI infrastructure practice', body: 'Began designing GPU-ready data centers as AI workloads outgrew legacy racks.' },
    { year: '2024', title: '24×7 SentinelSOC goes live', body: 'Opened our Noida SOC delivering managed detection and response to mid-market teams.' },
    { year: '2026', title: 'AI-First technology partner', body: 'Three integrated practices — NeuralCore, Aegis360, AppMind — under one accountable team.' },
];

const STATS = [
    { value: 10, suffix: '+', label: 'Years in security, infra & apps' },
    { value: 100, suffix: '+', label: 'Regulated-industry clients' },
    { value: 3, suffix: '', label: 'Core certifications' },
    { value: 24, suffix: '×7', label: 'SOC monitoring from Noida' },
];

const AboutPage = () => (
    <div className="min-h-screen bg-ink text-mist">
        {/* Helmet removed for Next.js metadata */}
        <Seo
            title="About Networsys Technologies"
            description="AI-First. Security-Obsessed. Built in Noida. Learn our story, mission, certifications and leadership."
            type="website"
        />

        <Navbar />

        {/* HERO */}
        <section className="section-glow-ink relative flex min-h-[88dvh] items-center overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(52rem_30rem_at_70%_120%,rgba(242,107,33,0.16),transparent),radial-gradient(48rem_28rem_at_20%_-10%,rgba(34,211,238,0.14),transparent)]" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                        <Building2 size={13} className="text-ember" />
                        About Networsys Technologies
                    </span>
                </Reveal>
                <Reveal delay={0.12} className="mt-7 max-w-4xl">
                    <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        AI-First. Security-Obsessed. <span className="text-gradient">Built in Noida.</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
                        Networsys Technologies is a Noida-based technology partner delivering cybersecurity, AI
                        infrastructure and application engineering for fintech, hospitals and financial institutions —
                        the regulated industries where uptime, data residency and audit-readiness are non-negotiable.
                    </p>
                </Reveal>
                <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
                    <Link href="/contact" className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                        Work With Us
                        <ArrowRight size={16} />
                    </Link>
                    <Link href="/careers" className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                        Join the Team
                    </Link>
                </Reveal>
            </div>
        </section>

        <TrustedStrip />

        {/* OUR STORY */}
        <section className="py-24 sm:py-32">
            <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
                <Reveal>
                    <SectionHeading
                        align="left"
                        eyebrow="Our Story"
                        title={<>From a Noida security consultancy to an <span className="text-gradient">AI-first partner.</span></>}
                        description="We started by defending banks and hospitals. As AI reshaped every workload, we grew into the team that designs the infrastructure, runs the defense and ships the products — all under one roof."
                        className="max-w-2xl"
                    />
                    <div className="mt-8 space-y-4 text-sm leading-relaxed text-mist/80">
                        <p>
                            Networsys was founded in Noida with a simple conviction: regulated enterprises deserve
                            technology partners who treat security as the foundation, not a feature. We earned our first
                            ISO 27001 certification early and built a reputation for clearing the audits others failed.
                        </p>
                        <p>
                            When AI moved from experiment to production, our clients hit the same wall — legacy racks
                            that overheated, cloud GPUs that burned cash, and models that couldn't meet latency or
                            residency rules. So we built NeuralCore to design GPU-ready data centers, and AppMind to
                            ship the AI-native products that run on them.
                        </p>
                        <p>
                            Today our three practices — NeuralCore, Aegis360 and AppMind — work as one accountable team,
                            so your infrastructure, defense and product ship together and stay secure from day one.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.15}>
                    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm">
                        {STATS.map((s) => (
                            <div key={s.label} className="bg-ink/80 px-6 py-8 text-center">
                                <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                                    <CountUp value={s.value} suffix={s.suffix} />
                                </p>
                                <p className="mx-auto mt-3 max-w-[14rem] text-xs leading-relaxed text-mist/60">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>

        {/* MISSION & VALUES */}
        <section className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Mission & Values"
                    title={<>What we believe, <span className="text-gradient">and how we work.</span></>}
                    description="Our mission is to make AI infrastructure, cyber defense and product engineering feel like one accountable team — for enterprises that cannot afford to get any of them wrong."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {VALUES.map((v, i) => (
                        <Reveal key={v.title} delay={0.08 * i} className="h-full">
                            <div className="glass-card flex h-full flex-col p-7">
                                <IconTile icon={v.icon} />
                                <h3 className="mt-5 font-display text-lg font-bold text-white">{v.title}</h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{v.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Certifications & Partnerships"
                    title={<>Credentials that <span className="text-gradient">auditors recognise.</span></>}
                    description="Independent verification of the security, cloud and ethical-hacking standards we work to every day."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {CERTS.map((c, i) => (
                        <Reveal key={c.code} delay={c.code ? 0.08 * i : 0} className="h-full">
                            <div className="glass-card flex h-full flex-col items-center p-9 text-center">
                                <span className="icon-tile !h-16 !w-16 !rounded-2xl">
                                    <c.icon size={28} strokeWidth={1.5} />
                                </span>
                                <h3 className="mt-6 font-display text-xl font-bold text-white">{c.code}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-mist/70">{c.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* LEADERSHIP */}
        <section className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Leadership"
                    title={<>The people <span className="text-gradient">accountable for the outcome.</span></>}
                    description="Senior practitioners who have cleared the audits, stood up the clusters and shipped the products — not a layer of account managers."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {LEADERSHIP.map((p, i) => (
                        <Reveal key={p.name} delay={0.08 * i} className="h-full">
                            <div className="glass-card flex h-full flex-col items-center p-8 text-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(242,107,33,0.25),rgba(34,211,238,0.2))]">
                                    <span className="font-display text-xl font-bold text-white">{p.initials}</span>
                                </div>
                                <h3 className="mt-5 font-display text-lg font-bold text-white">{p.name}</h3>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-pulse">{p.role}</p>
                                <p className="mt-4 text-sm leading-relaxed text-mist/75">{p.bio}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <p className="mt-8 text-center text-xs text-mist/50">
                    Leadership profiles are illustrative placeholders — to be replaced with real team data before publishing.
                </p>
            </div>
        </section>

        {/* TIMELINE */}
        <section className="py-24 sm:py-32">
            <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Our Journey"
                    title={<>Milestones along <span className="text-gradient">the way.</span></>}
                    description="A decade of building, defending and shipping for regulated industries in India."
                />

                <div className="mt-16 relative">
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-ember via-pulse to-transparent sm:left-1/2" />
                    <div className="space-y-10">
                        {TIMELINE.map((m, i) => (
                            <Reveal key={m.year} delay={0.05 * i}>
                                <div className={`relative pl-10 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-[52%] sm:text-right' : 'sm:pl-[52%]'}`}>
                                    <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:left-1/2 sm:-translate-x-1/2">
                                        <span className="h-4 w-4 rounded-full border-2 border-pulse bg-ink shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                                    </span>
                                    <div className="glass-card p-6">
                                        <p className="font-display text-sm font-bold text-ember">{m.year}</p>
                                        <h3 className="mt-2 font-display text-base font-bold text-white">{m.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-mist/75">{m.body}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
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
                                Let’s build something <span className="text-gradient">secure and scalable.</span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                                Talk to a senior Networsys consultant about your infrastructure, security posture or product idea.
                            </p>
                            <Link href="/contact" className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold">
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

export default AboutPage;

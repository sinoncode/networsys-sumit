import React from 'react';

import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    ChevronRight,
    Check,
    Clock,
    FileText,
    ShieldCheck,
    Crosshair,
    Radar,
    Eye,
    Network,
    Fish,
    FileCheck,
    DatabaseBackup,
    ShieldAlert,
    Activity,
    Target,
    GraduationCap,
    Layers,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShieldMesh from '@/components/ShieldMesh';
import TrustedStrip from '@/components/TrustedStrip';
import SectionHeading from '@/components/SectionHeading';
import IconTile from '@/components/IconTile';
import EnquiryForm from '@/components/EnquiryForm';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { ServiceSchema } from '@/components/Schema';
import { SOLUTIONS } from '@/data/solutions';
import { INSIGHTS_POSTS } from '@/data/site';

const s = SOLUTIONS.aegis360;

const CERTS = ['ISO 27001 Certified', 'CEH-Certified Ethical Hackers', 'AWS Partner'];

const WHY_STATS = [
    { icon: Activity, stat: '24×7', label: 'monitoring from our Noida Security Operations Center' },
    { icon: ShieldCheck, stat: 'CEH + ISO 27001', label: 'certified hackers and certified processes' },
    { icon: Fish, stat: '30% → <5%', label: 'phishing click rates cut within 6 months' },
    { icon: Network, stat: 'Full-spectrum', label: 'web, mobile, API, network, cloud & VoIP coverage' },
];

const CAPABILITIES = [
    { icon: Crosshair, slug: 'striketest', title: 'StrikeTest — Penetration Testing & VAPT', body: 'Web, mobile, API, network, cloud and telecom testing by CEH-certified hackers, with a fix-first roadmap and re-test certificate.' },
    { icon: Radar, slug: 'threatwatch', title: 'ThreatWatch — Threat Intelligence & Hunting', body: 'Dark-web credential monitoring, brand impersonation alerts and MITRE ATT&CK-mapped hunting.' },
    { icon: Eye, slug: 'sentinelsoc', title: 'SentinelSOC — 24×7 Managed Detection & Response', body: 'SIEM, EDR/XDR and L1–L3 analysts on subscription — an enterprise SOC without the ₹5-crore price tag.' },
    { icon: Network, slug: 'network-defense', title: 'Network & Firewall Defense', body: 'Next-gen firewall deployment and audit, NAC, zero-trust segmentation and secure remote access.' },
    { icon: Fish, slug: 'phause', title: 'PHAUSE — Phishing Simulation & Awareness', body: 'Realistic phishing campaigns, department risk scoring and bilingual micro-training that changes behaviour.' },
    { icon: FileCheck, slug: 'complyedge', title: 'ComplyEdge — Consulting & Compliance', body: 'vCISO, gap assessments and certification support for ISO 27001, SOC 2, RBI, SEBI, DPDP, HIPAA and PCI DSS.' },
    { icon: DatabaseBackup, slug: 'resiliencevault', title: 'ResilienceVault — Backup & Disaster Recovery', body: 'Immutable backups, tested recovery plans and quarterly drills so ransomware is an inconvenience, not a catastrophe.' },
];

const CYCLE = [
    { icon: Target, step: 'Test', body: 'Find every weakness before an attacker does' },
    { icon: Eye, step: 'Detect', body: 'Monitor, triage and hunt around the clock' },
    { icon: ShieldAlert, step: 'Respond', body: 'Contain and recover with SLA-backed playbooks' },
    { icon: FileCheck, step: 'Comply', body: 'Map controls to regulations and produce audit evidence' },
    { icon: GraduationCap, step: 'Train', body: 'Turn employees into a human firewall' },
];

const ADVISORIES = [
    {
        slug: 'ransomware-spike-q3-2026',
        severity: 'High',
        title: 'Ransomware group targeting hospital HIS via exposed RDP',
        excerpt: 'Our SOC has tracked a sustained campaign against Indian hospital networks using brute-forced RDP endpoints. Patch and isolate guidance inside.',
        date: 'Sep 2026',
    },
    {
        slug: 'phishing-kit-bypassing-mfa',
        severity: 'Medium',
        title: 'New phishing kit bypassing SMS-based MFA on banking portals',
        excerpt: 'A reverse-proxy phishing kit is intercepting OTPs in real time. We break down the attack chain and the compensating controls that stop it.',
        date: 'Aug 2026',
    },
    {
        slug: 'api-auth-flaw-fintech',
        severity: 'Critical',
        title: 'Critical auth-bypass in a popular fintech lending API framework',
        excerpt: 'A broken-object-level authorisation flaw lets attackers pull other users’ loan files. Affected versions and a detection rule are included.',
        date: 'Aug 2026',
    },
];

const severityStyles = {
    Critical: 'border-ember/50 bg-ember/10 text-ember',
    High: 'border-orange-400/40 bg-orange-400/10 text-orange-300',
    Medium: 'border-pulse/40 bg-pulse/10 text-pulse',
};

const Aegis360Page = () => (
    <div className="min-h-screen bg-ink text-mist">
        {/* Helmet removed for Next.js metadata */}
        <Seo
            title={s.seo.title}
            description={s.seo.description}
            image={s.image}
            siteName="Networsys Technologies"
        />
        <ServiceSchema
            name="Aegis360 — Cyber Defense & Digital Trust"
            description={s.seo.description}
            url="https://networsys.com/aegis360"
            serviceType="Cybersecurity & Managed Detection"
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
                            <span className="font-semibold text-pulse">Aegis360</span>
                        </nav>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                            <ShieldCheck size={13} className="text-pulse" />
                            Cyber Defense &amp; Digital Trust
                        </span>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Your Attackers Work 24×7. <br className="hidden sm:block" />
                            So <span className="text-gradient">Do We.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
                            Aegis360 unites offensive security, 24×7 managed detection, threat intelligence, employee
                            awareness and compliance into one protective shield — built for fintech, hospitals and
                            financial institutions where a breach is not an option.
                        </p>
                    </Reveal>

                    <Reveal delay={0.32} className="mt-10 flex flex-wrap items-center gap-4">
                        <a href="#contact" className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                            Get a Free Security Posture Score
                            <ArrowRight size={16} />
                        </a>
                        <Link href="/contact" className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                            Talk to a CEH-Certified Expert
                        </Link>
                    </Reveal>
                </div>

                {/* Right: 3D glowing shield with network mesh */}
                <Reveal delay={0.25} className="relative">
                    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
                        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.18),transparent_62%)]" />
                        <ShieldMesh className="h-full w-full" />
                    </div>
                </Reveal>
            </div>
        </section>

        {/* CERT STRIP — emphasising CEH */}
        <section className="border-y border-white/5 bg-ink/80 py-6 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 sm:px-8">
                {CERTS.map((c, i) => (
                    <span
                        key={c}
                        className={`inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${
                            i === 1 ? 'text-white' : 'text-mist/70'
                        }`}
                    >
                        <ShieldCheck
                            size={15}
                            strokeWidth={1.5}
                            className={i === 1 ? 'text-ember' : 'text-pulse'}
                        />
                        {c}
                    </span>
                ))}
            </div>
        </section>

        {/* WHY AEGIS360 — 4 glass stat cards */}
        <section className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Why Aegis360"
                    title={<>Point tools and annual audits <span className="text-gradient">don’t stop modern attackers.</span></>}
                    description="Aegis360 covers the full cycle — test, detect, respond, comply and train — operated by CEH-certified hackers from our Noida SOC at mid-market pricing."
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

        {/* WHAT WE DO — 7 capability cards */}
        <section id="capabilities" className="py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="What we do"
                    title={<>Seven disciplines. <span className="text-gradient">One shield.</span></>}
                    description="Offensive security, managed detection, intelligence, network defence, awareness, compliance and resilience — under one accountable team."
                />

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {CAPABILITIES.map((c, i) => (
                        <Reveal key={c.title} delay={0.06 * (i % 3)} className="h-full">
                            <Link href={`/aegis360/${c.slug}`} className="glass-card group flex h-full flex-col p-7">
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

        {/* THE AEGIS CYCLE — circular diagram */}
        <section className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="The Aegis Cycle"
                    title={<>A continuous loop, <span className="text-gradient">not an annual audit.</span></>}
                    description="Five stages that reinforce each other — so your defences get stronger every quarter, not weaker the moment a pen-test report is filed."
                />

                <Reveal delay={0.1} className="mt-16">
                    <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 lg:flex-row lg:justify-between">
                        {/* Centre hub */}
                        <div className="relative order-1 flex h-44 w-44 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink/80 backdrop-blur-xl lg:order-2 lg:h-52 lg:w-52">
                            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,107,33,0.22),transparent_65%)]" />
                            <div className="relative z-10 text-center">
                                <ShieldCheck size={30} className="mx-auto text-pulse" strokeWidth={1.5} />
                                <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
                                    Aegis360
                                </p>
                                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-mist/55">Always-on</p>
                            </div>
                        </div>

                        {/* Cycle nodes */}
                        <ol className="order-2 grid w-full gap-5 sm:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:flex-1">
                            {CYCLE.slice(0, 3).map((c, i) => (
                                <Reveal key={c.step} delay={0.08 * i} className="h-full">
                                    <div className="glass-card flex h-full items-start gap-4 p-5">
                                        <IconTile icon={c.icon} className="!h-11 !w-11 !rounded-xl" />
                                        <div>
                                            <p className="font-display text-base font-bold text-white">
                                                <span className="text-pulse">0{i + 1}.</span> {c.step}
                                            </p>
                                            <p className="mt-1 text-sm leading-relaxed text-mist/70">{c.body}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </ol>

                        <ol className="order-3 grid w-full gap-5 sm:grid-cols-2 lg:flex-1">
                            {CYCLE.slice(3).map((c, i) => (
                                <Reveal key={c.step} delay={0.08 * (i + 3)} className="h-full">
                                    <div className="glass-card flex h-full items-start gap-4 p-5">
                                        <IconTile icon={c.icon} className="!h-11 !w-11 !rounded-xl" />
                                        <div>
                                            <p className="font-display text-base font-bold text-white">
                                                <span className="text-pulse">0{i + 4}.</span> {c.step}
                                            </p>
                                            <p className="mt-1 text-sm leading-relaxed text-mist/70">{c.body}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </ol>
                    </div>
                </Reveal>
            </div>
        </section>

        {/* SUCCESS STORY */}
        <section id="case-study" className="py-24 sm:py-32">
            <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Success story"
                    title={<>When the alarm went off at <span className="text-gradient">2 AM.</span></>}
                />

                <Reveal delay={0.1} className="mt-14">
                    <article className="glass-card p-8 sm:p-12">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-pulse">
                                Multi-specialty hospital chain
                            </p>
                            <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ember">
                                Sample — replace with real client data
                            </span>
                        </div>
                        <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                            Hospital chain stops ransomware at 2 AM
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

        {/* SECURITY ADVISORIES FEED — 3 cards */}
        <section id="advisories" className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Security Advisories"
                    title={<>Live threat bulletins from our <span className="text-gradient">Noida SOC.</span></>}
                    description="Real advisories our analysts publish as they hunt — severity-tagged, with detection rules and fix guidance you can act on today."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {ADVISORIES.map((a, i) => (
                        <Reveal key={a.slug} delay={0.08 * i} className="h-full">
                            <Link href="/security-advisories" className="glass-card group flex h-full flex-col p-7">
                                <div className="flex items-center justify-between">
                                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${severityStyles[a.severity]}`}>
                                        <ShieldAlert size={12} strokeWidth={1.5} />
                                        {a.severity}
                                    </span>
                                    <FileText size={15} strokeWidth={1.5} className="text-mist/40" />
                                </div>
                                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white transition group-hover:text-pulse">
                                    {a.title}
                                </h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{a.excerpt}</p>
                                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-mist/55">
                                    <span>{a.date}</span>
                                    <span className="inline-flex items-center gap-1.5 font-semibold text-white transition group-hover:text-pulse">
                                        Read advisory
                                        <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1} className="mt-12 text-center">
                    <Link
                        href="/security-advisories"
                        className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3 text-sm font-semibold"
                    >
                        View all advisories
                        <ArrowRight size={15} />
                    </Link>
                </Reveal>
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
                                Aegis360
                            </span>
                            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                                Know Your Risk in <span className="text-gradient">60 Seconds.</span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                                Get a free external attack-surface and dark-web exposure score for your organisation —
                                no agents, no commitment.
                            </p>
                            <Link
                                href="/contact"
                                className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold"
                            >
                                Get My Security Posture Score
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
                        Talk to a <span className="text-gradient">CEH-certified expert.</span>
                    </h2>
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-mist/80">
                        Book a free 30-minute security consultation. We’ll score your external attack surface, walk you
                        through the gaps, and tell you honestly what to fix first.
                    </p>
                    <ul className="mt-8 space-y-4">
                        {[
                            'A CEH-certified ethical hacker — never a sales rep — on every call',
                            'Free external attack-surface and dark-web exposure score',
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
                        solution="aegis360"
                        heading="Get your Security Posture Score"
                        subheading="Fields marked * are required. We reply within one business day."
                        buttonLabel="Get My Security Posture Score"
                    />
                </Reveal>
            </div>
        </section>

        <Footer />
    </div>
);

export default Aegis360Page;

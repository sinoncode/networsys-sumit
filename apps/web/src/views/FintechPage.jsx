import React from 'react';

import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    ChevronRight,
    Check,
    Clock,
    FileText,
    IndianRupee,
    ShieldAlert,
    Gauge,
    Cloud,
    Banknote,
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

const fintech = INDUSTRY_CARDS.find((i) => i.key === 'fintech');

const CHALLENGES = [
    {
        icon: Gauge,
        title: 'Real-time fraud detection at scale',
        body: 'Card-not-present and UPI fraud moves in milliseconds. Your inference layer must score every transaction without adding latency to the checkout.',
    },
    {
        icon: ShieldAlert,
        title: 'PCI DSS & RBI compliance',
        body: 'PCI DSS 4.0, the RBI cyber-security framework and DPDP all demand auditable controls, segmentation and evidence — a moving target for lean teams.',
    },
    {
        icon: Cloud,
        title: 'Cloud GPU costs',
        body: 'Running risk and recommendation models on public-cloud GPUs burns cash fast. TCO spirals the moment you scale beyond a pilot.',
    },
    {
        icon: Banknote,
        title: 'Security reviews from bank partners',
        body: 'Partner banks and NBFCs run their own VAPT and architecture reviews before integration. Fail twice and the deal stalls for a quarter.',
    },
];

const SOLUTIONS_HELP = [
    {
        icon: Server,
        slug: 'neuralcore',
        name: 'NeuralCore',
        title: 'Low-latency inference clusters & colocation',
        body: 'Right-sized GPU clusters and certified Indian colocation that serve fraud and risk models in milliseconds — at a fraction of public-cloud GPU cost.',
    },
    {
        icon: ShieldCheck,
        slug: 'aegis360',
        name: 'Aegis360',
        title: 'VAPT, SOC & PCI DSS readiness',
        body: 'CEH-certified penetration testing, 24×7 managed detection and a vCISO-led path to PCI DSS and RBI compliance — so partner-bank reviews pass first time.',
    },
    {
        icon: Bot,
        slug: 'appmind',
        name: 'AppMind',
        title: 'Lending & payment apps with AI KYC',
        body: 'Secure-by-design lending, payments and wealth apps with AI document verification, KYC and fraud checks engineered in from day one.',
    },
];

const STORIES = [
    {
        tag: 'Fintech · NeuralCore',
        title: 'NBFC cuts inference cost 40% with on-prem GPU cluster',
        challenge: 'Real-time credit-scoring models on public-cloud GPUs cost ₹18 lakh a month and added 90 ms of latency to loan decisions.',
        solution: 'NeuralCore designed a 4-node L40S cluster in a Mumbai colocation facility with a Kubernetes serving platform and burst-to-cloud failover.',
        result: 'Inference latency down to 38 ms, monthly compute cost cut 40%, 100% in-country data residency for RBI compliance.',
    },
    {
        tag: 'Fintech · Aegis360 + AppMind',
        title: 'Payment app clears partner-bank security review on first attempt',
        challenge: 'A lending fintech failed two consecutive partner-bank security reviews — SAST findings and weak authentication blocked the integration.',
        solution: 'AppMind rebuilt the app through Aegis360’s secure SDLC with SAST/DAST in CI/CD, MFA and a pre-launch penetration test aligned to OWASP ASVS.',
        result: 'Third-party audit cleared on the first attempt; integration go-live moved up by a full quarter.',
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
        slug: 'automating-vapt-in-2026',
        category: 'Aegis360 · Security',
        title: 'How Security Companies Automate VAPT in 2026 — SAST, DAST, SCA in CI/CD',
        excerpt: 'Pen-testing once a year no longer cuts it. Here’s how we pipeline security into every release without slowing engineers down.',
        date: 'Jul 2026',
        readTime: '8 min read',
    },
    {
        slug: 'rag-explained-safely',
        category: 'AppMind · AI Engineering',
        title: 'RAG Explained: How to Let AI Read Your Documents Safely',
        excerpt: 'Retrieval-augmented generation lets LLMs answer from your private data — without it ever leaving your control. A bank-safe pattern.',
        date: 'Jul 2026',
        readTime: '5 min read',
    },
];

const FintechPage = () => (
    <div className="min-h-screen bg-ink text-mist">
        {/* Helmet removed for Next.js metadata */}
        <Seo
            title="Fintech — AI Infrastructure, Cybersecurity & App Engineering | Networsys"
            description="Networsys helps fintechs move fast without breaking trust — real-time fraud compute, PCI DSS & RBI compliance, and AI-native lending and payment apps."
            image={fintech.image}
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
                            <span className="font-semibold text-pulse">Fintech</span>
                        </nav>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                            <IndianRupee size={13} className="text-ember" />
                            Industry · Fintech
                        </span>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Move Fast Without <span className="text-gradient">Breaking Trust.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
                            Payments, lending and wealth platforms need real-time compute, bulletproof security and
                            RBI/PCI compliance — without slowing product velocity.
                        </p>
                    </Reveal>

                    <Reveal delay={0.32} className="mt-10 flex flex-wrap items-center gap-4">
                        <Link href="/contact" className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                            Talk to a Fintech Specialist
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
                        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,107,33,0.18),transparent_62%)]" />
                        <div className="glass-card overflow-hidden p-2">
                            <img
                                src={fintech.image}
                                alt={fintech.alt}
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
                    title={<>Where fintech teams <span className="text-gradient">hit the wall.</span></>}
                    description="Speed and trust pull in opposite directions. These are the four pressure points we see most often — and where Networsys steps in."
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
                    description="Infrastructure, defense and product engineering that ship together — so your fintech can move fast and still clear every audit."
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
                    title={<>Proof from <span className="text-gradient">fintech production.</span></>}
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
                    title={<>Thinking, <span className="text-gradient">for fintech builders.</span></>}
                    description="Engineering and strategy notes on real-time compute, compliance and AI-native product engineering."
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
                                Ship fintech that <span className="text-gradient">regulators trust.</span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                                Talk to a senior Networsys consultant who knows payments, lending and RBI/PCI compliance —
                                not a sales rep. We’ll map your path in one free 30-minute call.
                            </p>
                            <Link
                                href="/contact"
                                className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold"
                            >
                                Talk to a Fintech Specialist
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

export default FintechPage;

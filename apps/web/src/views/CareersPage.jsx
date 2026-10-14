"use client";
import React, { useState } from 'react';

import Link from 'next/link';
import {
    ArrowRight,
    AlertCircle,
    CheckCircle2,
    Loader2,
    Send,
    Upload,
    ShieldCheck,
    GraduationCap,
    HeartPulse,
    TrendingUp,
    MapPin,
    Briefcase,
    Clock,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import IconTile from '@/components/IconTile';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import pb from '@/lib/pocketbaseClient';

const PERKS = [
    {
        icon: TrendingUp,
        title: 'Work on the frontier',
        body: 'GPU clusters, LLM copilots, 24×7 SOC — you ship the systems other companies only read about.',
    },
    {
        icon: GraduationCap,
        title: 'Paid learning time',
        body: 'Dedicated hours each week to study new models, advisories and frameworks, then turn them into playbooks.',
    },
    {
        icon: HeartPulse,
        title: 'Real impact',
        body: 'Your work defends hospitals, powers fintech and clears RBI audits. Outcomes you can point to.',
    },
    {
        icon: ShieldCheck,
        title: 'Security-first culture',
        body: 'CEH-certified mentors, ISO 27001 processes and a team that treats defense as the default, not an add-on.',
    },
];

const ROLES = [
    {
        slug: 'security-analyst',
        title: 'Security Analyst',
        team: 'Aegis360 — SentinelSOC',
        type: 'Full-time',
        location: 'Noida (on-site, shift-based)',
        summary: 'Monitor, triage and respond to threats across client environments from our 24×7 SOC.',
    },
    {
        slug: 'ai-infrastructure-engineer',
        title: 'AI Infrastructure Engineer',
        team: 'NeuralCore',
        type: 'Full-time',
        location: 'Noida (hybrid)',
        summary: 'Design and stand up GPU-ready data centers, Kubernetes clusters and model-serving stacks.',
    },
    {
        slug: 'flutter-developer',
        title: 'Flutter Developer',
        team: 'AppMind',
        type: 'Full-time',
        location: 'Noida (hybrid)',
        summary: 'Build intelligent cross-platform mobile apps with on-device AI and offline-first architecture.',
    },
    {
        slug: 'business-development',
        title: 'Business Development',
        team: 'Growth',
        type: 'Full-time',
        location: 'Noida / Remote',
        summary: 'Open conversations with fintech, hospital and banking leaders and map them to the right practice.',
    },
];

const ROLE_OPTIONS = [
    { value: 'security-analyst', label: 'Security Analyst' },
    { value: 'ai-infrastructure-engineer', label: 'AI Infrastructure Engineer' },
    { value: 'flutter-developer', label: 'Flutter Developer' },
    { value: 'business-development', label: 'Business Development' },
    { value: 'other', label: 'Other / General application' },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL = { name: '', email: '', phone: '', role: 'security-analyst', message: '', consent: false };

const ApplicationForm = () => {
    const [form, setForm] = useState({ ...INITIAL });
    const [resume, setResume] = useState(null);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');

    const set = (key, value) => {
        setForm((f) => ({ ...f, [key]: value }));
        setErrors((e) => ({ ...e, [key]: undefined }));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = 'Please tell us your name.';
        if (!EMAIL_RE.test(form.email.trim())) next.email = 'Enter a valid email.';
        if (!form.consent) next.consent = 'We need your consent to process your application.';
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (status === 'submitting') return;
        if (!validate()) return;

        setStatus('submitting');
        try {
            const fd = new FormData();
            fd.append('name', form.name.trim());
            fd.append('email', form.email.trim());
            fd.append('phone', form.phone.trim());
            fd.append('role', form.role);
            fd.append('message', form.message.trim());
            fd.append('consent', form.consent);
            if (resume) fd.append('resume', resume);

            await pb.collection('job_applications').create(fd, { requestKey: 'job-application' });
            setStatus('success');
        } catch (err) {
            console.error('Job application submit failed', err);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="glass-card flex flex-col items-center px-8 py-14 text-center">
                <span className="icon-tile !h-14 !w-14 !rounded-2xl">
                    <CheckCircle2 size={26} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">Application received.</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mist/80">
                    Thank you, {form.name.split(' ')[0]}. Our talent team reviews every application and will reach out
                    if your profile matches an open role.
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setForm({ ...INITIAL });
                        setResume(null);
                        setStatus('idle');
                    }}
                    className="btn-gradient mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                >
                    Submit another application
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} noValidate className="glass-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">Apply now</h3>
            <p className="mt-2 text-sm text-mist/70">Fields marked * are required. Resume is optional but recommended.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="app-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        Full name *
                    </label>
                    <input
                        id="app-name"
                        type="text"
                        autoComplete="name"
                        className="field-dark"
                        placeholder="Priya Sharma"
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-ember">{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="app-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        Email *
                    </label>
                    <input
                        id="app-email"
                        type="email"
                        autoComplete="email"
                        className="field-dark"
                        placeholder="priya@email.com"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-ember">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="app-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        Phone
                    </label>
                    <input
                        id="app-phone"
                        type="tel"
                        autoComplete="tel"
                        className="field-dark"
                        placeholder="+91 …"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="app-role" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        Role *
                    </label>
                    <select
                        id="app-role"
                        className="field-dark appearance-none bg-ink"
                        value={form.role}
                        onChange={(e) => set('role', e.target.value)}
                    >
                        {ROLE_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value} className="bg-ink text-white">
                                {o.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="app-resume" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        Resume (PDF / DOC, max 5 MB)
                    </label>
                    <label
                        htmlFor="app-resume"
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/15 bg-white/[0.03] px-4 py-4 text-sm text-mist/70 transition hover:border-pulse/50 hover:text-pulse"
                    >
                        <Upload size={18} className="shrink-0" />
                        <span className="truncate">
                            {resume ? resume.name : 'Choose a file to upload'}
                        </span>
                    </label>
                    <input
                        id="app-resume"
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                        onChange={(e) => setResume(e.target.files?.[0] || null)}
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="app-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        Why Networsys? (optional)
                    </label>
                    <textarea
                        id="app-message"
                        rows={4}
                        className="field-dark resize-none"
                        placeholder="Tell us briefly about your experience and what you’d bring to the team…"
                        value={form.message}
                        onChange={(e) => set('message', e.target.value)}
                    />
                </div>

                <div className="sm:col-span-2">
                    <label className="flex cursor-pointer items-start gap-3">
                        <input
                            type="checkbox"
                            checked={form.consent}
                            onChange={(e) => set('consent', e.target.checked)}
                            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border border-white/20 bg-white/[0.04] transition checked:border-transparent checked:bg-[linear-gradient(135deg,#F26B21,#22D3EE)] focus:outline-none focus:ring-2 focus:ring-pulse/40"
                        />
                        <span className="text-xs leading-relaxed text-mist/70">
                            I consent to Networsys Technologies processing the personal data (including any resume I
                            upload) for the purpose of evaluating my application, in accordance with the EU General Data
                            Protection Regulation (GDPR) and applicable data-protection law. I understand I may withdraw
                            my consent at any time by emailing{' '}
                            <a href="mailto:privacy@networsys.com" className="text-pulse underline underline-offset-2">
                                privacy@networsys.com
                            </a>
                            . *
                        </span>
                    </label>
                    {errors.consent && <p className="mt-1.5 text-xs text-ember">{errors.consent}</p>}
                </div>
            </div>

            {status === 'error' && (
                <p className="mt-5 flex items-center gap-2 rounded-xl border border-ember/30 bg-ember/10 px-4 py-3 text-xs text-ember">
                    <AlertCircle size={15} className="shrink-0" />
                    Something went wrong while submitting your application. Please try again in a moment.
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-solid mt-7 inline-flex min-h-[48px] w-full items-center justify-center gap-2 px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
                {status === 'submitting' ? (
                    <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting…
                    </>
                ) : (
                    <>
                        <Send size={16} />
                        Submit Application
                    </>
                )}
            </button>
        </form>
    );
};

const CareersPage = () => (
    <div className="min-h-screen bg-ink text-mist">
        {/* Helmet removed for Next.js metadata */}
        <Seo
            title="Careers at Networsys Technologies"
            description="Build the future of AI with us in Noida. Open roles across security, AI infrastructure and product engineering."
            type="website"
        />

        <Navbar />

        {/* HERO */}
        <section className="section-glow-ink relative flex min-h-[80dvh] items-center overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(52rem_30rem_at_70%_120%,rgba(34,211,238,0.16),transparent),radial-gradient(48rem_28rem_at_20%_-10%,rgba(242,107,33,0.14),transparent)]" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                        <Briefcase size={13} className="text-ember" />
                        Careers at Networsys
                    </span>
                </Reveal>
                <Reveal delay={0.12} className="mt-7 max-w-4xl">
                    <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Build the Future of AI <span className="text-gradient">With Us in Noida.</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
                        We’re a small, senior team shipping AI infrastructure, 24×7 cyber defense and AI-native products
                        for regulated industries. If you want real impact and frontier work, this is the place.
                    </p>
                </Reveal>
                <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
                    <a href="#roles" className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                        See Open Roles
                        <ArrowRight size={16} />
                    </a>
                    <a href="#apply" className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                        Apply Now
                    </a>
                </Reveal>
            </div>
        </section>

        {/* WHY JOIN */}
        <section className="py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Why join Networsys"
                    title={<>Frontier work, <span className="text-gradient">real impact.</span></>}
                    description="We keep the team small and senior on purpose — so you learn from practitioners and ship things that matter."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {PERKS.map((p, i) => (
                        <Reveal key={p.title} delay={0.08 * i} className="h-full">
                            <div className="glass-card flex h-full flex-col p-7">
                                <IconTile icon={p.icon} />
                                <h3 className="mt-5 font-display text-lg font-bold text-white">{p.title}</h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{p.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* OPEN ROLES */}
        <section id="roles" className="section-glow relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Open roles"
                    title={<>Find your <span className="text-gradient">next chapter.</span></>}
                    description="Illustrative openings — apply and tell us which practice fits you best."
                />

                <div className="mt-14 space-y-4">
                    {ROLES.map((r, i) => (
                        <Reveal key={r.slug} delay={0.06 * i}>
                            <div className="glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-start gap-4">
                                    <span className="icon-tile !h-11 !w-11 !rounded-xl shrink-0">
                                        <Briefcase size={18} strokeWidth={1.5} />
                                    </span>
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-white">{r.title}</h3>
                                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-pulse">{r.team}</p>
                                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist/75">{r.summary}</p>
                                        <div className="mt-3 flex flex-wrap gap-4 text-xs text-mist/60">
                                            <span className="inline-flex items-center gap-1.5">
                                                <Briefcase size={12} strokeWidth={1.5} /> {r.type}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin size={12} strokeWidth={1.5} /> {r.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="#apply"
                                    className="btn-gradient inline-flex shrink-0 items-center gap-2 px-5 py-2.5 text-sm font-semibold"
                                >
                                    Apply
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* APPLY */}
        <section id="apply" className="py-24 sm:py-32">
            <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
                <Reveal>
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-pulse" />
                        Application
                    </span>
                    <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Tell us your story. <span className="text-gradient">We read every one.</span>
                    </h2>
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-mist/80">
                        No cover-letter theatre. Share your name, the role you’re after and a few lines on why Networsys
                        — attach a resume if you have one. Our talent team responds to every application.
                    </p>
                    <ul className="mt-8 space-y-4">
                        {[
                            'Senior practitioners review applications, not automated filters',
                            'We hire for curiosity and accountability as much as skill',
                            'Your data is processed under GDPR-grade consent, withdrawable anytime',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-mist/85">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ember to-pulse">
                                    <CheckCircle2 size={12} strokeWidth={2.5} className="text-ink" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 flex items-center gap-2 text-xs text-mist/55">
                        <Clock size={13} strokeWidth={1.5} />
                        Typical response time: within five business days.
                    </div>
                </Reveal>

                <Reveal delay={0.15}>
                    <ApplicationForm />
                </Reveal>
            </div>
        </section>

        <Footer />
    </div>
);

export default CareersPage;

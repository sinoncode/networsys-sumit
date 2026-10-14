"use client";
import React, { useState } from 'react';

import Link from 'next/link';
import { AlertCircle, BookOpen, CheckCircle2, Download, FileText, Loader2, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { WHITE_PAPERS } from '@/data/resources';
import pb from '@/lib/pocketbaseClient';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WhitePaperCard = ({ paper }) => {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', company: '', consent: false });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const set = (key, value) => {
        setForm((f) => ({ ...f, [key]: value }));
        setErrors((e) => ({ ...e, [key]: undefined }));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = 'Please tell us your name.';
        if (!EMAIL_RE.test(form.email.trim())) next.email = 'Enter a valid work email.';
        if (!form.consent) next.consent = 'We need your consent to email you the white paper.';
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (status === 'submitting') return;
        if (!validate()) return;
        setStatus('submitting');
        try {
            await pb.collection('whitepaper_downloads').create({
                name: form.name.trim(),
                email: form.email.trim(),
                company: form.company.trim(),
                whitepaper: paper.slug,
                consent: form.consent,
            });
            setStatus('success');
        } catch (err) {
            console.error('White paper download failed', err);
            setStatus('error');
        }
    };

    return (
        <div className="glass-card flex h-full flex-col overflow-hidden">
            <div className="relative h-44 overflow-hidden">
                <img src={paper.cover} alt={paper.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-ember/40 bg-ink/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ember backdrop-blur">
                    {paper.solution}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-bold leading-snug text-white">{paper.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{paper.summary}</p>
                <p className="mt-4 text-xs text-mist/55">{paper.pages} pages · PDF</p>

                {!open && status !== 'success' && (
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="btn-gradient mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 px-5 py-3 text-sm font-semibold"
                    >
                        <Lock size={15} />
                        Get the white paper
                    </button>
                )}

                {open && status !== 'success' && (
                    <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4 border-t border-white/10 pt-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pulse">Unlock your download</p>
                        <div>
                            <label htmlFor={`wp-name-${paper.slug}`} className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-mist/70">Full name *</label>
                            <input id={`wp-name-${paper.slug}`} type="text" className="field-dark" placeholder="Priya Sharma" value={form.name} onChange={(e) => set('name', e.target.value)} />
                            {errors.name && <p className="mt-1.5 text-xs text-ember">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor={`wp-email-${paper.slug}`} className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-mist/70">Work email *</label>
                            <input id={`wp-email-${paper.slug}`} type="email" className="field-dark" placeholder="priya@company.com" value={form.email} onChange={(e) => set('email', e.target.value)} />
                            {errors.email && <p className="mt-1.5 text-xs text-ember">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor={`wp-company-${paper.slug}`} className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-mist/70">Company</label>
                            <input id={`wp-company-${paper.slug}`} type="text" className="field-dark" placeholder="Company or institution" value={form.company} onChange={(e) => set('company', e.target.value)} />
                        </div>
                        <div>
                            <label className="flex cursor-pointer items-start gap-3">
                                <input
                                    type="checkbox"
                                    checked={form.consent}
                                    onChange={(e) => set('consent', e.target.checked)}
                                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border border-white/20 bg-white/[0.04] transition checked:border-transparent checked:bg-[linear-gradient(135deg,#F26B21,#22D3EE)] focus:outline-none focus:ring-2 focus:ring-pulse/40"
                                />
                                <span className="text-xs leading-relaxed text-mist/70">
                                    I consent to Networsys Technologies processing my personal data to email me this white
                                    paper and follow-up, in accordance with the EU GDPR and applicable data-protection law.
                                    I may withdraw consent at any time by emailing{' '}
                                    <a href="mailto:privacy@networsys.com" className="text-pulse underline underline-offset-2">privacy@networsys.com</a>. *
                                </span>
                            </label>
                            {errors.consent && <p className="mt-1.5 text-xs text-ember">{errors.consent}</p>}
                        </div>

                        {status === 'error' && (
                            <p className="flex items-center gap-2 rounded-xl border border-ember/30 bg-ember/10 px-4 py-3 text-xs text-ember">
                                <AlertCircle size={15} className="shrink-0" />
                                Something went wrong. Please try again in a moment.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="btn-solid inline-flex min-h-[48px] w-full items-center justify-center gap-2 px-5 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {status === 'submitting' ? (
                                <><Loader2 size={16} className="animate-spin" /> Sending…</>
                            ) : (
                                <><Download size={16} /> Email me the PDF</>
                            )}
                        </button>
                    </form>
                )}

                {status === 'success' && (
                    <div className="mt-6 rounded-2xl border border-pulse/30 bg-pulse/10 p-6 text-center">
                        <span className="icon-tile !mx-auto !h-12 !w-12 !rounded-xl">
                            <CheckCircle2 size={22} strokeWidth={1.5} />
                        </span>
                        <p className="mt-4 font-display text-base font-bold text-white">Check your inbox.</p>
                        <p className="mt-2 text-xs leading-relaxed text-mist/75">
                            We’ve sent <span className="font-semibold text-white">{paper.title}</span> to {form.email}. If it
                            doesn’t arrive in a few minutes, check your spam folder.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

const WhitePapersPage = () => (
    <div className="min-h-screen bg-ink text-mist">
        {/* Helmet removed for Next.js metadata */}
        <Seo
            title="White Papers — Deep Dives on Infra, Security & AI Apps | Networsys Technologies"
            description="In-depth white papers on AI data center design for BFSI, hospital cyber resilience and GenAI adoption for banks — free with email capture."
            siteName="Networsys Technologies"
        />

        <Navbar />

        {/* HERO */}
        <section className="section-glow-ink relative overflow-hidden pt-36 pb-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />
            <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70 backdrop-blur">
                        <BookOpen size={13} className="text-ember" />
                        White Papers
                    </span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Deep dives, <span className="text-gradient">not brochures.</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
                        Reference architectures and playbooks for regulated teams. Free to download — we just need your
                        work email so we can send the PDF.
                    </p>
                </Reveal>
            </div>
        </section>

        {/* CARDS */}
        <section className="py-16 sm:py-20">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {WHITE_PAPERS.map((paper, i) => (
                        <Reveal key={paper.slug} delay={0.08 * i} className="h-full">
                            <WhitePaperCard paper={paper} />
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-12">
                    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm text-mist/70">
                        <FileText size={16} className="mt-0.5 shrink-0 text-pulse" />
                        <p>
                            Your details are processed under GDPR-grade consent and stored only to deliver your download
                            and follow-up. We never sell your data. Withdraw consent anytime at{' '}
                            <a href="mailto:privacy@networsys.com" className="text-pulse underline underline-offset-2">privacy@networsys.com</a>.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 sm:py-24">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <Reveal>
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-12 text-center sm:px-12">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_50%_120%,rgba(242,107,33,0.22),transparent_60%),radial-gradient(40rem_24rem_at_50%_-20%,rgba(34,211,238,0.18),transparent_60%)]" />
                        <div className="relative z-10 mx-auto max-w-2xl">
                            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Need a deeper, <span className="text-gradient">tailored briefing?</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist/80">
                                Book a free 30-minute consultation with the architects who wrote these papers.
                            </p>
                            <Link href="/contact" className="btn-solid mt-7 inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>

        <Footer />
    </div>
);

export default WhitePapersPage;

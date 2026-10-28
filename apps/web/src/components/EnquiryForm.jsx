"use client";
import React, { useEffect, useId, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { sendEnquiryEmail } from "@/lib/send-enquiry-email";
import pb from '@/lib/pocketbaseClient';

const SOLUTION_OPTIONS = [
    { value: 'neuralcore', label: 'NeuralCore — AI Data Center Infrastructure' },
    { value: 'aegis360', label: 'Aegis360 — Cyber Defense & Digital Trust' },
    { value: 'appmind', label: 'AppMind — AI-Native App Engineering' },
    { value: 'general', label: 'Not sure — help me decide' },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL = { name: '', email: '', company: '', phone: '', solution: 'general', message: '', consent: false };

const EnquiryForm = ({ solution = 'general', heading = 'Request a consultation', subheading, buttonLabel = 'Submit enquiry' }) => {
    const formId = useId();
    const [form, setForm] = useState({ ...INITIAL, solution });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [emailWarning, setEmailWarning] = useState(false);

    useEffect(() => {
        setForm((current) => ({ ...current, solution }));
    }, [solution]);

    const set = (key, value) => {
        setForm((f) => ({ ...f, [key]: value }));
        setErrors((e) => ({ ...e, [key]: undefined }));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = 'Please tell us your name.';
        if (!EMAIL_RE.test(form.email.trim())) next.email = 'Enter a valid work email.';
        if (!form.message.trim()) next.message = 'Tell us briefly what you need.';
        if (!form.consent) next.consent = 'We need your consent to process this enquiry.';
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (status === 'submitting') return;
        if (!validate()) return;

        setStatus('submitting');
        setEmailWarning(false);

        try {
            await sendEnquiryEmail({
                name: form.name.trim(),
                email: form.email.trim(),
                company: form.company.trim(),
                phone: form.phone.trim(),
                solution: form.solution,
                message: form.message.trim(),
                formType: 'Website Enquiry',
            });

            try {
                await pb.collection('enquiries').create({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    company: form.company.trim(),
                    phone: form.phone.trim(),
                    solution: form.solution,
                    message: form.message.trim(),
                    consent: form.consent,
                });
            } catch (storageError) {
                console.error('Email sent, but enquiry storage failed:', storageError);
                setEmailWarning(true);
            }

            setStatus('success');
        } catch (error) {
            console.error('Email submission failed:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="glass-card flex flex-col items-center px-8 py-14 text-center">
                <span className="icon-tile !h-14 !w-14 !rounded-2xl">
                    <CheckCircle2 size={26} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">Enquiry received.</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mist/80">
                    Thank you, {form.name.split(' ')[0]}. A Networsys consultant will reach out within one business day
                    to schedule your free 30-minute call.
                </p>
                {emailWarning && (
                    <p className="mt-4 max-w-md rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 text-xs text-yellow-100">
                        Your email enquiry was sent, but a backup copy could not be saved.
                    </p>
                )}
                <button
                    type="button"
                    onClick={() => {
                        setForm({ ...INITIAL, solution });
                        setErrors({});
                        setEmailWarning(false);
                        setStatus('idle');
                    }}
                    className="btn-gradient mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                >
                    Send another enquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} noValidate className="glass-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{heading}</h3>
            {subheading && <p className="mt-2 text-sm text-mist/70">{subheading}</p>}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor={`${formId}-name`} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        Full name *
                    </label>
                    <input
                        id={`${formId}-name`}
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
                    <label htmlFor={`${formId}-email`} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        Work email *
                    </label>
                    <input
                        id={`${formId}-email`}
                        type="email"
                        autoComplete="email"
                        className="field-dark"
                        placeholder="priya@company.com"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-ember">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor={`${formId}-company`} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        Company
                    </label>
                    <input
                        id={`${formId}-company`}
                        type="text"
                        autoComplete="organization"
                        className="field-dark"
                        placeholder="Company or institution"
                        value={form.company}
                        onChange={(e) => set('company', e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor={`${formId}-phone`} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        Phone
                    </label>
                    <input
                        id={`${formId}-phone`}
                        type="tel"
                        autoComplete="tel"
                        className="field-dark"
                        placeholder="+91 …"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor={`${formId}-solution`} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        I’m interested in
                    </label>
                    <select
                        id={`${formId}-solution`}
                        className="field-dark appearance-none bg-ink"
                        value={form.solution}
                        onChange={(e) => set('solution', e.target.value)}
                    >
                        {SOLUTION_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value} className="bg-ink text-white">
                                {o.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor={`${formId}-message`} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
                        How can we help? *
                    </label>
                    <textarea
                        id={`${formId}-message`}
                        rows={4}
                        className="field-dark resize-none"
                        placeholder="Tell us about your workload, security posture or product idea…"
                        value={form.message}
                        onChange={(e) => set('message', e.target.value)}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-ember">{errors.message}</p>}
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
                            I consent to Networsys Technologies processing the personal data I have provided for the
                            purpose of responding to my enquiry, in accordance with the EU General Data Protection
                            Regulation (GDPR) and applicable data-protection law. I understand I may withdraw my
                            consent at any time by emailing{' '}
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
                    Email delivery failed. Please check your connection and try again.
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
                        Sending…
                    </>
                ) : (
                    <>
                        <Send size={16} />
                        {buttonLabel}
                    </>
                )}
            </button>
        </form>
    );
};

export default EnquiryForm;

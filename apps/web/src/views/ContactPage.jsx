import React from 'react';

import { MapPin, Mail, Phone, Clock, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';
import Reveal from '@/components/Reveal';
import NeuralMesh from '@/components/NeuralMesh';

const ADDRESS = 'C-302, Tower C, Noida One, Sector-62, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301, India';

const MAP_EMBED =
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Noida One, Sector-62, Noida, Uttar Pradesh 201301, India') +
    '&output=embed';

const CONTACT_POINTS = [
    {
        icon: MapPin,
        label: 'Headquarters',
        value: ADDRESS,
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'support@networsys.com',
        href: 'mailto:support@networsys.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 782 702 7504',
        href: 'tel:+917827027504',
    },
    {
        icon: Clock,
        label: 'SOC hours',
        value: '24×7 — always on',
    },
];

const ContactPage = () => (
    <div className="min-h-screen bg-ink text-mist">
        {/* Helmet removed for Next.js metadata */}

        <Navbar />

        {/* HERO */}
        <section className="section-glow-ink relative flex min-h-[70dvh] items-center overflow-hidden">
            <NeuralMesh className="absolute inset-0 h-full w-full opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.92),transparent)]" />

            <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-36 text-center sm:px-8">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70 backdrop-blur">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-pulse" />
                        Let’s talk AI
                    </span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Let’s Talk <span className="text-gradient">AI.</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
                        Tell us about your workload, your security posture or your product idea. A senior consultant —
                        never a sales rep — will reply within one business day to schedule your free 30-minute call.
                    </p>
                </Reveal>
            </div>
        </section>

        {/* CONTACT GRID */}
        <section className="relative py-24 sm:py-32">
            <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr]">
                {/* Left: contact points + map */}
                <Reveal>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Reach the team that ships, defends and scales.
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-mist/75">
                        Whether you’re scoping a GPU cluster, hardening a hospital network or launching an AI product,
                        start here. We’ll route you to the right architect.
                    </p>

                    <ul className="mt-10 space-y-5">
                        {CONTACT_POINTS.map((c) => (
                            <li key={c.label} className="flex items-start gap-4">
                                <span className="icon-tile !h-11 !w-11 !rounded-xl">
                                    <c.icon size={19} strokeWidth={1.5} />
                                </span>
                                <div>
                                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mist/55">
                                        {c.label}
                                    </p>
                                    {c.href ? (
                                        <a href={c.href} className="mt-1 block text-base font-medium text-white transition hover:text-pulse">
                                            {c.value}
                                        </a>
                                    ) : (
                                        <p className="mt-1 text-base font-medium leading-relaxed text-white">{c.value}</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <ul className="mt-10 space-y-3 border-t border-white/10 pt-8">
                        {[
                            'Free 30-minute consultation — no commitment',
                            'Scope, timeline and price mapped in the first call',
                            'GDPR-grade consent — withdrawable anytime',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-mist/85">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ember to-pulse">
                                    <Check size={12} strokeWidth={3} className="text-ink" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Embedded Google Map */}
                    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                        <iframe
                            title="Networsys Technologies — Noida One, Sector-62, Noida"
                            src={MAP_EMBED}
                            width="100%"
                            height="320"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="block h-[320px] w-full grayscale-[0.2] contrast-[1.05]"
                            style={{ border: 0 }}
                            allowFullScreen
                        />
                    </div>
                </Reveal>

                {/* Right: form */}
                <Reveal delay={0.15}>
                    <EnquiryForm
                        solution="general"
                        heading="Send us a message"
                        subheading="Fields marked * are required. We reply within one business day."
                        buttonLabel="Send Message"
                    />
                </Reveal>
            </div>
        </section>

        <Footer />
    </div>
);

export default ContactPage;

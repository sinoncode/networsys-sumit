import React from 'react';

import Link from 'next/link';
import { ArrowRight, CalendarClock, PlayCircle, Radio, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { UPCOMING_WEBINARS, ONDEMAND_WEBINARS } from '@/data/resources';

const WebinarsPage = () => (
    <div className="min-h-screen bg-ink text-mist">
        {/* Helmet removed for Next.js metadata */}
        <Seo
            title="Webinars — On-Demand & Live Sessions | Networsys Technologies"
            description="Live and on-demand webinars with Networsys architects and ethical hackers — GPU right-sizing, ransomware tabletops, RAG for banks, VAPT automation and more."
            siteName="Networsys Technologies"
        />

        <Navbar />

        {/* HERO */}
        <section className="section-glow-ink relative overflow-hidden pt-36 pb-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />
            <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70 backdrop-blur">
                        <Video size={13} className="text-ember" />
                        Webinars
                    </span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Sessions with the people <span className="text-gradient">who build and defend.</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
                        Join a live session or watch an on-demand recording with our architects, ethical hackers and
                        compliance consultants.
                    </p>
                </Reveal>
            </div>
        </section>

        {/* UPCOMING */}
        <section id="upcoming" className="py-16 sm:py-24">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    align="left"
                    eyebrow="Upcoming"
                    title={<>Save your seat, <span className="text-gradient">go live with us.</span></>}
                    description="Register once and we’ll send a calendar invite plus a reminder before the session starts."
                    className="max-w-2xl"
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {UPCOMING_WEBINARS.map((w, i) => (
                        <Reveal key={w.slug} delay={0.08 * i} className="h-full">
                            <article className="glass-card flex h-full flex-col p-7">
                                <div className="flex items-center justify-between">
                                    <span className="icon-tile !h-11 !w-11 !rounded-xl">
                                        <Radio size={18} strokeWidth={1.5} />
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ember">
                                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
                                        Live
                                    </span>
                                </div>
                                <h2 className="mt-5 font-display text-lg font-bold leading-snug text-white">{w.title}</h2>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{w.summary}</p>

                                <div className="mt-5 space-y-2.5 border-t border-white/10 pt-5 text-sm">
                                    <div className="flex items-center gap-2.5 text-mist/85">
                                        <CalendarClock size={15} className="shrink-0 text-pulse" />
                                        <span className="font-medium text-white">{w.date}</span>
                                    </div>
                                    <p className="text-xs text-mist/60">{w.speaker} · {w.speakerRole} · {w.duration}</p>
                                </div>

                                <Link href="/contact" className="btn-solid mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 px-5 py-3 text-sm font-semibold">
                                    Register
                                    <ArrowRight size={15} />
                                </Link>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* ON-DEMAND */}
        <section id="on-demand" className="section-glow relative overflow-hidden py-16 sm:py-24">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <SectionHeading
                    align="left"
                    eyebrow="On-demand"
                    title={<>Watch when <span className="text-gradient">it suits you.</span></>}
                    description="Recorded sessions, free to watch — no registration required for the playback."
                    className="max-w-2xl"
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {ONDEMAND_WEBINARS.map((w, i) => (
                        <Reveal key={w.slug} delay={0.06 * i} className="h-full">
                            <article className="glass-card flex h-full flex-col p-6">
                                <span className="icon-tile !h-11 !w-11 !rounded-xl">
                                    <PlayCircle size={18} strokeWidth={1.5} />
                                </span>
                                <h2 className="mt-5 font-display text-base font-bold leading-snug text-white">{w.title}</h2>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{w.summary}</p>
                                <div className="mt-5 border-t border-white/10 pt-4 text-xs text-mist/55">
                                    <p className="font-medium text-mist/75">{w.speaker}</p>
                                    <p className="mt-0.5">{w.date} · {w.duration}</p>
                                </div>
                                <Link href="/contact" className="btn-gradient mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold">
                                    Watch
                                    <PlayCircle size={15} />
                                </Link>
                            </article>
                        </Reveal>
                    ))}
                </div>
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
                                Want a private session <span className="text-gradient">for your team?</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist/80">
                                We run tailored briefings for banks, hospitals and fintechs. Book a free 30-minute call.
                            </p>
                            <Link href="/contact" className="btn-solid mt-7 inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold">
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

export default WebinarsPage;

import React from 'react';

import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralMesh from '@/components/NeuralMesh';
import Reveal from '@/components/Reveal';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-ink text-mist">
            <Navbar />

            <section className="section-glow-ink relative flex min-h-[100dvh] items-center overflow-hidden">
                <NeuralMesh className="absolute inset-0 h-full w-full opacity-50" />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.92),transparent)]" />

                <div className="relative z-10 mx-auto w-full max-w-3xl px-5 pb-20 pt-36 text-center sm:px-8">
                    <Reveal>
                        <p className="font-display text-7xl font-bold text-gradient sm:text-8xl">
                            404
                        </p>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
                            This page drifted off the grid.
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/85">
                            The link may be broken or the page may have moved.
                            Let’s get you back to safer ground.
                        </p>
                    </Reveal>

                    <Reveal
                        delay={0.3}
                        className="mt-10 flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link
                            href="/"
                            className="btn-solid inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold"
                        >
                            <ArrowLeft size={15} />
                            Back to Home
                        </Link>

                        <Link
                            href="/contact"
                            className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3.5 text-sm font-semibold"
                        >
                            Talk to an Expert
                            <ArrowRight size={16} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default NotFoundPage;
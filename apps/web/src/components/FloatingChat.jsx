"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import EnquiryForm from '@/components/EnquiryForm';

const CONSENT_KEY = 'networsys_cookie_consent_v1';

const FloatingChat = () => {
    const [open, setOpen] = useState(false);
    const [consentGiven, setConsentGiven] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        try {
            setConsentGiven(Boolean(localStorage.getItem(CONSENT_KEY)));
        } catch {
            setConsentGiven(false);
        }
        const onConsent = () => setConsentGiven(true);
        window.addEventListener('networsys:cookie-consent', onConsent);
        return () => window.removeEventListener('networsys:cookie-consent', onConsent);
    }, []);

    // Don't show on the contact page — the form is already there.
    if (pathname === '/contact') return null;

    // Lift the launcher above the cookie bar until consent is recorded.
    const launcherBottom = consentGiven ? 'bottom-5 sm:bottom-6' : 'bottom-28 sm:bottom-32';

    return (
        <>
            {/* Launcher */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Let's Talk AI — open contact form"
                className={`group fixed right-5 z-[65] flex h-14 items-center gap-2.5 rounded-full border border-white/10 bg-ink/90 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(242,107,33,0.6)] backdrop-blur-xl transition hover:border-pulse/50 sm:right-6 ${launcherBottom}`}
            >
                <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
                    <Sparkles size={18} className="relative text-ember" />
                </span>
                <span className="hidden sm:inline">Let’s Talk AI</span>
                <MessageCircle size={18} className="sm:hidden" />
            </button>

            {/* Panel */}
            {open && (
                <div className="fixed inset-0 z-[75] flex items-end justify-end p-0 sm:p-6" role="dialog" aria-modal="true" aria-label="Let's Talk AI enquiry form">
                    <button
                        type="button"
                        aria-label="Close"
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />
                    <div className="glass-card relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-b-none p-0 sm:max-w-lg sm:rounded-[20px]">
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                            <div className="flex items-center gap-2.5">
                                <span className="icon-tile !h-9 !w-9 !rounded-lg">
                                    <Sparkles size={16} strokeWidth={1.5} />
                                </span>
                                <div>
                                    <p className="font-display text-base font-bold text-white">Let’s Talk AI</p>
                                    <p className="text-[0.7rem] text-mist/60">Free 30-minute consultation — reply within one business day.</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                aria-label="Close"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist transition hover:border-pulse/50 hover:text-pulse"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <div className="p-6 sm:p-7">
                            <EnquiryForm
                                solution="general"
                                heading="Send us a message"
                                subheading="Fields marked * are required. We reply within one business day."
                                buttonLabel="Send Message"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingChat;

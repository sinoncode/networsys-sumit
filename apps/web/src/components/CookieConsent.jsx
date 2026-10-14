"use client";
import React, { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';

const KEY = 'networsys_cookie_consent_v1';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            if (!localStorage.getItem(KEY)) {
                // small delay so it doesn't fight the hero load
                const t = setTimeout(() => setVisible(true), 900);
                return () => clearTimeout(t);
            }
        } catch {
            setVisible(true);
        }
        return undefined;
    }, []);

    const dismiss = (choice) => {
        try {
            localStorage.setItem(KEY, choice);
        } catch {
            /* ignore */
        }
        setVisible(false);
        window.dispatchEvent(new Event('networsys:cookie-consent'));
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:px-6 sm:pb-6">
            <div className="glass-card mx-auto flex w-full max-w-4xl flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
                <span className="icon-tile !h-11 !w-11 !rounded-xl shrink-0">
                    <Cookie size={18} strokeWidth={1.5} />
                </span>
                <p className="flex-1 text-xs leading-relaxed text-mist/80 sm:text-sm">
                    We use essential cookies to keep this site secure and analytics cookies to understand how
                    engineers like you use it. By continuing, you consent to our use of cookies. Read our{' '}
                    <a href="/contact" className="font-semibold text-pulse underline underline-offset-2">
                        privacy notice
                    </a>{' '}
                    or withdraw consent anytime at{' '}
                    <a href="mailto:privacy@networsys.com" className="font-semibold text-pulse underline underline-offset-2">
                        privacy@networsys.com
                    </a>.
                </p>
                <div className="flex shrink-0 items-center gap-2.5">
                    <button
                        type="button"
                        onClick={() => dismiss('essential')}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-mist transition hover:border-pulse/50 hover:text-pulse"
                    >
                        Essential only
                    </button>
                    <button
                        type="button"
                        onClick={() => dismiss('all')}
                        className="btn-solid inline-flex min-h-[44px] items-center justify-center px-5 py-2.5 text-sm font-semibold"
                    >
                        Accept all
                    </button>
                    <button
                        type="button"
                        onClick={() => dismiss('dismissed')}
                        aria-label="Dismiss cookie notice"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-mist/60 transition hover:border-pulse/50 hover:text-pulse"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;

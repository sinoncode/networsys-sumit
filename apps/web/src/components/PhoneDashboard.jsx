import React from 'react';
import {
    BarChart3,
    Bot,
    Camera,
    CheckCircle2,
    CreditCard,
    Fingerprint,
    Home,
    Search,
    Send,
    Sparkles,
    TrendingUp,
} from 'lucide-react';

/**
 * Floating phone + dashboard mockups with orange/cyan glow.
 * Pure CSS/SVG composition — no Three.js. Honors reduced motion.
 */
const PhoneDashboard = ({ className = '' }) => (
    <div className={`relative mx-auto aspect-square w-full max-w-[30rem] ${className}`}>
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(242,107,33,0.20),transparent_60%),radial-gradient(circle_at_50%_60%,rgba(34,211,238,0.18),transparent_62%)]" />

        {/* Orbiting data dots */}
        <div className="pointer-events-none absolute inset-6 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute inset-12 rounded-full border border-white/[0.04]" />

        {/* Dashboard panel (back) */}
        <div
            className="absolute left-1/2 top-[14%] w-[78%] -translate-x-1/2 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1424]/95 to-[#070b14]/95 p-4 shadow-[0_24px_60px_-24px_rgba(34,211,238,0.45)] backdrop-blur-xl float-dash"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-ember to-pulse text-ink">
                        <BarChart3 size={14} strokeWidth={2} />
                    </span>
                    <div>
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-mist/60">Dashboard</p>
                        <p className="text-[0.7rem] font-bold text-white">Loan Origination</p>
                    </div>
                </div>
                <span className="rounded-full border border-pulse/40 bg-pulse/10 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-pulse">Live</span>
            </div>

            {/* Stat row */}
            <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                    { k: 'Approved', v: '248' },
                    { k: 'Pending', v: '31' },
                    { k: 'Avg time', v: '4h' },
                ].map((s) => (
                    <div key={s.k} className="rounded-lg border border-white/5 bg-white/[0.03] px-2 py-1.5">
                        <p className="text-[0.5rem] uppercase tracking-[0.14em] text-mist/50">{s.k}</p>
                        <p className="font-display text-sm font-bold text-white">{s.v}</p>
                    </div>
                ))}
            </div>

            {/* Mini bar chart */}
            <div className="mt-3 flex h-16 items-end gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                {[40, 65, 52, 78, 60, 88, 72, 95].map((h, i) => (
                    <span
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-ember/40 to-pulse"
                        style={{ height: `${h}%` }}
                    />
                ))}
            </div>

            {/* AI insight line */}
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-ember/30 bg-ember/10 px-2.5 py-2">
                <Sparkles size={13} className="shrink-0 text-ember" />
                <p className="text-[0.62rem] leading-snug text-mist/85">
                    AI verified <span className="font-semibold text-white">12 documents</span> in 8 seconds.
                </p>
            </div>
        </div>

        {/* Phone (front) */}
        <div className="absolute bottom-[6%] right-[6%] w-[42%] float-phone">
            <div className="relative rounded-[1.6rem] border border-white/15 bg-gradient-to-b from-[#0e1626] to-[#05070c] p-2 shadow-[0_30px_70px_-20px_rgba(242,107,33,0.55)]">
                {/* Notch */}
                <div className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/20" />

                <div className="overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#070b14]">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-3 pt-3 text-[0.5rem] text-mist/60">
                        <span>9:41</span>
                        <span className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
                            5G
                        </span>
                    </div>

                    {/* App header */}
                    <div className="px-3 pt-2">
                        <p className="text-[0.5rem] uppercase tracking-[0.16em] text-mist/50">Welcome back</p>
                        <p className="font-display text-sm font-bold text-white">Apply for a loan</p>
                    </div>

                    {/* Balance card */}
                    <div className="mx-3 mt-2 rounded-xl border border-white/10 bg-gradient-to-br from-ember/20 to-pulse/15 p-2.5">
                        <div className="flex items-center justify-between">
                            <CreditCard size={13} className="text-pulse" />
                            <Fingerprint size={13} className="text-ember" />
                        </div>
                        <p className="mt-1.5 font-display text-base font-bold tracking-wide text-white">₹ 4,80,000</p>
                        <p className="text-[0.5rem] text-mist/60">Eligible · pre-approved</p>
                    </div>

                    {/* AI scan row */}
                    <div className="mx-3 mt-2 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-ember to-pulse text-ink">
                            <Camera size={11} strokeWidth={2} />
                        </span>
                        <div className="flex-1">
                            <p className="text-[0.58rem] font-semibold text-white">Scan PAN &amp; Aadhaar</p>
                            <p className="text-[0.48rem] text-mist/55">AI auto-fills your form</p>
                        </div>
                        <Bot size={13} className="text-pulse" />
                    </div>

                    {/* Action button */}
                    <div className="mx-3 mt-2 flex items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-ember to-pulse py-2 text-[0.6rem] font-bold text-ink">
                        <Send size={11} strokeWidth={2} />
                        Submit application
                    </div>

                    {/* Bottom nav */}
                    <div className="mt-2 flex items-center justify-around border-t border-white/5 px-3 py-2 text-mist/50">
                        <Home size={12} />
                        <Search size={12} />
                        <TrendingUp size={12} />
                        <CheckCircle2 size={12} className="text-pulse" />
                    </div>
                </div>
            </div>
        </div>

        <style>{`
            @keyframes floatDash {
                0%, 100% { transform: translateX(-50%) translateY(0); }
                50% { transform: translateX(-50%) translateY(-10px); }
            }
            @keyframes floatPhone {
                0%, 100% { transform: translateY(0) rotate(-3deg); }
                50% { transform: translateY(-14px) rotate(-3deg); }
            }
            .float-dash { animation: floatDash 6s ease-in-out infinite; }
            .float-phone { animation: floatPhone 5s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
                .float-dash, .float-phone { animation: none; }
            }
        `}</style>
    </div>
);

export default PhoneDashboard;

export { PhoneDashboard };

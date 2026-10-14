import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { SOLUTION_LIST } from '@/data/solutions';
import { INDUSTRY_CARDS, RESOURCES, ABOUT_LINKS } from '@/data/site';
const SOCIALS = [{
  label: 'LinkedIn',
  icon: Linkedin,
  href: 'https://www.linkedin.com'
}, {
  label: 'X',
  icon: Twitter,
  href: 'https://twitter.com'
}, {
  label: 'Facebook',
  icon: Facebook,
  href: 'https://www.facebook.com'
}, {
  label: 'Instagram',
  icon: Instagram,
  href: 'https://www.instagram.com'
}];
const CERTS = ['ISO 27001', 'AWS Partner', 'CEH'];
const ADDRESS = 'C-302, Tower C, Noida One, Sector-62, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301, India';
const Footer = () => <footer className="border-t border-white/5 bg-ink">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
            <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
                {/* Brand + tagline + contact */}
                <div>
                    <Link href="/" aria-label="Networsys Technologies home" className="inline-flex items-center">
                        <img src="https://horizons-cdn.hostinger.com/41ed0c7a-a43a-452a-b8f4-7d05fec1409a/chatgpt-image-sep-5-2026-12_30_57-pm-RO70J.png" alt="Networsys Technologies" className="h-12 w-auto max-w-[12rem] object-contain" />
                    </Link>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/70">
                        AI-First Technology Partner for Regulated Industries.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-mist/80">
                        <li className="flex items-start gap-2.5">
                            <MapPin size={15} className="mt-0.5 shrink-0 text-ember" />
                            <span className="leading-relaxed">{ADDRESS}</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <Mail size={15} className="mt-0.5 shrink-0 text-pulse" />
                            <a href="mailto:support@networsys.com" className="transition hover:text-pulse">support@networsys.com</a>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <Phone size={15} className="mt-0.5 shrink-0 text-ember" />
                            <a href="tel:+917827027504" className="transition hover:text-pulse">+91 782 702 7504</a>
                        </li>
                    </ul>
                </div>

                {/* Solutions */}
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist/50">Solutions</p>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {SOLUTION_LIST.map(s => <li key={s.slug}>
                                <Link href={`/${s.slug}`} className="text-mist/80 transition hover:text-pulse">
                                    {s.name}
                                </Link>
                            </li>)}
                    </ul>
                </div>

                {/* Industries */}
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist/50">Industries</p>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {INDUSTRY_CARDS.map(ind => <li key={ind.key}>
                                <Link href={`/industries/${ind.key}`} className="text-mist/80 transition hover:text-pulse">
                                    {ind.title}
                                </Link>
                            </li>)}
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist/50">Resources</p>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {RESOURCES.map(r => <li key={r.title}>
                                <Link href={`/${r.slug}`} className="text-mist/80 transition hover:text-pulse">
                                    {r.title}
                                </Link>
                            </li>)}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist/50">Company</p>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {ABOUT_LINKS.map(a => <li key={a.title}>
                                <Link href={`/${a.slug}`} className="text-mist/80 transition hover:text-pulse">
                                    {a.title}
                                </Link>
                            </li>)}
                        <li>
                            <Link href="/contact" className="text-mist/80 transition hover:text-pulse">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Certification badges */}
            <div className="mt-12 flex flex-wrap items-center gap-3">
                {CERTS.map(c => <span key={c} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mist/70">
                        {c}
                    </span>)}
            </div>

            <hr className="gradient-divider mt-10" />

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-mist/50">© 2026 Networsys Technologies. All rights reserved.</p>
                <div className="flex items-center gap-3">
                    {SOCIALS.map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-mist/70 transition hover:border-pulse/50 hover:text-pulse">
                            <s.icon size={16} strokeWidth={1.5} />
                        </a>)}
                </div>
            </div>
        </div>
    </footer>;
export default Footer;
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavLink = ({ to, href: hrefProp, className, children, ...props }) => { const pathname = usePathname(); const dest = to || hrefProp; const isActive = pathname === dest; return <Link href={dest} className={typeof className === 'function' ? className({ isActive }) : className} {...props}>{children}</Link>; };
import { ChevronDown, Menu, X, ArrowUpRight, Zap } from 'lucide-react';
import { SOLUTIONS, SOLUTION_LIST } from '@/data/solutions';
import { INDUSTRY_CARDS, ACCELERATORS, RESOURCES, ABOUT_LINKS } from '@/data/site';
const Logo = () => <Link href="/" aria-label="Networsys Technologies home" className="flex items-center">
        <img src="https://horizons-cdn.hostinger.com/41ed0c7a-a43a-452a-b8f4-7d05fec1409a/chatgpt-image-sep-5-2026-12_30_57-pm-tq1nk.png" alt="Networsys Technologies" className="h-11 w-auto max-w-[11rem] object-contain" />
    </Link>;
const Ticker = () => {
  const items = ['24×7 SOC Active', 'AI Data Centers Designed', '100+ Apps Shipped'];
  const Group = () => <span className="inline-flex items-center">
            {items.map((t, i) => <span key={`${t}-${i}`} className="inline-flex items-center">
                    <span className="px-6 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-mist/70">{t}</span>
                    <span className="h-1 w-1 rounded-full bg-gradient-to-br from-ember to-pulse" aria-hidden="true" />
                </span>)}
        </span>;
  return <div className="overflow-hidden border-b border-white/5 bg-ink/90 backdrop-blur-xl">
            <div className="ticker-track">
                <Group />
                <Group />
            </div>
        </div>;
};
const MegaCard = ({
  title,
  blurb,
  to,
  href
}) => {
  const inner = <>
            <span className="flex items-center gap-1.5 font-display text-sm font-semibold text-white">
                {title}
                <ArrowUpRight size={13} className="text-pulse" />
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-mist/65">{blurb}</span>
        </>;
  const cls = 'block rounded-xl px-4 py-3 transition hover:bg-white/5';
  return to ? <Link href={to} className={cls}>{inner}</Link> : <a href={href || '#'} className={cls}>{inner}</a>;
};
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const location = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
    setOpenSection(null);
  }, [location]);
  const toggleSection = key => setOpenSection(cur => cur === key ? null : key);
  return <header className="fixed inset-x-0 top-0 z-50">
            <div className={`relative z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-white/5 bg-ink/80 backdrop-blur-xl' : 'bg-transparent'}`}>
                <nav className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-5 sm:px-8">
                    <Logo />

                    {/* Desktop nav with mega-menus */}
                    <div className="hidden items-center gap-7 lg:flex">
                        {/* Solutions */}
                        <div className="nav-group relative">
                            <button type="button" className="nav-link">
                                Solutions
                                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            <div className="mega-panel left-1/2 w-[44rem] -translate-x-1/2 pt-4">
                                <div className="glass-card grid grid-cols-3 gap-2 p-3">
                                    {SOLUTION_LIST.map(s => <div key={s.slug} className="rounded-xl p-3 transition hover:bg-white/[0.04]">
                                            <Link href={`/${s.slug}`} className="flex items-center gap-2.5">
                                                <span className="icon-tile !h-9 !w-9 !rounded-lg">
                                                    <s.icon size={17} strokeWidth={1.5} />
                                                </span>
                                                <span>
                                                    <span className="block font-display text-sm font-bold text-white">{s.name}</span>
                                                    <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-pulse">{s.tagline}</span>
                                                </span>
                                            </Link>
                                            <ul className="mt-3 space-y-1.5 border-t border-white/5 pt-3">
                                                {s.capabilities.map(c => <li key={c.title}>
                                                <Link href={`/${s.slug}/${c.slug}`} className="block rounded-md px-2 py-1.5 text-xs leading-snug text-mist/70 transition hover:bg-white/5 hover:text-white">
                                                            {c.title}
                                                        </Link>
                                                    </li>)}
                                            </ul>
                                        </div>)}
                                </div>
                            </div>
                        </div>

                        {/* Industries */}
                        <div className="nav-group relative">
                            <button type="button" className="nav-link">
                                Industries
                                <ChevronDown size={14} />
                            </button>
                            <div className="mega-panel left-1/2 w-[40rem] -translate-x-1/2 pt-4">
                                <div className="glass-card grid grid-cols-3 gap-3 p-3">
                                    {INDUSTRY_CARDS.map(ind => <Link key={ind.key} href={`/industries/${ind.key}`} className="group/card overflow-hidden rounded-xl border border-white/5 bg-ink/60">
                                            <div className="relative h-24 overflow-hidden">
                                                <img src={ind.image} alt={ind.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                                            </div>
                                            <div className="p-3">
                                                <span className="flex items-center gap-1 font-display text-sm font-semibold text-white">
                                                    {ind.title}
                                                    <ArrowUpRight size={12} className="text-pulse" />
                                                </span>
                                                <p className="mt-1 text-[0.7rem] leading-snug text-mist/60">{ind.blurb}</p>
                                            </div>
                                        </Link>)}
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="nav-group relative">
                            <button type="button" className="nav-link">
                                Resources
                                <ChevronDown size={14} />
                            </button>
                            <div className="mega-panel left-1/2 w-[26rem] -translate-x-1/2 pt-4">
                                <div className="glass-card p-3">
                                    {RESOURCES.map(r => <MegaCard key={r.title} title={r.title} blurb={r.blurb} to={`/${r.slug}`} />)}
                                </div>
                            </div>
                        </div>

                        {/* Accelerators */}
                        <div className="nav-group relative">
                            <button type="button" className="nav-link">
                                Accelerators
                                <ChevronDown size={14} />
                            </button>
                            <div className="mega-panel left-1/2 w-[30rem] -translate-x-1/2 pt-4">
                                <div className="glass-card grid grid-cols-2 gap-2 p-3">
                                    {ACCELERATORS.map(a => <MegaCard key={a.title} title={a.title} blurb={a.blurb} to={`/accelerators#${a.slug}`} />)}
                                </div>
                            </div>
                        </div>

                        {/* About */}
                        <div className="nav-group relative">
                            <button type="button" className="nav-link">
                                About Networsys
                                <ChevronDown size={14} />
                            </button>
                            <div className="mega-panel left-1/2 w-[22rem] -translate-x-1/2 pt-4">
                                <div className="glass-card p-3">
                                    {ABOUT_LINKS.map(a => <MegaCard key={a.title} title={a.title} blurb={a.blurb} to={`/${a.slug}`} />)}
                                </div>
                            </div>
                        </div>

                        {/* Let's Talk AI */}
                        <Link href="/contact" className="nav-link">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-ember to-pulse" />
                            </span>
                            Let’s Talk AI
                        </Link>
                    </div>

                    {/* Right: Contact Us pill */}
                    <div className="hidden items-center lg:flex">
                        <Link href="/contact" className="btn-solid inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button type="button" onClick={() => setOpen(v => !v)} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </div>

            {/* Ticker */}
            <Ticker />

            {/* Mobile panel — accordion */}
            {open && <div className="max-h-[78vh] overflow-y-auto border-t border-white/5 bg-ink/95 px-4 pb-8 pt-2 backdrop-blur-xl lg:hidden">
                    {/* Solutions */}
                    <div className="border-b border-white/5">
                        <button type="button" onClick={() => toggleSection('solutions')} className="flex w-full items-center justify-between px-2 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-mist/80" aria-expanded={openSection === 'solutions'}>
                            Solutions
                            <ChevronDown size={16} className={`text-pulse transition-transform duration-200 ${openSection === 'solutions' ? 'rotate-180' : ''}`} />
                        </button>
                        {openSection === 'solutions' && <div className="space-y-1 pb-3">
                                {SOLUTION_LIST.map(s => <NavLink key={s.slug} href={`/${s.slug}`} className="flex items-center gap-3 rounded-xl px-3 py-3 text-white transition hover:bg-white/5">
                                        <span className="icon-tile !h-9 !w-9 !rounded-lg">
                                            <s.icon size={17} strokeWidth={1.5} />
                                        </span>
                                        <span>
                                            <span className="block font-display text-sm font-semibold">{s.name}</span>
                                            <span className="block text-xs text-mist/60">{s.menuBlurb}</span>
                                        </span>
                                    </NavLink>)}
                            </div>}
                    </div>

                    {/* Industries */}
                    <div className="border-b border-white/5">
                        <button type="button" onClick={() => toggleSection('industries')} className="flex w-full items-center justify-between px-2 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-mist/80" aria-expanded={openSection === 'industries'}>
                            Industries
                            <ChevronDown size={16} className={`text-pulse transition-transform duration-200 ${openSection === 'industries' ? 'rotate-180' : ''}`} />
                        </button>
                        {openSection === 'industries' && <div className="space-y-1 pb-3">
                                {INDUSTRY_CARDS.map(ind => <NavLink key={ind.key} href={`/industries/${ind.key}`} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-mist hover:bg-white/5 hover:text-white">
                                        {ind.title}
                                    </NavLink>)}
                            </div>}
                    </div>

                    {/* Resources */}
                    <div className="border-b border-white/5">
                        <button type="button" onClick={() => toggleSection('resources')} className="flex w-full items-center justify-between px-2 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-mist/80" aria-expanded={openSection === 'resources'}>
                            Resources
                            <ChevronDown size={16} className={`text-pulse transition-transform duration-200 ${openSection === 'resources' ? 'rotate-180' : ''}`} />
                        </button>
                        {openSection === 'resources' && <div className="space-y-1 pb-3">
                                {RESOURCES.map(r => <NavLink key={r.title} href={`/${r.slug}`} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-mist hover:bg-white/5 hover:text-white">
                                        {r.title}
                                    </NavLink>)}
                            </div>}
                    </div>

                    {/* Accelerators */}
                    <div className="border-b border-white/5">
                        <button type="button" onClick={() => toggleSection('accelerators')} className="flex w-full items-center justify-between px-2 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-mist/80" aria-expanded={openSection === 'accelerators'}>
                            Accelerators
                            <ChevronDown size={16} className={`text-pulse transition-transform duration-200 ${openSection === 'accelerators' ? 'rotate-180' : ''}`} />
                        </button>
                        {openSection === 'accelerators' && <div className="space-y-1 pb-3">
                                {ACCELERATORS.map(a => <NavLink key={a.title} href={`/accelerators#${a.slug}`} className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-mist hover:bg-white/5 hover:text-white">
                                        <Zap size={13} className="text-ember" />
                                        {a.title}
                                    </NavLink>)}
                            </div>}
                    </div>

                    {/* About */}
                    <div className="border-b border-white/5">
                        <button type="button" onClick={() => toggleSection('about')} className="flex w-full items-center justify-between px-2 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-mist/80" aria-expanded={openSection === 'about'}>
                            About Networsys
                            <ChevronDown size={16} className={`text-pulse transition-transform duration-200 ${openSection === 'about' ? 'rotate-180' : ''}`} />
                        </button>
                        {openSection === 'about' && <div className="space-y-1 pb-3">
                                {ABOUT_LINKS.map(a => <NavLink key={a.title} href={`/${a.slug}`} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-mist hover:bg-white/5 hover:text-white">
                                        {a.title}
                                    </NavLink>)}
                            </div>}
                    </div>

                    {/* Let's Talk AI — always visible */}
                    <NavLink href="/contact" className="mt-3 flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-pulse transition hover:bg-white/5">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-ember to-pulse" />
                        </span>
                        Let’s Talk AI
                    </NavLink>

                    <Link href="/contact" className="btn-solid mt-3 flex min-h-[48px] items-center justify-center px-5 py-3 text-sm font-semibold">
                        Contact Us
                    </Link>
                </div>}
        </header>;
};
export default Navbar;
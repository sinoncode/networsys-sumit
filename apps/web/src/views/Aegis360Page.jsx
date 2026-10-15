"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Crosshair,
  DatabaseBackup,
  ExternalLink,
  Eye,
  Fish,
  FileCheck,
  FileText,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers,
  Network,
  Radar,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Target,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShieldMesh from "@/components/ShieldMesh";
import SectionHeading from "@/components/SectionHeading";
import IconTile from "@/components/IconTile";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { ServiceSchema } from "@/components/Schema";
import { SOLUTIONS } from "@/data/solutions";

const s = SOLUTIONS.aegis360;

/* ------------------------------------------------------------------ */
/* CONTENT                                                             */
/* ------------------------------------------------------------------ */

const META = {
  title: "Aegis360 Managed Cybersecurity Services in India | Networsys",
  description:
    "Aegis360 unites VAPT, 24×7 managed SOC, threat intelligence, phishing awareness, compliance and ransomware-ready backup for regulated industries.",
};

const POSTURE_HREF = "/accelerators#security-posture-score";

const CERTS = ["ISO 27001 Certified", "CEH-Certified Ethical Hackers", "AWS Partner"];

const WHY_STATS = [
  {
    icon: Activity,
    stat: "24×7",
    label: "monitoring from our Noida Security Operations Center",
  },
  {
    icon: ShieldCheck,
    stat: "CEH + ISO 27001",
    label: "certified ethical hackers working inside certified processes",
  },
  {
    icon: Fish,
    stat: "30% → under 5%",
    label:
      "typical reduction in phishing click rates within six months of a PAUSE programme",
    note: "Typical programme target",
  },
  {
    icon: Network,
    stat: "Full-spectrum",
    label: "web, mobile, API, network, cloud and VoIP coverage",
  },
];

const CAPABILITIES = [
  {
    icon: Crosshair,
    slug: "striketest",
    title: "StrikeTest — Penetration Testing & VAPT",
    body: "CEH-certified ethical hackers test your web applications, mobile apps, APIs, networks, cloud accounts and VoIP infrastructure the way a real attacker would, then give your engineers a fix-first roadmap and a re-test certificate.",
    link: "Explore StrikeTest",
  },
  {
    icon: Radar,
    slug: "threatwatch",
    title: "ThreatWatch — Threat Intelligence & Hunting",
    body: "Dark-web credential monitoring, brand and domain impersonation alerts, and hypothesis-driven hunting mapped to MITRE ATT&CK, so you learn about a threat before it becomes an incident.",
    link: "Explore ThreatWatch",
  },
  {
    icon: Eye,
    slug: "sentinelsoc",
    title: "SentinelSOC — 24×7 Managed Detection & Response",
    body: "SIEM, EDR/XDR and L1–L3 analysts on a monthly subscription. You get the coverage of an enterprise security operations centre without hiring three shifts of analysts.",
    link: "Explore SentinelSOC",
  },
  {
    icon: Network,
    slug: "network-defense",
    title: "Network & Firewall Defense",
    body: "Next-generation firewall deployment and rule audits, network access control, zero-trust segmentation, secure remote access and wireless security.",
    link: "Explore Network Defense",
  },
  {
    icon: Fish,
    slug: "phause",
    title: "PAUSE — Phishing Simulation & Awareness",
    body: "Realistic phishing, vishing and smishing campaigns, department-level risk scoring, and short training modules in Hindi and English that change how people behave.",
    link: "Explore PAUSE",
  },
  {
    icon: FileCheck,
    slug: "complyedge",
    title: "ComplyEdge — Consulting & Compliance",
    body: "Virtual CISO, gap assessments and certification support for ISO 27001, SOC 2, PCI DSS, HIPAA, the DPDP Act and RBI and SEBI cyber security frameworks.",
    link: "Explore ComplyEdge",
  },
  {
    icon: DatabaseBackup,
    slug: "resiliencevault",
    title: "ResilienceVault — Backup & Disaster Recovery",
    body: "Immutable backups, agreed recovery objectives and quarterly recovery drills, so that ransomware becomes an inconvenience and not a catastrophe.",
    link: "Explore ResilienceVault",
  },
];

const CYCLE = [
  {
    icon: Target,
    step: "Test",
    title: "Find every weakness before an attacker does.",
    body: "StrikeTest engagements and firewall audits show where you are exposed today, ranked by how easily each gap can be exploited.",
  },
  {
    icon: Eye,
    step: "Detect",
    title: "Monitor, triage and hunt around the clock.",
    body: "SentinelSOC and ThreatWatch watch your logs, endpoints, cloud accounts and the dark web for signs that someone is already inside or preparing to be.",
  },
  {
    icon: ShieldAlert,
    step: "Respond",
    title: "Contain and recover with SLA-backed playbooks.",
    body: "When something is confirmed, analysts isolate affected systems, guide your team through containment, and ResilienceVault runbooks bring clean data back.",
  },
  {
    icon: FileCheck,
    step: "Comply",
    title: "Map controls to regulations and produce audit evidence.",
    body: "ComplyEdge turns test reports, SOC metrics and training records into the documentation that ISO, PCI DSS, RBI and DPDP reviews require.",
  },
  {
    icon: GraduationCap,
    step: "Train",
    title: "Turn employees into a human firewall.",
    body: "PAUSE campaigns use the real attack patterns our SOC sees, so your people practise against the threats most likely to reach them.",
  },
];

const INDUSTRIES = [
  {
    icon: Landmark,
    title: "Fintech and Payments",
    body: "PCI DSS assessments, SOC 2 reports for enterprise customers, secure APIs and protection against account takeover.",
    href: "/industries/fintech",
    link: "See cybersecurity for fintech",
  },
  {
    icon: HeartPulse,
    title: "Hospitals and Healthcare",
    body: "Protection for hospital information systems, medical IoT and patient records, aligned with HIPAA, NABH expectations and India's DPDP Act.",
    href: "/industries/healthcare",
    link: "See cybersecurity for hospitals",
  },
  {
    icon: Building2,
    title: "Banks and Financial Institutions",
    body: "Controls and evidence for RBI and SEBI cyber security frameworks, branch network security and round-the-clock monitoring.",
    href: "/industries/banking",
    link: "See cybersecurity for banks",
  },
];

const CASE_FALLBACK = {
  challenge: "",
  solution: "",
  result: "",
};

const CASE_METRICS = [
  { value: 4, unit: "min", label: "to detect the ransomware" },
  { value: 40, unit: "min", label: "to restore clinical systems" },
];

const ADVISORIES = [
  {
    slug: "ransomware-spike-q3-2026",
    severity: "High",
    title: "Ransomware group targeting hospital HIS via exposed RDP",
    excerpt:
      "Our SOC has tracked a sustained campaign against Indian hospital networks using brute-forced RDP endpoints. Patch and isolate guidance inside.",
    date: "Sep 2026",
  },
  {
    slug: "phishing-kit-bypassing-mfa",
    severity: "Medium",
    title: "New phishing kit bypassing SMS-based MFA on banking portals",
    excerpt:
      "A reverse-proxy phishing kit is intercepting OTPs in real time. We break down the attack chain and the compensating controls that stop it.",
    date: "Aug 2026",
  },
  {
    slug: "api-auth-flaw-fintech",
    severity: "Critical",
    title: "Critical auth-bypass in a popular fintech lending API framework",
    excerpt:
      "A broken-object-level authorisation flaw lets attackers pull other users’ loan files. Affected versions and a detection rule are included.",
    date: "Aug 2026",
  },
];

const severityStyles = {
  Critical: "border-ember/50 bg-ember/10 text-ember",
  High: "border-orange-400/40 bg-orange-400/10 text-orange-300",
  Medium: "border-pulse/40 bg-pulse/10 text-pulse",
};

const WHY_NETWORSYS = [
  {
    lead: "Practitioners on every call.",
    body: "You speak with a CEH-certified ethical hacker or a SOC analyst, never a sales representative reading from a script.",
  },
  {
    lead: "Certified processes.",
    body: "Our own operations are ISO 27001 certified, so the way we handle your data meets the standard we help you achieve.",
  },
  {
    lead: "One accountable team.",
    body: "Testing, monitoring, compliance and recovery report to one engagement lead, so findings are tracked to closure.",
  },
  {
    lead: "Mid-market pricing.",
    body: "Subscription models give growing organisations enterprise-grade coverage without enterprise capital expenditure.",
  },
  {
    lead: "Security that extends to your infrastructure and apps.",
    body: "Aegis360 works alongside {neuralcore} and {appmind}, so new systems are protected from the first design review.",
  },
];

const FAQS = [
  {
    question: "What is Aegis360?",
    answer:
      "Aegis360 is the managed cybersecurity service portfolio of Networsys Technologies. It covers penetration testing, a 24×7 managed SOC, threat intelligence, network defence, phishing awareness, compliance consulting and backup and disaster recovery.",
  },
  {
    question: "Do we have to buy all seven services?",
    answer:
      "No. Most clients start with one service, usually a StrikeTest VAPT engagement or a compliance gap assessment, and add others as priorities become clear. Each service is contracted separately.",
  },
  {
    question: "Which industries does Aegis360 serve?",
    answer:
      "Our core experience is in fintech, hospitals, banks and NBFCs. The same methods apply to insurance, telecom, manufacturing, government bodies and SaaS companies.",
  },
  {
    question: "Which standards and regulations do you work with?",
    answer:
      "ISO 27001, SOC 2, PCI DSS, HIPAA, the Digital Personal Data Protection Act 2023, RBI and SEBI cyber security frameworks, and CERT-In directions on incident reporting and log retention. Our detection work follows the NIST Cybersecurity Framework and MITRE ATT&CK.",
    links: [
      { label: "NIST Cybersecurity Framework", href: "https://www.nist.gov/cyberframework" },
      { label: "MITRE ATT&CK", href: "https://attack.mitre.org/" },
    ],
  },
  {
    question: "Where is your Security Operations Center?",
    answer:
      "Our SOC operates from Noida, India, with analysts working in shifts to provide 24×7 coverage for clients in India and overseas.",
  },
  {
    question: "How do we get started?",
    answer:
      "Request a free Security Posture Score. We assess your external attack surface and dark-web exposure without installing anything, then walk you through the results on a 30-minute call.",
    cta: { label: "Get a Free Security Posture Score", href: POSTURE_HREF },
  },
];

/* ------------------------------------------------------------------ */
/* HELPERS                                                             */
/* ------------------------------------------------------------------ */

function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function CountUp({ to, duration = 1400 }) {
  const [ref, inView] = useInView(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      return undefined;
    }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return <span ref={ref}>{value}</span>;
}

function FAQItem({ id, question, answer, links, cta, isOpen, onClick }) {
  return (
    <div className={`border-b border-white/10 transition-colors duration-300 ${isOpen ? "bg-white/[0.02]" : ""}`}>
      <h3>
        <button
          type="button"
          id={`${id}-button`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onClick}
          className="group flex w-full items-center justify-between gap-5 px-1 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse/60 sm:px-3"
        >
          <span className="text-base font-semibold leading-relaxed text-white sm:text-lg">{question}</span>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white/[0.04] transition ${
              isOpen ? "border-pulse/40 text-pulse" : "border-white/10 text-mist/70 group-hover:text-pulse"
            }`}
          >
            <ChevronDown size={17} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl px-1 pb-4 pr-8 text-sm leading-7 text-mist/75 sm:px-3 sm:text-base sm:leading-8">
            {answer}
          </p>
          {(links || cta) && (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-1 pb-5 sm:px-3">
              {links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-pulse transition hover:text-white"
                >
                  {l.label} <ExternalLink size={13} />
                </a>
              ))}
              {cta && (
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-pulse transition hover:text-white"
                >
                  {cta.label} <ArrowRight size={14} />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CycleProgress() {
  const [ref, inView] = useInView(0.4);
  return (
    <div ref={ref} className="pointer-events-none absolute left-[10%] right-[10%] top-[2.1rem] hidden h-px bg-white/10 xl:block">
      <div
        className="h-full origin-left bg-gradient-to-r from-ember via-pulse to-ember motion-reduce:transition-none"
        style={{
          transform: inView ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 1.8s cubic-bezier(.22,1,.36,1) .2s",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function Aegis360Page() {
  const [openFaq, setOpenFaq] = useState(0);
  const caseStudy = s?.caseStudy || CASE_FALLBACK;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://networsys.com/" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://networsys.com/#solutions" },
      { "@type": "ListItem", position: 3, name: "Aegis360", item: "https://networsys.com/aegis360" },
    ],
  };

  const renderWhyBody = (text) => {
    if (!text.includes("{neuralcore}")) return text;
    const [before, rest] = text.split("{neuralcore}");
    const [middle, after] = rest.split("{appmind}");
    return (
      <>
        {before}
        <Link
          href="/neuralcore/secure-ai-infrastructure"
          className="font-semibold text-pulse underline-offset-4 hover:underline"
        >
          NeuralCore secure AI infrastructure
        </Link>
        {middle}
        <Link
          href="/appmind/secure-engineering"
          className="font-semibold text-pulse underline-offset-4 hover:underline"
        >
          AppMind secure engineering
        </Link>
        {after}
      </>
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-mist">
      <Seo
        title={META.title}
        description={META.description}
        image={s.image}
        siteName="Networsys Technologies"
      />
      <ServiceSchema
        name="Aegis360 — Cyber Defense & Digital Trust"
        description={META.description}
        url="https://networsys.com/aegis360"
        serviceType="Cybersecurity & Managed Detection"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      {/* ============================ HERO ============================ */}
      <section className="section-glow-ink relative flex min-h-[100dvh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_120%,rgba(5,7,12,0.9),transparent)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-6 lg:pb-20">
          <div className="max-w-2xl">
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-mist/55">
                <Link href="/" className="transition hover:text-pulse">Home</Link>
                <ChevronRight size={13} className="text-mist/30" />
                <Link href="/#solutions" className="transition hover:text-pulse">Solutions</Link>
                <ChevronRight size={13} className="text-mist/30" />
                <span className="font-semibold text-pulse">Aegis360</span>
              </nav>
            </Reveal>

            <Reveal delay={0.08}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                <ShieldCheck size={13} className="text-pulse" />
                Cyber Defense &amp; Digital Trust
              </span>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your Attackers Work 24×7. <br className="hidden sm:block" />
                So <span className="text-gradient">Do We.</span>
              </p>
              <h1 className="mt-6 max-w-xl text-lg font-semibold leading-snug text-white/90 sm:text-xl">
                Aegis360: Managed Cybersecurity Services for Regulated Industries
              </h1>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
                Aegis360 is the cybersecurity practice of Networsys Technologies. It brings offensive security
                testing, 24×7 managed detection and response, threat intelligence, network defence, employee
                awareness, compliance and cyber-resilient backup together under one accountable team. It is built
                for fintech companies, hospitals and financial institutions, where a breach means regulatory
                action, lost trust and, in healthcare, risk to patients.
              </p>
            </Reveal>

            <Reveal delay={0.32} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href={POSTURE_HREF}
                className="btn-solid inline-flex min-h-[48px] items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                Get a Free Security Posture Score <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="btn-gradient inline-flex min-h-[48px] items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                Talk to a CEH-Certified Expert
              </Link>
            </Reveal>

            <Reveal delay={0.4}>
              <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-mist/60">
                {CERTS.map((c) => (
                  <li key={c} className="inline-flex items-center gap-2">
                    <Check size={14} className="text-pulse" /> {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.18),transparent_62%)]" />
              <ShieldMesh className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= CERT STRIP ========================== */}
      <section className="border-y border-white/5 bg-ink/80 py-6 backdrop-blur-xl">
        <ul className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 sm:px-8">
          {CERTS.map((c, i) => (
            <li
              key={c}
              className={`inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${
                i === 1 ? "text-white" : "text-mist/70"
              }`}
            >
              <ShieldCheck size={15} strokeWidth={1.5} className={i === 1 ? "text-ember" : "text-pulse"} />
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* ========================= WHY AEGIS360 ======================== */}
      <section className="section-glow relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Aegis360"
            title={
              <>
                Point Tools and Annual Audits{" "}
                <span className="text-gradient">Do Not Stop Modern Attackers</span>
              </>
            }
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2 md:gap-10">
            <Reveal>
              <p className="text-base leading-8 text-mist/80">
                Most organisations buy security in pieces. A firewall from one vendor, an annual penetration test
                from another, a compliance consultant before the audit, and an awareness video once a year. Each
                piece works on its own terms, but nobody owns the gaps between them, and attackers live in those
                gaps. A phished credential walks past the firewall. A finding from last year's pen-test report is
                still open. Backups exist, but nobody has tried to restore from them.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-8 text-mist/80">
                Aegis360 closes those gaps by running security as one continuous programme. The people who test
                your applications talk to the analysts who monitor your logs. The analysts feed what they see into
                your awareness training. The compliance team turns all of it into evidence your auditor can accept.
                You deal with one team, one contract and one view of your risk.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_STATS.map((w, i) => (
              <Reveal key={w.stat} delay={0.07 * i} className="h-full">
                <div className="glass-card group flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-pulse/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <IconTile icon={w.icon} />
                  <p className="mt-5 font-display text-2xl font-bold leading-tight text-white">{w.stat}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{w.label}</p>
                  {w.note && (
                    <span className="mt-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-semibold text-mist/60">
                      {w.note}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= WHAT WE DO ========================== */}
      <section id="capabilities" className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Seven Security Disciplines.{" "}
                <span className="text-gradient">One Shield.</span>
              </>
            }
            description="Each Aegis360 service works on its own, and each becomes more valuable when combined with the others. Start with the one that solves your most urgent problem and add the rest as your programme matures."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.slug} delay={0.06 * (i % 3)} className="h-full">
                <Link
                  href={`/aegis360/${c.slug}`}
                  className="glass-card group relative flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-pulse/[0.04] blur-2xl transition duration-500 group-hover:bg-pulse/[0.14]" />
                  <IconTile icon={c.icon} />
                  <h3 className="relative mt-5 font-display text-lg font-bold leading-snug text-white transition group-hover:text-pulse">
                    {c.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-mist/75">{c.body}</p>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-pulse">
                    {c.link}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-ember to-pulse transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= AEGIS CYCLE ========================= */}
      <section className="section-glow relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The Aegis Cycle"
            title={
              <>
                The Aegis Cycle: A Continuous Loop,{" "}
                <span className="text-gradient">Not an Annual Audit</span>
              </>
            }
            description="Security weakens the moment a report is filed and forgotten. The Aegis Cycle keeps five activities running in a loop, so each one makes the next more effective and your defences improve every quarter."
          />

          <div className="relative mt-16">
            <CycleProgress />
            <ol className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {CYCLE.map((c, i) => (
                <Reveal
                  key={c.step}
                  delay={0.08 * i}
                  className={`h-full ${i === CYCLE.length - 1 ? "sm:col-span-2 xl:col-span-1" : ""}`}
                >
                  <li className="glass-card group relative h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-pulse/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div className="relative z-10 flex items-center gap-3">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-ink text-pulse shadow-lg shadow-black/20 transition group-hover:border-pulse/40">
                        <c.icon size={22} strokeWidth={1.6} />
                      </span>
                      <h3 className="font-display text-lg font-bold text-white">
                        <span className="text-pulse">0{i + 1}.</span> {c.step}
                      </h3>
                    </div>
                    <p className="mt-5 text-sm font-semibold leading-6 text-white">{c.title}</p>
                    <p className="mt-2 text-sm leading-7 text-mist/70">{c.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.2} className="mt-8 flex justify-center">
              <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold text-mist/75">
                <RefreshCw size={15} className="text-pulse motion-safe:animate-[spin_8s_linear_infinite]" />
                Then back to Test, always on
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ INDUSTRIES ======================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Industries we protect"
            title={
              <>
                Cybersecurity Built{" "}
                <span className="text-gradient">Around Your Regulator</span>
              </>
            }
            description="Regulated organisations answer to more than their customers. Aegis360 engagements are scoped around the rules you already have to meet, so security work and compliance work are the same work."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.title} delay={0.08 * i} className="h-full">
                <article className="glass-card group flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-pulse/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <IconTile icon={ind.icon} />
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{ind.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-mist/75">{ind.body}</p>
                  <Link
                    href={ind.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-pulse transition hover:text-white"
                  >
                    {ind.link}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== SUCCESS STORY ====================== */}
      <section id="case-study" className="section-glow relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Success story"
            title={
              <>
                When the Alarm Went Off at{" "}
                <span className="text-gradient">2 AM</span>
              </>
            }
          />

          <Reveal delay={0.1} className="mt-14">
            <article className="glass-card relative overflow-hidden p-7 sm:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ember/[0.07] blur-3xl" />
              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-pulse">
                  Multi-specialty hospital chain
                </p>
                <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ember">
                  Sample — replace with real client data
                </span>
              </div>

              <h3 className="relative mt-5 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                Hospital chain stops ransomware at 2 AM
              </h3>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
                {CASE_METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-4 rounded-2xl border border-pulse/20 bg-pulse/[0.06] p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pulse/10 text-pulse">
                      <Clock size={20} />
                    </span>
                    <div>
                      <p className="font-display text-3xl font-bold text-white">
                        <CountUp to={m.value} /> <span className="text-lg text-pulse">{m.unit}</span>
                      </p>
                      <p className="mt-0.5 text-xs text-mist/65">{m.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-8 grid gap-8 md:grid-cols-3">
                <div className="border-l-2 border-ember/50 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember">Challenge</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist/80">{caseStudy.challenge}</p>
                </div>
                <div className="border-l-2 border-pulse/50 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pulse">Solution</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist/80">{caseStudy.solution}</p>
                </div>
                <div className="border-l-2 border-white/40 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Result</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist/80">{caseStudy.result}</p>
                </div>
              </div>

              <Link
                href="/success-stories"
                className="btn-gradient relative mt-9 inline-flex min-h-[48px] items-center gap-2 px-7 py-3 text-sm font-semibold"
              >
                Read Case Study <ArrowRight size={15} />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ========================= ADVISORIES ========================== */}
      <section id="advisories" className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Security Advisories"
            title={
              <>
                Live Threat Bulletins from{" "}
                <span className="text-gradient">Our Noida SOC</span>
              </>
            }
          />

          <Reveal delay={0.05}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-mist/80">
              Our analysts publish what they see while hunting: severity-tagged advisories with detection rules
              and fix guidance you can act on the same day. India's national incident response agency,{" "}
              <a
                href="https://www.cert-in.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-pulse underline-offset-4 hover:underline"
              >
                CERT-In <ExternalLink size={13} />
              </a>
              , also publishes advisories that every regulated organisation should track.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ADVISORIES.map((a, i) => (
              <Reveal key={a.slug} delay={0.08 * i} className="h-full">
                <Link
                  href="/security-advisories"
                  className="glass-card group flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-pulse/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${severityStyles[a.severity]}`}
                    >
                      <ShieldAlert size={12} strokeWidth={1.5} />
                      {a.severity}
                    </span>
                    <FileText size={15} strokeWidth={1.5} className="text-mist/40" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white transition group-hover:text-pulse">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{a.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-mist/55">
                    <span>{a.date}</span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-white transition group-hover:text-pulse">
                      Read advisory
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-12 text-center">
            <Link
              href="/security-advisories"
              className="btn-gradient inline-flex min-h-[48px] items-center gap-2 px-7 py-3 text-sm font-semibold"
            >
              View all advisories <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ========================= WHY NETWORSYS ======================= */}
      <section className="section-glow relative py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70">
              <Layers size={13} className="text-ember" /> Why Networsys
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why Teams Choose Networsys for{" "}
              <span className="text-gradient">Managed Security</span>
            </h2>
          </Reveal>

          <ul className="space-y-4">
            {WHY_NETWORSYS.map((item, i) => (
              <Reveal key={item.lead} delay={0.07 * i}>
                <li className="glass-card flex gap-5 p-6 transition duration-300 hover:border-pulse/30 motion-reduce:transition-none sm:p-7">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ember to-pulse text-ink">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <p className="text-sm leading-7 text-mist/80 sm:text-base sm:leading-8">
                    <strong className="font-bold text-white">{item.lead}</strong> {renderWhyBody(item.body)}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================== FAQ ============================ */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-pulse">FAQ</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Frequently Asked Questions{" "}
              <span className="text-gradient">About Aegis360</span>
            </h2>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-pulse hover:text-white"
            >
              Ask us something else <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-white/10">
              {FAQS.map((f, i) => (
                <FAQItem
                  key={f.question}
                  id={`faq-${i}`}
                  question={f.question}
                  answer={f.answer}
                  links={f.links}
                  cta={f.cta}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================== CLOSING CTA ======================== */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_50%_120%,rgba(242,107,33,0.22),transparent_60%),radial-gradient(40rem_24rem_at_50%_-20%,rgba(34,211,238,0.18),transparent_60%)]" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/70 backdrop-blur">
                  <Layers size={13} className="text-ember" />
                  Aegis360
                </span>
                <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Know Your Risk in <span className="text-gradient">60 Seconds</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                  Get a free external attack-surface and dark-web exposure score for your organisation. No agents
                  to install and no commitment.
                </p>
                <Link
                  href={POSTURE_HREF}
                  className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold"
                >
                  Get My Security Posture Score <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ ENQUIRY ========================== */}
      <section id="contact" className="section-glow-ink relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist/70">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-pulse" />
              Consultation &amp; enquiries
            </span>
            <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Talk to a <span className="text-gradient">CEH-certified expert.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-mist/80">
              Book a free 30-minute security consultation. We’ll score your external attack surface, walk you
              through the gaps, and tell you honestly what to fix first.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "A CEH-certified ethical hacker, never a sales rep, on every call",
                "Free external attack-surface and dark-web exposure score",
                "Your data processed under GDPR-grade consent and India’s Digital Personal Data Protection Act 2023, withdrawable anytime",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-mist/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ember to-pulse">
                    <Check size={12} strokeWidth={3} className="text-ink" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <EnquiryForm
              solution="aegis360"
              heading="Get your Security Posture Score"
              subheading="Fields marked * are required. We reply within one business day."
              buttonLabel="Get My Security Posture Score"
            />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

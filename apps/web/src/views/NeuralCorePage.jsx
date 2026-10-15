"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Boxes,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  CloudCog,
  Cpu,
  ExternalLink,
  FileText,
  Gauge,
  Globe2,
  Layers,
  Server,
  ShieldCheck,
  Snowflake,
  TrendingDown,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GpuChip from "@/components/GpuChip";
import TrustedStrip from "@/components/TrustedStrip";
import SectionHeading from "@/components/SectionHeading";
import IconTile from "@/components/IconTile";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { ServiceSchema } from "@/components/Schema";
import { SOLUTIONS } from "@/data/solutions";
import { INSIGHTS_POSTS } from "@/data/site";

const s = SOLUTIONS.neuralcore;

/* ------------------------------------------------------------------ */
/* CONTENT                                                             */
/* ------------------------------------------------------------------ */

const META = {
  title: "AI Data Center Design & GPU Infrastructure in India | NeuralCore",
  description:
    "NeuralCore by Networsys designs, builds and operates GPU-ready AI data centers for fintech, hospitals and banks in India. Vendor-neutral, compliant, production-ready.",
};

/* Set to "Sample — replace with real client data" until an approved client story exists */
const CASE_LABEL = "Representative engagement · figures indicative";

const WHY_STATS = [
  {
    icon: TrendingDown,
    stat: "Up to 60%",
    label: "lower three-year TCO compared with public-cloud GPU rental for steady-state workloads",
  },
  {
    icon: Gauge,
    stat: "6 weeks",
    label: "from approved blueprint to live GPU clusters on a prepared site",
  },
  {
    icon: Globe2,
    stat: "100%",
    label: "in-country data residency for DPDP, RBI and HIPAA-aligned programmes",
  },
  {
    icon: Boxes,
    stat: "Vendor-neutral",
    label: "across NVIDIA, AMD, Dell Technologies, HPE, Supermicro and Lenovo",
  },
];

const CAPABILITIES = [
  {
    icon: Server,
    slug: "data-center-architecture",
    title: "AI-Ready Data Center Architecture",
    body: "High-density rack layouts, cooling strategy and east-west network fabric designed around the GPU from the floor plan up, not retrofitted into a CPU-era room. Tiering, redundancy and a vendor-neutral bill of materials included.",
  },
  {
    icon: Cpu,
    slug: "gpu-cluster-engineering",
    title: "GPU Cluster Engineering",
    body: "Workload profiling and right-sized GPU selection, from NVIDIA L40S to H200 and AMD Instinct, so you never over-buy hardware for inference or under-buy for training. Every cluster is benchmarked before hand-over.",
  },
  {
    icon: Snowflake,
    slug: "power-cooling-rack",
    title: "Power, Cooling & Rack Configuration",
    body: "Three-phase distribution, dual-feed PDUs, UPS sizing, containment and liquid cooling engineered together so racks hold their rated density at 100 per cent load without thermal throttling.",
  },
  {
    icon: CloudCog,
    slug: "ai-orchestration",
    title: "AI Compute Deployment & Orchestration",
    body: "Kubernetes, the NVIDIA GPU Operator, vLLM and Triton serving, multi-tenant scheduling and observability. Bare metal becomes a governed AI platform your data-science teams can actually use.",
  },
  {
    icon: Building2,
    slug: "hybrid-colocation",
    title: "Hybrid & Colocation Enablement",
    body: "Own your GPU racks inside certified Indian colocation facilities in Noida, Mumbai, Chennai or Hyderabad, connected to your cloud accounts and offices as one hybrid estate with burst-to-cloud capacity.",
  },
  {
    icon: ShieldCheck,
    slug: "secure-ai-infrastructure",
    title: "Secure & Compliant AI Infrastructure",
    body: "Zero-trust segmentation, encryption at rest, in transit and in use, identity controls and audit-ready documentation mapped to DPDP, the RBI IT Framework, HIPAA and ISO 27001.",
  },
];

const PROCESS = [
  {
    step: "Assess",
    body: "A structured discovery workshop with your IT, facilities, security and data-science stakeholders. We document the workloads you run today and expect to run in three years, the site’s power and cooling headroom, connectivity, and the regulatory frameworks that apply.",
  },
  {
    step: "Architect",
    body: "The facility blueprint, thermal and electrical modelling, network fabric design and a vendor-neutral bill of materials. Every decision is recorded with its rationale so the design survives staff changes and audit questions.",
  },
  {
    step: "Build",
    body: "Procurement support, vendor coordination, installation and cabling supervision, and commissioning. We are on site when the racks arrive and when the first node powers on.",
  },
  {
    step: "Orchestrate",
    body: "The platform stack: operating system and driver baseline, Kubernetes and GPU Operator, model-serving runtimes, scheduling, quotas and monitoring. Your first models are served on your own hardware before we hand over.",
  },
  {
    step: "Operate",
    body: "Managed support, capacity planning, utilisation reporting and optimisation, either as a fixed-term hypercare period or as an ongoing managed service.",
  },
];

const CASE = {
  sector: "Regional hospital group",
  title: "Regional hospital group builds on-prem AI imaging cluster",
  challenge:
    "Radiology AI models running on public cloud raised patient-data residency concerns with the hospital’s compliance team and were costing roughly ₹22 lakh a month in GPU rental.",
  solution:
    "NeuralCore designed a six-rack, 240 kW AI room inside the existing IT wing using rear-door heat exchangers, and deployed a Kubernetes-based serving platform on the new cluster.",
  result:
    "All patient data processed in-country, monthly compute cost reduced by about 40 per cent, and the environment fully deployed in 11 weeks.",
  metrics: [
    { prefix: "₹", value: 22, suffix: " lakh", label: "monthly cloud GPU rental before" },
    { prefix: "~", value: 40, suffix: "%", label: "lower monthly compute cost" },
    { prefix: "", value: 11, suffix: " weeks", label: "to full deployment" },
    { prefix: "", value: 100, suffix: "%", label: "of patient data in-country" },
  ],
};

const ROUTES = [
  {
    icon: Building2,
    title: "On-premises build or retrofit",
    body: "You have a building, a server room and an obligation to keep data inside it. We design or retrofit the space for high-density GPU racks.",
    typical: "Typical path for hospitals and banks with existing IT wings.",
  },
  {
    icon: Layers,
    title: "Colocation with hybrid connectivity",
    body: "You want to own the hardware and its economics but have no suitable facility. We place your racks in a certified Tier III facility and connect them to your cloud and offices.",
    typical: "Typical path for fintech and payment companies.",
  },
  {
    icon: Cpu,
    title: "Platform on existing hardware",
    body: "You already own GPUs but utilisation is low and teams queue for capacity. We deploy the orchestration and serving layer that turns idle cards into a shared platform.",
    typical: "Typical path for data-science groups and innovation labs.",
  },
];

const FAQS = [
  {
    question: "Is on-premises GPU infrastructure really cheaper than cloud?",
    answer:
      "For steady, predictable workloads such as production inference or scheduled fine-tuning, owned hardware typically breaks even against on-demand cloud GPU pricing within 9 to 18 months and is materially cheaper over a three-year horizon. For short, bursty experimentation the cloud usually wins. We model both against your actual workload during the readiness call rather than assuming an answer.",
  },
  {
    question: "Which GPUs do you recommend?",
    answer:
      "It depends entirely on the workload. Inference for mid-sized models is often best served by NVIDIA L40S or similar cards; large-model training and high-throughput serving justify H100 or H200 class hardware; AMD Instinct is a credible option where software support fits. We are vendor-neutral and publish the comparison, not just the recommendation. The GPU Cluster Engineering page explains our sizing method.",
    cta: { label: "See GPU Cluster Engineering", href: "/neuralcore/gpu-cluster-engineering" },
  },
  {
    question: "Do you build outside India?",
    answer:
      "Our delivery teams and colocation partnerships are in India, and in-country data residency is a design default. We do support Indian organisations with international facilities on a case-by-case basis.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A colocation deployment on an available facility can be live in six to eight weeks from an approved design. An on-premises retrofit depends on electrical and cooling works and usually runs three to five months. A platform-only engagement on existing GPUs can be complete in two to four weeks.",
  },
  {
    question: "What does the readiness call cover?",
    answer:
      "Thirty minutes with a senior infrastructure architect. You describe your workloads, constraints and regulator; we come back with an indicative build, an indicative cost and an honest view on whether you should build at all yet.",
    cta: { label: "Book a Free AI Infra Readiness Call", href: "/contact" },
  },
];

const REFERENCES = [
  {
    title: "NVIDIA Data Center GPU documentation",
    source: "nvidia.com",
    href: "https://www.nvidia.com/en-in/data-center/",
  },
  {
    title: "Uptime Institute Tier Classification",
    source: "uptimeinstitute.com",
    href: "https://uptimeinstitute.com/tiers",
  },
  {
    title: "Digital Personal Data Protection Act, 2023",
    source: "MeitY",
    href: "https://www.meity.gov.in/data-protection-framework",
  },
  {
    title: "RBI Master Direction on IT Governance, Risk, Controls and Assurance Practices (2023)",
    source: "rbi.org.in",
    href: "https://www.rbi.org.in/",
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

function CountUp({ to, prefix = "", suffix = "", duration = 1500 }) {
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
      setValue(Math.round((1 - Math.pow(1 - progress, 3)) * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

function FAQItem({ id, question, answer, cta, isOpen, onClick }) {
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
          {cta && (
            <Link
              href={cta.href}
              className="mb-5 inline-flex items-center gap-1.5 px-1 text-sm font-semibold text-pulse transition hover:text-white sm:px-3"
            >
              {cta.label} <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function ProcessLine() {
  const [ref, inView] = useInView(0.4);
  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-[9%] right-[9%] top-[3.1rem] hidden h-px bg-white/10 xl:block"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-ember via-pulse to-ember"
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

export default function NeuralCorePage() {
  const [openFaq, setOpenFaq] = useState(0);

  /* Three distinct insight articles (fixes the duplicated first card) */
  const insights = (() => {
    const seen = new Set();
    const list = [];
    const source = [
      ...INSIGHTS_POSTS.filter((p) => p.solutionSlug === "neuralcore"),
      ...INSIGHTS_POSTS,
    ];
    source.forEach((p) => {
      if (!seen.has(p.slug)) {
        seen.add(p.slug);
        list.push(p);
      }
    });
    return list.slice(0, 3);
  })();

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
      { "@type": "ListItem", position: 3, name: "NeuralCore", item: "https://networsys.com/neuralcore" },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-mist">
      <Seo title={META.title} description={META.description} image={s.image} siteName="Networsys Technologies" />
      <ServiceSchema
        name="NeuralCore — AI Data Center Design, Configuration & Deployment"
        description={META.description}
        url="https://networsys.com/neuralcore"
        serviceType="AI Infrastructure Engineering"
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
                <span className="font-semibold text-pulse">NeuralCore</span>
              </nav>
            </Reveal>

            <Reveal delay={0.08}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mist/80 backdrop-blur">
                <Server size={13} className="text-pulse" />
                AI Data Center Design, Configuration &amp; Deployment
              </span>
            </Reveal>

            <Reveal delay={0.16}>
              <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Build AI Infrastructure <br className="hidden sm:block" />
                That Never <span className="text-gradient">Blinks.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
                NeuralCore is the AI infrastructure practice of Networsys Technologies. We design, configure and
                deploy GPU-ready data centers and hybrid AI compute environments for fintech companies, hospitals
                and financial institutions across India, where uptime, data residency and{" "}
                <Link
                  href="/neuralcore/secure-ai-infrastructure"
                  className="font-semibold text-pulse underline-offset-4 hover:underline"
                >
                  audit evidence
                </Link>{" "}
                are conditions of doing business rather than nice-to-haves. From the first site walk to the first
                model served in production, one accountable team owns the outcome.
              </p>
            </Reveal>

            <Reveal delay={0.32} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="btn-solid inline-flex min-h-[48px] items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                Book a Free AI Infra Readiness Call <ArrowRight size={16} />
              </Link>
              <a
                href="#contact"
                className="btn-gradient inline-flex min-h-[48px] items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                Download the Design Checklist
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,107,33,0.18),transparent_62%)]" />
              <GpuChip className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <TrustedStrip />

      {/* ========================= WHY NEURALCORE ====================== */}
      <section className="section-glow relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why NeuralCore"
            title={
              <>
                Most AI projects stall on infrastructure.{" "}
                <span className="text-gradient">Ours don’t.</span>
              </>
            }
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2 md:gap-10">
            <Reveal>
              <p className="text-base leading-8 text-mist/80">
                The models are rarely the problem. AI initiatives in regulated organisations stall on far more
                ordinary things: a server room that cannot deliver 40 kW to a single rack, GPUs that sit idle
                because nobody owns the scheduling layer, a cloud bill that doubled in a quarter, or an auditor who
                wants to know exactly where patient or transaction data lives.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-8 text-mist/80">
                NeuralCore exists to remove those blockers. We are vendor-neutral, so the hardware recommendation
                follows the workload rather than a reseller margin. We are India-based, so in-country data
                residency for the DPDP Act, RBI IT Framework and HIPAA-aligned programmes is a design default. And
                we build only for regulated industries, which means every deliverable is written with the audit in
                mind.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_STATS.map((w, i) => (
              <Reveal key={w.stat} delay={0.07 * i} className="h-full">
                <div className="glass-card flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-pulse/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <IconTile icon={w.icon} />
                  <p className="mt-5 font-display text-3xl font-bold leading-tight text-white">{w.stat}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist/75">{w.label}</p>
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
                Capabilities, <span className="text-gradient">end to end.</span>
              </>
            }
            description="Every layer of GPU infrastructure, from the rack drawing to the served model, delivered by a single team so that nothing falls between the facilities contractor, the hardware vendor and the platform engineers."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.slug} delay={0.06 * (i % 3)} className="h-full">
                <Link
                  href={`/neuralcore/${c.slug}`}
                  className="glass-card group relative flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-pulse/[0.04] blur-2xl transition duration-500 group-hover:bg-pulse/[0.14]" />
                  <IconTile icon={c.icon} />
                  <h3 className="relative mt-5 font-display text-lg font-bold leading-snug text-white transition group-hover:text-pulse">
                    {c.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-mist/75">{c.body}</p>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-pulse">
                    Explore
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

      {/* ========================= HOW WE DELIVER ====================== */}
      <section className="section-glow relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How we deliver"
            title={
              <>
                One team. <span className="text-gradient">One accountable outcome.</span>
              </>
            }
            description="AI infrastructure projects usually fail in the gaps: between the consultant who wrote the design and the contractor who installed the racks, or between the hardware vendor who shipped the nodes and the platform team who could not get the drivers stable. Our five-stage model closes those gaps by keeping the same engineers on the engagement from discovery to managed operation."
          />

          <div className="relative mt-16">
            <ProcessLine />
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} delay={0.08 * i} className="h-full">
                  <li className="glass-card group relative h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-pulse/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink font-display text-sm font-bold text-pulse shadow-lg shadow-black/20 transition group-hover:border-pulse/40">
                      0{i + 1}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-white">{p.step}</h3>
                    <p className="mt-3 text-sm leading-7 text-mist/70">{p.body}</p>
                    <span className="absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-pulse" />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ========================= SUCCESS STORY ======================= */}
      <section id="case-study" className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Success story"
            title={
              <>
                Proof of what <span className="text-gradient">production-ready</span> means.
              </>
            }
          />

          <Reveal delay={0.1} className="mt-14">
            <article className="glass-card relative overflow-hidden p-7 sm:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pulse/[0.07] blur-3xl" />

              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-pulse">{CASE.sector}</p>
                <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ember">
                  {CASE_LABEL}
                </span>
              </div>

              <h3 className="relative mt-5 max-w-3xl font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                {CASE.title}
              </h3>

              <div className="relative mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {CASE.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-pulse/20 bg-pulse/[0.06] p-4 sm:p-5">
                    <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                      <CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} />
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-mist/65">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="relative mt-8 grid gap-8 md:grid-cols-3">
                <div className="border-l-2 border-ember/50 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember">Challenge</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist/80">{CASE.challenge}</p>
                </div>
                <div className="border-l-2 border-pulse/50 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pulse">Solution</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist/80">{CASE.solution}</p>
                </div>
                <div className="border-l-2 border-white/40 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Result</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist/80">{CASE.result}</p>
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

      {/* ========================= THREE ROUTES ======================== */}
      <section className="section-glow relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Where NeuralCore fits"
            title={
              <>
                Three routes to <span className="text-gradient">owned AI compute</span>
              </>
            }
            description="Not every organisation should build a data hall, and not every organisation should stay on cloud GPUs. Most of our clients land on one of three paths, and the readiness call is where we work out which one applies to you."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {ROUTES.map((r, i) => (
              <Reveal key={r.title} delay={0.08 * i} className="h-full">
                <article className="glass-card group flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-pulse/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <IconTile icon={r.icon} />
                  <h3 className="mt-5 font-display text-xl font-bold leading-snug text-white">{r.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-mist/75">{r.body}</p>
                  <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold leading-5 text-pulse">
                    {r.typical}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10">
            <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-mist/70 sm:text-base">
              For a deeper look at the economics behind these choices, see our note on{" "}
              <Link
                href="/neuralcore/hybrid-colocation"
                className="font-semibold text-pulse underline-offset-4 hover:underline"
              >
                colocation versus cloud GPU total cost of ownership
              </Link>{" "}
              in the Insights Hub.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========================= LATEST INSIGHTS ===================== */}
      <section id="insights" className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Latest insights"
            title={
              <>
                From the <span className="text-gradient">NeuralCore</span> desk.
              </>
            }
            description="Engineering and strategy notes on AI infrastructure, GPU economics and compliant data-center design."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {insights.map((post, i) => (
              <Reveal key={post.slug} delay={0.08 * i} className="h-full">
                <Link
                  href="/insights"
                  className="glass-card group flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-pulse/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ember">
                    <FileText size={13} strokeWidth={1.5} />
                    {post.category}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white transition group-hover:text-pulse">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-mist/55">
                    <span>{post.date}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} strokeWidth={1.5} />
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== FAQ ============================ */}
      <section className="section-glow relative py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-pulse">FAQ</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Frequently asked questions{" "}
              <span className="text-gradient">about AI infrastructure</span>
            </h2>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-pulse hover:text-white"
            >
              Ask us something else <ArrowRight size={16} />
            </Link>
            <p className="mt-8 max-w-sm text-sm leading-7 text-mist/60">
              Need the finished estate hardened? Security testing and monitoring for your new infrastructure is
              available through{" "}
              <Link href="/aegis360" className="font-semibold text-pulse hover:underline">
                Aegis360
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-white/10">
              {FAQS.map((f, i) => (
                <FAQItem
                  key={f.question}
                  id={`faq-${i}`}
                  question={f.question}
                  answer={f.answer}
                  cta={f.cta}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================== FURTHER READING ==================== */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <BookOpen size={18} className="text-pulse" />
              <h2 className="text-lg font-bold text-white sm:text-xl">Further reading</h2>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REFERENCES.map((ref, i) => (
              <Reveal key={ref.href} delay={i * 0.07} className="h-full">
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group flex h-full items-start justify-between gap-4 p-5 transition duration-300 hover:border-pulse/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse/60"
                >
                  <span>
                    <span className="block text-sm font-semibold leading-6 text-white transition group-hover:text-pulse">
                      {ref.title}
                    </span>
                    <span className="mt-1 block text-xs text-mist/50">{ref.source}</span>
                  </span>
                  <ExternalLink size={16} className="mt-1 shrink-0 text-mist/40 transition group-hover:text-pulse" />
                </a>
              </Reveal>
            ))}
          </div>
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
                  NeuralCore
                </span>
                <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to Own Your <span className="text-gradient">AI Compute?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/80">
                  Tell us your workload. We will tell you exactly what to build, what it costs and how long it
                  takes, free, in 30 minutes.
                </p>
                <Link
                  href="/contact"
                  className="btn-solid mt-9 inline-flex min-h-[48px] items-center gap-2 px-8 py-3.5 text-sm font-semibold"
                >
                  Book a Readiness Call <ArrowRight size={16} />
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
              Tell us your workload. <span className="text-gradient">We’ll map the build.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-mist/80">
              Book a free 30-minute readiness call. We will map your scope, timeline and price, and tell you
              honestly if you should not build it yet.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "A senior infrastructure architect, never a sales representative, on every call",
                "Workload profiling, GPU right-sizing and a three-year TCO estimate",
                "Your data processed under GDPR-grade consent, withdrawable at any time",
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
              solution="neuralcore"
              heading="Book your AI Infra Readiness Call"
              subheading="Fields marked * are required. We reply within one business day."
              buttonLabel="Book a Readiness Call"
            />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

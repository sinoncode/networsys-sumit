"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Cloud,
  Code2,
  ExternalLink,
  Fingerprint,
  HeartPulse,
  Landmark,
  Layers3,
  LockKeyhole,
  PenTool,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneDashboard from "@/components/PhoneDashboard";
import TrustedStrip from "@/components/TrustedStrip";
import SectionHeading from "@/components/SectionHeading";
import IconTile from "@/components/IconTile";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { ServiceSchema } from "@/components/Schema";
import { SOLUTIONS } from "@/data/solutions";

const solution = SOLUTIONS.appmind;

/* ------------------------------------------------------------------ */
/* CONTENT                                                             */
/* ------------------------------------------------------------------ */

const SERVICES = [
  {
    icon: Bot,
    slug: "genai-integration",
    number: "01",
    title: "GenAI Integration & AI Assistants",
    description:
      "LLM-powered features, retrieval-augmented generation, copilots and agentic workflows built into your product, not bolted on as a chat widget.",
    link: "Explore GenAI integration",
  },
  {
    icon: Rocket,
    slug: "launchpad-mvp",
    number: "02",
    title: "LaunchPad MVP in 8 Weeks",
    description:
      "A fixed-scope, fixed-timeline program that takes a validated idea to a working product a real user can sign up for, in eight weeks.",
    link: "Explore LaunchPad",
  },
  {
    icon: ShieldCheck,
    slug: "secure-engineering",
    number: "03",
    title: "Secure Engineering & Secure SDLC",
    description:
      "Threat modeling, secure code review and automated security gates built into the pipeline, so security is a property of the code, not a report filed after launch.",
    link: "Explore secure engineering",
  },
  {
    icon: PenTool,
    slug: "experience-design",
    number: "04",
    title: "Experience Design & UI/UX",
    description:
      "Research-led design, systemised components and usability testing, so the product is not just built correctly but used the way it was intended.",
    link: "Explore experience design",
  },
  {
    icon: Smartphone,
    slug: "mobile-apps",
    number: "05",
    title: "Mobile App Development",
    description:
      "Native iOS and Android, or cross-platform with Flutter or React Native, shipped to the app stores and supported after release.",
    link: "Explore mobile development",
  },
  {
    icon: Code2,
    slug: "web-platforms",
    number: "06",
    title: "Web Platform Development",
    description:
      "Modern web applications and APIs on Next.js, React and cloud-native infrastructure, built to hold up under real traffic.",
    link: "Explore web platforms",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Sparkles,
    title: "AI-native, not AI-decorated",
    description:
      "We design the data model and the interface around what an AI feature actually needs (grounding, feedback loops, human override) rather than wiring a model call into a static screen.",
  },
  {
    icon: ShieldCheck,
    title: "Security ships with the product",
    description:
      "Our secure SDLC and Networsys' own security engineers review every build before launch, not after a client asks.",
  },
  {
    icon: Layers3,
    title: "One team, full stack",
    description:
      "Product design, mobile, web and AI integration are delivered by one accountable team, with the same infrastructure engineers behind NeuralCore available when a build needs serious compute.",
  },
  {
    icon: Workflow,
    title: "Built for the next stage, not just the demo",
    description:
      "An 8-week MVP is architected so the parts worth keeping can scale, instead of being thrown away the day funding closes.",
  },
];

/* Sample case study. Replace with a cleared client story before launch. */
const CASE_STUDY = {
  isSample: true,
  sector: "NBFC loan origination",
  title: "A lending portal that stopped losing applicants halfway through",
  challenge:
    "Manual KYC checks took three days, 40% of applications arrived incomplete, and the team could not grow loan volume without growing headcount.",
  solution:
    "A Next.js portal with AI document extraction, confidence scores and a review queue, plus a Flutter field-agent app so agents could capture documents on site.",
  stack: ["Next.js", "AI document extraction", "Flutter"],
  metrics: [
    { label: "Manual KYC check", before: "3 days", after: "4 hours", afterPct: 6 },
    { label: "Incomplete applications", before: "40%", after: "8%", afterPct: 20 },
  ],
  highlight: { value: "3×", label: "loan volume with the same team" },
};

const PROCESS = [
  {
    number: "01",
    title: "Discover",
    description:
      'A working session to pin down the problem, the users and what "done" looks like for a first release, not a requirements document nobody reads again.',
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and a clickable prototype tested with real users before a line of production code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Two-week sprints, a demo of working software at the end of each, and a backlog you can reorder at any time.",
  },
  {
    number: "04",
    title: "Secure & test",
    description:
      "Automated security scanning, a manual review from Networsys' own security engineers, and user acceptance testing.",
  },
  {
    number: "05",
    title: "Launch & support",
    description:
      "A planned go-live, app-store submission where relevant, and a named engineer on call afterwards.",
  },
];

const WORKING_WITH = [
  {
    title: "A demo every two weeks",
    body: "You see working software, not a status email.",
  },
  {
    title: "A backlog you control",
    body: "You can see the backlog and reorder it yourself rather than submitting change requests through a project manager.",
  },
  {
    title: "One team, one answer",
    body: "Design, development, AI integration and security sit together, so a question about how a feature was built does not bounce between three vendors before someone can answer it.",
  },
];

const INDUSTRIES = [
  {
    icon: Landmark,
    title: "Fintech & lending platforms",
    description:
      "AI-assisted document and risk workflows that do not compromise on audit trails.",
  },
  {
    icon: HeartPulse,
    title: "Hospitals & healthcare groups",
    description:
      "Patient-facing and clinical staff applications that handle sensitive data correctly by design.",
  },
  {
    icon: Building2,
    title: "Banks & financial institutions",
    description:
      "A modernised customer portal without a multi-year rebuild.",
  },
  {
    icon: Rocket,
    title: "Startups & SaaS teams",
    description:
      "An MVP that survives contact with real users and real funding conversations.",
  },
];

const FAQS = [
  {
    question: "Do you only build AI features, or full applications?",
    answer:
      "Full applications. AI is one part of the product, not the whole of it. Most engagements combine web or mobile development, a data model, and one or more AI-powered features, all delivered as a single working product.",
  },
  {
    question:
      "How is AppMind different from hiring a freelance developer or a small agency?",
    answer:
      "Every build goes through a secure SDLC and is backed by the same infrastructure and security engineers who run NeuralCore and Aegis360 for enterprise clients. You get product engineering with enterprise security discipline, at MVP speed.",
  },
  {
    question: "Can you take over an application someone else built?",
    answer:
      "Yes. We start with a code and architecture review, tell you plainly what state it is in, and propose either a stabilisation plan or a rebuild with a clear business case for each.",
  },
  {
    question: "What does an 8-week MVP actually include?",
    answer:
      "Scope, design, build, security review and a working release a real user can sign into. See LaunchPad MVP in 8 Weeks for the full breakdown.",
    link: { href: "/appmind/launchpad-mvp", label: "See LaunchPad MVP in 8 Weeks" },
  },
  {
    question: "Who owns the code and the AI models we use?",
    answer:
      "You do. Source code, infrastructure and any fine-tuned models or prompts built for you are yours from day one, held in repositories and accounts you control.",
  },
];

const REFERENCES = [
  {
    title: "OWASP Application Security Verification Standard",
    source: "owasp.org",
    href: "https://owasp.org/www-project-application-security-verification-standard/",
  },
  {
    title: "Retrieval-Augmented Generation (RAG)",
    source: "Wikipedia",
    href: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
  },
  {
    title: "Next.js documentation",
    source: "nextjs.org",
    href: "https://nextjs.org/docs",
  },
];

const TECH_STACK = [
  "Flutter",
  "React Native",
  "Kotlin",
  "Swift",
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "AWS",
  "TensorFlow",
];

/* ------------------------------------------------------------------ */
/* SMALL HELPERS                                                       */
/* ------------------------------------------------------------------ */

function useInView(threshold = 0.35) {
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

/* Before/after bar that fills when scrolled into view */
function MetricBar({ label, before, after, afterPct, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className="space-y-3">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold text-white">{label}</span>
        <span className="text-xs text-mist/55">
          {before} <span className="mx-1 text-mist/35">to</span>{" "}
          <span className="font-bold text-pulse">{after}</span>
        </span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div className="absolute inset-y-0 left-0 w-full rounded-full bg-white/[0.08]" />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-ember to-pulse motion-reduce:transition-none"
          style={{
            width: inView ? `${afterPct}%` : "100%",
            opacity: inView ? 1 : 0.35,
            transition: `width 1.4s cubic-bezier(.22,1,.36,1) ${delay}s, opacity .6s ease ${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

function FAQItem({ id, question, answer, link, isOpen, onClick }) {
  return (
    <div
      className={`border-b border-white/10 transition-colors duration-300 ${
        isOpen ? "bg-white/[0.02]" : ""
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="group flex w-full items-center justify-between gap-5 px-1 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse/60 sm:px-3"
        >
          <span className="text-base font-semibold leading-relaxed text-white sm:text-lg">
            {question}
          </span>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white/[0.04] transition ${
              isOpen
                ? "border-pulse/40 text-pulse"
                : "border-white/10 text-mist/70 group-hover:text-pulse"
            }`}
          >
            <ChevronDown
              size={17}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
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
          <p className="max-w-3xl px-1 pb-5 pr-8 text-sm leading-7 text-mist/70 sm:px-3 sm:text-base sm:leading-8">
            {answer}
          </p>
          {link && (
            <Link
              href={link.href}
              className="mb-5 inline-flex items-center gap-2 px-1 text-sm font-semibold text-pulse transition hover:text-white sm:px-3"
            >
              {link.label} <ArrowRight size={15} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function AppMindPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-mist">
      <Seo
        title="AppMind — AI-Native Web & Mobile App Engineering | Networsys"
        description="AppMind by Networsys builds AI-native web and mobile applications, from an 8-week MVP to enterprise platforms, with security engineered in from the first sprint. Serving fintech, healthcare and financial services."
        image={solution.image}
        siteName="Networsys Technologies"
      />
      <ServiceSchema
        name="AppMind — AI-Native Web & Mobile App Engineering"
        description="AI-native web and mobile application engineering with security built into the software development lifecycle."
        url="https://networsys.com/appmind"
        serviceType="AI-Native Application Engineering"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ============================ HERO ============================ */}
      <section className="section-glow-ink relative isolate flex min-h-[760px] items-center overflow-hidden pt-24 sm:min-h-[820px]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(34,211,238,0.10),transparent_35%),radial-gradient(ellipse_at_20%_85%,rgba(242,107,33,0.12),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-8 lg:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <nav
                aria-label="Breadcrumb"
                className="mb-7 flex flex-wrap items-center gap-2 text-xs text-mist/50"
              >
                <Link href="/" className="transition hover:text-pulse">
                  Home
                </Link>
                <ChevronRight size={13} />
                <Link href="/#solutions" className="transition hover:text-pulse">
                  Solutions
                </Link>
                <ChevronRight size={13} />
                <span className="font-semibold text-pulse">AppMind</span>
              </nav>
            </Reveal>

            <Reveal delay={0.08}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist/80 backdrop-blur-xl sm:text-xs sm:tracking-[0.24em]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pulse" />
                </span>
                AI-native web &amp; mobile app engineering
              </span>
            </Reveal>

            <Reveal delay={0.14}>
              <h1 className="mt-7 font-display text-[clamp(2.65rem,6vw,5.6rem)] font-bold leading-[0.99] tracking-[-0.055em] text-white">
                Build products your users{" "}
                <span className="text-gradient">can’t put down.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-base leading-8 text-mist/75 sm:text-lg">
                AppMind is Networsys’ product engineering practice: web and
                mobile applications built with AI at the core, security built
                in from the first sprint, and a delivery pace that gets a real
                product in front of real users in weeks, not quarters.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-mist/60 sm:text-base">
                We are the same team that designs{" "}
                <Link
                  href="/neuralcore"
                  className="font-semibold text-pulse underline-offset-4 hover:underline"
                >
                  AI data center infrastructure
                </Link>{" "}
                and runs{" "}
                <Link
                  href="/aegis360"
                  className="font-semibold text-pulse underline-offset-4 hover:underline"
                >
                  penetration testing and monitoring
                </Link>{" "}
                for our clients, so the applications we ship are built by
                engineers who already think about scale and security before a
                feature request forces the conversation.
              </p>
            </Reveal>

            <Reveal delay={0.26} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-solid inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold"
              >
                Start Your Build <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="btn-gradient inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold"
              >
                Book a Product Discovery Call <ArrowUpRight size={16} />
              </Link>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-mist/55">
                <span className="inline-flex items-center gap-2">
                  <Check size={14} className="text-pulse" /> Security from sprint one
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check size={14} className="text-pulse" /> Two-week demos
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check size={14} className="text-pulse" /> You own the code
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22} className="relative mx-auto w-full max-w-[540px]">
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-pulse/[0.07] blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.025] p-2 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-4">
              <div className="absolute -right-2 top-12 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#101720]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-pulse/10 text-pulse">
                  <ShieldCheck size={18} />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-white">Security-first</span>
                  <span className="mt-1 block text-[10px] text-mist/55">Built into every sprint</span>
                </span>
              </div>
              <PhoneDashboard />
              <div className="absolute -bottom-4 left-4 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#101720]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ember/10 text-ember">
                  <Rocket size={18} />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-white">LaunchPad</span>
                  <span className="mt-1 block text-[10px] text-mist/55">A focused MVP in 8 weeks</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustedStrip />

      {/* ========================= WHAT WE BUILD ======================= */}
      <section id="capabilities" className="relative py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we build"
            title={
              <>
                Six disciplines.{" "}
                <span className="text-gradient">One product team.</span>
              </>
            }
            description="From the first prototype to a product ready for real users: design, AI, mobile, web and security under one roof."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Reveal key={service.slug} delay={(index % 3) * 0.07} className="h-full">
                  <Link
                    href={`/appmind/${service.slug}`}
                    className="glass-card group relative flex h-full min-h-[300px] flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-pulse/[0.04] blur-2xl transition duration-500 group-hover:bg-pulse/[0.14]" />
                    <div className="relative flex items-center justify-between">
                      <IconTile icon={ServiceIcon} />
                      <span className="font-display text-sm font-bold tracking-widest text-white/20 transition group-hover:text-pulse/50">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="relative mt-6 text-xl font-bold leading-snug text-white transition group-hover:text-pulse">
                      {service.title}
                    </h3>
                    <p className="relative mt-3 flex-1 text-sm leading-7 text-mist/65">
                      {service.description}
                    </p>
                    <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      {service.link}
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-ember to-pulse transition-transform duration-500 group-hover:scale-x-100" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= TECH STRIP ========================== */}
      <section className="border-y border-white/[0.07] bg-white/[0.015] py-9 sm:py-11">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-mist/45 sm:text-xs">
            The stack we build on
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:gap-x-10">
            {TECH_STACK.map((technology) => (
              <li
                key={technology}
                className="text-sm font-semibold tracking-tight text-mist/45 transition hover:text-white sm:text-base"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ====================== HOW APPMIND DIFFERS ==================== */}
      <section className="section-glow relative py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How AppMind is different"
            title={
              <>
                Engineering decisions that{" "}
                <span className="text-gradient">hold up beyond launch.</span>
              </>
            }
            description="Anyone can build an app. Few build one that is AI-native, secure from the first sprint and ready for the next stage."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16">
            {DIFFERENTIATORS.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07} className="h-full">
                <article className="glass-card group flex h-full flex-col gap-5 p-6 transition duration-300 hover:border-pulse/30 sm:flex-row sm:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-pulse/20 bg-pulse/[0.08] text-pulse transition duration-300 group-hover:scale-105 group-hover:bg-pulse/[0.14] motion-reduce:transition-none">
                    <item.icon size={21} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-mist/65 sm:text-base sm:leading-8">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= CASE STUDY ========================== */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="A recent build"
            title={
              <>
                What a focused build{" "}
                <span className="text-gradient">looks like in practice.</span>
              </>
            }
            description="A loan-origination platform delivered as a web portal and a field-agent mobile app."
          />

          <Reveal className="mt-12 lg:mt-16">
            <article className="glass-card relative overflow-hidden">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pulse/[0.07] blur-3xl" />
              <div className="relative grid lg:grid-cols-[1.1fr_.9fr]">
                {/* Narrative */}
                <div className="p-6 sm:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-mist/80">
                      {CASE_STUDY.sector}
                    </span>
                    {CASE_STUDY.isSample && (
                      <span className="rounded-full border border-ember/30 bg-ember/10 px-3 py-1.5 text-xs font-semibold text-ember">
                        Sample case study · replace with real client data
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {CASE_STUDY.title}
                  </h3>

                  <dl className="mt-8 space-y-6">
                    <div className="border-l-2 border-ember/50 pl-5">
                      <dt className="text-sm font-bold text-white">Challenge</dt>
                      <dd className="mt-2 text-sm leading-7 text-mist/70 sm:text-base sm:leading-8">
                        {CASE_STUDY.challenge}
                      </dd>
                    </div>
                    <div className="border-l-2 border-pulse/50 pl-5">
                      <dt className="text-sm font-bold text-white">Solution</dt>
                      <dd className="mt-2 text-sm leading-7 text-mist/70 sm:text-base sm:leading-8">
                        {CASE_STUDY.solution}
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-8 flex flex-wrap gap-2">
                    {CASE_STUDY.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-mist/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className="border-t border-white/10 bg-white/[0.02] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                  <h4 className="text-sm font-bold text-white">Result</h4>
                  <div className="mt-6 space-y-7">
                    {CASE_STUDY.metrics.map((metric, index) => (
                      <MetricBar key={metric.label} {...metric} delay={index * 0.2} />
                    ))}
                  </div>
                  <div className="mt-9 rounded-2xl border border-pulse/20 bg-pulse/[0.06] p-6">
                    <p className="font-display text-5xl font-bold text-gradient">
                      {CASE_STUDY.highlight.value}
                    </p>
                    <p className="mt-2 text-sm text-mist/75">{CASE_STUDY.highlight.label}</p>
                  </div>
                  <p className="mt-6 text-xs leading-6 text-mist/45">
                    Figures shown are sample data for layout purposes and are not
                    published client results.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ============================ PROCESS ========================== */}
      <section className="section-glow relative py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How an engagement runs"
            title={
              <>
                From first conversation{" "}
                <span className="text-gradient">to confident launch.</span>
              </>
            }
            description="A transparent process with regular working demos, a visible backlog and security checks before release."
          />
          <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-[3.25rem] hidden h-px bg-gradient-to-r from-ember/40 via-pulse/40 to-ember/40 lg:block" />
            {PROCESS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08} className="h-full">
                <article className="glass-card group relative h-full p-6 transition duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink text-sm font-bold text-pulse shadow-lg shadow-black/20 transition group-hover:border-pulse/40">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mist/65">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================== WHAT WORKING WITH US IS LIKE =============== */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              What working with AppMind is{" "}
              <span className="text-gradient">actually like.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-mist/70">
              This is a deliberate choice: product decisions move faster when
              the person who can answer a technical question is in the same
              standup as the person who asked it.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-pulse/50 hover:text-pulse"
            >
              Discuss your project <ArrowRight size={15} />
            </Link>
          </Reveal>

          <ol className="space-y-4">
            {WORKING_WITH.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.09}>
                <li className="glass-card flex gap-5 p-6 sm:p-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pulse/30 bg-pulse/[0.08] text-pulse">
                    <Check size={18} strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-mist/70 sm:text-base sm:leading-8">
                      {item.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ========================= WHO WE BUILD FOR ==================== */}
      <section className="section-glow relative py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-mist/65">
              <Fingerprint size={14} className="text-pulse" /> Who we build for
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built around the realities of{" "}
              <span className="text-gradient">your industry.</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-mist/65">
              Different industries have different constraints. We design the
              product around the users, workflows and responsibilities it must
              support.
            </p>
            <Link
              href="/industries"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-pulse transition hover:text-white"
            >
              See the full list on the industries page <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {INDUSTRIES.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 0.07} className="h-full">
                <article className="glass-card group h-full p-6 transition duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <IconTile icon={industry.icon} />
                  <h3 className="mt-5 text-lg font-bold text-white">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mist/65">{industry.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================== BUILT ALONGSIDE NC & AEGIS ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
                  <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-ember/[0.10] blur-3xl" />
                  <span className="relative text-[10px] font-semibold uppercase tracking-[0.25em] text-pulse">
                    Part of Networsys
                  </span>
                  <h2 className="relative mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Built alongside NeuralCore and Aegis360.
                  </h2>
                  <div className="relative mt-5 space-y-4 text-sm leading-7 text-mist/70 sm:text-base sm:leading-8">
                    <p>
                      AppMind is not a standalone studio bolted onto a security
                      or infrastructure vendor after the fact. It is one of
                      three practices inside the same company.
                    </p>
                    <p>
                      When a product needs serious compute for an AI feature,
                      the same engineers who design{" "}
                      <Link href="/neuralcore" className="font-semibold text-pulse hover:underline">
                        NeuralCore’s
                      </Link>{" "}
                      data center and GPU cluster builds size that
                      infrastructure. When a client wants an independent
                      penetration test or ongoing monitoring on top of the
                      security already built into the SDLC,{" "}
                      <Link href="/aegis360" className="font-semibold text-pulse hover:underline">
                        Aegis360
                      </Link>{" "}
                      runs that testing without a second vendor relationship or
                      a second contract to negotiate.
                    </p>
                    <p>
                      For a client, this means one point of accountability
                      across the product, its security posture and the
                      infrastructure it runs on.
                    </p>
                  </div>
                </div>

                <div className="grid gap-px bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <Link
                    href="/neuralcore"
                    className="group bg-[#0b1017] p-7 transition hover:bg-white/[0.04] sm:p-9"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-pulse/20 bg-pulse/[0.08] text-pulse">
                      <Cloud size={20} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">NeuralCore</h3>
                    <p className="mt-3 text-sm leading-7 text-mist/60">
                      AI data center and cloud infrastructure expertise for
                      products with demanding compute needs.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-pulse">
                      Explore NeuralCore{" "}
                      <ArrowUpRight size={15} className="transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <Link
                    href="/aegis360"
                    className="group bg-[#0b1017] p-7 transition hover:bg-white/[0.04] sm:p-9"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ember/20 bg-ember/[0.08] text-ember">
                      <LockKeyhole size={20} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">Aegis360</h3>
                    <p className="mt-3 text-sm leading-7 text-mist/60">
                      Independent penetration testing and ongoing security
                      monitoring when you need assurance beyond the SDLC.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-pulse">
                      Explore Aegis360{" "}
                      <ArrowUpRight size={15} className="transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== FAQ ============================ */}
      <section className="section-glow relative py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-pulse">
              Frequently asked questions
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Good questions.{" "}
              <span className="text-gradient">Straight answers.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-mist/65 sm:text-base">
              A few things teams commonly want to know before choosing a
              product engineering partner.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-pulse hover:text-white"
            >
              Ask us something else <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-t border-white/10">
              {FAQS.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  id={`faq-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  link={faq.link}
                  isOpen={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= FURTHER READING ===================== */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <BookOpen size={18} className="text-pulse" />
              <h2 className="text-lg font-bold text-white sm:text-xl">Further reading</h2>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REFERENCES.map((ref, index) => (
              <Reveal key={ref.href} delay={index * 0.07} className="h-full">
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group flex h-full items-start justify-between gap-4 p-5 transition duration-300 hover:border-pulse/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse/60"
                >
                  <span>
                    <span className="block text-sm font-semibold leading-6 text-white transition group-hover:text-pulse sm:text-base">
                      {ref.title}
                    </span>
                    <span className="mt-1 block text-xs text-mist/50">{ref.source}</span>
                  </span>
                  <ExternalLink
                    size={16}
                    className="mt-1 shrink-0 text-mist/40 transition group-hover:text-pulse"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CTA ============================ */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_110%,rgba(242,107,33,.2),transparent_55%),radial-gradient(ellipse_at_50%_-20%,rgba(34,211,238,.14),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:42px_42px]" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-mist/70">
                <Sparkles size={14} className="text-ember" /> Your next product starts here
              </span>
              <h2 className="mx-auto mt-6 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Have an idea?{" "}
                <span className="text-gradient">Let’s build it properly.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-mist/70 sm:text-base sm:leading-8">
                Book a product discovery call. We’ll map your idea to a scope,
                timeline and price, and tell you honestly whether it should be
                an MVP or a full build.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-solid inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold"
                >
                  Talk to a Product Engineer <ArrowRight size={16} />
                </Link>
                <Link
                  href="/appmind/launchpad-mvp"
                  className="btn-gradient inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold"
                >
                  See the LaunchPad MVP Program <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ ENQUIRY ========================== */}
      <section id="contact" className="section-glow-ink relative py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-mist/70">
              <span className="h-2 w-2 rounded-full bg-pulse" />
              Consultation &amp; enquiries
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Map your idea to a{" "}
              <span className="text-gradient">shippable product.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-mist/70 sm:text-base sm:leading-8">
              Tell us what you’re trying to build. We’ll help define a
              practical first release, identify the key risks and outline the
              next steps.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "A product-focused conversation about your users and goals",
                "A clearer view of scope, delivery options and timeline",
                "Security and scalability considered from the beginning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-mist/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ember to-pulse text-ink">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <EnquiryForm
              solution="appmind"
              heading="Start your product sprint"
              subheading="Fields marked * are required. We reply within one business day."
              buttonLabel="Start my product sprint"
            />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

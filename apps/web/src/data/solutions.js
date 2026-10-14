import {
    Server,
    Cpu,
    Snowflake,
    CloudCog,
    Building2,
    ShieldCheck,
    Crosshair,
    Radar,
    Eye,
    Network,
    Fish,
    FileCheck,
    DatabaseBackup,
    Smartphone,
    Globe,
    Bot,
    Rocket,
    PenTool,
    IndianRupee,
    HeartPulse,
    Landmark,
} from 'lucide-react';

export const TRUSTED_ITEMS = [
    'ISO 27001 Certified',
    'AWS Partner',
    'CEH-Certified Ethical Hackers',
    'Trusted by Fintech, Hospitals & Financial Institutions',
];

export const INDUSTRY_ICONS = {
    fintech: IndianRupee,
    healthcare: HeartPulse,
    banking: Landmark,
};

export const SOLUTIONS = {
    neuralcore: {
        slug: 'neuralcore',
        name: 'NeuralCore',
        tagline: 'The Engine Room of Intelligence.',
        menuBlurb: 'AI data center design, configuration & deployment',
        icon: Server,
        image: 'https://images.hostinger.com/a1a2df68-dcbf-43d5-8f00-e648fd752983.png',
        imageAlt: 'GPU server hardware glowing cyan and orange inside a dark data center rack',
        hero: {
            headline: 'Build AI Infrastructure That Never Blinks.',
            copy: 'NeuralCore designs, configures and deploys GPU-ready data centers and hybrid AI compute environments for fintech, hospitals and financial institutions — secure, compliant and production-ready from day one. From the first rack drawing to the last model served, one team owns the outcome.',
            primaryCta: 'Book a Free AI Infra Readiness Call',
            secondaryCta: 'Download the Design Checklist',
        },
        why: {
            title: 'Why NeuralCore',
            body: 'Most AI projects stall not on models but on infrastructure — racks that overheat, GPUs that sit idle, cloud bills that spiral, and auditors who won’t sign off. NeuralCore removes every one of those blockers. We are vendor-neutral, India-based, and we build for regulated industries where uptime and data residency are non-negotiable.',
            bullets: [
                'Up to 60% lower 3-year TCO vs public-cloud GPUs',
                'GPU clusters live in as little as 6 weeks',
                '100% in-country data residency for DPDP, RBI and HIPAA',
                'Vendor-neutral: NVIDIA, AMD, Dell, HPE, Supermicro, Lenovo',
            ],
        },
        capabilities: [
            {
                icon: Server,
                slug: 'data-center-architecture',
                title: 'AI-Ready Data Center Architecture',
                body: 'High-density rack layouts, cooling strategy and network fabric designed around the GPU, not retrofitted for it.',
            },
            {
                icon: Cpu,
                slug: 'gpu-cluster-engineering',
                title: 'GPU Cluster Engineering',
                body: 'Workload profiling and right-sized GPU selection — L40S to H200 — so you never over-buy or under-deliver.',
            },
            {
                icon: Snowflake,
                slug: 'power-cooling-rack',
                title: 'Power, Cooling & Rack Configuration',
                body: 'PDUs, UPS, containment and liquid cooling engineered so clusters run at 100% load without throttling.',
            },
            {
                icon: CloudCog,
                slug: 'ai-orchestration',
                title: 'AI Compute Deployment & Orchestration',
                body: 'Kubernetes, NVIDIA GPU Operator, vLLM/Triton serving and scheduling — bare metal to model serving in days.',
            },
            {
                icon: Building2,
                slug: 'hybrid-colocation',
                title: 'Hybrid & Colocation Enablement',
                body: 'Own your racks in certified Indian colocation facilities with seamless burst-to-cloud connectivity.',
            },
            {
                icon: ShieldCheck,
                slug: 'secure-ai-infrastructure',
                title: 'Secure & Compliant AI Infrastructure',
                body: 'Zero-trust segmentation, encryption and audit-ready documentation mapped to DPDP, RBI and ISO 27001.',
            },
        ],
        process: [
            { step: 'Assess', body: 'Site, workload and compliance discovery workshop' },
            { step: 'Architect', body: 'Blueprint, thermal modelling and bill of materials' },
            { step: 'Build', body: 'Procurement support, installation and cabling supervision' },
            { step: 'Orchestrate', body: 'Platform stack, model serving and monitoring' },
            { step: 'Operate', body: 'Managed support, capacity planning and optimisation' },
        ],
        industries: [
            {
                key: 'fintech',
                title: 'Fintech',
                body: 'Real-time fraud and risk models on low-latency, cost-controlled compute.',
            },
            {
                key: 'healthcare',
                title: 'Hospitals & Healthcare',
                body: 'On-prem imaging and diagnostic AI with patient data that never leaves the building.',
            },
            {
                key: 'banking',
                title: 'Banks & Financial Institutions',
                body: 'Sovereign AI infrastructure that clears RBI IT-framework audits.',
            },
        ],
        caseStudy: {
            title: 'Regional hospital group builds on-prem AI imaging cluster',
            challenge: 'Radiology AI models running on public cloud raised patient-data residency concerns and cost ₹22 lakh a month.',
            solution: 'NeuralCore designed a 6-rack, 240 kW AI room inside the existing IT wing with rear-door cooling and a Kubernetes-based serving platform.',
            result: '100% in-country data, 40% lower monthly compute cost, fully deployed in 11 weeks.',
        },
        insights: [
            'Why Your Data Center Isn’t Ready for AI (And What to Fix First)',
            'L40S vs H100: Which GPU Does Your Fintech Actually Need?',
            'Colocation vs Cloud GPUs: The 3-Year TCO Nobody Shows You',
        ],
        finalCta: {
            headline: 'Ready to Own Your AI Compute?',
            body: 'Tell us your workload. We’ll tell you exactly what to build, what it costs and how long it takes — free, in 30 minutes.',
            button: 'Book a Readiness Call',
        },
        seo: {
            title: 'NeuralCore — AI Data Center Design, Configuration & Deployment | Networsys',
            description: 'GPU-ready data centers and hybrid AI compute for fintech, hospitals and financial institutions — secure, compliant and production-ready from day one.',
        },
    },

    aegis360: {
        slug: 'aegis360',
        name: 'Aegis360',
        tagline: 'Protection That Never Sleeps.',
        menuBlurb: 'Cyber defense & digital trust',
        icon: ShieldCheck,
        image: 'https://images.hostinger.com/ab899ea6-b63d-416d-9938-896b28c4b38f.png',
        imageAlt: 'Translucent glass shield of glowing cyan and orange circuit lines over a dark digital grid',
        hero: {
            headline: 'Your Attackers Work 24×7. So Do We.',
            copy: 'Aegis360 unites offensive security, 24×7 managed detection, threat intelligence, employee awareness and compliance into one protective shield — built for fintech, hospitals and financial institutions where a breach is not an option.',
            primaryCta: 'Get a Free Security Posture Score',
            secondaryCta: 'Talk to a CEH-Certified Expert',
        },
        why: {
            title: 'Why Aegis360',
            body: 'Point tools and annual audits don’t stop modern attackers. Aegis360 covers the full cycle — we test your defences like criminals would, watch your environment around the clock, train your people, and keep you audit-ready for RBI, DPDP, HIPAA, ISO 27001 and PCI DSS. Our CEH-certified team operates from our Noida SOC with enterprise-grade tooling at mid-market pricing.',
            bullets: [
                '24×7 monitoring from our Noida Security Operations Center',
                'CEH-certified ethical hackers and ISO 27001-certified processes',
                'Phishing click rates cut from 30%+ to under 5% within 6 months',
                'Coverage across web, mobile, API, network, cloud and VoIP/SIP',
            ],
        },
        capabilities: [
            {
                icon: Crosshair,
                slug: 'striketest',
                title: 'StrikeTest — Penetration Testing & VAPT',
                body: 'Web, mobile, API, network, cloud and telecom testing by CEH-certified hackers, with a fix-first roadmap and re-test certificate.',
            },
            {
                icon: Radar,
                slug: 'threatwatch',
                title: 'ThreatWatch — Threat Intelligence & Hunting',
                body: 'Dark-web credential monitoring, brand impersonation alerts and MITRE ATT&CK-mapped hunting.',
            },
            {
                icon: Eye,
                slug: 'sentinelsoc',
                title: 'SentinelSOC — 24×7 Managed Detection & Response',
                body: 'SIEM, EDR/XDR and L1–L3 analysts on subscription — an enterprise SOC without the ₹5-crore price tag.',
            },
            {
                icon: Network,
                slug: 'network-defense',
                title: 'Network & Firewall Defense',
                body: 'Next-gen firewall deployment and audit, NAC, zero-trust segmentation and secure remote access.',
            },
            {
                icon: Fish,
                slug: 'phause',
                title: 'PHAUSE — Phishing Simulation & Awareness',
                body: 'Realistic phishing campaigns, department risk scoring and bilingual micro-training that changes behaviour.',
            },
            {
                icon: FileCheck,
                slug: 'complyedge',
                title: 'ComplyEdge — Consulting & Compliance',
                body: 'vCISO, gap assessments and certification support for ISO 27001, SOC 2, RBI, SEBI, DPDP, HIPAA and PCI DSS.',
            },
            {
                icon: DatabaseBackup,
                slug: 'resiliencevault',
                title: 'ResilienceVault — Backup & Disaster Recovery',
                body: 'Immutable backups, tested recovery plans and quarterly drills so ransomware is an inconvenience, not a catastrophe.',
            },
        ],
        process: [
            { step: 'Test', body: 'Find every weakness before an attacker does' },
            { step: 'Detect', body: 'Monitor, triage and hunt around the clock' },
            { step: 'Respond', body: 'Contain and recover with SLA-backed playbooks' },
            { step: 'Comply', body: 'Map controls to regulations and produce audit evidence' },
            { step: 'Train', body: 'Turn employees into a human firewall' },
        ],
        industries: [
            {
                key: 'fintech',
                title: 'Fintech',
                body: 'Secure payment flows, API security and PCI DSS readiness at startup speed.',
            },
            {
                key: 'healthcare',
                title: 'Hospitals & Healthcare',
                body: 'Ransomware defence, HIS/PACS protection and DPDP/HIPAA compliance for patient data.',
            },
            {
                key: 'banking',
                title: 'Banks & Financial Institutions',
                body: 'RBI cyber-security framework alignment, SOC monitoring and third-party risk management.',
            },
        ],
        caseStudy: {
            title: 'Multi-specialty hospital chain stops ransomware at 2 AM',
            challenge: 'An attacker gained entry through a phished nurse-station credential and began encrypting file servers overnight.',
            solution: 'SentinelSOC analysts detected anomalous encryption behaviour within 4 minutes, isolated three endpoints and triggered the ResilienceVault recovery runbook.',
            result: 'Zero patient-record loss; clinical systems restored in 40 minutes; full forensic report delivered in 48 hours.',
        },
        insights: [
            'How Security Companies Automate VAPT in 2026 — SAST, DAST, SCA in CI/CD',
            'In-House SOC vs Managed SOC: A Cost Breakdown for Mid-Size Banks',
            'DPDP Act 2023: A Compliance Checklist for Hospitals',
        ],
        finalCta: {
            headline: 'Know Your Risk in 60 Seconds.',
            body: 'Get a free external attack-surface and dark-web exposure score for your organisation — no agents, no commitment.',
            button: 'Get My Security Posture Score',
        },
        seo: {
            title: 'Aegis360 — Cyber Defense & Digital Trust | Networsys',
            description: 'Offensive security, 24×7 managed detection, threat intelligence and compliance in one shield — built for fintech, hospitals and financial institutions.',
        },
    },

    appmind: {
        slug: 'appmind',
        name: 'AppMind',
        tagline: 'Apps That Think. Experiences That Convert.',
        menuBlurb: 'AI-native web & mobile app engineering',
        icon: Bot,
        image: 'https://images.hostinger.com/b1d2a47c-f54c-45bb-a1cc-594347f6f895.png',
        imageAlt: 'Glowing glass app interface panels floating in dark space with cyan and orange light',
        hero: {
            headline: 'Build Products Your Users Can’t Put Down.',
            copy: 'AppMind engineers intelligent, secure and scalable web and mobile applications with AI at the core — from an 8-week MVP to an enterprise platform serving millions. Every product ships through our own security pipeline, so what we build for fintech, hospitals and banks is trusted on day one.',
            primaryCta: 'Start Your Product Sprint',
            secondaryCta: 'See Our Portfolio',
        },
        why: {
            title: 'Why AppMind',
            body: 'Anyone can build an app. Few can build one that embeds AI meaningfully, passes a bank’s security review and still delights users. AppMind combines product design, AI engineering and Aegis360’s secure development lifecycle in one team — with AWS-certified cloud architecture underneath.',
            bullets: [
                'Working MVP in 8 weeks — fixed scope, fixed price',
                'Secure-by-design: every release pen-tested before launch',
                'AWS-certified cloud architecture and DevOps',
                'Native, Flutter and React Native mobile; React, Next.js, Node and Laravel web',
            ],
        },
        capabilities: [
            {
                icon: Smartphone,
                slug: 'mobile-apps',
                title: 'Intelligent Mobile Apps (Android & iOS)',
                body: 'Native and cross-platform apps with on-device AI, biometrics and offline-first architecture.',
            },
            {
                icon: Globe,
                slug: 'web-platforms',
                title: 'AI-Powered Web Platforms',
                body: 'Custom portals, SaaS products and enterprise web apps with AI search, personalisation and automation.',
            },
            {
                icon: Bot,
                slug: 'genai-integration',
                title: 'GenAI & Copilot Integration',
                body: 'LLM chatbots, RAG over private documents, WhatsApp and voice assistants — with your data under your control.',
            },
            {
                icon: Rocket,
                slug: 'launchpad-mvp',
                title: 'LaunchPad — MVP in 8 Weeks',
                body: 'Idea Monday, live product in eight weeks. Built for startups and innovation teams inside banks and hospitals.',
            },
            {
                icon: ShieldCheck,
                slug: 'secure-engineering',
                title: 'Secure-by-Design App Engineering',
                body: 'Threat modelling, SAST/DAST in CI/CD and pre-launch penetration testing aligned to OWASP ASVS/MASVS.',
            },
            {
                icon: PenTool,
                slug: 'experience-design',
                title: 'Experience Design (UI/UX)',
                body: 'Research-driven design for complex products — patient journeys, trading screens, dashboards — that stay simple.',
            },
        ],
        process: [
            { step: 'Discover', body: 'User research, scope and clickable prototype' },
            { step: 'Design', body: 'UI/UX, design system and technical architecture' },
            { step: 'Develop', body: 'Agile sprints with weekly demos' },
            { step: 'Test', body: 'QA, performance and security scan' },
            { step: 'Launch', body: 'App-store submission, cloud deployment and monitoring' },
            { step: 'Grow', body: 'Analytics, A/B testing and feature roadmap' },
        ],
        industries: [
            {
                key: 'fintech',
                title: 'Fintech',
                body: 'Lending, payments and wealth apps with AI KYC and fraud checks built in.',
            },
            {
                key: 'healthcare',
                title: 'Hospitals & Healthcare',
                body: 'Patient apps, tele-consult platforms and AI triage integrated with your HIS.',
            },
            {
                key: 'banking',
                title: 'Banks & Financial Institutions',
                body: 'Customer portals, WhatsApp banking assistants and core-banking copilots.',
            },
        ],
        caseStudy: {
            title: 'NBFC loan-origination portal with AI document verification',
            challenge: 'Manual KYC and income-document checks took 3 days per application and 40% of files came back incomplete.',
            solution: 'AppMind built a Next.js portal with AI document extraction, automated verification rules and a Flutter field-agent app.',
            result: 'Processing time cut from 3 days to 4 hours; incomplete applications down to 8%; 3× loan volume with the same team.',
        },
        insights: [
            'Flutter vs React Native vs Native in 2026 — What Fintechs Choose',
            'RAG Explained: How to Let AI Read Your Documents Safely',
            'How to Get Your Banking App Through RBI Security Review',
        ],
        finalCta: {
            headline: 'Have an Idea? Let’s Ship It.',
            body: 'Book a 30-minute product call. We’ll map your idea to a scope, timeline and price — and tell you honestly if it should be an MVP or a full build.',
            button: 'Start My Product Sprint',
        },
        seo: {
            title: 'AppMind — AI-Native Web & Mobile App Engineering | Networsys',
            description: 'Intelligent, secure and scalable web and mobile apps with AI at the core — from an 8-week MVP to enterprise platforms for fintech, hospitals and banks.',
        },
    },
};

export const SOLUTION_LIST = [SOLUTIONS.neuralcore, SOLUTIONS.aegis360, SOLUTIONS.appmind];

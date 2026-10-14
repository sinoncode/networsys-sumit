// Metadata for every placeholder page created in this routing pass.
// Full content will be filled in later — these render a styled "coming soon"
// shell in the site's dark theme so every nav link resolves to a real URL.

export const PLACEHOLDER_PAGES = [
    // NeuralCore sub-pages
    {
        path: '/neuralcore/data-center-architecture',
        parent: 'NeuralCore',
        solutionSlug: 'neuralcore',
        title: 'AI-Ready Data Center Architecture',
        description:
            'High-density rack layouts, cooling strategy and network fabric designed around the GPU, not retrofitted for it.',
    },
    {
        path: '/neuralcore/gpu-cluster-engineering',
        parent: 'NeuralCore',
        solutionSlug: 'neuralcore',
        title: 'GPU Cluster Engineering',
        description:
            'Workload profiling and right-sized GPU selection — L40S to H200 — so you never over-buy or under-deliver.',
    },
    {
        path: '/neuralcore/power-cooling-rack',
        parent: 'NeuralCore',
        solutionSlug: 'neuralcore',
        title: 'Power, Cooling & Rack Configuration',
        description:
            'PDUs, UPS, containment and liquid cooling engineered so clusters run at 100% load without throttling.',
    },
    {
        path: '/neuralcore/ai-orchestration',
        parent: 'NeuralCore',
        solutionSlug: 'neuralcore',
        title: 'AI Compute Deployment & Orchestration',
        description:
            'Kubernetes, NVIDIA GPU Operator, vLLM/Triton serving and scheduling — bare metal to model serving in days.',
    },
    {
        path: '/neuralcore/hybrid-colocation',
        parent: 'NeuralCore',
        solutionSlug: 'neuralcore',
        title: 'Hybrid & Colocation Enablement',
        description:
            'Own your racks in certified Indian colocation facilities with seamless burst-to-cloud connectivity.',
    },
    {
        path: '/neuralcore/secure-ai-infrastructure',
        parent: 'NeuralCore',
        solutionSlug: 'neuralcore',
        title: 'Secure & Compliant AI Infrastructure',
        description:
            'Zero-trust segmentation, encryption and audit-ready documentation mapped to DPDP, RBI and ISO 27001.',
    },

    // Aegis360 sub-pages
    {
        path: '/aegis360/striketest',
        parent: 'Aegis360',
        solutionSlug: 'aegis360',
        title: 'StrikeTest — Penetration Testing & VAPT',
        description:
            'Web, mobile, API, network, cloud and telecom testing by CEH-certified hackers, with a fix-first roadmap and re-test certificate.',
    },
    {
        path: '/aegis360/threatwatch',
        parent: 'Aegis360',
        solutionSlug: 'aegis360',
        title: 'ThreatWatch — Threat Intelligence & Hunting',
        description:
            'Dark-web credential monitoring, brand impersonation alerts and MITRE ATT&CK-mapped hunting.',
    },
    {
        path: '/aegis360/sentinelsoc',
        parent: 'Aegis360',
        solutionSlug: 'aegis360',
        title: 'SentinelSOC — 24×7 Managed Detection & Response',
        description:
            'SIEM, EDR/XDR and L1–L3 analysts on subscription — an enterprise SOC without the ₹5-crore price tag.',
    },
    {
        path: '/aegis360/network-defense',
        parent: 'Aegis360',
        solutionSlug: 'aegis360',
        title: 'Network & Firewall Defense',
        description:
            'Next-gen firewall deployment and audit, NAC, zero-trust segmentation and secure remote access.',
    },
    {
        path: '/aegis360/phause',
        parent: 'Aegis360',
        solutionSlug: 'aegis360',
        title: 'PHAUSE — Phishing Simulation & Awareness',
        description:
            'Realistic phishing campaigns, department risk scoring and bilingual micro-training that changes behaviour.',
    },
    {
        path: '/aegis360/complyedge',
        parent: 'Aegis360',
        solutionSlug: 'aegis360',
        title: 'ComplyEdge — Consulting & Compliance',
        description:
            'vCISO, gap assessments and certification support for ISO 27001, SOC 2, RBI, SEBI, DPDP, HIPAA and PCI DSS.',
    },
    {
        path: '/aegis360/resiliencevault',
        parent: 'Aegis360',
        solutionSlug: 'aegis360',
        title: 'ResilienceVault — Backup & Disaster Recovery',
        description:
            'Immutable backups, tested recovery plans and quarterly drills so ransomware is an inconvenience, not a catastrophe.',
    },

    // AppMind sub-pages
    {
        path: '/appmind/mobile-apps',
        parent: 'AppMind',
        solutionSlug: 'appmind',
        title: 'Intelligent Mobile Apps (Android & iOS)',
        description:
            'Native and cross-platform apps with on-device AI, biometrics and offline-first architecture.',
    },
    {
        path: '/appmind/web-platforms',
        parent: 'AppMind',
        solutionSlug: 'appmind',
        title: 'AI-Powered Web Platforms',
        description:
            'Custom portals, SaaS products and enterprise web apps with AI search, personalisation and automation.',
    },
    {
        path: '/appmind/genai-integration',
        parent: 'AppMind',
        solutionSlug: 'appmind',
        title: 'GenAI & Copilot Integration',
        description:
            'LLM chatbots, RAG over private documents, WhatsApp and voice assistants — with your data under your control.',
    },
    {
        path: '/appmind/launchpad-mvp',
        parent: 'AppMind',
        solutionSlug: 'appmind',
        title: 'LaunchPad — MVP in 8 Weeks',
        description:
            'Idea Monday, live product in eight weeks. Built for startups and innovation teams inside banks and hospitals.',
    },
    {
        path: '/appmind/secure-engineering',
        parent: 'AppMind',
        solutionSlug: 'appmind',
        title: 'Secure-by-Design App Engineering',
        description:
            'Threat modelling, SAST/DAST in CI/CD and pre-launch penetration testing aligned to OWASP ASVS/MASVS.',
    },
    {
        path: '/appmind/experience-design',
        parent: 'AppMind',
        solutionSlug: 'appmind',
        title: 'Experience Design (UI/UX)',
        description:
            'Research-driven design for complex products — patient journeys, trading screens, dashboards — that stay simple.',
    },

];

import {
    Zap,
    IndianRupee,
    HeartPulse,
    Landmark,
} from 'lucide-react';

export const INDUSTRY_CARDS = [
    {
        key: 'fintech',
        title: 'Fintech',
        blurb: 'Payments, lending & risk on low-latency, PCI DSS-ready compute.',
        body: 'Real-time fraud and risk models on low-latency compute, PCI DSS-ready payment flows, and lending apps with AI KYC built in.',
        image: 'https://images.hostinger.com/64c6500a-0c20-4f0d-9805-6e0a693555f4.png',
        alt: 'Glowing orange and cyan data streams through abstract financial charts',
        icon: IndianRupee,
    },
    {
        key: 'healthcare',
        title: 'Hospitals & Healthcare',
        blurb: 'On-prem imaging AI, ransomware defence & DPDP/HIPAA compliance.',
        body: 'On-prem imaging AI with patient data that never leaves the building, ransomware defence, and DPDP/HIPAA compliance.',
        image: 'https://images.hostinger.com/fde335f4-c364-4eb2-abcf-267723caa185.png',
        alt: 'Cyan holographic medical scan overlay on a dark hospital data grid',
        icon: HeartPulse,
    },
    {
        key: 'banking',
        title: 'Banks & Financial Institutions',
        blurb: 'Sovereign AI infra that clears RBI audits, SOC & core-banking copilots.',
        body: 'Sovereign AI infrastructure that clears RBI IT-framework audits, SOC monitoring and core-banking copilots.',
        image: 'https://images.hostinger.com/e9f804e6-0386-4c45-bba2-6b3cba2d1e20.png',
        alt: 'Abstract secure vault grid with orange and cyan light trails',
        icon: Landmark,
    },
];

export const ACCELERATORS = [
    {
        icon: Zap,
        slug: 'ai-infra-audit',
        title: 'AI Infra Readiness Audit',
        solution: 'NeuralCore',
        duration: '2 weeks',
        deliverable: 'Site, workload, power, cooling & GPU-fit report',
        blurb: 'A two-week on-site and remote assessment that tells you exactly what to fix before you buy a single GPU.',
    },
    {
        icon: Zap,
        slug: 'security-posture-score',
        title: 'Security Posture Score',
        solution: 'Aegis360',
        duration: '1 week',
        deliverable: 'Free external attack-surface + dark-web + config score',
        blurb: 'A free one-week scan of your exposed surface, leaked credentials and risky configs — scored and prioritised.',
    },
    {
        icon: Zap,
        slug: 'mvp-launchpad',
        title: 'MVP LaunchPad',
        solution: 'AppMind',
        duration: '8 weeks',
        deliverable: 'Live MVP with real users, fixed price',
        blurb: 'From validated idea to working product in eight weeks — fixed scope, fixed price, real users at launch.',
    },
    {
        icon: Zap,
        slug: 'rag-copilot-sprint',
        title: 'RAG Copilot Sprint',
        solution: 'AppMind',
        duration: '3 weeks',
        deliverable: 'Private-document AI assistant on your data',
        blurb: 'A three-week sprint that ships a private retrieval-augmented assistant answering from your own documents.',
    },
    {
        icon: Zap,
        slug: 'soc-lite',
        title: 'SOC Lite',
        solution: 'Aegis360',
        duration: 'Monthly',
        deliverable: '24×7 monitoring starter for mid-market teams',
        blurb: 'A monthly 24×7 monitoring starter that gives mid-market teams enterprise-grade detection without the overhead.',
    },
    {
        icon: Zap,
        slug: 'dpdp-rbi-compliance-sprint',
        title: 'DPDP / RBI Compliance Sprint',
        solution: 'Aegis360',
        duration: '6 weeks',
        deliverable: 'Gap-to-certified in one focused engagement',
        blurb: 'A six-week focused engagement that takes you from compliance gap analysis to certified, audit-ready state.',
    },
];

export const RESOURCES = [
    { slug: 'insights', title: 'Insights Hub', blurb: 'Engineering & strategy notes from the lab.' },
    { slug: 'success-stories', title: 'Success Stories', blurb: 'How regulated teams shipped with us.' },
    { slug: 'white-papers', title: 'White Papers', blurb: 'Deep dives on infra, security & AI apps.' },
    { slug: 'security-advisories', title: 'Security Advisories', blurb: 'Live threat bulletins from our Noida SOC.' },
    { slug: 'webinars', title: 'Webinars', blurb: 'On-demand sessions with our architects.' },
];

export const ABOUT_LINKS = [
    { slug: 'about', title: 'About', blurb: 'Our story, mission and leadership.' },
    { slug: 'careers', title: 'Careers', blurb: 'Build the future of AI with us in Noida.' },
    { slug: 'portfolio', title: 'Portfolio', blurb: 'A selection of products we’ve shipped.' },
];

export const INSIGHTS_POSTS = [
    {
        slug: 'data-center-not-ready-for-ai',
        category: 'NeuralCore · Infrastructure',
        title: 'Why Your Data Center Isn’t Ready for AI (And What to Fix First)',
        excerpt: 'Most AI stalls not on models but on racks that overheat and GPUs that sit idle. A practical fix-first checklist for regulated teams.',
        date: 'Aug 2026',
        readTime: '6 min read',
        solutionSlug: 'neuralcore',
    },
    {
        slug: 'automating-vapt-in-2026',
        category: 'Aegis360 · Security',
        title: 'How Security Companies Automate VAPT in 2026 — SAST, DAST, SCA in CI/CD',
        excerpt: 'Pen-testing once a year no longer cuts it. Here’s how we pipeline security into every release without slowing engineers down.',
        date: 'Jul 2026',
        readTime: '8 min read',
        solutionSlug: 'aegis360',
    },
    {
        slug: 'rag-explained-safely',
        category: 'AppMind · AI Engineering',
        title: 'RAG Explained: How to Let AI Read Your Documents Safely',
        excerpt: 'Retrieval-augmented generation lets LLMs answer from your private data — without it ever leaving your control. A bank-safe pattern.',
        date: 'Jul 2026',
        readTime: '5 min read',
        solutionSlug: 'appmind',
    },
];

export const FEATURED_STORY = {
    solutionSlug: 'aegis360',
    solutionName: 'Aegis360',
    title: 'Multi-specialty hospital chain stops ransomware at 2 AM',
    challenge:
        'An attacker gained entry through a phished nurse-station credential and began encrypting file servers overnight — with clinical rounds starting in four hours.',
    solution:
        'SentinelSOC analysts detected anomalous encryption behaviour within 4 minutes, isolated three endpoints, and triggered the ResilienceVault recovery runbook while paging the hospital’s IT lead.',
    result: 'Zero patient-record loss; clinical systems restored in 40 minutes; full forensic report delivered in 48 hours.',
};

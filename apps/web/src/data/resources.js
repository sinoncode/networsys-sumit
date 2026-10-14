// Data for the five Resources pages: Insights Hub, Success Stories,
// White Papers, Security Advisories and Webinars.

const IMG = {
    neuralcore: 'https://images.hostinger.com/a1a2df68-dcbf-43d5-8f00-e648fd752983.png',
    aegis360: 'https://images.hostinger.com/ab899ea6-b63d-416d-9938-896b28c4b38f.png',
    appmind: 'https://images.hostinger.com/b1d2a47c-f54c-45bb-a1cc-594347f6f895.png',
    fintech: 'https://images.hostinger.com/64c6500a-0c20-4f0d-9805-6e0a693555f4.png',
    healthcare: 'https://images.hostinger.com/fde335f4-c364-4eb2-abcf-267723caa185.png',
    banking: 'https://images.hostinger.com/e9f804e6-0386-4c45-bba2-6b3cba2d1e20.png',
    engine: 'https://images.hostinger.com/21c0fa20-d7b6-4e12-b8aa-8710f822a063.png',
};

export const SOLUTION_FILTERS = ['all', 'neuralcore', 'aegis360', 'appmind'];
export const INDUSTRY_FILTERS = ['all', 'fintech', 'healthcare', 'banking'];

// ---------------------------------------------------------------------------
// INSIGHTS — 9 posts (titles taken from the solution pages)
// ---------------------------------------------------------------------------
export const INSIGHTS_POSTS = [
    {
        slug: 'data-center-not-ready-for-ai',
        solution: 'neuralcore',
        industry: 'banking',
        category: 'NeuralCore · Infrastructure',
        title: 'Why Your Data Center Isn’t Ready for AI (And What to Fix First)',
        excerpt:
            'Most AI stalls not on models but on racks that overheat and GPUs that sit idle. A practical fix-first checklist for regulated teams.',
        author: 'Anil Mehta',
        authorRole: 'Principal Infrastructure Architect',
        date: 'Aug 2026',
        readTime: '6 min read',
        heroImage: IMG.neuralcore,
        body: [
            {
                heading: 'The model is ready. The room is not.',
                paragraphs: [
                    'Teams buy H100s and H200s expecting miracles, then watch utilisation hover around 30%. The bottleneck is almost never the GPU — it is the building around it. Power density, cooling capacity and network fabric were designed for a previous era of compute, and AI workloads expose every compromise in a hurry.',
                    'Before you sign a procurement order, walk the room with a power meter and a thermal camera. The findings are usually humbling — and they are always cheaper to fix on paper than after the racks arrive.',
                ],
            },
            {
                heading: 'Fix one: power density per rack',
                paragraphs: [
                    'A traditional rack draws 5–8 kW. A fully populated GPU rack draws 30–60 kW. Most existing PDU and UPS infrastructure was sized for the former and will trip or brown-out under the latter. Start by modelling your worst-case simultaneous draw, then add 25% headroom for bursty training jobs.',
                ],
            },
            {
                heading: 'Fix two: cooling, before the silicon throttles',
                paragraphs: [
                    'CRAC units and hot/cold aisle containment handle about 15 kW per rack comfortably. Beyond that, you need rear-door heat exchangers or direct liquid cooling. GPUs that hit thermal throttle clocks down and your million-dollar cluster performs like a workstation.',
                ],
            },
            {
                heading: 'Fix three: the network fabric',
                paragraphs: [
                    'Training across nodes needs RDMA over InfiniBand or RoCE — 400 Gb/s is now table stakes for serious clusters. A flat 10 GbE top-of-rack switch will starve your GPUs of data and turn an eight-week training run into a sixteen-week one.',
                ],
            },
            {
                heading: 'The checklist we run on every audit',
                paragraphs: [
                    'Power budget per rack with headroom, cooling capacity at peak load, network east-west bandwidth, UPS runtime for graceful shutdown, and a documented failover path. Get these five right and your GPUs will actually run at 100%.',
                ],
            },
        ],
        related: ['l40s-vs-h100-fintech', 'colocation-vs-cloud-gpus-tco'],
    },
    {
        slug: 'l40s-vs-h100-fintech',
        solution: 'neuralcore',
        industry: 'fintech',
        category: 'NeuralCore · GPU Selection',
        title: 'L40S vs H100: Which GPU Does Your Fintech Actually Need?',
        excerpt:
            'H100 headlines grab attention, but most fintech inference workloads run better and cheaper on L40S. A workload-led selection guide.',
        author: 'Anil Mehta',
        authorRole: 'Principal Infrastructure Architect',
        date: 'Aug 2026',
        readTime: '7 min read',
        heroImage: IMG.fintech,
        body: [
            {
                heading: 'Inference and training are different sports',
                paragraphs: [
                    'Fintech teams usually need fast inference — fraud scoring, credit decisions, recommendation — not days-long training runs. That distinction should drive GPU choice, but too often it is made by reading a benchmark headline.',
                ],
            },
            {
                heading: 'Where the L40S wins',
                paragraphs: [
                    'The L40S is a inference and virtual-workstation card with excellent throughput for batched scoring, 48 GB of memory, and a price roughly a third of an H100. For 95% of fintech inference workloads — XGBoost, small transformer models, document extraction — it is the right tool.',
                ],
            },
            {
                heading: 'Where the H100 earns its keep',
                paragraphs: [
                    'If you are pre-training or fine-tuning large language models, running dense multi-tenant serving, or need NVLink-scale model parallelism, the H100’s memory bandwidth and interconnect justify the premium. Otherwise you are paying for headroom you will never use.',
                ],
            },
            {
                heading: 'A simple decision rule',
                paragraphs: [
                    'Profile your workload. If a single model fits in 48 GB and your latency target is above 50 ms, start with L40S. If you are training from scratch or serving a 70B-parameter model to thousands of concurrent users, reach for the H100 or H200.',
                ],
            },
        ],
        related: ['data-center-not-ready-for-ai', 'colocation-vs-cloud-gpus-tco'],
    },
    {
        slug: 'colocation-vs-cloud-gpus-tco',
        solution: 'neuralcore',
        industry: 'banking',
        category: 'NeuralCore · Economics',
        title: 'Colocation vs Cloud GPUs: The 3-Year TCO Nobody Shows You',
        excerpt:
            'Cloud GPUs are easy to start and expensive to scale. We model the three-year total cost of ownership for a typical regulated-AI workload.',
        author: 'Priya Nair',
        authorRole: 'Cloud Economics Lead',
        date: 'Jul 2026',
        readTime: '8 min read',
        heroImage: IMG.banking,
        body: [
            {
                heading: 'The cloud bill that quietly triples',
                paragraphs: [
                    'A pilot on cloud GPUs feels cheap. Six months in, with production traffic and a second region for resilience, the monthly bill has often tripled. Egress, storage IOPS and reserved-instance commitments add up faster than most teams forecast.',
                ],
            },
            {
                heading: 'A worked example',
                paragraphs: [
                    'Consider a 4-node L40S cluster serving fraud and risk models 24×7. On a leading public cloud, three years of reserved capacity runs roughly ₹2.6 crore including egress and storage. The same cluster owned in a Mumbai colocation facility — hardware, rack, power, cooling and remote hands — runs roughly ₹1.5 crore over the same period.',
                ],
            },
            {
                heading: 'When cloud still makes sense',
                paragraphs: [
                    'Cloud wins for bursty, unpredictable, or short-lived workloads — a six-week research spike, a hackathon, a model evaluation. The moment a workload runs continuously for more than ~14 months, the crossover favours owned infrastructure.',
                ],
            },
            {
                heading: 'The residency multiplier',
                paragraphs: [
                    'For regulated industries there is a second axis: data residency. Sovereign cloud GPU capacity is limited and priced at a premium. Owned colocation inside India removes the residency question entirely and simplifies every RBI and DPDP conversation.',
                ],
            },
        ],
        related: ['data-center-not-ready-for-ai', 'l40s-vs-h100-fintech'],
    },
    {
        slug: 'automating-vapt-in-2026',
        solution: 'aegis360',
        industry: 'fintech',
        category: 'Aegis360 · Security',
        title: 'How Security Companies Automate VAPT in 2026 — SAST, DAST, SCA in CI/CD',
        excerpt:
            'Pen-testing once a year no longer cuts it. Here’s how we pipeline security into every release without slowing engineers down.',
        author: 'Rohan Kapoor',
        authorRole: 'Offensive Security Lead, CEH',
        date: 'Jul 2026',
        readTime: '8 min read',
        heroImage: IMG.aegis360,
        body: [
            {
                heading: 'Annual pen-tests are a liability, not a control',
                paragraphs: [
                    'A vulnerability introduced on Tuesday is invisible to a pen-test run the previous March. Regulators and partner banks now expect continuous evidence, not a PDF from last quarter. The only sustainable answer is to push testing left into the pipeline.',
                ],
            },
            {
                heading: 'SAST — catch it at the developer’s laptop',
                paragraphs: [
                    'Static analysis runs on every pull request. Tune the ruleset hard — false positives erode trust fast — and gate merges on critical findings. The goal is not perfection; it is to make the obvious mistakes impossible to ship.',
                ],
            },
            {
                heading: 'DAST — attack the running app',
                paragraphs: [
                    'Dynamic scanning runs against every staging deployment, exercising authentication, session handling and API endpoints the way an attacker would. It catches the class of bugs static analysis cannot see: misconfigured headers, broken access control, injection through runtime composition.',
                ],
            },
            {
                heading: 'SCA — know what is in your dependencies',
                paragraphs: [
                    'Modern apps are 80% open-source by line count. Software composition analysis flags known-vulnerable dependencies and licence risk on every build, with auto-generated upgrade pull requests. This is how you answer a partner-bank security questionnaire in an afternoon instead of a week.',
                ],
            },
            {
                heading: 'The human layer still matters',
                paragraphs: [
                    'Automation handles the volume; a CEH-certified human handles the judgement. We run a full manual penetration test before every major release, using the automated findings as a starting map rather than a substitute.',
                ],
            },
        ],
        related: ['in-house-vs-managed-soc', 'banking-app-rbi-security-review'],
    },
    {
        slug: 'in-house-vs-managed-soc',
        solution: 'aegis360',
        industry: 'banking',
        category: 'Aegis360 · SOC',
        title: 'In-House SOC vs Managed SOC: A Cost Breakdown for Mid-Size Banks',
        excerpt:
            'Building a 24×7 SOC from scratch costs ₹5 crore a year before it sees a real alert. We break down when to build and when to subscribe.',
        author: 'Rohan Kapoor',
        authorRole: 'Offensive Security Lead, CEH',
        date: 'Jul 2026',
        readTime: '6 min read',
        heroImage: IMG.banking,
        body: [
            {
                heading: 'The hidden cost of 24×7',
                paragraphs: [
                    'A genuine 24×7 SOC needs at least eight analysts to cover shifts, plus SIEM licensing, EDR sensors, a threat-intel feed and a security architect. Before a single alert is triaged, the annual run-rate is ₹4–6 crore. Most mid-size banks cannot justify that against their actual alert volume.',
                ],
            },
            {
                heading: 'What a managed SOC delivers',
                paragraphs: [
                    'A subscription SOC spreads that fixed cost across many clients. You get L1–L3 coverage, a tuned ruleset and an incident-response runbook from day one, typically at a quarter of the in-house cost. The trade-off is control over tooling and data handling — which is why residency terms matter.',
                ],
            },
            {
                heading: 'The hybrid path most banks settle on',
                paragraphs: [
                    'Keep a small internal team — a security lead and one or two analysts — for governance, vendor management and business-context decisions. Outsource the 24×7 monitoring and tier-1 triage. This is the structure that clears RBI cyber-security framework expectations without ballooning headcount.',
                ],
            },
        ],
        related: ['automating-vapt-in-2026', 'dpdp-compliance-checklist-hospitals'],
    },
    {
        slug: 'dpdp-compliance-checklist-hospitals',
        solution: 'aegis360',
        industry: 'healthcare',
        category: 'Aegis360 · Compliance',
        title: 'DPDP Act 2023: A Compliance Checklist for Hospitals',
        excerpt:
            'Patient data is now squarely in scope of India’s DPDP Act. A practical checklist for hospital CIOs and compliance officers.',
        author: 'Dr. Sneha Iyer',
        authorRole: 'Healthcare Compliance Consultant',
        date: 'Jun 2026',
        readTime: '7 min read',
        heroImage: IMG.healthcare,
        body: [
            {
                heading: 'Why hospitals are exposed',
                paragraphs: [
                    'Hospitals hold some of the most sensitive personal data in any economy — diagnoses, imaging, insurance, identities. Under the DPDP Act, a data breach is not just an IT incident; it is a statutory obligation to notify, with penalties that scale with negligence.',
                ],
            },
            {
                heading: 'The checklist',
                paragraphs: [
                    '1. Maintain a data inventory — every system that stores or processes personal data, with a named owner.',
                    '2. Obtain explicit, purpose-limited consent for every data collection, with a withdrawal mechanism.',
                    '3. Encrypt personal data at rest and in transit, with keys managed in an HSM.',
                    '4. Segment clinical networks from corporate and guest networks.',
                    '5. Run quarterly phishing simulations and annual security awareness training.',
                    '6. Maintain immutable backups with a tested restore runbook.',
                    '7. Prepare a breach-notification process that can execute within 72 hours.',
                ],
            },
            {
                heading: 'Where most hospitals fall down',
                paragraphs: [
                    'Consent and the breach-notification process. Paper consent forms collected at admission rarely map to digital systems, and few hospitals have rehearsed a 72-hour notification. Fix these two first.',
                ],
            },
        ],
        related: ['in-house-vs-managed-soc', 'rag-explained-safely'],
    },
    {
        slug: 'flutter-vs-react-native-2026',
        solution: 'appmind',
        industry: 'fintech',
        category: 'AppMind · Mobile',
        title: 'Flutter vs React Native vs Native in 2026 — What Fintechs Choose',
        excerpt:
            'The cross-platform debate has matured. We compare the three paths for a regulated fintech app and where each one wins.',
        author: 'Karan Malhotra',
        authorRole: 'Mobile Engineering Lead',
        date: 'Aug 2026',
        readTime: '6 min read',
        heroImage: IMG.appmind,
        body: [
            {
                heading: 'The question has changed',
                paragraphs: [
                    'It is no longer “can cross-platform do this?” — it can. The question is which trade-offs your team can live with for a regulated product that will be audited, pen-tested and reviewed by a partner bank.',
                ],
            },
            {
                heading: 'Flutter — one codebase, consistent UI',
                paragraphs: [
                    'Flutter’s single-codebase model and strong design system make it the fastest path to a polished, consistent UI on both platforms. The trade-off is a smaller native-module ecosystem for niche biometric or hardware integration.',
                ],
            },
            {
                heading: 'React Native — the talent pool advantage',
                paragraphs: [
                    'React Native leans on the enormous React talent pool and integrates cleanly with existing web teams. New architecture improvements have closed most of the performance gap, though bridging to native still adds complexity for sensitive flows.',
                ],
            },
            {
                heading: 'Native — when the audit demands it',
                paragraphs: [
                    'For the most security-sensitive surfaces — payment authentication, hardware-backed key storage, biometric enrolment — native remains the lowest-risk answer. Many fintechs ship a native core with a cross-platform shell around it.',
                ],
            },
            {
                heading: 'Our default recommendation',
                paragraphs: [
                    'Flutter for the experience layer, native modules for biometrics and crypto, and a hard security review before launch. That combination has cleared every partner-bank audit we have faced.',
                ],
            },
        ],
        related: ['rag-explained-safely', 'banking-app-rbi-security-review'],
    },
    {
        slug: 'rag-explained-safely',
        solution: 'appmind',
        industry: 'banking',
        category: 'AppMind · AI Engineering',
        title: 'RAG Explained: How to Let AI Read Your Documents Safely',
        excerpt:
            'Retrieval-augmented generation lets LLMs answer from your private data — without it ever leaving your control. A bank-safe pattern.',
        author: 'Karan Malhotra',
        authorRole: 'Mobile Engineering Lead',
        date: 'Jul 2026',
        readTime: '5 min read',
        heroImage: IMG.appmind,
        body: [
            {
                heading: 'The problem RAG solves',
                paragraphs: [
                    'A general-purpose LLM does not know your policies, your loan products or your patient records. Fine-tuning is expensive and leaks data. Retrieval-augmented generation keeps the model generic and grounds every answer in your own documents, retrieved at query time.',
                ],
            },
            {
                heading: 'How it works, simply',
                paragraphs: [
                    'Your documents are chunked and embedded into a vector store. When a user asks a question, the system retrieves the most relevant chunks, hands them to the LLM as context, and the model answers using only that context. The documents never train the model; they only inform the answer.',
                ],
            },
            {
                heading: 'The bank-safe pattern',
                paragraphs: [
                    'Run the embedding and the LLM inside your own VPC or on-prem. Apply role-based access control at the retrieval layer so a user only sees chunks they are authorised to read. Log every retrieval and every answer for audit. Cite the source document in every response so a human can verify.',
                ],
            },
            {
                heading: 'What can still go wrong',
                paragraphs: [
                    'Retrieval quality is the real challenge — bad chunking or weak embeddings return the wrong context and the model answers confidently and wrongly. Invest in evaluation harnesses and human review before going live.',
                ],
            },
        ],
        related: ['flutter-vs-react-native-2026', 'data-center-not-ready-for-ai'],
    },
    {
        slug: 'banking-app-rbi-security-review',
        solution: 'appmind',
        industry: 'banking',
        category: 'AppMind · Compliance',
        title: 'How to Get Your Banking App Through RBI Security Review',
        excerpt:
            'RBI’s cyber-security framework sets a high bar for customer-facing apps. A field guide to clearing review on the first attempt.',
        author: 'Karan Malhotra',
        authorRole: 'Mobile Engineering Lead',
        date: 'Jun 2026',
        readTime: '7 min read',
        heroImage: IMG.banking,
        body: [
            {
                heading: 'Start with the framework, not the app',
                paragraphs: [
                    'RBI’s cyber-security framework and the mobile-app guidelines define specific controls around authentication, session management, data storage and logging. Map your app to these controls before you write a line of remediation code — otherwise you fix the wrong things.',
                ],
            },
            {
                heading: 'Authentication and session controls',
                paragraphs: [
                    'MFA is expected, with risk-based step-up for high-value transactions. Session timeouts must be short and server-enforced, not just client-side. Biometric authentication should use the device’s hardware-backed keystore, never a screenshot or a static PIN.',
                ],
            },
            {
                heading: 'Data at rest and in transit',
                paragraphs: [
                    'No sensitive data in shared preferences or application logs. Certificate pinning is effectively mandatory. Local storage of credentials is a finding; use encrypted key stores with biometric unlock.',
                ],
            },
            {
                heading: 'The pre-submission pen-test',
                paragraphs: [
                    'Run a full VAPT — SAST, DAST, SCA and manual — against the release candidate, aligned to OWASP MASVS. Fix every critical and high, document the residual risk, and submit the re-test certificate with your application. This is the single biggest predictor of first-time clearance.',
                ],
            },
        ],
        related: ['automating-vapt-in-2026', 'flutter-vs-react-native-2026'],
    },
];

export const getInsightBySlug = (slug) => INSIGHTS_POSTS.find((p) => p.slug === slug);
export const resolveRelatedInsights = (slugs = []) =>
    slugs.map((s) => INSIGHTS_POSTS.find((p) => p.slug === s)).filter(Boolean);

// ---------------------------------------------------------------------------
// SUCCESS STORIES — case studies
// ---------------------------------------------------------------------------
export const SUCCESS_STORIES = [
    {
        slug: 'hospital-on-prem-ai-imaging-cluster',
        clientType: 'Regional Hospital Group',
        industry: 'healthcare',
        solution: 'neuralcore',
        tag: 'NeuralCore · Healthcare',
        title: 'Regional hospital group builds on-prem AI imaging cluster',
        metric: '40% lower monthly compute cost',
        challenge:
            'Radiology AI models running on public cloud raised patient-data residency concerns and cost ₹22 lakh a month, with latency that slowed turnaround during peak OPD hours.',
        solution:
            'NeuralCore designed a 6-rack, 240 kW AI room inside the existing IT wing with rear-door cooling and a Kubernetes-based serving platform running vLLM and Triton.',
        result:
            '100% in-country patient data, 40% lower monthly compute cost, inference latency cut by half, and full deployment in 11 weeks.',
        tech: ['6-rack GPU cluster', 'Rear-door liquid cooling', 'Kubernetes + NVIDIA GPU Operator', 'vLLM / Triton serving', 'DPDP-compliant data residency'],
        heroImage: IMG.healthcare,
    },
    {
        slug: 'nbfc-on-prem-gpu-cluster',
        clientType: 'NBFC (Non-Banking Financial Company)',
        industry: 'fintech',
        solution: 'neuralcore',
        tag: 'NeuralCore · Fintech',
        title: 'NBFC cuts inference cost 40% with on-prem GPU cluster',
        metric: '38 ms inference latency',
        challenge:
            'Real-time credit-scoring models on public-cloud GPUs cost ₹18 lakh a month and added 90 ms of latency to loan decisions, capping how many applications the team could process.',
        solution:
            'NeuralCore designed a 4-node L40S cluster in a Mumbai colocation facility with a Kubernetes serving platform and burst-to-cloud failover for peak loads.',
        result:
            'Inference latency down to 38 ms, monthly compute cost cut 40%, and 100% in-country data residency for RBI compliance.',
        tech: ['4-node L40S cluster', 'Mumbai Tier-III colocation', 'Kubernetes serving', 'Burst-to-cloud failover', 'RBI-aligned residency'],
        heroImage: IMG.fintech,
    },
    {
        slug: 'hospital-ransomware-stopped-2am',
        clientType: 'Multi-Specialty Hospital Chain',
        industry: 'healthcare',
        solution: 'aegis360',
        tag: 'Aegis360 · Healthcare',
        title: 'Multi-specialty hospital chain stops ransomware at 2 AM',
        metric: 'Zero patient-record loss',
        challenge:
            'An attacker gained entry through a phished nurse-station credential and began encrypting file servers overnight — with clinical rounds starting in four hours.',
        solution:
            'SentinelSOC analysts detected anomalous encryption behaviour within 4 minutes, isolated three endpoints, and triggered the ResilienceVault recovery runbook while paging the hospital’s IT lead.',
        result:
            'Zero patient-record loss; clinical systems restored in 40 minutes; full forensic report delivered in 48 hours.',
        tech: ['SentinelSOC 24×7 MDR', 'EDR isolation', 'ResilienceVault immutable backups', 'Incident-response runbook', 'Forensic reporting'],
        heroImage: IMG.healthcare,
    },
    {
        slug: 'fintech-clears-bank-security-review',
        clientType: 'Lending Fintech',
        industry: 'fintech',
        solution: 'appmind',
        tag: 'Aegis360 + AppMind · Fintech',
        title: 'Payment app clears partner-bank security review on first attempt',
        metric: 'Go-live moved up a quarter',
        challenge:
            'A lending fintech failed two consecutive partner-bank security reviews — SAST findings and weak authentication blocked the integration and threatened the partnership.',
        solution:
            'AppMind rebuilt the app through Aegis360’s secure SDLC with SAST/DAST in CI/CD, MFA, and a pre-launch penetration test aligned to OWASP ASVS.',
        result:
            'Third-party audit cleared on the first attempt; integration go-live moved up by a full quarter.',
        tech: ['Secure SDLC', 'SAST / DAST / SCA in CI/CD', 'OWASP ASVS alignment', 'MFA + biometric auth', 'Pre-launch pen-test'],
        heroImage: IMG.fintech,
    },
    {
        slug: 'nbfc-loan-origination-ai-verification',
        clientType: 'NBFC Lending Platform',
        industry: 'fintech',
        solution: 'appmind',
        tag: 'AppMind · Fintech',
        title: 'NBFC loan-origination portal with AI document verification',
        metric: '3 days → 4 hours processing',
        challenge:
            'Manual KYC and income-document checks took 3 days per application and 40% of files came back incomplete, capping loan volume and frustrating field agents.',
        solution:
            'AppMind built a Next.js portal with AI document extraction, automated verification rules, and a Flutter field-agent app for offline-first capture.',
        result:
            'Processing time cut from 3 days to 4 hours; incomplete applications down to 8%; 3× loan volume with the same team.',
        tech: ['Next.js portal', 'AI document extraction', 'Flutter field-agent app', 'Offline-first sync', 'Automated verification rules'],
        heroImage: IMG.appmind,
    },
    {
        slug: 'cooperative-bank-rbi-audit-cleared',
        clientType: 'Cooperative Bank',
        industry: 'banking',
        solution: 'aegis360',
        tag: 'Aegis360 · Banking',
        title: 'Cooperative bank clears RBI IT-framework audit',
        metric: 'RBI audit cleared first attempt',
        challenge:
            'A cooperative bank faced an upcoming RBI IT-framework audit with legacy flat networks, no segmentation, and keys stored in software — a near-certain finding list.',
        solution:
            'Aegis360 deployed micro-segmentation across core-banking, branch and corporate zones, moved encryption keys into an HSM, and produced audit-ready control documentation.',
        result:
            'RBI IT-framework audit cleared on the first attempt with zero critical findings; the bank avoided remediation penalties and a restricted-licence scenario.',
        tech: ['Zero-trust micro-segmentation', 'HSM-managed keys', 'RBI control mapping', 'Audit-ready documentation', 'vCISO advisory'],
        heroImage: IMG.banking,
    },
];

export const getStoryBySlug = (slug) => SUCCESS_STORIES.find((s) => s.slug === slug);

// ---------------------------------------------------------------------------
// WHITE PAPERS — gated, email-capture before download
// ---------------------------------------------------------------------------
export const WHITE_PAPERS = [
    {
        slug: 'ai-data-center-blueprint-bfsi',
        title: 'AI Data Center Blueprint for BFSI',
        summary:
            'A reference architecture for GPU-ready AI data centers in banks, NBFCs and insurers — power, cooling, network fabric, security and a 3-year TCO model.',
        pages: 24,
        solution: 'NeuralCore',
        cover: IMG.neuralcore,
    },
    {
        slug: 'hospital-cyber-resilience-playbook',
        title: 'Hospital Cyber Resilience Playbook',
        summary:
            'From ransomware defence to DPDP compliance — a step-by-step playbook for hospital CIOs to keep clinical systems running and patient data safe.',
        pages: 18,
        solution: 'Aegis360',
        cover: IMG.healthcare,
    },
    {
        slug: 'genai-adoption-guide-banks',
        title: 'GenAI Adoption Guide for Banks',
        summary:
            'How to deploy RAG copilots, customer assistants and document AI inside a bank’s security and regulatory perimeter — with build-vs-buy guidance.',
        pages: 21,
        solution: 'AppMind',
        cover: IMG.banking,
    },
];

export const getWhitePaperBySlug = (slug) => WHITE_PAPERS.find((w) => w.slug === slug);

// ---------------------------------------------------------------------------
// SECURITY ADVISORIES — chronological list
// ---------------------------------------------------------------------------
export const SECURITY_ADVISORIES = [
    {
        slug: 'nwsa-2026-014',
        severity: 'critical',
        date: '02 Sep 2026',
        product: 'Apache OFBiz',
        summary:
            'Pre-auth remote code execution in OFBiz accounting module — unauthenticated attackers can execute arbitrary code via a crafted request. Patch immediately.',
    },
    {
        slug: 'nwsa-2026-013',
        severity: 'high',
        date: '28 Aug 2026',
        product: 'Fortinet FortiManager',
        summary:
            'Authentication bypass in FortiManager allows remote attackers to manage devices without credentials. Update to the latest firmware and review admin logs.',
    },
    {
        slug: 'nwsa-2026-012',
        severity: 'critical',
        date: '21 Aug 2026',
        product: 'SonicWall SMA 100',
        summary:
            'Stack-based buffer overflow in SMA 100 series enables unauthenticated remote code execution. Apply the vendor hotfix and restrict management access.',
    },
    {
        slug: 'nwsa-2026-011',
        severity: 'medium',
        date: '14 Aug 2026',
        product: 'Atlassian Confluence',
        summary:
            'Broken access control in Confluence Data Center allows authenticated users to view spaces they should not. Upgrade to the patched release.',
    },
    {
        slug: 'nwsa-2026-010',
        severity: 'high',
        date: '07 Aug 2026',
        product: 'Cisco ISE',
        summary:
            'Insecure default credentials in Cisco IS leave admin portals exposed. Rotate credentials, disable default accounts, and apply the advisory patch.',
    },
    {
        slug: 'nwsa-2026-009',
        severity: 'medium',
        date: '30 Jul 2026',
        product: 'VMware vCenter',
        summary:
            'Information disclosure in vCenter Server leaks session tokens under specific conditions. Apply the patch and review recent admin sessions.',
    },
    {
        slug: 'nwsa-2026-008',
        severity: 'critical',
        date: '22 Jul 2026',
        product: 'Microsoft Exchange',
        summary:
            'Chained SSRF and privilege escalation in on-prem Exchange enables domain compromise. Patch and audit for known exploitation indicators.',
    },
    {
        slug: 'nwsa-2026-007',
        severity: 'high',
        date: '15 Jul 2026',
        product: 'Ivanti Connect Secure',
        summary:
            'Authentication bypass in Connect Secure VPN allows remote access without credentials. Patch and review VPN access logs for the exposure window.',
    },
];

export const SEVERITY_STYLES = {
    critical: 'border-ember/40 bg-ember/10 text-ember',
    high: 'border-orange-400/40 bg-orange-400/10 text-orange-300',
    medium: 'border-pulse/40 bg-pulse/10 text-pulse',
};

// ---------------------------------------------------------------------------
// WEBINARS — upcoming + on-demand
// ---------------------------------------------------------------------------
export const UPCOMING_WEBINARS = [
    {
        slug: 'gpu-right-sizing-2026',
        title: 'GPU Right-Sizing for Regulated AI Workloads',
        speaker: 'Anil Mehta',
        speakerRole: 'Principal Infrastructure Architect',
        date: '18 Sep 2026 · 11:00 IST',
        duration: '45 min',
        summary:
            'A live walkthrough of profiling fintech and healthcare AI workloads and choosing between L40S, H100 and H200 — with a real TCO comparison.',
    },
    {
        slug: 'ransomware-tabletop-2026',
        title: 'Ransomware Tabletop: A 2 AM Hospital Scenario',
        speaker: 'Rohan Kapoor',
        speakerRole: 'Offensive Security Lead, CEH',
        date: '25 Sep 2026 · 15:00 IST',
        duration: '60 min',
        summary:
            'Walk through a real ransomware incident minute-by-minute and learn the detection, containment and recovery decisions that saved a hospital chain.',
    },
    {
        slug: 'rag-for-banks-2026',
        title: 'Building a Bank-Safe RAG Copilot',
        speaker: 'Karan Malhotra',
        speakerRole: 'Mobile Engineering Lead',
        date: '02 Oct 2026 · 11:00 IST',
        duration: '50 min',
        summary:
            'How to deploy retrieval-augmented generation inside a bank’s security perimeter — architecture, access control and audit logging patterns.',
    },
];

export const ONDEMAND_WEBINARS = [
    {
        slug: 'vapt-pipeline-2026',
        title: 'Automating VAPT in CI/CD — SAST, DAST, SCA in Practice',
        speaker: 'Rohan Kapoor',
        speakerRole: 'Offensive Security Lead, CEH',
        date: 'Recorded Aug 2026',
        duration: '52 min',
        summary:
            'A practical demo of pipelining security into every release without slowing engineers down — including a live SAST/DAST ruleset walkthrough.',
    },
    {
        slug: 'dpdp-hospitals-2026',
        title: 'DPDP Act 2023: What Hospital CIOs Must Do Now',
        speaker: 'Dr. Sneha Iyer',
        speakerRole: 'Healthcare Compliance Consultant',
        date: 'Recorded Jul 2026',
        duration: '48 min',
        summary:
            'A plain-language breakdown of the DPDP Act for healthcare — consent, breach notification and the seven-item compliance checklist we recommend.',
    },
    {
        slug: 'colocation-tco-2026',
        title: 'Colocation vs Cloud GPUs: The 3-Year TCO',
        speaker: 'Priya Nair',
        speakerRole: 'Cloud Economics Lead',
        date: 'Recorded Jul 2026',
        duration: '40 min',
        summary:
            'A worked TCO model for a 4-node L40S cluster, with the crossover point where owned infrastructure beats cloud and the residency multiplier.',
    },
    {
        slug: 'mobile-fintech-2026',
        title: 'Flutter vs React Native vs Native for Fintech',
        speaker: 'Karan Malhotra',
        speakerRole: 'Mobile Engineering Lead',
        date: 'Recorded Jun 2026',
        duration: '46 min',
        summary:
            'A side-by-side comparison for regulated fintech apps — where each path wins and the hybrid architecture that clears partner-bank audits.',
    },
];

// Reusable "Service Detail" page registry.
//
// Each entry drives one ServiceDetailPage route (e.g. /neuralcore/data-center-architecture).
// Add an entry here, then call reload_app — the route is wired automatically in App.jsx.
// Pages listed in PLACEHOLDER_PAGES that also appear here are routed to the full template
// instead of the "coming soon" shell.
//
// Schema:
// {
//   slug: 'data-center-architecture',          // last URL segment
//   solutionSlug: 'neuralcore',                // parent solution (neuralcore | aegis360 | appmind)
//   parentName: 'NeuralCore',                  // breadcrumb + label text
//   label: 'AI Data Center Architecture',      // hero small label (parent-solution context)
//   title: 'Design AI Data Centers …',         // H1 (may include <span className="text-gradient">…</span>)
//   paragraph: 'One paragraph …',              // hero body copy
//   cta: 'Book a Free Consultation',           // hero orange CTA button label (→ /contact)
//   visual: 'gpu',                             // optional: gpu | shield | phone | sphere (defaults by solution)
//   included: {                                // "What's Included" — 2-column glass card with bullets
//     eyebrow: "What's included",
//     title: <span>…</span> | '…',
//     items: ['…', '…'],                       // bullet list (split into 2 columns)
//   },
//   audience: {                                // "Who It's For" — 3 industry chips
//     eyebrow: "Who it's for",
//     title: '…',
//     chips: [{ title: 'Fintech', body: '…' }, …],
//   },
//   process: {                                 // "Our Process" — horizontal timeline
//     eyebrow: 'Our process',
//     title: '…',
//     steps: [{ step: 'Discover', body: '…' }, …],
//   },
//   successStory: {                            // "Success Story" card
//     eyebrow: 'Success story',
//     title: '…',
//     client: 'Regional hospital group',
//     challenge: '…',
//     solution: '…',
//     result: '…',
//   },
//   insights: {                                // "Related Insights" — 3 blog cards
//     eyebrow: 'Related insights',
//     title: '…',
//     posts: [{ slug, category, title, excerpt, date, readTime }, …], // optional
//   },                                          //   if posts omitted, falls back to INSIGHTS_POSTS for the solution
//   finalCta: { headline: '…', body: '…', button: '…' },
//   seo: { title: '… | Networsys', description: '…' },
// }

import { SOLUTIONS } from './solutions';
import { INSIGHTS_POSTS } from './site';

export const SERVICE_DETAILS = [
    {
        slug: 'data-center-architecture',
        solutionSlug: 'neuralcore',
        parentName: 'NeuralCore',
        label: 'AI Data Center Architecture',
        title: 'Architecture Designed Around the GPU, Not Retrofitted For It.',
        paragraph:
            'Traditional data centers were built for CPUs. AI workloads demand 3–5× the power density, liquid-ready cooling and east-west network fabrics. We design facilities and server rooms that are AI-native from the floor plan up.',
        cta: 'Download the AI Data Center Design Checklist',
        visual: 'gpu',
        included: {
            eyebrow: "What's included",
            title: 'AI-Native Data Center Design, End to End',
            description:
                'From the first site walk to the final bill of materials — every layer engineered around the GPU.',
            items: [
                'Site & capacity assessment (power, space, connectivity)',
                'High-density rack layout (20–80 kW per rack)',
                'Cooling strategy — air, rear-door, direct-to-chip liquid',
                'Network fabric design (InfiniBand / RoCE / 400G Ethernet)',
                'Redundancy & tiering (Tier II–IV)',
                'Bill of Materials & vendor-neutral procurement guidance',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Built for Regulated Teams Who Cannot Rely on Public Cloud',
            description:
                'When data residency, cost control or latency make public-cloud GPUs the wrong answer.',
            chips: [
                {
                    title: 'Hospitals',
                    body: 'Building on-prem imaging AI with patient data that never leaves the building.',
                },
                {
                    title: 'Banks',
                    body: 'Needing sovereign in-country compute that clears RBI IT-framework audits.',
                },
                {
                    title: 'Fintechs',
                    body: 'Outgrowing cloud GPU bills and ready to own their own compute economics.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Floor Plan to First Model Served',
            description: 'A structured path that de-risks every build before a single rack is ordered.',
            steps: [
                { step: 'Discovery Workshop', body: 'Site, workload and compliance discovery with your IT and facilities teams.' },
                { step: 'Load & Thermal Modelling', body: 'Power, heat and airflow simulation tuned to your GPU and rack density.' },
                { step: 'Blueprint & BoM', body: 'Detailed facility blueprint and vendor-neutral bill of materials.' },
                { step: 'Facility Review', body: 'Power, cooling and tiering validation against the design before procurement.' },
                { step: 'Build Supervision', body: 'On-site installation, cabling and commissioning oversight to go-live.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Regional hospital group builds on-prem AI imaging cluster',
            client: 'Regional hospital group',
            headline: 'Radiology AI moves in-country in 11 weeks',
            challenge: 'Radiology AI on public cloud raised data-residency concerns and cost ₹22 lakh a month.',
            solution: 'A 6-rack, 240 kW AI room with rear-door cooling inside the existing IT wing, designed and deployed by NeuralCore.',
            result: '100% in-country data, 40% lower monthly cost, fully deployed in 11 weeks.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Read Before You Build',
            description: 'Practical notes from our infrastructure lab for teams planning AI facilities.',
            posts: [
                {
                    slug: 'data-center-not-ready-for-ai',
                    category: 'NeuralCore · Infrastructure',
                    title: 'Why Your Data Center Isn’t Ready for AI',
                    excerpt: 'Most AI stalls not on models but on racks that overheat and GPUs that sit idle. A practical fix-first checklist.',
                    date: 'Aug 2026',
                    readTime: '6 min read',
                },
                {
                    slug: 'air-vs-liquid-cooling-gpu-racks',
                    category: 'NeuralCore · Cooling',
                    title: 'Air vs Liquid Cooling for GPU Racks',
                    excerpt: 'When rear-door heat exchangers are enough — and when you must go direct-to-chip. A density-based decision guide.',
                    date: 'Jul 2026',
                    readTime: '7 min read',
                },
                {
                    slug: 'tier-iii-vs-tier-iv-bank-ai',
                    category: 'NeuralCore · Reliability',
                    title: 'Tier III vs Tier IV: What a Bank Needs for AI',
                    excerpt: 'Concurrently maintainable vs fault-tolerant. Which tier actually matters for your AI workloads and audit posture.',
                    date: 'Jun 2026',
                    readTime: '5 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Ready to Own Your AI Compute?',
            body: 'Tell us your workload. We’ll tell you exactly what to build, what it costs and how long it takes — free, in 30 minutes.',
            button: 'Book a Readiness Call',
        },
        seo: {
            title: 'AI Data Center Architecture | NeuralCore — Networsys',
            description: 'AI-native data center design — high-density rack layout, liquid cooling, InfiniBand fabric and vendor-neutral BoM for hospitals, banks and fintechs.',
        },
    },
    {
        slug: 'gpu-cluster-engineering',
        solutionSlug: 'neuralcore',
        parentName: 'NeuralCore',
        label: 'GPU Cluster Engineering',
        title: 'The Right GPUs. The Right Number. The Right Way.',
        paragraph:
            'Over-buying H100s wastes crores; under-buying stalls projects. We size, spec and build GPU clusters matched to your actual inference, fine-tuning or training workloads.',
        cta: 'Get a Free GPU Sizing Report',
        visual: 'gpu',
        included: {
            eyebrow: "What's included",
            title: 'A GPU Cluster Matched to the Workload',
            description:
                'Every component is selected around the performance, latency and economics your models actually need.',
            items: [
                'Workload profiling (inference vs training vs fine-tuning)',
                'GPU selection — NVIDIA L40S, A100, H100/H200, AMD MI300',
                'Server & node configuration (Supermicro, Dell, HPE, Lenovo)',
                'High-speed interconnect & NVMe storage',
                'Cluster benchmarking & validation',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Compute Built Around Your Critical AI Workloads',
            description:
                'For regulated teams that need predictable AI performance without paying for the wrong hardware.',
            chips: [
                {
                    title: 'Fintech fraud & risk models',
                    body: 'Accelerate real-time scoring while keeping GPU spend aligned to transaction volumes and model latency targets.',
                },
                {
                    title: 'Hospital diagnostic AI',
                    body: 'Support demanding imaging workloads with reliable, right-sized compute for clinical teams.',
                },
                {
                    title: 'Bank credit-scoring platforms',
                    body: 'Build dependable model-serving infrastructure for high-volume credit decisions and regulated data.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Workload Reality to Validated Cluster',
            description: 'A practical path from model requirements to production-ready GPU infrastructure.',
            steps: [
                { step: 'Workload Profiling', body: 'Map inference, fine-tuning and training workloads, traffic patterns and latency targets.' },
                { step: 'GPU Fit Analysis', body: 'Compare GPU options against throughput, memory, availability and total cost.' },
                { step: 'Cluster Design', body: 'Design the node, network, storage and orchestration architecture for your workload.' },
                { step: 'Procurement Support', body: 'Translate the design into a vendor-neutral bill of materials and buying plan.' },
                { step: 'Build & Benchmark', body: 'Commission the cluster and validate performance against the agreed workload benchmarks.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'NBFC cuts latency without buying an oversized GPU cluster',
            client: 'NBFC transaction scoring platform',
            headline: 'Real-time fraud scoring at 38 ms',
            challenge: 'NBFC needed real-time transaction scoring under 50 ms.',
            solution: '4-node L40S cluster with NVMe tiering.',
            result: '38 ms latency; ₹1.2 Cr saved vs quoted H100 cluster.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Choose the Compute Your Models Actually Need',
            description: 'Practical guidance for sizing, comparing and validating GPU infrastructure.',
            posts: [
                {
                    slug: 'l40s-vs-h100-fintech',
                    category: 'NeuralCore · GPU Sizing',
                    title: 'L40S vs H100: Which GPU Does Your Fintech Need?',
                    excerpt: 'Compare the performance and economics of two popular choices for fintech inference and model workloads.',
                    date: 'Aug 2026',
                    readTime: '6 min read',
                },
                {
                    slug: 'gpu-cluster-real-time-fraud-detection',
                    category: 'NeuralCore · Architecture',
                    title: 'Sizing a GPU Cluster for Real-Time Fraud Detection',
                    excerpt: 'A workload-first guide to turning transaction volume and latency targets into the right cluster shape.',
                    date: 'Jul 2026',
                    readTime: '7 min read',
                },
                {
                    slug: 'gpu-benchmarks-explained',
                    category: 'NeuralCore · Performance',
                    title: 'GPU Benchmarks Explained',
                    excerpt: 'Know which benchmark numbers matter when selecting GPUs for inference, fine-tuning and training.',
                    date: 'Jun 2026',
                    readTime: '5 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Ready to Size Your GPU Cluster?',
            body: 'Share your workload and latency target. We’ll show you the right GPU mix, cluster design and economics — free.',
            button: 'Get Your GPU Sizing Report',
        },
        seo: {
            title: 'GPU Cluster Engineering | NeuralCore — Networsys',
            description: 'Right-sized GPU cluster engineering for fintech, hospitals and banks — from workload profiling and GPU selection to benchmarking and validation.',
        },
    },
    {
        slug: 'power-cooling-rack',
        solutionSlug: 'neuralcore',
        parentName: 'NeuralCore',
        label: 'NeuralCore',
        title: 'Every Watt Accounted For. Every Degree Controlled.',
        paragraph:
            'AI racks fail because of thermal and electrical limits, not compute. We engineer the physical layer — PDUs, UPS, cooling loops and cable management — so clusters run at full load without throttling.',
        cta: 'Request a Thermal & Power Assessment',
        visual: 'gpu',
        included: {
            eyebrow: "What's included",
            title: 'The Physical Layer, Engineered for Full-Load AI',
            description:
                'Power, cooling, airflow and cabling designed together so every rack holds its rated density without throttling.',
            items: [
                'Power distribution (3-phase, dual-feed PDUs, UPS sizing)',
                'Cooling — CRAC/CRAH, in-row, rear-door, direct liquid',
                'Rack layout, containment & CFD airflow modelling',
                'Structured cabling & fibre plant',
                'Environmental monitoring & DCIM integration',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'For Teams Pushing More Power Through Existing Space',
            description:
                'When the building is fixed but the workload density keeps climbing.',
            chips: [
                {
                    title: 'Banks',
                    body: 'Retrofitting legacy server rooms to support high-density GPU nodes without a full rebuild.',
                },
                {
                    title: 'Hospitals',
                    body: 'Adding GPU racks for imaging and clinical AI inside existing facilities and tight floor plans.',
                },
                {
                    title: 'Fintechs',
                    body: 'Deploying AI workloads into colocation with precise power, cooling and containment planning.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Site Survey to a Cool, Stable Full-Load Cluster',
            description: 'A structured path that de-risks power and thermal limits before a single GPU is powered on.',
            steps: [
                { step: 'Site Survey', body: 'Audit existing power feeds, cooling capacity, floor loading and airflow paths.' },
                { step: 'Electrical & Thermal Design', body: 'Size PDUs, UPS and cooling for the target rack density with redundancy margins.' },
                { step: 'Containment Plan', body: 'Lay out hot/cold aisle containment and run CFD airflow modelling to eliminate hot spots.' },
                { step: 'Installation', body: 'Install PDUs, cooling loops, containment and structured cabling with minimal downtime.' },
                { step: 'Commissioning & Monitoring', body: 'Validate full-load thermals and wire DCIM monitoring for continuous environmental control.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Bank retrofits legacy server room for 35 kW GPU nodes',
            client: 'Mid-sized bank',
            headline: 'Zero throttling at 100% load',
            challenge: 'Bank’s 6 kW racks couldn’t support 35 kW GPU nodes.',
            solution: 'Dual-feed 63A PDUs, in-row cooling, hot-aisle containment.',
            result: 'Zero throttling at 100% load; PUE cut from 1.9 to 1.45.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Read Before You Retrofit',
            description: 'Practical notes on power, cooling and containment for high-density AI racks.',
            posts: [
                {
                    slug: 'what-is-pue-why-cios-track-it',
                    category: 'NeuralCore · Efficiency',
                    title: 'What Is PUE and Why Every CIO Should Track It',
                    excerpt: 'Power Usage Effectiveness is the single number that tells you how much of your power is compute vs cooling. Here’s how to read it.',
                    date: 'Aug 2026',
                    readTime: '5 min read',
                },
                {
                    slug: 'hot-aisle-containment-gpu-racks',
                    category: 'NeuralCore · Cooling',
                    title: 'Hot-Aisle Containment for GPU Racks',
                    excerpt: 'Why containment is non-negotiable above 20 kW per rack — and the trade-offs between hot-aisle, cold-aisle and chimney designs.',
                    date: 'Jul 2026',
                    readTime: '6 min read',
                },
                {
                    slug: 'things-wrong-retrofitting-for-ai',
                    category: 'NeuralCore · Retrofit',
                    title: '7 Things That Go Wrong Retrofitting for AI',
                    excerpt: 'From undersized UPS to blocked airflow paths — the most common failures when legacy rooms meet high-density GPU workloads.',
                    date: 'Jun 2026',
                    readTime: '7 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Running Hot? Let’s Fix the Physical Layer.',
            body: 'Tell us your rack density and room constraints. We’ll map the power, cooling and containment plan that gets you to full load without throttling.',
            button: 'Request a Thermal & Power Assessment',
        },
        seo: {
            title: 'Power, Cooling & Rack Engineering | NeuralCore — Networsys',
            description: 'Engineering the AI physical layer — dual-feed PDUs, UPS, in-row and liquid cooling, hot-aisle containment, CFD airflow modelling and DCIM for full-load GPU racks.',
        },
    },
    {
        slug: 'hybrid-colocation',
        solutionSlug: 'neuralcore',
        parentName: 'NeuralCore',
        label: 'NeuralCore',
        title: 'Own the Compute. Rent the Building.',
        paragraph:
            "You don't need to build a facility to own AI infrastructure. We place your GPU racks in certified Indian colocation facilities and connect them to your cloud and offices as one hybrid environment.",
        cta: 'Get a Colocation TCO Comparison',
        visual: 'gpu',
        included: {
            eyebrow: "What's included",
            title: 'A Smarter Path to Owned AI Infrastructure',
            description:
                'Get the economics and control of owned GPUs without waiting years to build your own facility.',
            items: [
                'Colocation partner selection (Noida, Mumbai, Chennai, Hyderabad)',
                'Rack procurement, shipping & installation',
                'Hybrid connectivity — cloud interconnect, MPLS, SD-WAN',
                'Burst-to-cloud architecture',
                'Managed remote hands & monitoring',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Own Your Compute Without Owning the Facility',
            description:
                'For regulated teams that need lower long-term GPU costs, data control and a fast route to production capacity.',
            chips: [
                {
                    title: 'Payment companies',
                    body: 'Cut cloud GPU spend while keeping high-throughput payment and risk workloads close to your teams.',
                },
                {
                    title: 'Hospitals',
                    body: 'Deploy owned AI infrastructure when your existing premises have no suitable data-center space.',
                },
                {
                    title: 'Banks',
                    body: 'Reach certified Tier III facilities quickly without waiting for a new internal data-center build.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Cloud Spend to a Hybrid Compute Estate',
            description: 'A workload-first path to the right facility, rack design and connectivity model.',
            steps: [
                { step: 'Workload & Cost Analysis', body: 'Map GPU demand, data flows, residency needs and current cloud spend to establish the TCO baseline.' },
                { step: 'Facility Selection', body: 'Compare certified colocation options across Noida, Mumbai, Chennai and Hyderabad.' },
                { step: 'Rack Build', body: 'Procure, ship and install the right GPU racks with clear ownership and commissioning milestones.' },
                { step: 'Connectivity', body: 'Connect the facility to cloud environments and offices through interconnect, MPLS or SD-WAN.' },
                { step: 'Managed Operations', body: 'Keep infrastructure observable and available with remote hands, monitoring and operational support.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Payment platform moves from cloud GPU spend to hybrid ownership',
            client: 'Payment platform',
            headline: 'Owned GPU capacity with cloud burst when demand peaks',
            challenge: '₹28 L/month AWS GPU spend.',
            solution: '2 owned racks in a Tier III Mumbai facility with AWS burst.',
            result: '58% cost reduction over 24 months; break-even in month 9.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Make the Right Compute Economics Decision',
            description: 'Practical guidance for balancing GPU ownership, facility choice and cloud flexibility.',
            posts: [
                {
                    slug: 'colocation-vs-cloud-gpus-3-year-tco',
                    category: 'NeuralCore · Economics',
                    title: 'Colocation vs Cloud GPUs: 3-Year TCO',
                    excerpt: 'A workload-first framework for comparing owned GPU racks, colocation and cloud capacity over three years.',
                    date: 'Aug 2026',
                    readTime: '7 min read',
                },
                {
                    slug: 'data-residency-india-bfsi-ai',
                    category: 'NeuralCore · Data Residency',
                    title: 'Data Residency in India for BFSI AI',
                    excerpt: 'What regulated financial-services teams should consider when AI infrastructure spans private facilities and cloud.',
                    date: 'Jul 2026',
                    readTime: '6 min read',
                },
                {
                    slug: 'choosing-colocation-facility-gpu-racks',
                    category: 'NeuralCore · Colocation',
                    title: 'Choosing a Colocation Facility for GPU Racks',
                    excerpt: 'The power, cooling, connectivity, certification and remote-hands questions to ask before you commit.',
                    date: 'Jun 2026',
                    readTime: '6 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Ready to Compare Cloud and Colocation?',
            body: 'Share your GPU workloads and current cloud spend. We’ll model the right owned, colocated and burst-to-cloud mix for your team.',
            button: 'Get a Colocation TCO Comparison',
        },
        seo: {
            title: 'Hybrid Colocation for AI Infrastructure | NeuralCore — Networsys',
            description: 'Own GPU infrastructure in certified Indian colocation facilities with hybrid cloud connectivity, burst capacity and managed operations.',
        },
    },
    {
        slug: 'ai-orchestration',
        solutionSlug: 'neuralcore',
        parentName: 'NeuralCore',
        label: 'NeuralCore',
        title: 'From Bare Metal to Model Serving in Days.',
        paragraph:
            'Hardware is only half the job. We deploy the software stack that turns GPUs into a usable AI platform — Kubernetes, GPU operators, model serving, monitoring and multi-tenant scheduling.',
        cta: 'See the NeuralCore Platform Stack',
        visual: 'gpu',
        included: {
            eyebrow: "What's included",
            title: 'A Production-Ready AI Platform on Your GPUs',
            description:
                'We turn raw compute into a governed platform your data-science teams can use, share and operate with confidence.',
            items: [
                'OS, driver & CUDA baseline',
                'Kubernetes + NVIDIA GPU Operator',
                'Model serving — Triton, vLLM, TGI',
                'Scheduling & multi-tenancy — SkyPilot, dstack, Slurm',
                'Object storage — MinIO / Ceph',
                'Observability — Prometheus, Grafana, DCGM',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Platform Engineering for Teams Sharing Serious Compute',
            description:
                'For regulated organisations that need reliable model delivery, clear GPU ownership and measurable utilisation.',
            chips: [
                {
                    title: 'Fintech data-science teams',
                    body: 'Give quant and data-science teams a shared platform for fast, repeatable model serving without GPU contention.',
                },
                {
                    title: 'Hospital AI research units',
                    body: 'Move clinical AI experiments from isolated workstations into a governed platform that respects patient-data controls.',
                },
                {
                    title: 'Bank innovation labs',
                    body: 'Help multidisciplinary teams test, deploy and monitor new models on a secure, right-sized internal platform.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Baseline to a Platform Your Teams Can Use',
            description: 'A focused implementation path that gets models into production without leaving operations behind.',
            steps: [
                { step: 'Baseline', body: 'Audit the OS, drivers, CUDA, hardware and workload requirements across the GPU estate.' },
                { step: 'Platform Install', body: 'Install Kubernetes, the GPU Operator and the core platform services with secure defaults.' },
                { step: 'Serving Layer', body: 'Deploy and validate model-serving runtimes such as Triton, vLLM and TGI against real workloads.' },
                { step: 'Scheduling & Quotas', body: 'Configure multi-tenancy, GPU time-slicing, scheduling policies, quotas and team-level access.' },
                { step: 'Monitoring & Handover', body: 'Wire up Prometheus, Grafana and DCGM, then hand over runbooks and operational ownership.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Shared GPU platform gives six teams room to move',
            client: 'Financial services data-science group',
            headline: 'More models served from the same eight GPUs',
            challenge: '6 teams sharing 8 GPUs with no scheduling.',
            solution: 'Kubernetes platform with GPU time-slicing and vLLM serving.',
            result: 'Utilisation 22% → 71%; new models deployed in under 1 hour.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Build a Platform, Not Just a Cluster',
            description: 'Practical guidance for turning GPU infrastructure into a usable, observable AI service.',
            posts: [
                {
                    slug: 'kubernetes-for-ai-ctos-guide',
                    category: 'NeuralCore · Orchestration',
                    title: "Kubernetes for AI: A CTO's Guide",
                    excerpt: 'What Kubernetes adds to a GPU platform, where it creates complexity and how to decide if your team is ready.',
                    date: 'Aug 2026',
                    readTime: '8 min read',
                },
                {
                    slug: 'vllm-vs-triton',
                    category: 'NeuralCore · Model Serving',
                    title: 'vLLM vs Triton',
                    excerpt: 'A practical comparison of two model-serving paths across throughput, flexibility, operations and team fit.',
                    date: 'Jul 2026',
                    readTime: '6 min read',
                },
                {
                    slug: '70-percent-gpu-utilisation',
                    category: 'NeuralCore · GPU Efficiency',
                    title: '70%+ GPU Utilisation Without Buying More GPUs',
                    excerpt: 'The platform, scheduling and observability moves that turn idle shared capacity into productive model time.',
                    date: 'Jun 2026',
                    readTime: '7 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Ready to Turn GPUs into a Platform?',
            body: 'Tell us what you run today and where your teams get blocked. We’ll map the platform stack, serving layer and operating model to move you forward quickly.',
            button: 'See the NeuralCore Platform Stack',
        },
        seo: {
            title: 'AI Orchestration | NeuralCore — Networsys',
            description: 'Deploy a production-ready AI platform with Kubernetes, GPU operators, model serving, multi-tenant scheduling, object storage and observability.',
        },
    },
    {
        slug: 'striketest',
        solutionSlug: 'aegis360',
        parentName: 'Aegis360',
        label: 'Aegis360',
        title: "We Break In So Criminals Can't.",
        paragraph:
            'CEH-certified ethical hackers simulate real attacks across your web apps, mobile apps, networks, APIs, cloud and telecom/VoIP infrastructure — then hand you a fix-first roadmap.',
        cta: 'Request a VAPT Quote',
        visual: 'shield',
        included: {
            eyebrow: "What's included",
            title: 'A Full-Spectrum Test of Your Attack Surface',
            description:
                'Authorised testing that turns real attack paths into a clear, prioritised plan for closing the gaps.',
            items: [
                'Web & API penetration testing (OWASP Top 10, business logic)',
                'Mobile app security testing (Android / iOS)',
                'Network & infrastructure VAPT (internal / external)',
                'Cloud configuration review (AWS, Azure, GCP)',
                'VoIP / SIP & telecom fraud testing',
                'Red-team & social-engineering',
                'Re-test & closure certificate',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Security Testing for Regulated Teams Before the Audit',
            description:
                'Find and fix exploitable weaknesses before a regulator, assessor or criminal does.',
            chips: [
                {
                    title: 'Fintech before PCI DSS',
                    body: 'Validate payment apps, APIs and infrastructure before your PCI DSS assessment and keep remediation focused on the risks that matter.',
                },
                {
                    title: 'Hospitals for NABH / HIPAA',
                    body: 'Test patient-facing apps, clinical systems and connected infrastructure without losing sight of safety and availability.',
                },
                {
                    title: 'Banks for RBI cyber audits',
                    body: 'Surface attack paths across banking platforms and network boundaries, with evidence mapped for RBI cyber-security reviews.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'A Disciplined Route from Recon to Closure',
            description: 'Every engagement is authorised, evidence-led and built around practical remediation.',
            steps: [
                { step: 'Scoping', body: 'Agree the rules of engagement, assets, test windows and safety boundaries with your team.' },
                { step: 'Recon', body: 'Map your exposed assets, technologies, identities and likely attack paths.' },
                { step: 'Exploitation', body: 'Safely validate vulnerabilities and business-logic weaknesses using controlled techniques.' },
                { step: 'Reporting', body: 'Deliver clear evidence, severity ratings and a fix-first roadmap for your engineers.' },
                { step: 'Fix Support', body: 'Work alongside your teams to clarify findings and prioritise remediation.' },
                { step: 'Re-test', body: 'Verify the fixes and issue a closure certificate for the engagement.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Telecom operator closes caller-ID fraud exposure',
            client: 'International telecom operator',
            headline: 'Three critical misconfigurations closed in 72 hours',
            challenge: 'Telecom operator suspected caller-ID fraud on international gateway.',
            solution: 'Authorised black-box SIP/CLI spoofing test.',
            result: '3 critical misconfigurations found and closed in 72 hours.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Know Where Attackers Will Look First',
            description: 'Practical security guidance for teams testing complex, regulated environments.',
            posts: [
                {
                    slug: 'automating-vapt-in-2026',
                    category: 'Aegis360 · Security',
                    title: 'How Security Companies Automate VAPT in 2026',
                    excerpt: 'See how modern security teams combine continuous testing with a fix-first workflow without slowing delivery.',
                    date: 'Jul 2026',
                    readTime: '8 min read',
                },
                {
                    slug: 'penetration-testing-for-hospitals',
                    category: 'Aegis360 · Healthcare Security',
                    title: 'Penetration Testing for Hospitals',
                    excerpt: 'A practical guide to testing clinical systems, patient-facing applications and connected hospital infrastructure safely.',
                    date: 'Jun 2026',
                    readTime: '7 min read',
                },
                {
                    slug: 'sip-spoofing-how-telecom-fraud-works',
                    category: 'Aegis360 · Telecom Security',
                    title: 'SIP Spoofing: How Telecom Fraud Works',
                    excerpt: 'Understand how caller-ID manipulation happens across VoIP gateways and what an authorised test can reveal.',
                    date: 'May 2026',
                    readTime: '6 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Ready to See What an Attacker Sees?',
            body: 'Share your attack surface and compliance deadline. We’ll scope an authorised VAPT engagement that gives your team a clear route from exposure to closure.',
            button: 'Request a VAPT Quote',
        },
        seo: {
            title: 'StrikeTest — Penetration Testing & VAPT | Aegis360 — Networsys',
            description: 'CEH-certified penetration testing across web, mobile, API, network, cloud and telecom infrastructure, with a fix-first roadmap and re-test certificate.',
        },
    },
    {
        slug: 'threatwatch',
        solutionSlug: 'aegis360',
        parentName: 'Aegis360',
        label: 'Aegis360',
        title: 'Find the Threat Before It Finds You.',
        paragraph:
            'Proactive hunting across your environment using global threat feeds, dark-web monitoring and behavioural analytics — so dormant attackers are evicted before they act.',
        cta: 'Get a Free Dark-Web Exposure Report',
        visual: 'shield',
        included: {
            eyebrow: "What's included",
            title: 'Proactive Threat Intelligence & Hunting',
            description:
                'Continuous visibility into the threats targeting your organisation — and the hunting that evicts them before they act.',
            items: [
                'Dark-web & credential-leak monitoring',
                'Brand & domain impersonation alerts',
                'Hypothesis-driven threat hunting',
                'IOC / TTP mapping to MITRE ATT&CK',
                'Monthly threat briefing for leadership',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'For Regulated Teams in the Crosshairs',
            description:
                'When attackers are already researching your brand, your people and your executives — find them first.',
            chips: [
                {
                    title: 'Fintech brands',
                    body: 'Targeted by phishing kits and credential-stuffing campaigns that reuse leaked employee and customer logins.',
                },
                {
                    title: 'Hospitals',
                    body: 'Facing ransomware groups that scout networks for weeks before encrypting — evicted before they act.',
                },
                {
                    title: 'Banks',
                    body: 'Monitoring executive impersonation, VIP account targeting and brand-spoofing across digital channels.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Onboarding to a Monthly Leadership Brief',
            description: 'A continuous loop that turns global threat intelligence into action inside your environment.',
            steps: [
                { step: 'Onboard Assets', body: 'Catalogue your domains, brands, executive identities, exposed services and crown-jewel systems.' },
                { step: 'Continuous Monitoring', body: 'Watch dark-web markets, leak sites, brand-impersonation channels and your internal telemetry around the clock.' },
                { step: 'Hunt', body: 'Run hypothesis-driven hunts using MITRE ATT&CK-mapped TTPs and behavioural analytics to find dormant attackers.' },
                { step: 'Alert & Contain', body: 'Triage confirmed threats, alert your team and coordinate containment before the attacker can act.' },
                { step: 'Monthly Brief', body: 'Deliver a leadership threat briefing covering exposure, hunts run, findings and recommended actions.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Fintech blocks account-takeover after dark-web credential leak',
            client: 'Fintech platform',
            headline: '14 leaked accounts reset within 4 hours',
            challenge: 'Fintech was unaware that employee credentials had been leaked on a dark-web market.',
            solution: 'ThreatWatch dark-web monitoring flagged 14 exposed accounts tied to active corporate logins.',
            result: 'All 14 accounts reset within 4 hours; an attempted account-takeover was blocked before any access occurred.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Know the Threats Before They Know You',
            description: 'Practical threat-intelligence guidance for regulated teams facing targeted attacks.',
            posts: [
                {
                    slug: 'your-passwords-are-already-on-the-dark-web',
                    category: 'Aegis360 · Threat Intelligence',
                    title: 'Your Passwords Are Already on the Dark Web',
                    excerpt: 'How credentials leak, where they end up, and what proactive dark-web monitoring actually catches before an attack.',
                    date: 'Aug 2026',
                    readTime: '6 min read',
                },
                {
                    slug: 'mitre-attack-for-beginners',
                    category: 'Aegis360 · Frameworks',
                    title: 'MITRE ATT&CK for Beginners',
                    excerpt: 'A plain-language introduction to the ATT&CK framework and how threat hunters use TTPs to find dormant attackers.',
                    date: 'Jul 2026',
                    readTime: '7 min read',
                },
                {
                    slug: 'top-threat-actors-targeting-indian-banks-2026',
                    category: 'Aegis360 · Threat Actors',
                    title: 'Top Threat Actors Targeting Indian Banks in 2026',
                    excerpt: 'The groups most actively targeting Indian financial institutions this year — their motives, methods and tell-tale signals.',
                    date: 'Jun 2026',
                    readTime: '8 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Who Is Targeting You Right Now?',
            body: 'Share your domains and brand footprint. We’ll run a free dark-web exposure report and show you what attackers already know about your organisation.',
            button: 'Get a Free Dark-Web Exposure Report',
        },
        seo: {
            title: 'ThreatWatch — Threat Intelligence & Hunting | Aegis360 — Networsys',
            description: 'Proactive threat hunting with dark-web and credential-leak monitoring, brand impersonation alerts, MITRE ATT&CK-mapped hunting and monthly leadership briefings for fintech, hospitals and banks.',
        },
    },
    {
        slug: 'network-defense',
        solutionSlug: 'aegis360',
        parentName: 'Aegis360',
        label: 'Aegis360',
        title: 'Every Packet Inspected. Every Door Locked.',
        paragraph:
            'Design, deployment and audit of firewalls, NAC, VPN, segmentation and Wi-Fi security — protecting the perimeter and the inside.',
        cta: 'Book a Firewall Health Audit',
        visual: 'shield',
        included: {
            eyebrow: "What's included",
            title: 'A Network Perimeter Built for Trust',
            description:
                'Protect every connection, endpoint and access path with layered network defense designed around your environment.',
            items: [
                'Next-gen firewall deployment & rule audit (Fortinet, Palo Alto, Sophos)',
                'Network Access Control & endpoint compliance',
                'Zero-trust segmentation',
                'Secure remote access / VPN',
                'Wireless security assessment',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Network Defense for Complex, Regulated Environments',
            description:
                'Secure the connections between people, devices, branches and cloud workloads without slowing the business down.',
            chips: [
                {
                    title: 'Hospitals with medical IoT',
                    body: 'Protect connected clinical devices and patient systems while keeping essential care workflows available.',
                },
                {
                    title: 'Banks with branch networks',
                    body: 'Bring consistent policy, segmentation and secure access across branches, data centers and remote teams.',
                },
                {
                    title: 'Fintech hybrid offices',
                    body: 'Secure hybrid work and cloud connectivity with controls that scale as your teams and attack surface grow.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Network Discovery to Continuous Control',
            description: 'A practical path to stronger network access, cleaner policy and measurable endpoint trust.',
            steps: [
                { step: 'Network Discovery', body: 'Map users, devices, branches, traffic flows, internet exposure and critical network dependencies.' },
                { step: 'Rule & Policy Audit', body: 'Review firewall rules, access policies and configurations to remove unnecessary risk and complexity.' },
                { step: 'Segmentation Design', body: 'Design zero-trust zones and access paths around workloads, identities, devices and business needs.' },
                { step: 'Deployment', body: 'Implement firewalls, NAC, VPN and wireless controls with tested change windows and rollback plans.' },
                { step: 'Ongoing Management', body: 'Keep policies current with monitoring, reviews, compliance checks and operational support.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Hospital network stops unchecked endpoint access',
            client: 'Hospital network',
            headline: '100% endpoint compliance before network access',
            challenge: '1,200 endpoints joining the network unchecked.',
            solution: 'FortiNAC with agent, certificate and patch verification.',
            result: '100% endpoint compliance before network access.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Make Every Connection Earn Its Access',
            description: 'Practical guidance for reducing network risk across firewalls, endpoints, branches and hybrid environments.',
            posts: [
                {
                    slug: 'firewall-rule-bloat-40-percent-rules-useless',
                    category: 'Aegis360 · Network Defense',
                    title: 'Firewall Rule Bloat: 40% of Your Rules Are Useless',
                    excerpt: 'How stale, duplicate and overly broad rules create hidden exposure — and a practical path to a cleaner firewall policy.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
                {
                    slug: 'nac-for-hospitals',
                    category: 'Aegis360 · Network Access',
                    title: 'NAC for Hospitals',
                    excerpt: 'How network access control helps hospitals secure medical IoT and clinical endpoints without disrupting care.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: 'zero-trust-for-banks-90-day-plan',
                    category: 'Aegis360 · Zero Trust',
                    title: 'Zero Trust for Banks: A 90-Day Plan',
                    excerpt: 'A phased plan for moving branch, data-center and remote access controls toward a practical zero-trust model.',
                    date: 'Coming soon',
                    readTime: '8 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Is Your Network Ready for the Next Connection?',
            body: 'Tell us about your firewall, endpoints and remote-access environment. We’ll identify the gaps that matter and show you how to close them.',
            button: 'Book a Firewall Health Audit',
        },
        seo: {
            title: 'Network Defense & Firewall Security | Aegis360 — Networsys',
            description: 'Firewall, NAC, VPN, zero-trust segmentation and wireless security for hospitals, banks and fintech hybrid offices.',
        },
    },
    {
        slug: 'phause',
        solutionSlug: 'aegis360',
        parentName: 'Aegis360',
        label: 'PHAUSE',
        title: 'Your People Are the Firewall. Train Them Like One.',
        paragraph:
            'PAUSE (Phishing Awareness and User Security Evaluation) runs realistic phishing campaigns, measures who clicks, and delivers bite-sized training that changes behaviour.',
        cta: 'Run a Free Phishing Test for 50 Users',
        visual: 'shield',
        included: {
            eyebrow: "What's included",
            title: 'Turn Human Risk into Measurable Resilience',
            description:
                'Practical security awareness that shows you where behaviour creates risk, then helps every team improve.',
            items: [
                'Simulated phishing, vishing & smishing campaigns',
                'Department-level risk scoring',
                'Micro-learning modules in Hindi & English',
                'Compliance training (RBI, HIPAA, ISO)',
                'Quarterly board reports',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Built for Teams Where One Click Can Become a Breach',
            description:
                'Make security awareness specific to the people, workflows and compliance obligations that shape your organisation.',
            chips: [
                {
                    title: 'Banks meeting RBI awareness mandates',
                    body: 'Demonstrate practical employee awareness with measurable campaigns, targeted learning and board-ready reporting.',
                },
                {
                    title: 'Hospitals with rotating staff',
                    body: 'Keep clinicians, contractors and new joiners prepared for phishing without taking time away from patient care.',
                },
                {
                    title: 'Fintech remote teams',
                    body: 'Build secure habits across distributed teams with realistic simulations and training that fits the way people work.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Baseline Clicks to Safer Behaviour',
            description: 'A repeatable awareness programme that turns campaign data into focused action.',
            steps: [
                { step: 'Baseline Campaign', body: 'Run an authorised initial simulation to establish click, report and engagement benchmarks.' },
                { step: 'Risk Scoring', body: 'Break down results by department, role and behaviour to identify where support matters most.' },
                { step: 'Training', body: 'Deliver short Hindi and English micro-learning modules matched to real mistakes and compliance needs.' },
                { step: 'Repeat Campaigns', body: 'Re-test regularly with fresh scenarios and targeted follow-up to reinforce safer decisions.' },
                { step: 'Quarterly Report', body: 'Share trend lines, risk movement and recommended actions in a concise board-ready report.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'NBFC turns phishing awareness into a measurable control',
            client: 'NBFC security team',
            headline: 'Phishing click rate drops from 31% to 4%',
            challenge: 'NBFC phishing click rate at 31%.',
            solution: 'Monthly PAUSE campaigns with targeted micro-training.',
            result: 'Click rate down to 4% in 6 months.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Make Security Awareness Stick',
            description: 'Practical guidance for building a human layer of defence that teams can apply every day.',
            posts: [
                {
                    slug: 'psychology-of-phishing',
                    category: 'Aegis360 · Awareness',
                    title: 'The Psychology of Phishing',
                    excerpt: 'Why capable people click under pressure, and how better simulations can turn predictable reactions into safer habits.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
                {
                    slug: 'running-your-first-phishing-simulation',
                    category: 'Aegis360 · Phishing Simulation',
                    title: 'Running Your First Phishing Simulation',
                    excerpt: 'A practical starting point for scoping, launching and learning from your organisation’s first authorised campaign.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: 'rbi-cyber-awareness-mandate',
                    category: 'Aegis360 · Compliance',
                    title: "RBI's Cyber Awareness Mandate",
                    excerpt: 'What regulated financial teams should measure and document when building an employee cyber-awareness programme.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
            ],
        },
        finalCta: {
            headline: 'How Ready Is Your Team for the Next Phish?',
            body: 'Test 50 users at no cost, see where your people are most exposed and get a practical path to safer behaviour.',
            button: 'Run a Free Phishing Test for 50 Users',
        },
        seo: {
            title: 'PHAUSE — Phishing Simulation & Awareness | Aegis360 — Networsys',
            description: 'Realistic phishing, vishing and smishing simulations, department risk scoring and bilingual micro-learning for banks, hospitals and fintech teams.',
        },
    },
    {
        slug: 'sentinelsoc',
        solutionSlug: 'aegis360',
        parentName: 'Aegis360',
        label: 'Aegis360',
        title: 'A Security Operations Center Without the ₹5 Crore Price Tag.',
        paragraph:
            'SentinelSOC delivers round-the-clock monitoring, alert triage and incident response from our Noida SOC — enterprise-grade protection on a monthly subscription.',
        cta: 'See SentinelSOC Subscription Plans',
        visual: 'shield',
        included: {
            eyebrow: "What's included",
            title: 'Enterprise-Grade Security Operations, Without the Overhead',
            description:
                'Get the people, technology and response discipline of a mature SOC on a predictable monthly subscription.',
            items: [
                'SIEM deployment & tuning (Wazuh, Splunk, Microsoft Sentinel)',
                'EDR / XDR management',
                '24×7 L1–L3 analysts',
                'Incident-response playbooks',
                'Monthly executive dashboards',
                'SLA-backed response times',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: '24×7 Coverage for Teams That Cannot Staff a Full SOC',
            description:
                'SentinelSOC gives security and IT leaders a reliable response layer without the ₹5 crore investment of building an in-house operation.',
            chips: [
                {
                    title: 'Mid-size banks & NBFCs',
                    body: 'Extend your security team with always-on monitoring, triage and response aligned to regulated financial services.',
                },
                {
                    title: 'Hospital chains',
                    body: 'Protect clinical systems and patient records with rapid detection and response across every facility.',
                },
                {
                    title: 'Fintech scale-ups',
                    body: 'Add enterprise-grade detection and response as your attack surface grows, without slowing product momentum.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From First Log Source to a Resilient Security Operation',
            description: 'A practical onboarding and operating rhythm that turns security signals into fast, accountable action.',
            steps: [
                { step: 'Onboarding & Log Sources', body: 'Connect your critical systems, endpoints, cloud services and identity sources to establish complete visibility.' },
                { step: 'Tuning', body: 'Baseline normal behaviour, tune detections and reduce noise so analysts focus on signals that matter.' },
                { step: '24×7 Monitoring', body: 'L1–L3 analysts continuously monitor, investigate and escalate suspicious activity from our Noida SOC.' },
                { step: 'Incident Response', body: 'Follow tested playbooks to contain threats, coordinate recovery and keep stakeholders informed.' },
                { step: 'Monthly Review', body: 'Review incidents, trends, SLA performance and priority improvements through an executive dashboard.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Hospital chain stops a 2 AM ransomware attack',
            client: 'Hospital chain',
            headline: 'Clinical systems back in 40 minutes',
            challenge: 'Attacker began encrypting hospital file servers at 2 AM.',
            solution: 'Anomaly detected in 4 minutes; 3 endpoints isolated; recovery runbook triggered.',
            result: 'Zero patient-record loss; clinical systems back in 40 minutes.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Build a Faster, More Focused Security Response',
            description: 'Practical guidance for leaders comparing managed SOC models and improving incident readiness.',
            posts: [
                {
                    slug: 'in-house-soc-vs-managed-soc-cost-breakdown',
                    category: 'Aegis360 · Managed SOC',
                    title: 'In-House SOC vs Managed SOC: Cost Breakdown',
                    excerpt: 'Compare the people, platform and operating costs behind an in-house SOC with a predictable managed model.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
                {
                    slug: 'first-15-minutes-ransomware-attack',
                    category: 'Aegis360 · Incident Response',
                    title: 'First 15 Minutes of a Ransomware Attack',
                    excerpt: 'The first decisions determine the blast radius. Here is the response sequence every security team should rehearse.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: 'cutting-siem-false-positives-by-80-percent',
                    category: 'Aegis360 · SIEM',
                    title: 'Cutting SIEM False Positives by 80%',
                    excerpt: 'A practical tuning framework for reducing alert fatigue while keeping the detections your analysts rely on.',
                    date: 'Coming soon',
                    readTime: '5 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Ready for 24×7 Security Coverage?',
            body: 'Tell us about your environment and response needs. We’ll show you how SentinelSOC can deliver enterprise-grade protection on a monthly subscription.',
            button: 'See SentinelSOC Subscription Plans',
        },
        seo: {
            title: 'SentinelSOC — Managed Security Operations Center | Aegis360 — Networsys',
            description: '24×7 managed SOC monitoring, alert triage and incident response from Networsys Noida SOC, with SIEM, EDR/XDR, L1–L3 analysts and SLA-backed response times.',
        },
    },
    {
        slug: 'complyedge',
        solutionSlug: 'aegis360',
        parentName: 'Aegis360',
        label: 'Aegis360',
        title: 'Audit-Ready. Always.',
        paragraph:
            'vCISO services, gap assessments and end-to-end compliance programmes for ISO 27001, SOC 2, RBI, SEBI, DPDP, HIPAA and PCI DSS.',
        cta: 'Request a Compliance Gap Assessment',
        visual: 'shield',
        included: {
            eyebrow: "What's included",
            title: 'A Compliance Programme Built to Hold Up Under Scrutiny',
            description:
                'From first gap assessment to certification support, ComplyEdge gives your team the expertise, roadmap and operating rhythm to stay audit-ready.',
            items: [
                'Virtual CISO',
                'Gap assessment & remediation roadmap',
                'Policy & procedure authoring',
                'Internal audit & certification support',
                'Third-party / vendor risk management',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Compliance That Matches the Way Regulated Teams Operate',
            description:
                'Practical guidance and hands-on delivery for organisations preparing for certification, partnership or regulatory review.',
            chips: [
                {
                    title: 'Fintech pursuing PCI DSS / SOC 2',
                    body: 'Build the controls, evidence and accountability needed to earn trust with customers, partners and investors.',
                },
                {
                    title: 'Hospitals for DPDP & HIPAA',
                    body: 'Protect patient data with policies, assessments and operating practices that stand up to healthcare scrutiny.',
                },
                {
                    title: 'Banks for RBI & SEBI frameworks',
                    body: 'Bring governance, risk management and audit evidence together across complex banking environments.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Unclear Gaps to Confident Certification',
            description: 'A focused five-step programme that turns compliance requirements into controls your teams can operate every day.',
            steps: [
                { step: 'Gap Assessment', body: 'Review your current controls, evidence, people and processes against the selected framework and business goals.' },
                { step: 'Roadmap', body: 'Prioritise findings into a practical remediation plan with owners, milestones and measurable outcomes.' },
                { step: 'Implementation', body: 'Support control rollout, policy authoring, staff readiness and third-party risk management across the organisation.' },
                { step: 'Internal Audit', body: 'Test the programme, close evidence gaps and prepare your teams for auditor and assessor questions.' },
                { step: 'Certification', body: 'Support the final assessment and help establish the review cadence that keeps you audit-ready after certification.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Payment aggregator earns trust before a pivotal bank partnership',
            client: 'Payment aggregator',
            headline: 'PCI DSS 4.0 certification in 5 months',
            challenge: 'Payment aggregator needed PCI DSS 4.0 before a bank partnership.',
            solution: 'ComplyEdge roadmap with vCISO oversight.',
            result: 'Certified in 5 months.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Make Compliance a Working Advantage',
            description: 'Practical guidance for leaders building governance, evidence and trust across regulated environments.',
            posts: [
                {
                    slug: 'dpdp-act-2023-checklist-hospitals',
                    category: 'Aegis360 · Compliance',
                    title: 'DPDP Act 2023: Checklist for Hospitals',
                    excerpt: 'A practical checklist for hospitals turning patient-data obligations into clear, repeatable controls.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: 'iso-27001-vs-soc-2-for-fintech',
                    category: 'Aegis360 · Compliance',
                    title: 'ISO 27001 vs SOC 2 for Fintech',
                    excerpt: 'Understand where the two frameworks overlap, where they differ and which path fits your fintech goals.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
                {
                    slug: 'what-a-vciso-does',
                    category: 'Aegis360 · vCISO',
                    title: 'What a vCISO Does',
                    excerpt: 'What to expect from a virtual CISO and how the role helps a growing organisation make security accountable.',
                    date: 'Coming soon',
                    readTime: '5 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Ready to Know Where You Stand?',
            body: 'Share your framework, deadline and current controls. We’ll identify the gaps that matter and give your team a practical route to certification.',
            button: 'Request a Compliance Gap Assessment',
        },
        seo: {
            title: 'ComplyEdge — Compliance Consulting & vCISO | Aegis360 — Networsys',
            description: 'vCISO services, gap assessments and end-to-end compliance programmes for ISO 27001, SOC 2, RBI, SEBI, DPDP, HIPAA and PCI DSS.',
        },
    },
    {
        slug: 'resiliencevault',
        solutionSlug: 'aegis360',
        parentName: 'Aegis360',
        label: 'Aegis360',
        title: 'Breach-Proof Backups. Minutes to Recover.',
        paragraph:
            'Immutable backups, tested recovery plans and cyber-resilience architecture so ransomware becomes an inconvenience, not a catastrophe.',
        cta: 'Get a Free Recovery Readiness Score',
        visual: 'shield',
        included: {
            eyebrow: "What's included",
            title: 'Recovery Architecture Built for the Worst Day',
            description:
                'Protect critical data with recovery systems your team has designed, deployed and proven before an incident happens.',
            items: [
                'Immutable / air-gapped backup design',
                'RTO / RPO planning',
                'DR site & cloud DR (Acronis, Veeam)',
                'Quarterly recovery drills',
                'Business continuity documentation',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'For Organisations That Cannot Afford to Lose Their Data',
            description:
                'Build a recovery capability around the systems, regulations and uptime commitments your organisation depends on.',
            chips: [
                {
                    title: 'Hospitals protecting patient records',
                    body: 'Keep clinical and diagnostic data recoverable when ransomware threatens care delivery and patient safety.',
                },
                {
                    title: 'Banks meeting RBI BCP rules',
                    body: 'Align backup, disaster recovery and continuity controls with regulatory expectations and operational risk.',
                },
                {
                    title: 'Fintech with 24×7 uptime needs',
                    body: 'Recover payment, lending and risk platforms quickly while protecting customer data and service availability.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Recovery Readiness to Continuous Proof',
            description:
                'A practical route from understanding your recovery objectives to testing them until they become operational muscle memory.',
            steps: [
                { step: 'Risk & RTO/RPO Workshop', body: 'Identify critical services, data dependencies, business impact and the recovery objectives each workload must meet.' },
                { step: 'Backup Architecture', body: 'Design immutable, air-gapped and geographically resilient backup layers around your most important systems.' },
                { step: 'Deployment', body: 'Configure backup, disaster-recovery and cloud-DR platforms with secure access, monitoring and clear ownership.' },
                { step: 'Recovery Drill', body: 'Run a controlled recovery exercise to validate the runbook, timings, dependencies and team responsibilities.' },
                { step: 'Continuous Testing', body: 'Repeat drills, review evidence and improve the recovery plan as your environment and threats change.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Diagnostic lab chain recovers after ransomware attack',
            client: 'Diagnostic lab chain',
            headline: '6 TB of patient data restored in 3 hours',
            challenge: 'Diagnostic lab chain hit by ransomware.',
            solution: 'Immutable backups with tested runbook.',
            result: '6 TB of patient data restored in 3 hours; no ransom paid.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Build Recovery Before You Need It',
            description: 'Practical guidance for designing, testing and proving cyber resilience in regulated environments.',
            posts: [
                {
                    slug: '3-2-1-1-0-backup-rule-ransomware',
                    category: 'Aegis360 · Resilience',
                    title: '3-2-1-1-0: The Backup Rule Ransomware Can’t Beat',
                    excerpt: 'The layered backup principle that keeps a clean recovery path available even when attackers target your primary systems and backups.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
                {
                    slug: 'rto-vs-rpo-hospital-administrators',
                    category: 'Aegis360 · Disaster Recovery',
                    title: 'RTO vs RPO for Hospital Administrators',
                    excerpt: 'A clear way to set recovery objectives around patient care, clinical systems and the operational realities of a hospital.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: 'why-attackers-delete-your-backups-first',
                    category: 'Aegis360 · Ransomware',
                    title: 'Why Attackers Delete Your Backups First',
                    excerpt: 'Understand how ransomware operators target recovery infrastructure and which controls keep your last good copy safe.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Would Your Organisation Recover in Hours or Days?',
            body: 'Share your critical systems and recovery targets. We’ll score your readiness and show you the backup, DR and testing improvements that matter most.',
            button: 'Get a Free Recovery Readiness Score',
        },
        seo: {
            title: 'ResilienceVault — Backup & Disaster Recovery | Aegis360 — Networsys',
            description: 'Immutable backups, tested recovery plans, disaster recovery architecture and continuous recovery drills for hospitals, banks and 24×7 fintech teams.',
        },
    },
    {
        slug: 'secure-ai-infrastructure',
        solutionSlug: 'neuralcore',
        parentName: 'NeuralCore',
        label: 'NeuralCore',
        title: 'AI Infrastructure That Passes the Audit.',
        paragraph:
            'Regulated industries can\u2019t run AI on infrastructure that fails DPDP, RBI or HIPAA scrutiny. We harden every layer \u2014 physical, network, platform and data \u2014 and produce the evidence auditors want.',
        cta: 'Book a Compliance Gap Review',
        visual: 'gpu',
        included: {
            eyebrow: "What's included",
            title: 'Hardened AI Infrastructure, Layer by Layer',
            description:
                'Security and compliance built into the stack \u2014 with the documentation auditors expect to see.',
            items: [
                'Zero-trust segmentation for AI clusters',
                'Encryption at rest, in transit and in use (confidential computing)',
                'Identity & access for GPU platforms',
                'DPDP Act 2023, RBI IT Framework, HIPAA & ISO 27001 mapping',
                'Audit-ready documentation & runbooks',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'For Regulated Teams Under Audit Pressure',
            description:
                'When your AI environment has to satisfy regulators, not just engineering.',
            chips: [
                {
                    title: 'Banks',
                    body: 'Facing RBI IT audits with AI environments that need segmentation, logging and evidence.',
                },
                {
                    title: 'Hospitals',
                    body: 'Handling patient data on AI infrastructure that must meet HIPAA and DPDP residency and protection rules.',
                },
                {
                    title: 'Fintechs',
                    body: 'Seeking SOC 2 / ISO 27001 assurance for AI platforms that process sensitive financial data.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Gap Assessment to a Clean Audit',
            description: 'A structured path that turns an exposed AI environment into audit-ready infrastructure.',
            steps: [
                { step: 'Gap Assessment', body: 'Review the AI environment against DPDP, RBI IT Framework, HIPAA and ISO 27001 controls to find exposure.' },
                { step: 'Control Design', body: 'Design zero-trust segmentation, encryption, identity and access controls mapped to each requirement.' },
                { step: 'Hardening', body: 'Implement micro-segmentation, HSM-backed keys, confidential computing and full access logging.' },
                { step: 'Evidence Pack', body: 'Compile audit-ready documentation, control mappings and operational runbooks.' },
                { step: 'Audit Support', body: 'Stand with your team through the audit, answering findings with the evidence pack in hand.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Cooperative bank clears RBI audit on AI environment',
            client: 'Cooperative bank',
            headline: 'RBI audit cleared with zero major findings',
            challenge: 'Auditor flagged an unsegmented AI environment at a cooperative bank.',
            solution: 'Micro-segmentation, HSM-backed keys and full access logging deployed across the AI cluster.',
            result: 'RBI audit cleared with zero major findings.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Read Before Your Next Audit',
            description: 'Practical notes on securing and documenting AI infrastructure for regulated industries.',
            posts: [
                {
                    slug: 'dpdp-act-and-ai-infrastructure',
                    category: 'NeuralCore · Compliance',
                    title: 'DPDP Act and AI Infrastructure',
                    excerpt: 'What the Digital Personal Data Protection Act means for AI clusters \u2014 and the controls that keep you on the right side of it.',
                    date: 'Aug 2026',
                    readTime: '6 min read',
                },
                {
                    slug: 'confidential-computing-for-bankers',
                    category: 'NeuralCore · Confidential Computing',
                    title: 'Confidential Computing for Bankers',
                    excerpt: 'How encryption-in-use and confidential computing protect sensitive models and data \u2014 explained for financial-services teams.',
                    date: 'Jul 2026',
                    readTime: '7 min read',
                },
                {
                    slug: 'ways-ai-clusters-fail-security-audits',
                    category: 'NeuralCore · Security',
                    title: '5 Ways AI Clusters Fail Security Audits',
                    excerpt: 'The most common audit findings on AI infrastructure \u2014 and how to close them before the auditor arrives.',
                    date: 'Jun 2026',
                    readTime: '5 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Facing an Audit? Let\u2019s Close the Gaps.',
            body: 'Tell us your regulator and your AI environment. We\u2019ll run a compliance gap review and hand you the evidence pack auditors want to see.',
            button: 'Book a Compliance Gap Review',
        },
        seo: {
            title: 'Secure & Compliant AI Infrastructure | NeuralCore — Networsys',
            description: 'Zero-trust segmentation, encryption at rest/in transit/in use, identity & access, and DPDP, RBI, HIPAA and ISO 27001 mapping with audit-ready documentation for banks, hospitals and fintechs.',
        },
    },
    {
        slug: 'web-platforms',
        solutionSlug: 'appmind',
        parentName: 'AppMind',
        label: 'AppMind',
        title: 'Web Applications That Learn From Every Click.',
        paragraph:
            'Custom web platforms, portals and SaaS products with AI features baked in — from smart dashboards to automated workflows.',
        cta: 'Discuss Your Platform',
        visual: 'phone',
        included: {
            eyebrow: "What's included",
            title: 'Web Products Built to Learn, Scale and Work Harder',
            description:
                'From customer portals to enterprise SaaS, we build secure web platforms that turn complex workflows into intelligent digital experiences.',
            items: [
                'Custom web apps (React, Next.js, Node, Laravel / PHP)',
                'Customer & partner portals',
                'SaaS product engineering',
                'WordPress & Shopify enterprise builds',
                'AI-driven personalisation & search',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Web Platforms for High-Trust Industries',
            description:
                'Give customers, partners and internal teams faster, smarter ways to complete the work that keeps your business moving.',
            chips: [
                {
                    title: 'NBFC loan portals',
                    body: 'Simplify applications, document collection and verification with secure journeys that help lending teams move faster.',
                },
                {
                    title: 'Hospital management portals',
                    body: 'Connect patients, clinicians and administrators through dependable workflows built around the realities of healthcare delivery.',
                },
                {
                    title: 'Bank partner platforms',
                    body: 'Give distributors and partners a trusted digital workspace for onboarding, servicing, reporting and collaboration.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Workflow Friction to a Platform Teams Rely On',
            description: 'A focused delivery path that turns your most important workflow into a secure, measurable web product.',
            steps: [
                { step: 'Discovery', body: 'Map users, workflows, business outcomes, integrations and the AI opportunities worth pursuing.' },
                { step: 'Architecture', body: 'Define the platform foundation, data flows, security boundaries and technical roadmap for scale.' },
                { step: 'Agile Build', body: 'Deliver the product in focused sprints with working releases, regular demos and transparent priorities.' },
                { step: 'QA & Security', body: 'Validate usability, performance, accessibility and security before the platform reaches customers or partners.' },
                { step: 'Launch', body: 'Deploy with observability, documentation and a release plan that keeps the transition controlled.' },
                { step: 'Iterate', body: 'Use analytics, feedback and new AI opportunities to improve the platform after launch.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'NBFC turns manual KYC into a same-day lending workflow',
            client: 'NBFC lending team',
            headline: 'Loan applications move from days to hours',
            challenge: 'Manual KYC took 3 days per loan application.',
            solution: 'Next.js portal with AI document extraction and verification rules.',
            result: '3 days → 4 hours; incomplete files down to 8%.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Build a Web Platform That Gets Smarter Over Time',
            description: 'Practical guidance for choosing a web stack, adding useful AI and building dependable digital platforms for regulated teams.',
            posts: [
                {
                    slug: 'nextjs-vs-laravel-for-fintech-portals',
                    category: 'AppMind · Web Engineering',
                    title: 'Next.js vs Laravel for Fintech Portals',
                    excerpt: 'A practical comparison of two proven stacks for secure, scalable fintech portals and the teams that build them.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: 'adding-ai-search-to-your-web-app-in-30-days',
                    category: 'AppMind · Applied AI',
                    title: 'Adding AI Search to Your Web App in 30 Days',
                    excerpt: 'How to scope, design and ship a useful AI search experience without turning your first release into a research project.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
                {
                    slug: 'headless-wordpress-for-hospitals',
                    category: 'AppMind · Web Platforms',
                    title: 'Headless WordPress for Hospitals',
                    excerpt: 'Where a headless content platform can improve hospital publishing, performance and integration flexibility.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Have a Web Platform in Mind?',
            body: 'Tell us about the workflow, users and AI features you want to improve. We’ll map the right architecture, delivery path and next release.',
            button: 'Discuss Your Platform',
        },
        seo: {
            title: 'Web Platform Development — AppMind | Networsys',
            description: 'Build custom web platforms, portals and SaaS products with AI personalisation, search and automated workflows for fintech, hospitals and banks.',
        },
    },
    {
        slug: 'genai-integration',
        solutionSlug: 'appmind',
        parentName: 'AppMind',
        label: 'AppMind',
        title: 'Put an AI Assistant Inside Every Product.',
        paragraph:
            'LLM-powered chatbots, copilots, document intelligence and voice agents integrated into your existing apps — with your data, under your control.',
        cta: 'Book a GenAI Discovery Call',
        visual: 'phone',
        included: {
            eyebrow: "What's included",
            title: 'Useful AI, Embedded Where Work Happens',
            description:
                'From customer conversations to document-heavy operations, we connect practical AI capabilities to the systems your teams already use.',
            items: [
                'Chatbots & virtual assistants (web, WhatsApp, IVR)',
                'RAG over private documents',
                'Copilots inside CRM / HIS / core banking',
                'Document AI for KYC, claims & invoices',
                'Voice AI agents',
                { text: 'Private / on-prem LLM deployment', href: '/neuralcore', linkLabel: 'Explore NeuralCore' },
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'GenAI for High-Trust Customer and Operations Teams',
            description:
                'Start with a focused use case, keep sensitive data governed and make every interaction more useful.',
            chips: [
                {
                    title: 'Banks reducing call-centre load',
                    body: 'Give customers fast answers about balances, cards, policies and services while keeping conversations grounded in approved content.',
                },
                {
                    title: 'Hospitals automating patient queries',
                    body: 'Help patients find trusted answers about appointments, preparation and services without adding pressure to clinical teams.',
                },
                {
                    title: 'Fintech KYC automation',
                    body: 'Extract, verify and route identity documents faster with AI workflows that keep reviewers in control of important decisions.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From One High-Value Use Case to a Trusted AI Workflow',
            description: 'A measured path from discovery to production that keeps data, quality and user experience in view.',
            steps: [
                { step: 'Use-Case Discovery', body: 'Identify the workflow, audience and measurable outcome where an AI assistant can create immediate value.' },
                { step: 'Data & Guardrails', body: 'Map trusted sources, permissions, privacy boundaries, escalation paths and the guardrails your team needs.' },
                { step: 'Prototype', body: 'Build a focused assistant experience and test it with representative conversations, documents or calls.' },
                { step: 'Integration', body: 'Connect the assistant to your existing app, CRM, HIS, core banking or communication channel.' },
                { step: 'Evaluation & Launch', body: 'Measure answer quality, safety, adoption and business impact before a controlled production rollout.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Bank gives customers instant answers in two languages',
            client: 'Retail bank',
            headline: '41% reduction in call-centre volume',
            challenge: 'Bank call centre overwhelmed with balance and card queries.',
            solution: 'WhatsApp banking assistant in Hindi & English with RAG over policies.',
            result: '41% reduction in call-centre volume.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Build AI That People Can Trust',
            description: 'Practical guidance for embedding assistants, document intelligence and private models into regulated products.',
            posts: [
                {
                    slug: 'rag-explained',
                    category: 'AppMind · Applied AI',
                    title: 'RAG Explained',
                    excerpt: 'How retrieval-augmented generation helps an assistant answer from your approved documents instead of guessing.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
                {
                    slug: 'private-llm-vs-chatgpt-api-for-banks',
                    category: 'AppMind · Private AI',
                    title: 'Private LLM vs ChatGPT API for Banks',
                    excerpt: 'A practical way for banking teams to compare control, privacy, cost and capability when choosing an LLM deployment model.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: 'building-a-hindi-first-ai-assistant',
                    category: 'AppMind · Conversational AI',
                    title: 'Building a Hindi-First AI Assistant',
                    excerpt: 'What it takes to design, evaluate and launch a useful Hindi-first assistant for customers and frontline teams.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Have an AI Use Case in Mind?',
            body: 'Tell us what your customers or teams need to do faster. We’ll help you choose the right model, data approach and integration path for a useful first release.',
            button: 'Book a GenAI Discovery Call',
        },
        seo: {
            title: 'GenAI Integration & AI Assistants — AppMind | Networsys',
            description: 'Integrate chatbots, copilots, RAG, Document AI and voice agents into regulated products with your data under your control.',
        },
    },
    {
        slug: 'launchpad-mvp',
        solutionSlug: 'appmind',
        parentName: 'AppMind',
        label: 'AppMind',
        title: 'Idea Monday. Live Product in 8 Weeks.',
        paragraph:
            'A fixed-scope, fixed-price sprint that takes a validated idea to a working MVP with real users — perfect for startups and innovation teams inside banks and hospitals.',
        cta: 'Apply for a LaunchPad Sprint',
        visual: 'phone',
        included: {
            eyebrow: "What's included",
            title: 'A Focused Eight-Week Path from Idea to MVP',
            description:
                'Every week has a clear outcome, so your team can move from validated idea to a live product without scope creep.',
            items: [
                'Weeks 1–2 — Discovery & clickable prototype',
                'Weeks 3–6 — Build the core features only',
                'Week 7 — Testing & security scan',
                'Week 8 — Launch & analytics setup',
                'Optional growth retainer after launch',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Built for Teams That Need to Prove the Idea Quickly',
            description:
                'LaunchPad gives ambitious teams a disciplined route to real user feedback, investor proof and a foundation worth building on.',
            chips: [
                {
                    title: 'Health-tech & fintech startups',
                    body: 'Turn a validated idea into a working product that can support user testing, investor demos and an early market launch.',
                },
                {
                    title: 'Bank innovation labs',
                    body: 'Prototype and validate new customer or operations experiences without waiting for a full enterprise delivery cycle.',
                },
                {
                    title: 'Hospital digital initiatives',
                    body: 'Test a focused patient, clinician or operations workflow with a secure MVP built around real-world needs.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'Eight Weeks. One Working Product.',
            description: 'A fixed-scope sprint designed to keep decisions fast, delivery focused and the first release useful.',
            steps: [
                { step: 'Weeks 1–2', body: 'Discovery, prioritisation and a clickable prototype that aligns users, outcomes and scope.' },
                { step: 'Weeks 3–6', body: 'Build the core features only, with weekly demos and fast feedback from your team.' },
                { step: 'Week 7', body: 'Run QA, usability checks and a security scan before the product goes live.' },
                { step: 'Week 8', body: 'Launch to real users, connect analytics and establish the learning loop for what comes next.' },
                { step: 'After Launch', body: 'Continue with an optional growth retainer for experiments, improvements and the next release.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Health-tech startup turns an investor demo into a live product',
            client: 'Health-tech startup',
            headline: 'A working tele-consult MVP in 7 weeks',
            challenge: 'Health-tech startup needed a demo for investors.',
            solution: 'Tele-consult MVP built in 7 weeks.',
            result: 'Seed round raised.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Build Less. Learn Faster.',
            description: 'Practical guidance for choosing the right MVP scope, delivery model and next step after launch.',
            posts: [
                {
                    slug: 'what-to-leave-out-of-your-mvp',
                    category: 'AppMind · Product Strategy',
                    title: 'What to Leave Out of Your MVP',
                    excerpt: 'A sharper MVP is not a smaller version of the whole roadmap. Learn how to protect the core user outcome and leave distractions for later.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
                {
                    slug: 'fixed-price-mvps-without-scope-creep',
                    category: 'AppMind · Delivery',
                    title: 'Fixed-Price MVPs Without Scope Creep',
                    excerpt: 'How to make a fixed-price product sprint predictable while keeping the decisions, trade-offs and release criteria clear.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: 'from-mvp-to-series-a',
                    category: 'AppMind · Growth',
                    title: 'From MVP to Series A',
                    excerpt: 'What to measure after launch, which signals matter to investors and how to turn early user learning into the next product stage.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Ready to Turn the Idea into Evidence?',
            body: 'Bring us your validated idea, target users and must-have outcome. We’ll shape the scope, timeline and fixed-price LaunchPad sprint.',
            button: 'Apply for a LaunchPad Sprint',
        },
        seo: {
            title: 'LaunchPad MVP in 8 Weeks — AppMind | Networsys',
            description: 'Take a validated idea to a working MVP with real users in a fixed-scope, fixed-price eight-week sprint for startups, banks and hospitals.',
        },
    },
    {
        slug: 'secure-engineering',
        solutionSlug: 'appmind',
        parentName: 'AppMind',
        label: 'AppMind',
        title: 'Security Built In. Not Bolted On.',
        paragraph:
            "Every AppMind product ships through Aegis360's secure SDLC — threat modelling, code scanning, pen-testing and compliance checks before launch.",
        cta: 'Get a Secure Build Quote',
        visual: 'phone',
        included: {
            eyebrow: "What's included",
            title: 'Security Practices That Travel with Every Release',
            description:
                'Build with security in the workflow from the first architecture decision to the final compliance sign-off.',
            items: [
                'Threat modelling & secure architecture',
                'SAST / DAST / SCA in CI/CD',
                'Pre-launch penetration test',
                'OWASP ASVS / MASVS alignment',
                'DPDP / HIPAA / PCI data handling',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Secure Product Delivery for High-Trust Teams',
            description:
                'Give security, product and engineering teams a shared path to launch with confidence.',
            chips: [
                {
                    title: 'Fintech apps facing bank audits',
                    body: 'Build the controls and evidence needed to clear partner-bank security reviews without late-stage surprises.',
                },
                {
                    title: 'Hospital apps with patient data',
                    body: 'Protect sensitive patient journeys with privacy-aware architecture, secure development and tested release controls.',
                },
                {
                    title: 'Bank customer-facing platforms',
                    body: 'Ship dependable digital experiences with security checks designed into every feature, integration and deployment.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Threat Model to Confident Launch',
            description: 'A practical secure SDLC that makes security visible, repeatable and accountable across the build.',
            steps: [
                { step: 'Threat Model', body: 'Map users, data flows, trust boundaries and likely abuse cases before implementation begins.' },
                { step: 'Secure Design', body: 'Turn findings into resilient architecture, access controls, privacy boundaries and secure coding decisions.' },
                { step: 'Scanned Builds', body: 'Run SAST, DAST and software-composition checks in CI/CD so issues surface while they are still easy to fix.' },
                { step: 'Pen-Test', body: 'Test the release against real attack paths, remediate findings and verify the fixes before launch.' },
                { step: 'Compliance Sign-off', body: 'Review evidence and data handling against the relevant OWASP, DPDP, HIPAA or PCI requirements.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Fintech app clears a partner bank review on the first attempt',
            client: 'Fintech product team',
            headline: 'Cleared third-party audit on first attempt',
            challenge: "Fintech app failed a partner bank's security review twice.",
            solution: 'Rebuilt through secure SDLC with pre-launch pen-test.',
            result: 'Cleared third-party audit on first attempt.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Ship Secure Features Without Slowing Delivery',
            description: 'Practical guidance for making application security part of the product rhythm, not a final gate.',
            posts: [
                {
                    slug: 'secure-sdlc-practical-guide',
                    category: 'AppMind · Secure Engineering',
                    title: 'Secure SDLC: A Practical Guide',
                    excerpt: 'A clear framework for bringing threat modelling, automated scans and security testing into everyday product delivery.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: '10-security-bugs-every-mobile-app',
                    category: 'AppMind · Mobile Security',
                    title: '10 Security Bugs We Find in Every Mobile App',
                    excerpt: 'The recurring mobile security weaknesses that teams can catch earlier with better design, testing and release discipline.',
                    date: 'Coming soon',
                    readTime: '8 min read',
                },
                {
                    slug: 'devsecops-for-small-teams',
                    category: 'AppMind · DevSecOps',
                    title: 'DevSecOps for Small Teams',
                    excerpt: 'How lean engineering teams can add meaningful security checks to CI/CD without creating a heavyweight process.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Ready to Build Security In from Day One?',
            body: 'Tell us about your product, data and audit requirements. We’ll map the secure build path and the checks needed before launch.',
            button: 'Get a Secure Build Quote',
        },
        seo: {
            title: 'Secure Engineering & Secure SDLC — AppMind | Networsys',
            description: 'Threat modelling, SAST, DAST, SCA, penetration testing and compliance checks for secure fintech, hospital and banking applications.',
        },
    },
    {
        slug: 'experience-design',
        solutionSlug: 'appmind',
        parentName: 'AppMind',
        label: 'AppMind',
        title: 'Design That Users Feel and Businesses Measure.',
        paragraph:
            'Research-driven UI/UX for complex products — dashboards, patient journeys, trading screens — that stay simple to use.',
        cta: 'Request a Free UX Audit',
        visual: 'phone',
        included: {
            eyebrow: "What's included",
            title: 'Clarity for Complex Digital Experiences',
            description:
                'We turn complicated workflows into clear, accessible experiences that help people move confidently and help teams measure what improves.',
            items: [
                'User research & journey mapping',
                'Wireframes & interactive prototypes (Figma)',
                'Design systems',
                'Accessibility (WCAG)',
                'Usability testing',
                'Conversion optimisation',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Experience Design for High-Trust Products',
            description:
                'Make important digital journeys easier to understand, easier to complete and easier to improve over time.',
            chips: [
                {
                    title: 'Fintech onboarding flows',
                    body: 'Reduce friction across identity, KYC and application journeys while making every step feel trustworthy and clear.',
                },
                {
                    title: 'Hospital patient journeys',
                    body: 'Help patients find care, book appointments and understand what happens next without adding pressure to clinical teams.',
                },
                {
                    title: 'Bank dashboards',
                    body: 'Give customers and relationship teams a calmer way to understand complex financial information and take action.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From Observed Behaviour to Better Outcomes',
            description:
                'A collaborative design process grounded in real user needs, tested interaction patterns and a system your team can keep using.',
            steps: [
                { step: 'Research', body: 'Understand users, business goals, existing behaviour and the moments where the current experience breaks down.' },
                { step: 'Wireframe', body: 'Shape the information architecture and core flows into focused, low-friction wireframes.' },
                { step: 'Prototype', body: 'Create a realistic Figma prototype that brings the key journey to life before development begins.' },
                { step: 'Test', body: 'Observe representative users, validate assumptions and refine the experience around what they actually do.' },
                { step: 'Design System', body: 'Document reusable components, states and patterns so future releases stay consistent and efficient.' },
                { step: 'Handover', body: 'Equip engineering with clear specs, assets and context, then stay close through implementation.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Hospital makes OPD booking feel simple from the first tap',
            client: 'Hospital digital team',
            headline: 'A clearer booking journey patients complete',
            challenge: 'Hospital OPD booking flow abandoned by half of users.',
            solution: 'Redesigned 3-step booking with clear status.',
            result: 'Completion rate up 48%.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Design Experiences People Can Trust',
            description:
                'Practical guidance for making complex fintech, healthcare and banking products easier to use and easier to grow.',
            posts: [
                {
                    slug: 'ux-for-fintech-designing-trust',
                    category: 'AppMind · Experience Design',
                    title: 'UX for Fintech: Designing Trust',
                    excerpt: 'The interface decisions that help people feel confident when they are sharing sensitive information or making financial decisions.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
                {
                    slug: 'accessibility-in-healthcare-apps',
                    category: 'AppMind · Accessibility',
                    title: 'Accessibility in Healthcare Apps',
                    excerpt: 'How inclusive interaction patterns make patient journeys clearer, safer and more usable for everyone.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: 'design-systems-that-ship-faster',
                    category: 'AppMind · Design Systems',
                    title: 'Design Systems That Ship Faster',
                    excerpt: 'Build a shared design language that gives product and engineering teams more consistency without slowing down delivery.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Is Your Product Clear at the Moment It Matters?',
            body: 'Share a journey, screen or workflow that feels harder than it should. We’ll identify the friction and show you where thoughtful design can improve the outcome.',
            button: 'Request a Free UX Audit',
        },
        seo: {
            title: 'Experience Design & UI/UX — AppMind | Networsys',
            description: 'Research-driven UI/UX for fintech, healthcare and banking products, including journey mapping, Figma prototyping, design systems, WCAG accessibility and usability testing.',
        },
    },
    {
        slug: 'mobile-apps',
        solutionSlug: 'appmind',
        parentName: 'AppMind',
        label: 'AppMind',
        title: 'Native Speed. AI Brains. Bank-Grade Security.',
        paragraph:
            'Android, iOS and cross-platform apps with embedded AI — recommendations, chat, OCR, biometrics — engineered for high-trust industries.',
        cta: 'Get a Free App Estimate',
        visual: 'phone',
        included: {
            eyebrow: "What's included",
            title: 'Mobile Experiences Built for Trust and Momentum',
            description:
                'From the first prototype to post-launch growth, we build secure mobile products that feel fast, intelligent and dependable.',
            items: [
                'Native (Kotlin / Swift) & cross-platform (Flutter / React Native)',
                'On-device AI & ML Kit integration',
                'Biometric & MFA login',
                'Offline-first architecture',
                'App Store / Play Store launch',
                'Post-launch analytics & growth',
            ],
        },
        audience: {
            eyebrow: "Who it's for",
            title: 'Mobile Products for High-Trust Industries',
            description:
                'Give customers and care teams a secure, intuitive mobile experience built around the workflows that matter most.',
            chips: [
                {
                    title: 'Fintech lending & payment apps',
                    body: 'Ship faster lending and payment journeys with biometrics, intelligent recommendations and secure transaction flows.',
                },
                {
                    title: 'Hospital patient apps',
                    body: 'Make appointments, symptom guidance and patient communication easier to access from one trusted mobile experience.',
                },
                {
                    title: 'Bank customer apps',
                    body: 'Build dependable banking journeys with strong identity controls, useful AI and security designed into every screen.',
                },
            ],
        },
        process: {
            eyebrow: 'Our process',
            title: 'From First Sketch to a Growing Mobile Product',
            description: 'A focused delivery path that balances experience, intelligence, security and measurable adoption.',
            steps: [
                { step: 'Discovery', body: 'Clarify user needs, business outcomes, integrations, device targets and security requirements.' },
                { step: 'UX Prototype', body: 'Turn the core journey into a clickable prototype and validate the experience before development.' },
                { step: 'Build', body: 'Develop the app with the right native or cross-platform foundation, embedded AI and reliable backend integrations.' },
                { step: 'Security Test', body: 'Test authentication, data handling, APIs and mobile attack surfaces before release.' },
                { step: 'Store Launch', body: 'Prepare listings, compliance details and release builds for the App Store and Google Play.' },
                { step: 'Growth', body: 'Use analytics and user feedback to improve activation, retention and the next release roadmap.' },
            ],
        },
        successStory: {
            eyebrow: 'Success story',
            title: 'Hospital moves phone bookings into a patient-first app',
            client: 'Hospital group',
            headline: 'A simpler booking journey that patients chose to use',
            challenge: 'Hospital wanted to reduce phone bookings.',
            solution: 'Patient app with AI symptom triage and appointment booking.',
            result: '62% of bookings moved to app; 4.7★ rating in 3 months.',
        },
        insights: {
            eyebrow: 'Related insights',
            title: 'Make Your Mobile Product Smarter from Day One',
            description: 'Practical guidance for choosing a mobile stack, embedding AI and meeting the security expectations of regulated industries.',
            posts: [
                {
                    slug: 'flutter-vs-react-native-vs-native-2026',
                    category: 'AppMind · Mobile Engineering',
                    title: 'Flutter vs React Native vs Native in 2026',
                    excerpt: 'A practical comparison of mobile stacks for teams balancing speed, native performance, maintainability and product ambition.',
                    date: 'Coming soon',
                    readTime: '7 min read',
                },
                {
                    slug: 'on-device-ai-in-mobile-apps',
                    category: 'AppMind · Mobile AI',
                    title: 'On-Device AI in Mobile Apps',
                    excerpt: 'Where on-device intelligence fits, how it protects privacy and what it unlocks for responsive mobile experiences.',
                    date: 'Coming soon',
                    readTime: '6 min read',
                },
                {
                    slug: 'getting-your-banking-app-through-rbi-security-review',
                    category: 'AppMind · Banking Security',
                    title: 'Getting Your Banking App Through RBI Security Review',
                    excerpt: 'The security, privacy and evidence questions to address before your banking app reaches review and release.',
                    date: 'Coming soon',
                    readTime: '8 min read',
                },
            ],
        },
        finalCta: {
            headline: 'Have a Mobile Product in Mind?',
            body: 'Share your idea, target platforms and must-have AI features. We’ll give you a clear estimate, delivery path and honest recommendation on the right build approach.',
            button: 'Get a Free App Estimate',
        },
        seo: {
            title: 'Mobile App Development — AppMind | Networsys',
            description: 'Build Android, iOS and cross-platform apps with embedded AI, biometrics, MFA and bank-grade security for fintech, hospitals and banks.',
        },
    },
];

// Lookup by full path (e.g. '/neuralcore/data-center-architecture').
export const getServiceDetail = (path) =>
    SERVICE_DETAILS.find((d) => `/${d.solutionSlug}/${d.slug}` === path);

// Sibling pages within the same solution (excludes the current page).
// Falls back to the parent solution's capability list so the
// "More in this solution" row always has links even before a page has full content.
export const getSiblings = (solutionSlug, currentSlug) => {
    const sameSolution = SERVICE_DETAILS.filter(
        (d) => d.solutionSlug === solutionSlug && d.slug !== currentSlug,
    );
    if (sameSolution.length) return sameSolution;

    const parent = SOLUTIONS[solutionSlug];
    if (!parent) return [];
    return parent.capabilities
        .filter((c) => c.slug !== currentSlug)
        .map((c) => ({ slug: c.slug, solutionSlug, parentName: parent.name, title: c.title, body: c.body }));
};

// Resolve the 3 related-insight posts for a page: explicit posts, else
// INSIGHTS_POSTS tagged with the solution, else the first 3 posts.
export const resolveInsights = (solutionSlug, posts) => {
    if (posts && posts.length) return posts.slice(0, 3);
    const tagged = INSIGHTS_POSTS.filter((p) => p.solutionSlug === solutionSlug);
    if (tagged.length >= 3) return tagged.slice(0, 3);
    return (tagged.length ? tagged : INSIGHTS_POSTS).concat(INSIGHTS_POSTS).slice(0, 3);
};

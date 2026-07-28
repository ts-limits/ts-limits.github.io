/* =====================================================================
   TS-LIMITS @ NeurIPS'26 — SITE CONTENT
   ---------------------------------------------------------------------
   Edit this file to update the site. No HTML knowledge required.
   The page reads this object and fills in every section automatically.
   Keep the quotes and commas exactly as shown.
   ===================================================================== */

const CONTENT = {

  /* ---- Countdown target: submission deadline ----
     Format: year, month (1-12), day, hour (24h), minute — in AoE (UTC-12). */
  deadline: { year: 2026, month: 8, day: 29, hour: 23, minute: 59 },

  /* ---- Banner overlay ---- */
  meta: [
    { k: "Venue",            v: "NeurIPS 2026 @ Paris" },
    { k: "Format",           v: "One-day workshop" },
    { k: "Submissions open", v: "Aug 10" }
  ],
  countdownLabel: "Submission deadline<br>Aug 29, 2026",

  /* ---- 01 · The challenge (each string is one paragraph) ---- */
  about: [
    "Machine learning models excel under ideal conditions — an abundance of i.i.d. data and unlimited energy, memory, and time budgets. Real-world deployment imposes severe constraints on computational resources, latency, available supervision, and energy consumption, and models must maintain robust generalization under these constraints to reach acceptable real-world performance.",
    "Time series amplify the difficulty. Temporal dependencies violate independence assumptions, multi-scale patterns span diverse horizons, and non-stationarity shifts statistical properties unpredictably, rendering historically trained models potentially obsolete. Memory becomes a critical bottleneck both at the system level, where long sequences strain the memory hierarchy, and at the algorithmic level, where models must selectively retain, forget, or transfer temporal information.",
    "<span class='em'>A paradox sits at the center of the field.</span> Foundation models for time series — TimeGPT, Time-LLM, Chronos, Lag-Llama — show striking zero- and few-shot generalization, but their billions of parameters and memory footprints are fundamentally incompatible with edge deployment. The models with the strongest generalization are precisely the ones that cannot run where generalization is needed most. TS-LIMITS seeks approaches that deliver foundation-model-level generalization within real-world deployment constraints."
  ],

  /* ---- 02 · Where the constraints bite ---- */
  domainsIntro: "The same constraints recur across domains: privacy prevents sharing data across sites for retraining, memory limits the historical context that can be retained, and latency rules out expensive online adaptation. The coupling is stronger for streaming time series — where non-stationarity and concept drift interact — than for static vision or language, where the distribution is more stable at inference time.",
  domains: [
    { title: "Telecommunications",   text: "Radio stations predicting handover failures from signal time series in under 10 ms, with minimal labels, under privacy and energy budgets." },
    { title: "Healthcare monitoring", text: "Wearables detecting arrhythmias or hypoglycemic episodes under tight memory and power limits, without transmitting patient data." },
    { title: "Industrial IoT",        text: "Predictive maintenance spotting early fault signatures from vibration or temperature sensors, with few labeled failures, on edge hardware." },
    { title: "Finance",               text: "Scarce samples of rare market events and non-stationary regimes driving distribution shift, under strict privacy on sensitive positions and strategies." }
  ],

  /* ---- 03 · Call for papers — five bottlenecks ----
     'title' may contain a <span class="letter">word</span> to accent a LIMITS keyword. */
  cfpIntro: "We invite work at the frontier of practical time-series deployment. Submissions should address one or more of the following critical bottlenecks.",
  bottlenecks: [
    { title: "Achieving sub-ms <span class='letter'>inference</span>",                       text: "Real-time systems impose strict latency constraints that render large foundation models unusable without dedicated optimization such as model compression or early-exit mechanisms." },
    { title: "Designing <span class='letter'>memory</span>-efficient architectures",          text: "Long sequences require storing extended contexts, intermediate activations, and key-value caches that exceed embedded-device budgets. Bounded-memory footprints, efficient attention, and selective retention policies are essential." },
    { title: "Learning with minimal supervision",                                             text: "High-quality labels are expensive, making reliable inference hard under scarce or noisy supervision. Self-supervised learning, pseudo-labeling, and unsupervised domain adaptation offer promising mitigation." },
    { title: "Preserving <span class='letter'>privacy</span> in temporal data",               text: "Privacy demands on-device inference without exposing raw user data. Differential privacy limits leakage from model updates, yet the accuracy degradation it introduces remains poorly understood." },
    { title: "Reducing environmental impact — <span class='letter'>sustainability</span>",    text: "In streaming and continuous monitoring, models are queried at high frequency over long horizons, accumulating substantial energy even when per-inference cost looks modest. Green-AI techniques for temporal architectures warrant dedicated study." }
  ],

  /* ---- 04 · Topics of interest ---- */
  topics: [
    "Model compression, pruning, quantization, and early-exit for time series",
    "Efficient attention and bounded-memory sequence architectures",
    "Selective retention, forgetting, and memory-augmented models",
    "Self-supervised and pseudo-labeled temporal representation learning",
    "Unsupervised and source-free domain adaptation for time series",
    "On-device, federated, and differentially private temporal learning",
    "Test-time and continual adaptation under non-stationarity and drift",
    "Green-AI, energy accounting, and carbon-aware inference",
    "Efficient or distilled time-series foundation models",
    "Benchmarks and evaluation for deployment-constrained settings"
  ],

  /* ---- 05 · Important dates ----
     'hl: true' highlights a row (the hard deadline). */
  dates: [
    { date: "Aug 10, 2026", what: "Submissions open",              tag: "OpenReview" },
    { date: "Aug 29, 2026", what: "Submission deadline",           tag: "Hard", hl: true },
    { date: "Sep 26, 2026", what: "Author notification",           tag: "Decisions" },
    { date: "Oct 24, 2026", what: "Camera-ready deadline",         tag: "Final" },
    { date: "Dec 2026",     what: "Workshop day · NeurIPS 2026",   tag: "Program" }
  ],
  datesNote: "All deadlines 23:59 AoE. Dates tentative — confirm on OpenReview.",

  /* ---- 06 · Submit ---- */
  submit: {
    heading: "Submit your work",
    text: "4 to 7 pages plus references, NeurIPS format, double-blind. Non-archival — recent and concurrent submissions welcome.",
    buttonLabel: "Open call on OpenReview →",
    buttonUrl: "#"   /* <-- paste the OpenReview link here when you have it */
  },

  /* ---- Keynote speakers ----
     photo: path to an image in the /speakers folder. Add your images there
     (e.g. speakers/gama.jpg). Leave the filename even before the image exists —
     a placeholder shows until you upload it.
     status: "confirmed" or "tentative" (shown as a small tag). */
  speakers: [
    {
      name: "João Gama",
      role: "Professor, University of Porto",
      photo: "speakers/gama.jpg",
      status: "confirmed",
      talk: "A Neuro-symbolic approach for explaining Rare Events",
      bio: "A leading figure in ML for dynamic and non-stationary environments, with 30+ years in data stream mining, concept drift detection, and adaptive learning; author of <i>Knowledge Discovery from Data Streams</i>. His talk presents a two-layer online architecture pairing unsupervised autoencoders (detecting outliers, drifts, anomalies, and failures) with supervised rule-based inference for human-interpretable explanations, shown on a real-world predictive-maintenance case study."
    },
    {
      name: "Thea Klæboe Aarrestad",
      role: "Assistant Professor, ETH Zurich / CERN",
      photo: "speakers/aarrestad.jpg",
      status: "confirmed",
      talk: "Machine Learning at the Edge of Scale and Speed",
      bio: "A pioneer in ultra-fast ML inference for real-time systems and a core contributor to hls4ml, enabling neural-network deployment on FPGAs with microsecond-level latency for the LHC trigger systems at CERN. Her talk covers low-power, low-latency inference — hardware-aware model design, quantization, sparsity, and HW–SW co-design for compact, energy-efficient AI."
    },
    {
      name: "Paolo Giudici",
      role: "Professor, University of Pavia",
      photo: "speakers/giudici.jpg",
      status: "confirmed",
      talk: "S.A.F.E. AI evaluation models for time series data",
      bio: "Originator of the Sustainability, Accuracy, Fairness, Explainability (S.A.F.E.) AI framework and a leading expert in explainable, trustworthy AI for high-stakes domains. His talk presents a mathematically consistent approach to AI risk management grounded in the Lorenz Curve and Gini index, giving commensurable metrics applicable to any model and data type — from credit lending to medical imaging, judicial decisions, and cyber-risk detection."
    },
    {
      name: "Máire O’Neill",
      role: "Professor, Queen’s University Belfast",
      photo: "speakers/oneill.jpg",
      status: "tentative",
      talk: "",
      bio: "Fellow of the Royal Academy of Engineering, widely recognized for expertise in cryptography, hardware security, and post-quantum cryptography. Her work is a natural reference for privacy-preserving ML at the edge, where privacy and security must hold under strict computational and memory budgets."
    }
  ],

  /* ---- 07 · Organizers ----
     photo: path to an image in the /organizers folder (e.g. organizers/boisbunon.jpg).
     A placeholder with initials shows until you upload the image. */
  organizers: [
    { name: "Aurélie Boisbunon", aff: "Ericsson Research", photo: "organizers/boisbunon.jpg",
      bio: "AI Researcher applying ML to telecommunication data; brings firsthand experience with real-world deployment constraints. Ph.D. in Applied Mathematics, University of Rouen." },
    { name: "Rémi Emonet", aff: "Université de Lyon / Jean Monnet", photo: "organizers/emonet.jpg",
      bio: "Professor at Jean Monnet University and member of the Institut Universitaire de France. Works on Machine Learning, Optimal Transport, and Computer Vision." },
    { name: "Valerio Frascolla", aff: "Intel Germany", photo: "organizers/frascolla.jpg",
      bio: "Director of Research and Innovation at Intel. Expertise in wireless systems, HW-optimization of AI/ML, and standardization; 130+ publications and an extensive workshop-organization record." },
    { name: "Elisa Fromont", aff: "Université de Rennes / IRISA", photo: "organizers/fromont.jpg",
      bio: "Professor at Université de Rennes, leading the Inria MALT team (Machine Learning with Temporal Constraints). Extensive event-organization record across ECML PKDD, IDA, and ICML." },
    { name: "Fabio Bonassi", aff: "Uppsala University", photo: "organizers/bonassi.jpg",
      bio: "Postdoctoral researcher in Machine Learning (Ph.D., Politecnico di Milano). Focuses on deep learning for time series and dynamical-systems identification, including ECG classification." },
    { name: "June Sallou", aff: "Wageningen University", photo: "organizers/sallou.jpg",
      bio: "Assistant Professor in Sustainable Software Engineering, leading the Green Computing Track on making scientific software and AI systems more energy-efficient and environmentally responsible." }
  ],
  contactEmail: "aurelie.boisbunon@ericsson.com",

  /* ---- Tagline (shown in the organizers section footer) ---- */
  tagline: "The best time series models can’t run where they’re needed most — let’s fix that."
};

export interface PortfolioLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface MetricEvidence {
  label: string;
  value: string;
  context: string;
  evidenceHref: string;
}

export interface ProjectEvaluation {
  summary: string;
  metrics: MetricEvidence[];
}

export type ProjectVisual = "vigil" | "f1" | "pid" | "ctr";

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  discipline: string;
  period: string;
  summary: string;
  problem: string;
  contribution: string;
  architecture: string[];
  evaluation: ProjectEvaluation;
  limitations: string;
  stack: string[];
  links: PortfolioLink[];
  presentation: "primary" | "supporting";
  visual: ProjectVisual;
}

export interface BackgroundEntry {
  period: string;
  title: string;
  organization: string;
  detail: string;
  links?: PortfolioLink[];
}

export interface PortfolioContent {
  identity: {
    name: string;
    role: string;
    displayPhrase: string;
    statement: string;
    location: string;
    availability: string;
    actions: PortfolioLink[];
  };
  navigation: PortfolioLink[];
  projects: ProjectCaseStudy[];
  background: BackgroundEntry[];
  contact: {
    heading: string;
    note: string;
    email: string;
    location: string;
    availability: string;
    links: PortfolioLink[];
  };
}

const links = {
  resume: "/resumes/Venkateswara_Sahu_Applied_AI_Resume.pdf",
  github: "https://github.com/Venkateswara-Sahu",
  linkedin: "https://www.linkedin.com/in/venkateswara-sahu/",
  huggingFace: "https://huggingface.co/RiverStead",
  vigilRepository: "https://github.com/Venkateswara-Sahu/OWADD",
  vigilDocs: "https://venkateswara-sahu.github.io/OWADD/",
  vigilPackage: "https://pypi.org/project/vigil-drift/",
  f1Repository:
    "https://github.com/Venkateswara-Sahu/AI_Powered_Text-to-SQL_RAG_Chatbot",
  f1Demo: "https://huggingface.co/spaces/RiverStead/Text-to-SQL_RAG_Chatbot",
  pidRepository:
    "https://github.com/Venkateswara-Sahu/P-ID-Processing-MTO-Extraction-System",
  ctrRepository:
    "https://github.com/Venkateswara-Sahu/CTR_Predictor_and_Scorer",
  ctrDemo: "https://ctrpredictor.streamlit.app/",
} as const;

export const portfolioContent: PortfolioContent = {
  identity: {
    name: "Venkateswara Sahu",
    role: "Applied AI & Machine Learning Engineer",
    displayPhrase: "Make it measurable.",
    statement:
      "I build evaluated AI systems—from concept-drift monitoring to Text-to-SQL agents—with evidence you can inspect.",
    location: "Yanam, Andhra Pradesh, India",
    availability: "Open to full-time roles and relocation",
    actions: [
      { label: "Resume", href: links.resume },
      { label: "GitHub", href: links.github, external: true },
    ],
  },
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Case studies", href: "#case-studies" },
    { label: "About", href: "#about" },
    { label: "Resume", href: links.resume },
    { label: "GitHub", href: links.github, external: true },
    { label: "Contact", href: "#contact" },
  ],
  projects: [
    {
      id: "vigil",
      number: "01",
      title: "Vigil",
      discipline: "Concept drift · MLOps",
      period: "Jun–Sep 2026",
      summary:
        "A published drift-monitoring package with feature-error rankings and reproducible baseline evaluation.",
      problem:
        "Live ML inputs can drift before labels arrive, leaving teams without a direct signal that a model's operating conditions have changed.",
      contribution:
        "Built and published vigil-drift with adaptive and frozen autoencoders, reconstruction-error tests, feature-level attribution, a Kafka consumer, a FastAPI service, and an Airflow retraining workflow.",
      architecture: [
        "Train a baseline on normal, unlabeled observations.",
        "Compare adaptive and frozen autoencoder reconstruction signals.",
        "Run replicated statistical tests and kernel-density novelty checks.",
        "Rank feature-level reconstruction deltas when drift is detected.",
      ],
      evaluation: {
        summary:
          "The final bounded attribution study compared nine rankings across synthetic shifts and controlled CICIDS2017 development data. Results did not establish general superiority.",
        metrics: [
          {
            label: "Evaluation seeds",
            value: "20",
            context: "Final trained, untrained and input-control attribution study.",
            evidenceHref: links.vigilRepository,
          },
          {
            label: "Ranking methods",
            value: "9",
            context: "Reconstruction variants, input-change, KS and correlation baselines.",
            evidenceHref: links.vigilRepository,
          },
          {
            label: "Evaluation conditions",
            value: "24",
            context: "18 synthetic and 6 controlled real-data conditions; not attack detection.",
            evidenceHref: links.vigilRepository,
          },
        ],
      },
      limitations:
        "Training helped in some dependency conditions but did not consistently beat simple baselines. Controlled flow-feature injections are semi-synthetic, not causal explanations, held-out attack detection or production validation. No publication is claimed.",
      stack: [
        "Python",
        "PyTorch",
        "SciPy",
        "Kafka",
        "Airflow",
        "MLflow",
        "FastAPI",
      ],
      links: [
        { label: "Repository", href: links.vigilRepository, external: true },
        { label: "Documentation", href: links.vigilDocs, external: true },
        { label: "PyPI package", href: links.vigilPackage, external: true },
      ],
      presentation: "primary",
      visual: "vigil",
    },
    {
      id: "f1insightai",
      number: "02",
      title: "F1InsightAI",
      discipline: "Text-to-SQL · Retrieval",
      period: "Jan–May 2026",
      summary:
        "An evaluated agent workflow for asking natural-language questions across Formula 1 data in TiDB Cloud.",
      problem:
        "A large relational schema can overwhelm a language model with irrelevant context and produce invalid or unsafe SQL.",
      contribution:
        "Led the technical implementation for the TransOrg Analytics (Pickl.AI) × LPU industry project, building the nine-node LangGraph workflow, schema retrieval, SQL validation, error-guided retry path, Flask API, and public demo.",
      architecture: [
        "Classify the question and retrieve a focused sub-schema with FAISS.",
        "Generate read-only SQL from the retrieved tables and relationships.",
        "Execute against 14 TiDB tables and reflect on execution errors.",
        "Return the answer with SQL, results, and retrieval measurements visible.",
      ],
      evaluation: {
        summary:
          "The recorded 20-question benchmark included 18 SQL-generating questions and three documented schema-retrieval iterations.",
        metrics: [
          {
            label: "First-attempt SQL accuracy",
            value: "83.3%",
            context: "15 of 18 SQL-generating benchmark questions.",
            evidenceHref: links.f1Repository,
          },
          {
            label: "Schema-retrieval MRR",
            value: "0.12 → 0.67",
            context: "Average MRR across three recorded retrieval iterations.",
            evidenceHref: links.f1Repository,
          },
          {
            label: "Database scope",
            value: "700,000+",
            context: "Formula 1 records across 14 TiDB tables.",
            evidenceHref: links.f1Repository,
          },
        ],
      },
      limitations:
        "The recorded benchmark contained no retry cases, so it measures first-attempt behavior rather than recovery reliability. It is a bounded project evaluation, not evidence of service-scale performance.",
      stack: [
        "Python",
        "LangGraph",
        "FAISS",
        "TiDB Cloud",
        "Flask",
        "Docker",
      ],
      links: [
        { label: "Repository", href: links.f1Repository, external: true },
        { label: "Live demo", href: links.f1Demo, external: true },
      ],
      presentation: "primary",
      visual: "f1",
    },
    {
      id: "pid-intelligence",
      number: "03",
      title: "P&ID Intelligence",
      discipline: "Computer vision · Document AI",
      period: "Jul 2026",
      summary:
        "A document-intelligence prototype that turns P&ID drawings into reviewable Material Take-Off records.",
      problem:
        "Engineering drawings combine symbols, dense labels, and connecting lines that make full-image OCR noisy and manual extraction slow.",
      contribution:
        "Combined YOLOv8 symbol detection, connected-component-guided OCR, spatial graph matching, rule-based checks, optional LangGraph validation, and spreadsheet output in one reviewable pipeline.",
      architecture: [
        "Preprocess and tile uploaded PDF or image drawings.",
        "Detect symbols and isolate text-like connected components.",
        "Associate symbols and tags in a NetworkX spatial graph.",
        "Validate relationships and export reviewable MTO records.",
      ],
      evaluation: {
        summary:
          "A recorded project test compared the original full-image OCR path with connected-component-guided OCR on the project drawing setup.",
        metrics: [
          {
            label: "OCR processing",
            value: "~360s → 7s",
            context:
              "One project benchmark; timing varies by drawing size and hardware.",
            evidenceHref: links.pidRepository,
          },
          {
            label: "Validation path",
            value: "6 rules",
            context:
              "Checks cover tag completeness, uniqueness, loops, confidence, orphan nodes, and valve connections.",
            evidenceHref: links.pidRepository,
          },
        ],
      },
      limitations:
        "This is a prototype that requires human review. Detection depends on the symbol style used for training, small labels remain difficult, and it has not been evaluated on a representative industrial drawing corpus.",
      stack: [
        "Python",
        "YOLOv8",
        "Tesseract OCR",
        "NetworkX",
        "LangGraph",
        "FastAPI",
        "Streamlit",
      ],
      links: [
        { label: "Repository", href: links.pidRepository, external: true },
      ],
      presentation: "primary",
      visual: "pid",
    },
    {
      id: "ctr-predictor",
      number: "04",
      title: "CTR Predictor",
      discipline: "Tabular ML · Ranking",
      period: "Sep–Nov 2025",
      summary:
        "An academic ML pipeline for training, comparing, and serving click-through-rate models on Criteo display-ad data.",
      problem:
        "Sparse numerical and categorical advertising inputs need consistent feature engineering, evaluation, and ranking before they can support useful scoring decisions.",
      contribution:
        "Engineered 150 model features from 39 raw fields, tuned XGBoost and LightGBM with Optuna, compared offline results, and exposed scoring through Flask and Streamlit interfaces.",
      architecture: [
        "Prepare 13 integer and 26 categorical input fields.",
        "Generate 150 model features and tune two gradient-boosting models.",
        "Compare offline AUC, log loss, and ranking lift.",
        "Serve single and batch scoring through Flask and Streamlit.",
      ],
      evaluation: {
        summary:
          "The recorded experiment used 10 million Criteo rows split into 7 million training, 1 million validation, and 2 million test observations.",
        metrics: [
          {
            label: "XGBoost test AUC",
            value: "0.9067",
            context: "Compared with 0.9024 for LightGBM on the recorded split.",
            evidenceHref: links.ctrRepository,
          },
          {
            label: "Top-decile CTR lift",
            value: "265.6%",
            context: "Offline ranking analysis, not an online A/B test.",
            evidenceHref: links.ctrRepository,
          },
          {
            label: "Dataset",
            value: "10 million",
            context: "Criteo records using a documented 7M/1M/2M split.",
            evidenceHref: links.ctrRepository,
          },
        ],
      },
      limitations:
        "The results are offline academic measurements and do not demonstrate revenue or user impact. Exact reproduction needs the original data split, preprocessing settings, model artifacts, and random seeds.",
      stack: [
        "Python",
        "XGBoost",
        "LightGBM",
        "Optuna",
        "Flask",
        "Streamlit",
      ],
      links: [
        { label: "Repository", href: links.ctrRepository, external: true },
        { label: "Live demo", href: links.ctrDemo, external: true },
      ],
      presentation: "supporting",
      visual: "ctr",
    },
  ],
  background: [
    {
      period: "Jun–Sep 2026",
      title: "Creator and package author",
      organization: "Vigil · Open source",
      detail:
        "Published vigil-drift with regression tests, installation checks and GitHub Actions; added reproducible comparisons and documented attribution limitations.",
      links: [
        { label: "PyPI", href: links.vigilPackage, external: true },
        { label: "Documentation", href: links.vigilDocs, external: true },
      ],
    },
    {
      period: "Jan–May 2026",
      title: "Generative AI Intern",
      organization: "TransOrg Analytics (Pickl.AI) × LPU",
      detail:
        "Led the technical implementation of the F1InsightAI industry project and completed the academic submission as part of a group.",
      links: [
        { label: "Project", href: links.f1Repository, external: true },
      ],
    },
    {
      period: "Aug 2022–Jun 2026",
      title: "B.Tech (Hons.) Computer Science and Engineering",
      organization: "Lovely Professional University",
      detail:
        "Completed the Data Science and Data Engineering specialization with a CGPA of 8.38/10.",
    },
    {
      period: "Mar 2024–May 2026",
      title: "Seed money project lead",
      organization: "University startup evaluation",
      detail:
        "Secured INR 100,000 in university seed funding after presenting the concept, implementation roadmap, and budget to an academic panel.",
    },
  ],
  contact: {
    heading: "Build something we can measure.",
    note:
      "I am looking for full-time Applied AI and Machine Learning roles where evaluation and engineering matter.",
    email: "venkateswarsahu000@gmail.com",
    location: "Yanam, Andhra Pradesh, India",
    availability: "Open to relocation and remote opportunities",
    links: [
      {
        label: "Email",
        href: "mailto:venkateswarsahu000@gmail.com",
      },
      { label: "Resume", href: links.resume },
      { label: "LinkedIn", href: links.linkedin, external: true },
      { label: "GitHub", href: links.github, external: true },
      { label: "Hugging Face", href: links.huggingFace, external: true },
    ],
  },
};

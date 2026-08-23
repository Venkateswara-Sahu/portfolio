export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  badge: string;
  category: "GenAI & Agentic" | "MLOps & Systems" | "Computer Vision" | "Predictive ML";
  metrics: { label: string; value: string; detail: string }[];
  techStack: string[];
  features: string[];
  links: {
    github: string;
    demo?: string;
    docs?: string;
    pypi?: string;
  };
  featured: boolean;
  highlightColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: string; icon?: string }[];
}

export interface Milestone {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  tags: string[];
  badge?: string;
}

export interface ResumeTrack {
  id: string;
  title: string;
  icon: string;
  summary: string;
  highlightProjects: string[];
  primaryKeywords: string[];
  file: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Venkateswara Sahu",
    role: "Generative AI & MLOps Engineer",
    tagline: "Engineering Production-Grade Agentic Workflows, Zero-Label Drift Detection & High-Throughput ML Systems",
    bio: "B.Tech (Hons.) in CSE (Data Science & Data Engineering) graduate at Lovely Professional University (CGPA 8.38). Creator of 'vigil-drift' on PyPI, author of 9-node LangGraph self-correcting RAG systems, and recipient of university startup seed funding.",
    locations: ["Bengaluru", "Hyderabad", "Gurugram", "Remote"],
    status: "Actively interviewing for full-time roles",
    email: "venkateswarsahu000@gmail.com",
    github: "https://github.com/Venkateswara-Sahu",
    linkedin: "https://www.linkedin.com/in/venkateswara-sahu/",
    huggingface: "https://huggingface.co/RiverStead",
    vigilDocs: "https://venkateswara-sahu.github.io/OWADD/",
  },

  metrics: [
    { label: "TiDB Records Indexed", value: 700000, suffix: "+", detail: "Formula 1 1950–2024 database" },
    { label: "OCR Pipeline Speedup", value: 50, suffix: "x", detail: "~7s vs 360s baseline via CC-OCR" },
    { label: "Criteo Ad Interactions", value: 10, suffix: "M+", detail: "XGBoost/LightGBM AUC 0.9067" },
    { label: "Startup Seed Fund Won", value: 100, suffix: "k", prefix: "₹", detail: "Competitive AI startup award" },
    { label: "Published PyPI Package", value: 81, suffix: "%", detail: "CI Test Coverage for vigil-drift" },
  ],

  resumeTracks: [
    {
      id: "genai",
      title: "Generative AI & Agentic Systems",
      icon: "Bot",
      summary: "Specialized in LangGraph multi-node state graphs, schema RAG, tool calling, reflection loops, Groq/Llama/GPT OSS inference, and vector databases (FAISS, TiDB Cloud).",
      highlightProjects: ["F1InsightAI (Text-to-SQL)", "P&ID Graph Validator", "IntelliResearch"],
      primaryKeywords: ["LangGraph", "LangChain", "RAG", "FAISS", "Groq API", "Llama 3.3", "TiDB", "Prompt Engineering"],
      file: "/resumes/Venkateswara_Sahu_GenAI_Engineer.pdf",
    },
    {
      id: "mlops",
      title: "MLOps & Streaming Data Engineering",
      icon: "Cpu",
      summary: "Specialized in real-time streaming architectures, zero-label concept drift monitoring, automated Airflow DAG retraining with quality gates, Kafka, MLflow, and Docker CI/CD.",
      highlightProjects: ["Vigil (vigil-drift PyPI)", "Airline Data Warehouse", "Banking API Suite"],
      primaryKeywords: ["Apache Kafka", "Airflow", "MLflow", "Docker", "PyPI", "FastAPI", "CI/CD", "Concept Drift"],
      file: "/resumes/Venkateswara_Sahu_MLOps_Engineer.pdf",
    },
    {
      id: "cv",
      title: "Computer Vision & Document AI",
      icon: "Eye",
      summary: "Specialized in custom YOLOv8 symbol detection, Connected-Component guided OCR acceleration (50x), ISA-5.1 tag parsing, NetworkX spatial entity graphs, and CAD/P&ID extraction.",
      highlightProjects: ["P&ID Document Intelligence & MTO System", "ComfyUI Pipeline"],
      primaryKeywords: ["YOLOv8", "Tesseract OCR", "OpenCV", "NetworkX", "Image Processing", "ISA-5.1", "Spatial Graphs"],
      file: "/resumes/Venkateswara_Sahu_CV_Engineer.pdf",
    },
    {
      id: "ml",
      title: "Predictive ML & Analytics",
      icon: "TrendingUp",
      summary: "Specialized in high-scale feature engineering (150+ features), gradient boosting (XGBoost, LightGBM, Optuna), sub-second inference APIs, and +265% decile CTR lift.",
      highlightProjects: ["10M+ Display Ad CTR Predictor & Scorer", "Diabetes Prediction CI/CD"],
      primaryKeywords: ["XGBoost", "LightGBM", "Optuna", "Scikit-Learn", "Feature Engineering", "Flask REST", "Streamlit"],
      file: "/resumes/Venkateswara_Sahu_ML_Engineer.pdf",
    },
  ] as ResumeTrack[],

  projects: [
    {
      id: "f1insightai",
      title: "F1InsightAI",
      subtitle: "Agentic Text-to-SQL RAG Chatbot",
      tagline: "Natural language to SQL over 700k+ TiDB Cloud records with 9-node LangGraph self-correcting agent and live RAG telemetry.",
      description: "An enterprise RAG system that translates complex natural language queries into executable SQL over a multi-table Formula 1 database (1950–2024). Features an autonomous reflection loop that catches syntax or schema errors and repairs SQL queries on the fly.",
      badge: "Flagship Agentic AI",
      category: "GenAI & Agentic",
      metrics: [
        { label: "MRR Improvement", value: "5.5x", detail: "0.12 to 0.67 on schema search" },
        { label: "First-Pass SQL Acc.", value: "83.3%", detail: "Over complex multi-table joins" },
        { label: "Records Indexed", value: "700K+", detail: "14 relational tables on TiDB Cloud" },
      ],
      techStack: ["LangGraph", "Groq API", "GPT OSS 120B", "FAISS", "TiDB Cloud", "Flask", "Docker", "Chart.js"],
      features: [
        "9-node LangGraph state graph with reflection and automatic SQL retry loops",
        "RAG sub-schema retrieval combining FAISS vector search and co-occurrence scoring",
        "Live RAG metrics evaluation card: MRR, Recall@K, Context Relevance, and Faithfulness",
        "Cinematic Kinetic Cockpit UI with Chart.js telemetry charts and AI follow-up suggestions",
        "Strict read-only query sandboxing for database security",
      ],
      links: {
        github: "https://github.com/Venkateswara-Sahu/AI_Powered_Text-to-SQL_RAG_Chatbot",
        demo: "https://huggingface.co/spaces/RiverStead/Text-to-SQL_RAG_Chatbot",
      },
      featured: true,
      highlightColor: "from-red-500/20 via-orange-500/10 to-transparent",
    },
    {
      id: "vigil",
      title: "Vigil (vigil-drift)",
      subtitle: "Zero-Label Unsupervised Concept Drift Detection",
      tagline: "Published PyPI library for autonomous drift detection & root-cause feature attribution on live Kafka streams.",
      description: "A production-grade drift detector designed for high-velocity streaming environments where ground-truth labels are delayed or absent. Employs dual autoencoders to decouple true concept drift from novel network attacks, coupled with a novel DriftAttributor.",
      badge: "PyPI Package & Research",
      category: "MLOps & Systems",
      metrics: [
        { label: "PyPI Package", value: "vigil-drift", detail: "pip install vigil-drift" },
        { label: "Test Coverage", value: "81%", detail: "Full GitHub Actions CI/CD" },
        { label: "Attribution Delta", value: "Feature-Level", detail: "Ranks top-K drifting signals" },
      ],
      techStack: ["PyTorch", "Apache Kafka", "Apache Airflow", "MLflow", "FastAPI", "Docker", "Streamlit"],
      features: [
        "Dual Autoencoder Architecture (Adaptive A + Frozen Mirror A_KC with KDE density estimation)",
        "Novel DriftAttributor: computes per-feature reconstruction error delta to pinpoint root causes",
        "Stream-native Kafka consumer with chunked micro-batch processing",
        "Airflow DAG webhook trigger with quality gates for autonomous model retraining",
        "FastAPI REST endpoints (/fit and /detect) with SOC-style real-time dashboard",
      ],
      links: {
        github: "https://github.com/Venkateswara-Sahu/OWADD",
        docs: "https://venkateswara-sahu.github.io/OWADD/",
        pypi: "https://pypi.org/project/vigil-drift/",
      },
      featured: true,
      highlightColor: "from-blue-500/20 via-cyan-500/10 to-transparent",
    },
    {
      id: "pid-mto",
      title: "P&ID Document Intelligence & MTO System",
      subtitle: "Computer Vision & Graph-Based Extraction",
      tagline: "End-to-end pipeline transforming complex engineering drawings into verified Material Take-Off spreadsheets in seconds.",
      description: "Solves the engineering bottleneck in EPC workflows by combining fine-tuned YOLOv8 symbol detection with connected-component accelerated OCR, spatial proximity entity graphs in NetworkX, and LangGraph LLM validation.",
      badge: "Computer Vision & Agents",
      category: "Computer Vision",
      metrics: [
        { label: "OCR Speedup", value: "50x", detail: "~7s vs 360s baseline" },
        { label: "Symbol Detection", value: "YOLOv8s", detail: "Valves, instruments & piping" },
        { label: "Standards", value: "ISA-5.1", detail: "Automated tag & loop parsing" },
      ],
      techStack: ["YOLOv8", "Tesseract OCR", "NetworkX", "LangGraph", "Groq (Llama 3.3 70B)", "FastAPI", "Streamlit"],
      features: [
        "Connected-Component guided OCR isolates text regions, eliminating pipe-line graphic noise",
        "Spatial proximity engine builds NetworkX relationship graph for piping loops",
        "3-node LangGraph validation agent powered by Groq Llama 3.3 70B",
        "Automated professional Excel MTO generation with category confidence scores",
        "Interactive Streamlit visualization dashboard + FastAPI ingestion endpoints",
      ],
      links: {
        github: "https://github.com/Venkateswara-Sahu/P-ID-Processing-MTO-Extraction-System",
      },
      featured: true,
      highlightColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
    {
      id: "ctr-predictor",
      title: "10M+ Display Ad CTR Predictor & Scorer",
      subtitle: "Large-Scale Machine Learning Pipeline",
      tagline: "Gradient boosting system trained on 10,000,000+ Criteo ads with 150 engineered interaction features and sub-0.5s API.",
      description: "A production ad scoring and CTR forecasting platform designed for low-latency ad bidding. Combines extensive feature engineering over 39 categorical/numerical features with Optuna-tuned XGBoost and LightGBM ensembles.",
      badge: "High-Throughput ML",
      category: "Predictive ML",
      metrics: [
        { label: "Model AUC", value: "0.9067", detail: "Log Loss 0.3105 on test set" },
        { label: "Top Decile Lift", value: "+265.6%", detail: "CTR improvement for top 10% ads" },
        { label: "Inference Latency", value: "<0.5s", detail: "Flask REST service with 5 endpoints" },
      ],
      techStack: ["XGBoost", "LightGBM", "Optuna", "Flask", "Streamlit", "Pandas", "Scikit-Learn"],
      features: [
        "150 engineered interaction features from 39 raw sparse variables",
        "Optuna Bayesian hyperparameter optimization across tree depth, learning rate, and regularizers",
        "Multi-dimensional scoring engine evaluating device, placement, and time vectors",
        "Production Flask REST API with 5 endpoints for single-ad and high-volume batch scoring",
        "Streamlit analytics suite with model interpretability and what-if parameter simulation",
      ],
      links: {
        github: "https://github.com/Venkateswara-Sahu/CTR_Predictor_and_Scorer",
        demo: "https://ctrpredictor.streamlit.app/",
      },
      featured: true,
      highlightColor: "from-purple-500/20 via-pink-500/10 to-transparent",
    },
  ] as Project[],

  skills: [
    {
      title: "Generative AI & Agentic Systems",
      iconName: "Bot",
      skills: [
        { name: "LangGraph", level: "Advanced" },
        { name: "LangChain", level: "Advanced" },
        { name: "RAG Architectures", level: "Advanced" },
        { name: "FAISS & Vector DBs", level: "Advanced" },
        { name: "Groq API & Llama 3.3", level: "Advanced" },
        { name: "GPT OSS 120B", level: "Proficient" },
        { name: "Hugging Face Spaces", level: "Advanced" },
        { name: "Self-Correction & Reflection Loops", level: "Advanced" },
      ],
    },
    {
      title: "Computer Vision & Document AI",
      iconName: "Eye",
      skills: [
        { name: "YOLOv8 (Ultralytics)", level: "Advanced" },
        { name: "Tesseract OCR (CC-Guided)", level: "Advanced" },
        { name: "OpenCV", level: "Proficient" },
        { name: "NetworkX Entity Graphs", level: "Advanced" },
        { name: "ISA-5.1 Standards Parsing", level: "Proficient" },
        { name: "Image Preprocessing & CLAHE", level: "Proficient" },
      ],
    },
    {
      title: "Streaming, MLOps & Infrastructure",
      iconName: "Cpu",
      skills: [
        { name: "Apache Kafka", level: "Proficient" },
        { name: "Apache Airflow", level: "Proficient" },
        { name: "MLflow Tracking", level: "Proficient" },
        { name: "Docker & Compose", level: "Advanced" },
        { name: "Jenkins CI/CD", level: "Proficient" },
        { name: "GitHub Actions", level: "Advanced" },
        { name: "PyPI Package Publishing", level: "Advanced" },
        { name: "Concept Drift & Autoencoders", level: "Advanced" },
      ],
    },
    {
      title: "Backends, Databases & Analytics",
      iconName: "Database",
      skills: [
        { name: "Python 3.11+", level: "Expert" },
        { name: "FastAPI", level: "Advanced" },
        { name: "Flask", level: "Advanced" },
        { name: "TiDB Cloud", level: "Proficient" },
        { name: "PostgreSQL & MySQL", level: "Proficient" },
        { name: "Streamlit", level: "Advanced" },
        { name: "XGBoost & LightGBM", level: "Advanced" },
        { name: "Optuna Optimization", level: "Proficient" },
      ],
    },
  ] as SkillCategory[],

  milestones: [
    {
      year: "Jun 2026 – Present",
      role: "Creator & PyPI Author",
      company: "Vigil Project (`vigil-drift`)",
      location: "Open Source · PyPI",
      description: [
        "Architected and published `vigil-drift` on PyPI for zero-label unsupervised concept drift monitoring in real-time streaming data.",
        "Built Dual Autoencoder architecture (Adaptive and Frozen Mirror) with replicated T-tests, delivering 93.3% precision on NSL-KDD and feature-level attribution.",
        "Engineered stream-native Kafka consumer, FastAPI service, and Airflow auto-retrain DAG with quality gates and 81% test coverage.",
      ],
      tags: ["PyTorch", "vigil-drift", "Kafka", "Airflow", "FastAPI", "MLflow", "PyPI"],
      badge: "Published Package (Aug 2026)",
    },
    {
      year: "Jan 2026 – May 2026",
      role: "Generative AI Intern",
      company: "TransOrg Analytics (Pickl.AI) × LPU",
      location: "Final Semester Industry Tie-Up",
      description: [
        "Architected F1InsightAI, an enterprise Text-to-SQL RAG system querying 700,000+ records across 14 relational tables on TiDB Cloud.",
        "Engineered 9-node LangGraph autonomous state graph with FAISS schema RAG and self-correcting retry loops, achieving 83.3% first-pass SQL execution accuracy.",
        "Delivered production-grade evaluation telemetry (5.5x MRR lift: 0.12 ➔ 0.67) and packaged modular REST inference endpoints.",
      ],
      tags: ["F1InsightAI", "LangGraph", "TiDB Cloud", "83.3% Accuracy", "5.5x MRR Lift", "TransOrg Analytics"],
      badge: "Industry Internship",
    },
    {
      year: "Mar 2024 – May 2026",
      role: "Seed Fund Recipient (₹1,00,000 Grant)",
      company: "University Startup Incubation Evaluation",
      location: "Lovely Professional University",
      description: [
        "Awarded competitive ₹1,00,000 startup seed grant following technical evaluation and working prototype evaluation.",
        "Recognized by university startup panel for applying machine learning workflows to high-impact problem domains.",
      ],
      tags: ["₹1,00,000 Grant", "Applied AI", "Startup Evaluation"],
      badge: "Incubation Grant Winner",
    },
    {
      year: "Aug 2022 – May 2026",
      role: "B.Tech (Hons.) CSE (Data Science & Data Engineering)",
      company: "Lovely Professional University",
      location: "Punjab, India",
      description: [
        "Specialization: Data Science & Data Engineering. Graduated with a strong cumulative CGPA of 8.38.",
        "Core coursework: Distributed Systems, Advanced Machine Learning, Data Warehousing, Computer Vision, Cloud Computing.",
        "Participated in technical hackathons and built multiple practical machine learning & Generative AI projects.",
      ],
      tags: ["CGPA: 8.38", "Data Science", "Data Engineering", "Algorithms"],
      badge: "Academic Excellence",
    },
  ] as Milestone[],
};

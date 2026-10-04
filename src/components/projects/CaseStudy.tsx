import Image from "next/image";
import type { ProjectCaseStudy, PortfolioLink } from "@/data/portfolio";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";

const measuredResults = new Set([
  "SQL-question smoke checks", "OCR processing",
]);

export function ProjectLinks({ links }: { links: PortfolioLink[] }) {
  return <div className="project-links">{links.map((link) => <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.label} <span aria-hidden="true">↗</span></a>)}</div>;
}

export function CaseStudy({ project }: { project: ProjectCaseStudy }) {
  const supporting = project.presentation === "supporting";
  return <article id={project.id} aria-labelledby={`${project.id}-title`} className={`case-study ${supporting ? "case-study--supporting" : ""}`}>
    <header className="case-study__header">
      <p className="signal-label">{project.number} / {project.discipline}</p>
      <span className="case-study__period">{project.period}</span>
      <h3 id={`${project.id}-title`}>{project.title}</h3>
      <p className="case-study__summary">{project.summary}</p>
    </header>
    <div className="case-study__body">
      <div className="case-study__narrative">
        <div><h4>The problem</h4><p>{project.problem}</p></div>
        <div><h4>What I built</h4><p>{project.contribution}</p></div>
        <p className="project-stack">{project.stack.join(" / ")}</p>
        <ProjectLinks links={project.links} />
      </div>
      <div className="case-study__evidence">
        <h4>What the evaluation shows</h4>
        <p>{project.evaluation.summary}</p>
        <dl className="evidence-grid">{project.evaluation.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd className="evidence-value" data-measured={measuredResults.has(metric.label)}>{metric.value}</dd><dd>{metric.context} <a href={metric.evidenceHref} target="_blank" rel="noreferrer" aria-label={`${project.title}: ${metric.label} evidence`}>Evidence ↗</a></dd></div>)}</dl>
      </div>
    </div>
    {!supporting && <div className="case-study__media">
      {project.visual === "vigil" && <ProjectVisual visual={project.visual} title={project.title} />}
      {project.visual === "f1" && <figure className="project-capture"><a href="/projects/f1insight-results.png" target="_blank" rel="noreferrer" aria-label="Open full F1InsightAI result screenshot"><Image src="/projects/f1insight-results.png" width={1920} height={1080} alt="F1InsightAI results interface showing a Formula 1 result table, generated SQL, and per-query retrieval metrics" sizes="(max-width: 768px) 92vw, 80vw" /></a><figcaption>Actual project interface. Any measurements in this capture describe its individual query, not the full benchmark.</figcaption></figure>}
      {project.visual === "pid" && <figure className="project-capture project-capture--drawing"><a href="/projects/plant-pid.png" target="_blank" rel="noreferrer" aria-label="Open full sample P and ID drawing"><Image src="/projects/plant-pid.png" width={650} height={394} alt="Sample plant piping and instrumentation drawing from the project repository, with equipment symbols, connected pipelines, and instrument tags" sizes="(max-width: 768px) 92vw, 80vw" /></a><figcaption>Sample input drawing from the repository. This is an input example, not a verified detection or extraction result.</figcaption></figure>}
    </div>}
    <details className="technical-details">
      <summary>Architecture & limitations <span aria-hidden="true">+</span></summary>
      <div className="technical-details__body">
        <div><h4>How the system fits together</h4><ol>{project.architecture.map((step) => <li key={step}>{step}</li>)}</ol></div>
        <div><h4>What this does not establish</h4><p>{project.limitations}</p></div>
      </div>
      {project.visual !== "vigil" && <ProjectVisual visual={project.visual} title={project.title} />}
    </details>
  </article>;
}

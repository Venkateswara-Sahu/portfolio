"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { portfolioContent, type ProjectCaseStudy } from "@/data/portfolio";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";

export function ProjectExplorer({ projects = portfolioContent.projects }: { projects?: ProjectCaseStudy[] }) {
  const [selectedId, setSelectedId] = useState(projects[0]?.id);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = projects.find(({ id }) => id === selectedId) ?? projects[0];
  if (!selected) return null;

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowDown": case "ArrowRight": next = (index + 1) % projects.length; break;
      case "ArrowUp": case "ArrowLeft": next = (index - 1 + projects.length) % projects.length; break;
      case "Home": next = 0; break;
      case "End": next = projects.length - 1; break;
      default: return;
    }
    event.preventDefault();
    buttons.current[next]?.focus();
  }

  return (
    <section id="work" aria-labelledby="work-title" className="container-editorial work-section">
      <div className="section-heading">
        <div><p className="signal-label">Selected work / 01—04</p><h2 id="work-title">Systems, with evidence.</h2></div>
        <p>Four projects. From model behavior to usable tools.</p>
      </div>
      <div className="project-explorer">
        <div className="project-index" aria-label="Choose a project preview">
          {projects.map((project, index) => (
            <div key={project.id} className="project-index__row" data-selected={selected.id === project.id}>
              <button type="button" ref={(element) => { buttons.current[index] = element; }}
                aria-label={`Preview ${project.title}`} aria-pressed={selected.id === project.id} aria-controls="project-stage"
                onClick={() => setSelectedId(project.id)} onFocus={() => setSelectedId(project.id)}
                onMouseEnter={() => {
                  // Pointer focus should not block hover; preserve only keyboard-visible focus.
                  if (!buttons.current.some((button) => button?.matches(":focus-visible"))) setSelectedId(project.id);
                }}
                onKeyDown={(event) => navigate(event, index)}>
                <span className="project-index__number">{project.number}</span>
                <span><span className="project-index__name">{project.title}</span><span className="project-index__discipline">{project.discipline}</span></span>
                <span className="project-index__indicator" aria-hidden="true">↗</span>
              </button>
              <a href={`#${project.id}`} aria-label={`Read ${project.title} case study`} className="project-index__read">Read case study <span aria-hidden="true">↓</span></a>
            </div>
          ))}
          <p className="project-index__hint">Select a project to explore. Full case studies below.</p>
        </div>
        <div id="project-stage" role="region" aria-label={`${selected.title} project preview`} className="project-stage">
          <ProjectVisual visual={selected.visual} title={selected.title} />
          <div className="project-stage__copy" aria-live="polite" aria-atomic="true">
            {selected.visual === "vigil" && <div className="package-identity"><span>Published Python package</span><code>pip install vigil-drift</code></div>}
            <p>{selected.summary}</p>
            <div className="preview-evidence"><strong>{selected.evaluation.metrics[0].value}</strong><div><span>{selected.evaluation.metrics[0].label}</span><p>{selected.evaluation.metrics[0].context}</p><a href={selected.evaluation.metrics[0].evidenceHref} target="_blank" rel="noreferrer">View evidence ↗</a></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

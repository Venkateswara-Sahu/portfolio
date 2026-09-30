"use client";

import { usePresence } from "framer-motion";
import { useEffect } from "react";
import { type ProjectCaseStudy } from "@/data/portfolio";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";

export function ProjectPreview({ project, animate }: { project: ProjectCaseStudy; animate: boolean }) {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent || !safeToRemove) return;
    if (!window.matchMedia) {
      safeToRemove();
      return;
    }
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finishIfReduced = () => {
      if (preference.matches) safeToRemove();
    };
    finishIfReduced();
    preference.addEventListener("change", finishIfReduced);
    return () => preference.removeEventListener("change", finishIfReduced);
  }, [isPresent, safeToRemove]);

  return (
    <div
      className="project-preview__layer"
      data-present={isPresent}
      data-animate={animate && isPresent}
      aria-hidden={!isPresent}
      inert={!isPresent}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && !isPresent) safeToRemove?.();
      }}
    >
      <ProjectVisual visual={project.visual} title={project.title} />
      <div className="project-stage__copy" aria-live={isPresent ? "polite" : "off"} aria-atomic="true">
        {project.visual === "vigil" && <div className="package-identity"><span>Published Python package</span><code>pip install vigil-drift</code></div>}
        <p>{project.summary}</p>
        <div className="preview-evidence"><strong>{project.evaluation.metrics[0].value}</strong><div><span>{project.evaluation.metrics[0].label}</span><p>{project.evaluation.metrics[0].context}</p><a href={project.evaluation.metrics[0].evidenceHref} target="_blank" rel="noreferrer">View evidence ↗</a></div></div>
      </div>
    </div>
  );
}

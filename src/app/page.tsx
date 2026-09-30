import { KineticHero } from "@/components/editorial/KineticHero";
import { BackgroundTimeline } from "@/components/editorial/BackgroundTimeline";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { CaseStudy } from "@/components/projects/CaseStudy";
import { portfolioContent } from "@/data/portfolio";

export default function HomePage() {
  return (
    <main id="main-content">
      <KineticHero />
      <ProjectExplorer />
      <section id="case-studies" aria-labelledby="case-studies-title" className="container-editorial case-studies-section">
        <div className="section-heading"><div><p className="signal-label">Selected case studies</p><h2 id="case-studies-title">A closer look.</h2></div><p>The problem, my contribution, and what the results actually show.</p></div>
        {portfolioContent.projects.map((project) => <CaseStudy key={project.id} project={project} />)}
      </section>
      <BackgroundTimeline />
    </main>
  );
}

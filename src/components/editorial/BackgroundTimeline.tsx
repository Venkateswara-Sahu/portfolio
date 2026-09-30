import { portfolioContent } from "@/data/portfolio";
import { ProjectLinks } from "@/components/projects/CaseStudy";

export function BackgroundTimeline() {
  return <section id="about" aria-labelledby="about-title" className="background-section container-editorial">
    <div className="section-heading"><div><p className="signal-label">Background</p><h2 id="about-title">The work behind the work.</h2></div><p>{portfolioContent.identity.location}<br />{portfolioContent.identity.availability}</p></div>
    <ol className="background-timeline">{portfolioContent.background.map((entry) => <li key={entry.title}><p className="background-period">{entry.period}</p><div><h3>{entry.title}</h3><p className="background-organization">{entry.organization}</p></div><div><p>{entry.detail}</p>{entry.links && <ProjectLinks links={entry.links} />}</div></li>)}</ol>
  </section>;
}

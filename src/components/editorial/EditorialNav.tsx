import { portfolioContent, type PortfolioLink } from "@/data/portfolio";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-editorial-orange)]";

function NavigationLink({ link }: { link: PortfolioLink }) {
  return (
    <a
      className={`editorial-nav__link ${focusRing}`}
      href={link.href}
      rel={link.external ? "noreferrer" : undefined}
      target={link.external ? "_blank" : undefined}
    >
      {link.label}
    </a>
  );
}

export function EditorialNav() {
  const persistentActions = portfolioContent.navigation.filter(({ label }) =>
    ["Resume", "GitHub"].includes(label),
  );
  const sectionLinks = portfolioContent.navigation.filter(
    ({ label }) => !["Resume", "GitHub"].includes(label),
  );

  return (
    <header className="editorial-header">
      <nav
        aria-label="Primary navigation"
        className="container-editorial editorial-nav"
      >
        <a className={`editorial-nav__identity ${focusRing}`} href="#top">
          <span aria-hidden="true">VS</span>
          <span className="sr-only">{portfolioContent.identity.name}, home</span>
        </a>

        <div className="editorial-nav__sections" role="list">
          {sectionLinks.map((link) => (
            <span key={link.label} role="listitem">
              <NavigationLink link={link} />
            </span>
          ))}
        </div>

        <div className="editorial-nav__actions" role="list">
          {persistentActions.map((link) => (
            <span key={link.label} role="listitem">
              <NavigationLink link={link} />
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
}

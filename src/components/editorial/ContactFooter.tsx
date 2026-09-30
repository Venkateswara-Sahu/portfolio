import { portfolioContent, type PortfolioLink } from "@/data/portfolio";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-editorial-orange)]";

function ContactLink({ link }: { link: PortfolioLink }) {
  return (
    <a
      className={`contact-footer__link ${focusRing}`}
      href={link.href}
      rel={link.external ? "noreferrer" : undefined}
      target={link.external ? "_blank" : undefined}
    >
      {link.label}
    </a>
  );
}

export function ContactFooter() {
  const socialLinks = portfolioContent.contact.links.filter(
    ({ label }) => label !== "Email",
  );

  return (
    <footer className="contact-footer" id="contact">
      <div className="container-editorial">
        <div aria-hidden="true" className="rule" />

        <div className="contact-footer__lead">
          <p className="signal-label">Contact / 05</p>
          <div>
            <h2 className="contact-footer__heading">
              {portfolioContent.contact.heading}
            </h2>
            <p className="contact-footer__note">
              {portfolioContent.contact.note}
            </p>
          </div>
        </div>

        <a
          className={`contact-footer__email ${focusRing}`}
          href={`mailto:${portfolioContent.contact.email}`}
        >
          {portfolioContent.contact.email}
        </a>

        <div className="contact-footer__meta">
          <div>
            <p>{portfolioContent.contact.location}</p>
            <p>{portfolioContent.contact.availability}</p>
          </div>
          <div className="contact-footer__links" aria-label="Contact links">
            {socialLinks.map((link) => (
              <ContactLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        <p className="contact-footer__colophon">
          © {new Date().getFullYear()} {portfolioContent.identity.name}
        </p>
      </div>
    </footer>
  );
}

import { FOOTER_CREDIT, FOOTER_LINKS } from "../data";

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">
          Betão <span>Fight</span>
        </p>

        <nav aria-label="Links externos">
          {FOOTER_LINKS.map((link) => (
            <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer__credit">{FOOTER_CREDIT}</p>
      </div>
    </footer>
  );
}

export default SiteFooter;

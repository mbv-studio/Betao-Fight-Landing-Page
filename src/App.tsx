import {
  HERO,
  BIO,
  MODALITIES,
  SCHEDULE,
  CTA,
  LOCATION,
  FOOTER_LINKS,
  FOOTER_CREDIT,
  WHATSAPP_LINK,
  GOOGLE_MAPS_LINK,
} from "./data";

const base = import.meta.env.BASE_URL;

function App() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <img
            src={`${base}hero-bg.jpg`}
            alt="Interior de academia de luta em Aracaju com iluminação dramática"
            loading="eager"
          />
        </div>
        <div className="container hero__content">
          <h1 className="hero__title animate-in">
            {HERO.title.split(" ").map((word, i) =>
              word === "Betão" || word === "Fight" ? (
                <span key={i}>{word} </span>
              ) : (
                word + " "
              )
            )}
          </h1>

          <div className="hero__tags animate-in animate-in--delay-1">
            {HERO.tags.map((tag) => (
              <span className="hero__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <p className="hero__desc animate-in animate-in--delay-2">
            {HERO.description}
          </p>

          <div className="hero__actions animate-in animate-in--delay-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              id="cta-hero-whatsapp"
            >
              {HERO.ctaPrimary}
            </a>
            <a href="#horarios" className="btn btn--secondary" id="cta-hero-schedule">
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="bio" id="bio">
        <div className="container">
          <div className="bio__inner">
            <div className="bio__image-wrap">
              <img
                src={`${base}betao.jpg`}
                alt="Betão, professor e ex-lutador de kickboxing em Aracaju"
                loading="lazy"
              />
            </div>
            <div className="bio__body">
              <h2 className="section-title">{BIO.title}</h2>
              <p className="bio__text">{BIO.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modalidades ── */}
      <section className="modalities" id="modalidades">
        <div className="container">
          <h2 className="section-title">Modalidades</h2>
          <div className="modalities__list">
            {MODALITIES.map((mod) => (
              <div className="modalities__item" key={mod.name}>
                <span className="modalities__name">{mod.name}</span>
                <span className="modalities__desc">{mod.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horários ── */}
      <section className="schedule" id="horarios">
        <div className="container">
          <h2 className="section-title">Horários</h2>
          <div className="schedule__grid">
            {SCHEDULE.map((group) => (
              <div className="schedule__group" key={group.days}>
                <div className="schedule__days">{group.days}</div>
                <ul className="schedule__slots">
                  {group.slots.map((slot, i) => (
                    <li className="schedule__slot" key={i}>
                      <span className="schedule__time">{slot.time}</span>
                      <span className="schedule__modality">{slot.modality}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Secundário ── */}
      <section className="cta" id="contato">
        <div className="container">
          <h2 className="section-title section-title--accent">{CTA.title}</h2>
          <p className="cta__text">{CTA.text}</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            id="cta-secondary-whatsapp"
          >
            {CTA.button}
          </a>
        </div>
      </section>

      {/* ── Localização ── */}
      <section className="location" id="localizacao">
        <div className="container">
          <h2 className="section-title">{LOCATION.title}</h2>
          <p className="location__address">{LOCATION.address}</p>
          <div className="location__actions">
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
              id="cta-maps"
            >
              {LOCATION.mapButton}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
              id="cta-location-whatsapp"
            >
              {LOCATION.whatsappButton}
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <nav className="footer__links">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="footer__credit">{FOOTER_CREDIT}</p>
        </div>
      </footer>
    </>
  );
}

export default App;

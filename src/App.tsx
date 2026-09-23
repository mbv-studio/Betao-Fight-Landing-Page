import { useState, useCallback } from "react";
import {
  HERO,
  BIO,
  GALLERY,
  MODALITIES,
  SCHEDULE,
  PERSONAL_FIGHT,
  CTA,
  LOCATION,
  FOOTER_LINKS,
  FOOTER_CREDIT,
  WHATSAPP_LINK,
  GOOGLE_MAPS_LINK,
} from "./data";

const base = import.meta.env.BASE_URL;

function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + GALLERY.images.length) % GALLERY.images.length : null
      ),
    []
  );
  const nextImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % GALLERY.images.length : null
      ),
    []
  );

  const heroImg = base + "hero-bg.jpg";
  const betaoImg = base + "betao.jpg";
  const galleryImg = (src: string) => base + src.replace(/^\//, "");

  return (
    <>
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <img src={heroImg} alt="Fachada do Centro de Lutas Betão Fight em Aracaju" loading="eager" />
        </div>
        <div className="container hero__content">
          <span className="hero__eyebrow animate-in">Boxe · MMA · Kickboxing</span>
          <h1 className="hero__title animate-in animate-in--delay-1">
            Centro de Lutas<em>Betão Fight</em>
          </h1>
          <p className="hero__desc animate-in animate-in--delay-2">{HERO.description}</p>
          <div className="hero__actions animate-in animate-in--delay-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary" id="cta-hero-whatsapp">{HERO.ctaPrimary}</a>
            <a href="#horarios" className="btn btn--secondary" id="cta-hero-schedule">{HERO.ctaSecondary}</a>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="bio" id="bio">
        <div className="container">
          <div className="bio__inner">
            <div className="bio__image-wrap">
              <img src={betaoImg} alt="Betão, professor e ex-lutador de kickboxing em Aracaju" loading="lazy" />
            </div>
            <div className="bio__body">
              <span className="section-label">O professor</span>
              <h2 className="section-title">{BIO.title}</h2>
              <hr className="divider" />
              <p className="bio__text">{BIO.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery" id="centro">
        <div className="container">
          <span className="section-label">Estrutura</span>
          <h2 className="section-title">{GALLERY.title}</h2>
          <p className="gallery__subtitle">{GALLERY.subtitle}</p>
          <div className="gallery__grid">
            {GALLERY.images.map((img, i) => (
              <div className="gallery__item" key={i} onClick={() => setLightboxIndex(i)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(i)}>
                <img src={galleryImg(img.src)} alt={img.alt} loading="lazy" />
                <div className="gallery__overlay"><span className="gallery__zoom-icon">+</span></div>
              </div>
            ))}
          </div>
          <div className="gallery__cta-wrap">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary" id="cta-gallery-whatsapp">{GALLERY.cta}</a>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="modalities" id="modalidades">
        <div className="container">
          <span className="section-label">Treinos</span>
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

      {/* Schedule */}
      <section className="schedule" id="horarios">
        <div className="container">
          <span className="section-label">Grade semanal</span>
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

      {/* Personal Fight */}
      <section className="personal" id="personal-fight">
        <div className="container">
          <div className="personal__header">
            <span className="personal__badge">{PERSONAL_FIGHT.badge}</span>
            <h2 className="section-title">{PERSONAL_FIGHT.title}</h2>
            <p className="personal__subtitle">{PERSONAL_FIGHT.subtitle}</p>
          </div>
          <p className="personal__desc">{PERSONAL_FIGHT.description}</p>
          <div className="personal__benefits">
            {PERSONAL_FIGHT.benefits.map((b) => (
              <div className="personal__benefit" key={b.title}>
                <span className="personal__benefit-icon">{b.icon}</span>
                <div>
                  <strong className="personal__benefit-title">{b.title}</strong>
                  <p className="personal__benefit-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="personal__cta-wrap">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary" id="cta-personal-whatsapp">{PERSONAL_FIGHT.cta}</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contato">
        <div className="container">
          <span className="section-label">Comece agora</span>
          <h2 className="section-title"><em>{CTA.title}</em></h2>
          <p className="cta__text">{CTA.text}</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary" id="cta-secondary-whatsapp">{CTA.button}</a>
        </div>
      </section>

      {/* Location */}
      <section className="location" id="localizacao">
        <div className="container">
          <span className="section-label">Endereço</span>
          <h2 className="section-title">{LOCATION.title}</h2>
          <p className="location__address">{LOCATION.address}</p>
          <div className="location__actions">
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--outline" id="cta-maps">{LOCATION.mapButton}</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--outline" id="cta-location-whatsapp">{LOCATION.whatsappButton}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div><p className="footer__brand">Betão <em>Fight</em></p></div>
            <nav className="footer__links">
              {FOOTER_LINKS.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="footer__link">{link.label}</a>
              ))}
            </nav>
          </div>
          <div className="footer__bottom">
            <p className="footer__credit">{FOOTER_CREDIT}</p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox} id="gallery-lightbox">
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Fechar">&#x2715;</button>
          <button className="lightbox__arrow lightbox__arrow--prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Anterior">&#x2039;</button>
          <img className="lightbox__img" src={galleryImg(GALLERY.images[lightboxIndex].src)} alt={GALLERY.images[lightboxIndex].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lightbox__arrow lightbox__arrow--next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Próxima">&#x203A;</button>
          <div className="lightbox__counter">{lightboxIndex + 1} / {GALLERY.images.length}</div>
        </div>
      )}
    </>
  );
}

export default App;
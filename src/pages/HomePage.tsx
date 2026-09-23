import { useState } from "react";
import Lightbox from "../components/Lightbox";
import {
  BIO,
  GALLERY,
  GOOGLE_MAPS_LINK,
  HERO,
  LOCATION,
  MODALITIES,
  PERSONAL_FIGHT,
  PERSONAL_WHATSAPP_LINK,
  PLANS,
  PLAN_PAYMENT_NOTE,
  SCHEDULE,
  TRIAL_WHATSAPP_LINK,
  WHATSAPP_LINK,
} from "../data";

const base = import.meta.env.BASE_URL;
const asset = (src: string) => base + src.replace(/^\//, "");

function HomePage() {
  const [scheduleIndex, setScheduleIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const activeSchedule = SCHEDULE[scheduleIndex];

  return (
    <>
      <main>
        <section className="hero" id="inicio">
          <img
            className="hero__image"
            src={asset("/hero-bg.webp")}
            alt="Fachada do Centro de Lutas Betão Fight em Aracaju"
            loading="eager"
          />
          <div className="hero__overlay" />

          <div className="container hero__content">
            <span className="eyebrow">{HERO.eyebrow}</span>
            <h1>{HERO.title}</h1>
            <p>{HERO.description}</p>
            <div className="hero__actions">
              <a
                className="button button--primary"
                href={TRIAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HERO.ctaPrimary}
              </a>
              <a className="button button--ghost" href="#horarios">
                {HERO.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <section className="section section--dense" id="modalidades">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Treinos</span>
                <h2>Escolha sua luta</h2>
              </div>
              <p>Comece do zero ou evolua seu nível com acompanhamento técnico.</p>
            </div>

            <div className="modalities-grid">
              {MODALITIES.map((modality, index) => (
                <article className="modality" key={modality.name}>
                  <span className="modality__number">0{index + 1}</span>
                  <h3>{modality.name}</h3>
                  <p>{modality.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--surface section--dense" id="planos">
          <div className="container">
            <div className="section-heading section-heading--compact">
              <div>
                <span className="eyebrow">Planos</span>
                <h2>Treine do seu jeito</h2>
              </div>
            </div>

            <div className="plans-scroll" aria-label="Planos da Betão Fight">
              {PLANS.map((plan) => (
                <article
                  className={`plan-card${plan.featured ? " plan-card--featured" : ""}`}
                  key={plan.name}
                >
                  {plan.featured && <span className="plan-card__badge">Mais flexível</span>}
                  <span className="plan-card__name">{plan.name}</span>
                  <strong>{plan.price}</strong>
                  <span className="plan-card__detail">{plan.detail}</span>
                </article>
              ))}
            </div>

            <div className="plans-footer">
              <p>{PLAN_PAYMENT_NOTE}</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-link">
                Tirar dúvidas sobre planos →
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="horarios">
          <div className="container schedule-layout">
            <div className="schedule-intro">
              <span className="eyebrow">Grade semanal</span>
              <h2>Horários</h2>
              <p>Selecione os dias para conferir os treinos disponíveis.</p>

              <div className="schedule-tabs" role="tablist" aria-label="Dias de treino">
                {SCHEDULE.map((group, index) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={scheduleIndex === index}
                    className={`schedule-tab${scheduleIndex === index ? " schedule-tab--active" : ""}`}
                    onClick={() => setScheduleIndex(index)}
                    key={group.days}
                  >
                    {group.shortLabel}
                  </button>
                ))}
              </div>
            </div>

            <div className="schedule-card" role="tabpanel">
              <div className="schedule-card__header">
                <span>{activeSchedule.days}</span>
                <small>{activeSchedule.slots.length} horários</small>
              </div>
              <ul>
                {activeSchedule.slots.map((slot) => (
                  <li key={`${activeSchedule.days}-${slot.time}-${slot.modality}`}>
                    <time>{slot.time}</time>
                    <span>{slot.modality}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--surface" id="academia">
          <div className="container about-layout">
            <div className="about-copy">
              <span className="eyebrow">Professor e estrutura</span>
              <h2>{BIO.title}</h2>
              <p>{BIO.text}</p>
              <a href={TRIAL_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-link">
                Agendar aula experimental →
              </a>
            </div>

            <div className="about-media">
              <div className="about-media__main">
                <img
                  className="about-media__betao"
                  src={asset("/betao.webp")}
                  alt="Betão, professor do Centro de Lutas Betão Fight"
                  loading="lazy"
                />
              </div>

              <div className="gallery-strip">
                {GALLERY.map((image, index) => (
                  <button
                    type="button"
                    className="gallery-thumb"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Abrir foto ${index + 1} da academia`}
                    key={image.src}
                  >
                    <img
                      src={asset(image.src)}
                      alt={image.alt}
                      loading="lazy"
                      style={{
                        objectPosition: image.objectPosition,
                        objectFit: image.objectFit ?? "cover",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="personal-section" id="personal-fight">
          <div className="container personal-card">
            <div>
              <span className="eyebrow">Atendimento individual</span>
              <h2>{PERSONAL_FIGHT.title}</h2>
              <p className="personal-card__subtitle">{PERSONAL_FIGHT.subtitle}</p>
              <p className="personal-card__text">{PERSONAL_FIGHT.text}</p>
            </div>

            <div className="personal-card__aside">
              <div className="benefit-list">
                {PERSONAL_FIGHT.benefits.map((benefit) => (
                  <span key={benefit}>{benefit}</span>
                ))}
              </div>
              <a
                className="button button--primary"
                href={PERSONAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PERSONAL_FIGHT.cta}
              </a>
            </div>
          </div>
        </section>

        <section className="section location" id="localizacao">
          <div className="container location__inner">
            <div>
              <span className="eyebrow">Farolândia · Aracaju</span>
              <h2>{LOCATION.title}</h2>
              <p>{LOCATION.address}</p>
            </div>
            <div className="location__actions">
              <a
                className="button button--primary"
                href={TRIAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar aula experimental
              </a>
              <a
                className="button button--ghost"
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                {LOCATION.mapButton}
              </a>
            </div>
          </div>
        </section>
      </main>

      <a
        className="mobile-whatsapp"
        href={TRIAL_WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar aula experimental pelo WhatsApp"
      >
        Agendar aula
      </a>

      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY}
          activeIndex={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
          resolveAsset={asset}
        />
      )}
    </>
  );
}

export default HomePage;

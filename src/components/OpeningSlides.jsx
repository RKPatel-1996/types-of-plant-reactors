import { useState } from "react";
import { PlantGlyph } from "./PlantGlyphs.jsx";
import { biologicalLevels, platforms } from "../data/platforms.js";
import plantBioreactorExamples from "../assets/plant_bioreactor_examples.webp";

function SlideChrome({ slide, children, className = "" }) {
  return (
    <article className={`slide-card ${className}`}>
      <div className="slide-card__meta">
        <span>{slide.chapter}</span>
        <span>{slide.number}</span>
      </div>

      <div className="slide-content">{children}</div>
    </article>
  );
}

function TitleSlide({ slide }) {
  return (
    <SlideChrome slide={slide} className="slide-card--hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Unit 3 · Plant as Bioreactor</p>
          <h1>Types of Plant Reactors</h1>
          <p className="hero-question">Where is the reactor?</p>
          <p className="hero-hint">
            The answer may be smaller — or more biological — than the vessel
            you already know.
          </p>
        </div>

        <div className="hero-map" aria-hidden="true">
          <div className="hero-map__core">
            <PlantGlyph type="plant" size={118} />
          </div>

          <div className="hero-orbit hero-orbit--one">
            <PlantGlyph type="seed" size={54} />
          </div>
          <div className="hero-orbit hero-orbit--two">
            <PlantGlyph type="chloroplast" size={54} />
          </div>
          <div className="hero-orbit hero-orbit--three">
            <PlantGlyph type="cells" size={54} />
          </div>
          <div className="hero-orbit hero-orbit--four">
            <PlantGlyph type="root" size={54} />
          </div>
          <div className="hero-orbit hero-orbit--five">
            <PlantGlyph type="leaf" size={54} />
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

function LevelVisual({ item, compact = false }) {
  return (
    <div className={`level-visual ${compact ? "level-visual--compact" : ""}`}>
      <div className="level-visual__glyph">
        <PlantGlyph type={item.glyph} size={compact ? 54 : 68} />
      </div>
      <div>
        <strong>{item.label}</strong>
        <span>{item.level}</span>
      </div>
    </div>
  );
}

function ReactorQuestionSlide({ slide }) {
  const [activeId, setActiveId] = useState(biologicalLevels[0].id);

  const active =
    biologicalLevels.find((item) => item.id === activeId) ?? biologicalLevels[0];

  return (
    <>
      <SlideChrome slide={slide} className="screen-only-content">
        <div className="section-heading">
          <p className="eyebrow">Start with the biological scale</p>
          <h2>Where is the reactor?</h2>
          <p>
            Select a biological level. The production system does not have to
            be an industrial vessel.
          </p>
        </div>

        <div className="level-layout">
          <div className="level-grid" role="list">
            {biologicalLevels.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`level-button ${
                  item.id === active.id ? "is-selected" : ""
                }`}
                onClick={() => setActiveId(item.id)}
                aria-pressed={item.id === active.id}
              >
                <LevelVisual item={item} compact />
              </button>
            ))}
          </div>

          <aside className="level-inspector">
            <div className="level-inspector__tag">{active.level}</div>
            <PlantGlyph type={active.glyph} size={104} />
            <h3>{active.label}</h3>
            <p>{active.note}</p>
          </aside>
        </div>

        <div className="vessel-contrast">
          <PlantGlyph type="vessel" size={50} />
          <p>
            <strong>Engineering vessel</strong>
            <span>
              Important for cultivation — but not the primary taxonomy of this
              lesson.
            </span>
          </p>
        </div>
      </SlideChrome>

      <SlideChrome slide={slide} className="print-only">
        <div className="section-heading">
          <p className="eyebrow">Biological scale</p>
          <h2>Where is the reactor?</h2>
        </div>

        <div className="level-print-grid">
          {biologicalLevels.map((item) => (
            <div className="level-print-card" key={item.id}>
              <LevelVisual item={item} compact />
              <p>{item.note}</p>
            </div>
          ))}
        </div>

        <div className="vessel-contrast">
          <PlantGlyph type="vessel" size={44} />
          <p>
            <strong>Engineering vessel ≠ biological production platform</strong>
            <span>Both may participate in the same manufacturing process.</span>
          </p>
        </div>
      </SlideChrome>
    </>
  );
}

function DefinitionCard({ kind, glyph, title, subtitle, points }) {
  return (
    <div className={`definition-card definition-card--${kind}`}>
      <div className="definition-card__icon">
        <PlantGlyph type={glyph} size={76} />
      </div>

      <p className="definition-card__label">{title}</p>
      <h3>{subtitle}</h3>

      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function PlantAsBioreactorSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">The key distinction</p>
        <h2>Plant as Bioreactor</h2>
        <p>
          The living plant material is the biological system. A vessel may
          support that biology, but the vessel is not what performs the
          biological work.
        </p>
      </div>

      <div className="plant-bioreactor-evidence">
        <figure className="plant-bioreactor-figure">
          <img
            src={plantBioreactorExamples}
            alt="Examples of plant material cultivated in bioreactor systems."
          />

          <figcaption>
            Murthy et al. (2023), Figure 4: examples of plants propagated at
            larger scale using bioreactor systems. The photograph helps separate
            two ideas: the living plant material is the biological system,
            while the surrounding equipment provides the controlled
            cultivation environment.
          </figcaption>
        </figure>

        <div className="bio-vessel-distinction">
          <DefinitionCard
            kind="bio"
            glyph="plant"
            title="Biological system"
            subtitle="Living material does the biology"
            points={[
              "Plant cells, tissues or organs carry out growth and biosynthetic processes.",
            ]}
          />

          <div className="bio-vessel-relation">
            <span>operates within or alongside</span>
            <strong>↓</strong>
          </div>

          <DefinitionCard
            kind="engineering"
            glyph="vessel"
            title="Engineering support"
            subtitle="Equipment controls the environment"
            points={[
              "The vessel can provide containment, aeration, mixing and controlled conditions.",
            ]}
          />
        </div>
      </div>

      <div className="core-definition core-definition--visual">
        <span>For this lesson</span>
        <strong>
          Classify the reactor first by the biological production system:
          whole plant, seed, chloroplast, plant cells or hairy root.
        </strong>
      </div>
    </SlideChrome>
  );
}

function PlatformDetail({ platform }) {
  return (
    <div className="platform-detail">
      <div className="platform-detail__header">
        <div className="platform-detail__glyph">
          <PlantGlyph type={platform.glyph} size={92} />
        </div>

        <div>
          <p className="platform-detail__level">{platform.level}</p>
          <h3>{platform.label}</h3>
        </div>
      </div>

      <div className="platform-facts">
        <div className="fact-row">
          <span>What is the factory?</span>
          <strong>{platform.factory}</strong>
        </div>

        <div className="fact-row">
          <span>How is production established?</span>
          <strong>{platform.establish}</strong>
        </div>
      </div>

      <div className="product-block">
        <span>Representative product classes</span>
        <div className="product-chips">
          {platform.products.map((product) => (
            <span key={product}>{product}</span>
          ))}
        </div>
      </div>

      <div className="tradeoff-grid">
        <div className="tradeoff-card">
          <span className="tradeoff-card__mark">+</span>
          <div>
            <small>Distinctive strength</small>
            <p>{platform.strength}</p>
          </div>
        </div>

        <div className="tradeoff-card">
          <span className="tradeoff-card__mark">±</span>
          <div>
            <small>Important constraint</small>
            <p>{platform.limitation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformMapSlide({ slide }) {
  const [activeId, setActiveId] = useState(platforms[0].id);

  const active =
    platforms.find((platform) => platform.id === activeId) ?? platforms[0];

  return (
    <>
      <SlideChrome slide={slide} className="screen-only-content">
        <div className="section-heading">
          <p className="eyebrow">The map for the rest of the lesson</p>
          <h2>One plant, many factories</h2>
          <p>
            Select a platform. Each one uses a different biological level as
            the production system.
          </p>
        </div>

        <div className="platform-layout">
          <div className="platform-tabs" role="tablist" aria-label="Plant platforms">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                type="button"
                role="tab"
                aria-selected={platform.id === active.id}
                className={`platform-tab ${
                  platform.id === active.id ? "is-selected" : ""
                }`}
                onClick={() => setActiveId(platform.id)}
              >
                <PlantGlyph type={platform.glyph} size={46} />
                <span>{platform.shortLabel}</span>
              </button>
            ))}
          </div>

          <PlatformDetail platform={active} />
        </div>
      </SlideChrome>

      <div className="platform-print-stack print-only">
        {platforms.map((platform, index) => (
          <SlideChrome
            slide={{
              ...slide,
              number: `${slide.number}${String.fromCharCode(65 + index)}`,
            }}
            className="print-variant"
            key={platform.id}
          >
            <div className="section-heading">
              <p className="eyebrow">One plant, many factories</p>
              <h2>{platform.label}</h2>
            </div>

            <PlatformDetail platform={platform} />
          </SlideChrome>
        ))}
      </div>
    </>
  );
}

export function OpeningSlideRenderer({ slide }) {
  switch (slide.id) {
    case "title":
      return <TitleSlide slide={slide} />;

    case "reactor-question":
      return <ReactorQuestionSlide slide={slide} />;

    case "plant-as-bioreactor":
      return <PlantAsBioreactorSlide slide={slide} />;

    case "platform-map":
      return <PlatformMapSlide slide={slide} />;

    default:
      return null;
  }
}

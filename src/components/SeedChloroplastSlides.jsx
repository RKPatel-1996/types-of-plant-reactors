import { useState } from "react";
import chloroplastWorkflow from "../assets/chloroplast_transformation_workflow.webp";
import { PlantGlyph } from "./PlantGlyphs.jsx";

function SlideChrome({ slide, children }) {
  return (
    <article className="slide-card">
      <div className="slide-card__meta">
        <span>{slide.chapter}</span>
        <span>{slide.number}</span>
      </div>

      <div className="slide-content">{children}</div>
    </article>
  );
}


// ============================================================
// SLIDE 08 — SEED
// ============================================================

const seedStates = {
  developing: {
    label: "Developing seed",
    role: "Production tissue",
    description:
      "Living seed tissue is actively synthesizing and accumulating storage material.",
    points: [
      "Target product can accumulate during seed development",
      "Natural seed protein-storage machinery can be exploited",
      "Production occurs while the seed is metabolically active",
    ],
  },

  mature: {
    label: "Mature seed",
    role: "Storage package",
    description:
      "After maturation, the dry seed can preserve accumulated material until later processing.",
    points: [
      "Low water content supports comparatively stable storage",
      "Harvest can be separated in time from product recovery",
      "The same biological structure serves production and storage roles",
    ],
  },
};

function SeedPlatformSlide({ slide }) {
  const [stateId, setStateId] = useState("developing");
  const state = seedStates[stateId];

  return (
    <>
      <div className="interactive-screen-slide screen-only-content">
        <SlideChrome slide={slide}>
          <div className="section-heading">
            <p className="eyebrow">Seed / storage tissue</p>
            <h2>A seed can be both factory and storage unit</h2>
            <p>
              Seed biology creates an unusual production system: synthesis
              during development, followed by storage after maturation.
            </p>
          </div>

          <div className="seed-layout">
            <div className="seed-stage">
              <div className="seed-stage__visual">
                <PlantGlyph type="seed" size={160} />

                <div
                  className={`seed-state-indicator seed-state-indicator--${stateId}`}
                >
                  <span>{state.role}</span>
                </div>
              </div>

              <div className="seed-selector" role="tablist">
                {Object.entries(seedStates).map(([id, item]) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={stateId === id}
                    className={`seed-selector__button ${
                      stateId === id ? "is-selected" : ""
                    }`}
                    onClick={() => setStateId(id)}
                  >
                    <strong>{item.label}</strong>
                    <span>{item.role}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="seed-explanation">
              <div className="seed-explanation__header">
                <span>{state.role}</span>
                <h3>{state.label}</h3>
                <p>{state.description}</p>
              </div>

              <div className="seed-points">
                {state.points.map((point, index) => (
                  <div className="seed-point" key={point}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{point}</strong>
                  </div>
                ))}
              </div>

              <div className="seed-product-row">
                <span>Representative products</span>

                <div>
                  <strong>Recombinant proteins</strong>
                  <strong>Antibodies</strong>
                  <strong>Vaccine antigens</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="chapter-insight">
            <span>Distinctive idea</span>
            <strong>
              Production and storage can occur in the same harvestable
              biological structure.
            </strong>
          </div>
        </SlideChrome>
      </div>

      <div className="print-only">
        <SlideChrome slide={slide}>
          <div className="section-heading">
            <p className="eyebrow">Seed / storage tissue</p>
            <h2>Factory during development, storage after maturation</h2>
          </div>

          <div className="seed-print-comparison">
            {Object.entries(seedStates).map(([id, item]) => (
              <section
                className={`seed-print-comparison__state seed-print-comparison__state--${id}`}
                key={id}
              >
                <PlantGlyph type="seed" size={100} />

                <span>{item.role}</span>
                <h3>{item.label}</h3>
                <p>{item.description}</p>

                <div>
                  {item.points.map((point) => (
                    <strong key={point}>{point}</strong>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="seed-product-row">
            <span>Representative products</span>

            <div>
              <strong>Recombinant proteins</strong>
              <strong>Antibodies</strong>
              <strong>Vaccine antigens</strong>
            </div>
          </div>

          <div className="chapter-insight">
            <span>Distinctive idea</span>
            <strong>
              The same seed can serve as an active production tissue during
              development and later as a dry biological storage structure.
            </strong>
          </div>
        </SlideChrome>
      </div>
    </>
  );
}

// ============================================================
// SLIDE 09 — CHLOROPLAST AS SUBCELLULAR FACTORY
// ============================================================

const zoomLevels = [
  {
    id: "plant",
    label: "Whole plant",
    glyph: "plant",
    note: "Begin with the organism.",
  },
  {
    id: "leaf",
    label: "Leaf",
    glyph: "leaf",
    note: "Move into photosynthetic tissue.",
  },
  {
    id: "cell",
    label: "Plant cell",
    glyph: "cells",
    note: "The chloroplast sits inside the plant cell.",
  },
  {
    id: "chloroplast",
    label: "Chloroplast",
    glyph: "chloroplast",
    note: "The production platform can exist at the organelle level.",
  },
];

function ChloroplastPlatformSlide({ slide }) {
  const [activeIndex, setActiveIndex] = useState(3);
  const active = zoomLevels[activeIndex];

  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Chloroplast / plastid platform</p>
        <h2>A factory inside the plant cell</h2>
        <p>
          The production platform can be smaller than a cell. Chloroplasts have
          their own genetic and protein-synthesis machinery.
        </p>
      </div>

      <div className="chloroplast-layout">
        <div className="zoom-chain">
          {zoomLevels.map((item, index) => (
            <div className="zoom-chain__unit" key={item.id}>
              <button
                type="button"
                className={`zoom-step ${
                  index === activeIndex ? "is-selected" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={index === activeIndex}
              >
                <PlantGlyph type={item.glyph} size={64} />
                <strong>{item.label}</strong>
              </button>

              {index < zoomLevels.length - 1 && (
                <span className="zoom-chain__arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="chloroplast-inspector">
          <div className="chloroplast-inspector__visual">
            <PlantGlyph type={active.glyph} size={132} />
          </div>

          <div>
            <span className="chloroplast-inspector__level">
              Biological scale {activeIndex + 1} / {zoomLevels.length}
            </span>

            <h3>{active.label}</h3>
            <p>{active.note}</p>

            {active.id === "chloroplast" && (
              <div className="chloroplast-machinery">
                <div>
                  <span>DNA</span>
                  <strong>Own plastid genome</strong>
                </div>

                <div>
                  <span>RNA</span>
                  <strong>Transcription machinery</strong>
                </div>

                <div>
                  <span>Protein</span>
                  <strong>Translation machinery</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="chapter-insight">
        <span>Scale shift</span>
        <strong>
          A chloroplast is a subcellular compartment that can itself be
          genetically programmed for production.
        </strong>
      </div>
    </SlideChrome>
  );
}


// ============================================================
// SLIDE 10 — CHLOROPLAST TRANSFORMATION
// ============================================================

const plastidSteps = [
  {
    number: "01",
    label: "Expression construct",
    text: "Prepare the target gene and plastid-expression elements.",
  },
  {
    number: "02",
    label: "DNA delivery",
    text: "Introduce DNA into plant cells and plastids.",
  },
  {
    number: "03",
    label: "Targeted integration",
    text: "Matching plastid DNA regions direct integration into the plastome.",
  },
  {
    number: "04",
    label: "Selection",
    text: "Identify transformed plastids and cells.",
  },
  {
    number: "05",
    label: "Plant regeneration",
    text: "Regenerate a plant containing transformed plastids.",
  },
  {
    number: "06",
    label: "Product expression",
    text: "The engineered chloroplast becomes the production compartment.",
  },
];

function ChloroplastEngineeringSlide({ slide }) {
  const [activeStep, setActiveStep] = useState(0);
  const step = plastidSteps[activeStep];

  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Engineering the plastid genome</p>
        <h2>Reprogramming the chloroplast</h2>
        <p>
          Students do not need vector-construction detail here. The important
          idea is the biological transformation sequence.
        </p>
      </div>

      <div className="plastid-layout">
        <figure className="plastid-source-figure">
          <img
            src={chloroplastWorkflow}
            alt="Chloroplast transformation workflow from the collected scientific source."
          />

          <figcaption>
            Narra et al. (2025), Figure 1. Panel A shows homologous
            recombination inserting the gene-of-interest and selection cassette
            into the plastid genome. Panel B follows DNA delivery to leaf
            explants, antibiotic selection and regeneration of a transformed
            plant. Panel C shows the transition from wild-type plastids through
            heteroplasmy toward homoplasmy.
          </figcaption>
        </figure>

        <div className="plastid-process">
          <div className="plastid-step-tabs" role="tablist">
            {plastidSteps.map((item, index) => (
              <button
                type="button"
                key={item.number}
                role="tab"
                aria-selected={index === activeStep}
                className={`plastid-step-tab ${
                  index === activeStep ? "is-selected" : ""
                }`}
                onClick={() => setActiveStep(index)}
              >
                <span>{item.number}</span>
                <strong>{item.label}</strong>
              </button>
            ))}
          </div>

          <div className="plastid-step-detail">
            <span>{step.number}</span>
            <h3>{step.label}</h3>
            <p>{step.text}</p>
          </div>

          <div className="plastid-tradeoffs">
            <div>
              <span>Useful features</span>
              <p>
                Targeted plastid-genome integration, multiple plastid genome
                copies, and multigene-expression potential.
              </p>
            </div>

            <div>
              <span>Important constraint</span>
              <p>
                Transformation/regeneration remain species-dependent, and not
                every recombinant protein is suitable for chloroplast
                production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}


export function SeedChloroplastSlideRenderer({ slide }) {
  switch (slide.id) {
    case "seed-platform":
      return <SeedPlatformSlide slide={slide} />;

    case "chloroplast-platform":
      return <ChloroplastPlatformSlide slide={slide} />;

    case "chloroplast-transform":
      return <ChloroplastEngineeringSlide slide={slide} />;

    default:
      return null;
  }
}

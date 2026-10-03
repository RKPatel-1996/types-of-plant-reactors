import { useState } from "react";
import plantCellReactors from "../assets/plant_cell_lab_bioreactors.webp";
import hairyRootWorkflow from "../assets/hairy_root_production_workflow.webp";
import feijoaCallus from "../assets/feijoa_callus_friable.webp";
import feijoaSuspension from "../assets/feijoa_cell_suspension.webp";
import tobaccoRootSequence from "../assets/tobacco_root_to_suspension.jpg";
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
// 11 — PLANT CELL SUSPENSION
// ============================================================

const cellStages = [
  {
    id: "plant",
    title: "Plant explant",
    description:
      "The process begins with living plant tissue selected as the starting material.",
    glyph: "leaf",
    image: null,
    imageAlt: "",
    caption:
      "Starting tissue provides the cells from which an in-vitro culture can be established.",
  },
  {
    id: "callus",
    title: "Callus",
    description:
      "Cells proliferate as relatively unorganized tissue after culture induction.",
    glyph: "cells",
    image: feijoaCallus,
    imageAlt:
      "Feijoa callus developing from floral tissue through several weeks of culture.",
    caption:
      "Raikar et al. (2024), Figure 2. Panels A and B show callus after approximately one and three weeks of culture.",
  },
  {
    id: "friable",
    title: "Friable callus",
    description:
      "A loose, crumbly callus is valuable because cells can separate more readily when transferred into liquid medium.",
    glyph: "cells",
    image: feijoaCallus,
    imageAlt:
      "Feijoa friable callus after extended subculture.",
    caption:
      "Raikar et al. (2024), Figure 2C shows eight-week-old friable callus maintained by subculture. Friability helps the tissue disperse when suspension culture is initiated.",
  },
  {
    id: "suspension",
    title: "Cell suspension",
    description:
      "Cells and small aggregates are maintained as an independent culture in agitated liquid medium.",
    glyph: "cells",
    image: feijoaSuspension,
    imageAlt:
      "Feijoa cell suspension cultures shown during different growth phases.",
    caption:
      "Raikar et al. (2024), Figure 4 shows Feijoa suspension cultures during the different phases of the growth curve.",
  },
];

function CellSuspensionSlide({ slide }) {
  const [activeIndex, setActiveIndex] = useState(3);
  const active = cellStages[activeIndex];

  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Plant cell-suspension platform</p>
        <h2>Take the plant apart</h2>
        <p>
          Moving from organized plant tissue to a suspension culture is a
          biological transition, not simply a change of container.
        </p>
      </div>

      <div className="cell-suspension-layout cell-suspension-layout--real">
        <div className="cell-stage-chain">
          {cellStages.map((stage, index) => (
            <div className="cell-stage-unit" key={stage.id}>
              <button
                type="button"
                className={`cell-stage-button ${
                  index === activeIndex ? "is-selected" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={index === activeIndex}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <PlantGlyph type={stage.glyph} size={46} />
                <strong>{stage.title}</strong>
              </button>

              {index < cellStages.length - 1 && (
                <span className="cell-stage-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="cell-stage-inspector cell-stage-inspector--media">
          <div className="cell-stage-inspector__visual">
            {active.image ? (
              <figure className="cell-stage-photo">
                <img src={active.image} alt={active.imageAlt} />
                <figcaption>{active.caption}</figcaption>
              </figure>
            ) : (
              <div className="cell-stage-glyph">
                <PlantGlyph type={active.glyph} size={126} />
                <p>{active.caption}</p>
              </div>
            )}
          </div>

          <div className="cell-stage-inspector__copy">
            <span className="cell-stage-inspector__tag">
              Biological transition
            </span>

            <h3>{active.title}</h3>
            <p>{active.description}</p>

            {active.id === "suspension" && (
              <div className="cell-suspension-payoff">
                <div>
                  <span>What we gain</span>
                  <strong>Independent controlled plant-cell culture</strong>
                </div>

                <div>
                  <span>What changes</span>
                  <strong>
                    Oxygen transfer, mixing, aggregation and shear now matter
                  </strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="chapter-insight">
        <span>Key transition</span>
        <strong>
          Friable callus provides the bridge between solid plant tissue culture
          and cells growing as a liquid suspension.
        </strong>
      </div>
    </SlideChrome>
  );
}

// ============================================================
// 12 — ELELYSO
// ============================================================

function ElelysoSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Commercial plant-cell biotechnology</p>
        <h2>From plant cells to a medicine</h2>
        <p>
          A plant cell culture can become a real manufacturing platform for a
          therapeutic recombinant protein.
        </p>
      </div>

      <div className="elelyso-layout">
        <div className="elelyso-story">
          <div className="elelyso-product">
            <span>Commercial example</span>
            <h3>Taliglucerase alfa</h3>
            <strong>ELELYSO</strong>
            <p>
              Recombinant human glucocerebrosidase produced using genetically
              engineered carrot plant cell culture.
            </p>
          </div>

          <div className="elelyso-flow">
            <div>
              <span>01</span>
              <PlantGlyph type="cells" size={48} />
              <strong>Engineered carrot cells</strong>
            </div>

            <i>→</i>

            <div>
              <span>02</span>
              <PlantGlyph type="vessel" size={48} />
              <strong>Controlled cultivation</strong>
            </div>

            <i>→</i>

            <div>
              <span>03</span>
              <div className="protein-symbol">P</div>
              <strong>Recombinant enzyme</strong>
            </div>

            <i>→</i>

            <div>
              <span>04</span>
              <div className="medicine-symbol">Rx</div>
              <strong>Therapeutic product</strong>
            </div>
          </div>

          <div className="bio-engineering-split">
            <div>
              <span>Biological factory</span>
              <strong>Carrot plant cells</strong>
              <p>Perform recombinant protein synthesis.</p>
            </div>

            <div>
              <span>Cultivation technology</span>
              <strong>Controlled bioreactor environment</strong>
              <p>Supports containment, mixing, aeration and scale.</p>
            </div>
          </div>

          <p className="source-note">
            Evidence basis: FDA prescribing information for ELELYSO states
            that taliglucerase alfa is produced using recombinant DNA
            technology in carrot plant cell culture.
          </p>
        </div>

        <figure className="plant-cell-reactor-figure">
          <img
            src={plantCellReactors}
            alt="Examples of laboratory-scale plant-cell bioreactor systems."
          />

          <figcaption>
            Laboratory-scale plant-cell cultivation systems shown in the
            collected review include stirred, airlift, flat-panel and
            single-use rocking configurations. They illustrate the engineering
            environments that can support plant-cell cultures; they are not
            presented as the specific commercial equipment used to manufacture
            ELELYSO.
          </figcaption>
        </figure>
      </div>
    </SlideChrome>
  );
}


// ============================================================
// 13 — HAIRY ROOT CONCEPT
// ============================================================

function HairyRootConceptSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Differentiated organ culture</p>
        <h2>The root becomes the factory</h2>
        <p>
          Hairy-root culture keeps organized branching root tissue. A cell
          suspension, by contrast, loses that organ-level organization.
        </p>
      </div>

      <div className="root-real-layout">
        <figure className="root-real-figure">
          <img
            src={tobaccoRootSequence}
            alt="Sequence showing tobacco plant, hairy-root cultures, callus formation and derived fine cell suspension."
          />

          <figcaption>
            Hidalgo et al. (2017), Figure 2. A: intact tobacco plant;
            B: hairy roots 2–4 weeks after infection; C: selected hairy-root
            line on solid medium; D: hairy roots in liquid medium; E–F:
            root dedifferentiation and callus induction; G: friable callus;
            H: the derived fine cell suspension.
          </figcaption>
        </figure>

        <div className="root-real-compare">
          <div className="root-system-card root-system-card--root">
            <div className="root-system-card__heading">
              <PlantGlyph type="root" size={64} />

              <div>
                <span>Panels C–D</span>
                <h3>Hairy-root culture</h3>
              </div>
            </div>

            <p>
              The culture retains branching, differentiated root architecture
              and root-associated metabolism.
            </p>
          </div>

          <div className="root-system-card root-system-card--cells">
            <div className="root-system-card__heading">
              <PlantGlyph type="cells" size={64} />

              <div>
                <span>Panel H</span>
                <h3>Cell suspension</h3>
              </div>
            </div>

            <p>
              After dedifferentiation and friable-callus formation, the system
              becomes dispersed cells and small aggregates in liquid culture.
            </p>
          </div>

          <div className="root-transition-note">
            <span>Same plant origin</span>
            <strong>Different biological organization</strong>
            <p>
              This is why hairy roots and cell suspensions are treated as
              distinct biological production platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="chapter-insight">
        <span>Why preserve the root?</span>
        <strong>
          Differentiated root tissue can retain biosynthetic capabilities that
          are especially useful for root-associated specialized metabolites.
        </strong>
      </div>
    </SlideChrome>
  );
}

// ============================================================
// 14 — HAIRY ROOT WORKFLOW
// ============================================================

const hairySteps = [
  {
    number: "01",
    title: "Plant material",
    text: "Choose an appropriate plant source.",
  },
  {
    number: "02",
    title: "Transformation",
    text: "Induce hairy roots using Rhizobium rhizogenes.",
  },
  {
    number: "03",
    title: "Root induction",
    text: "Branching transformed roots emerge.",
  },
  {
    number: "04",
    title: "Clone selection",
    text: "Select a productive and stable root line.",
  },
  {
    number: "05",
    title: "Optimization",
    text: "Tune culture conditions for growth and product formation.",
  },
  {
    number: "06",
    title: "Scale-up",
    text: "Provide oxygen and nutrients without damaging dense root biomass.",
  },
  {
    number: "07",
    title: "Product",
    text: "Recover specialized metabolites or recombinant products.",
  },
];

function HairyRootWorkflowSlide({ slide }) {
  const [activeStep, setActiveStep] = useState(0);
  const step = hairySteps[activeStep];

  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">From transformation to production</p>
        <h2>Hairy roots: from explant to product</h2>
        <p>
          Hairy-root biotechnology is a complete production workflow — not
          simply the appearance of unusual roots.
        </p>
      </div>

      <div className="hairy-workflow-layout">
        <figure className="hairy-workflow-figure">
          <img
            src={hairyRootWorkflow}
            alt="Hairy-root generation and production workflow."
          />

          <figcaption>
            Hairy-root production workflow based on Gutierrez-Valdes et al.
            (2020). The figure connects transformation and root induction with
            establishment of a selected root line, culture optimization and
            progression toward scaled production. The important transition is
            from generating transformed roots to managing them as a productive
            biological culture.
          </figcaption>
        </figure>

        <div className="hairy-workflow-panel">
          <div className="hairy-step-grid" role="tablist">
            {hairySteps.map((item, index) => (
              <button
                type="button"
                key={item.number}
                role="tab"
                aria-selected={index === activeStep}
                className={`hairy-step ${
                  index === activeStep ? "is-selected" : ""
                }`}
                onClick={() => setActiveStep(index)}
              >
                <span>{item.number}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>

          <div className="hairy-step-detail">
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>

          <div className="hairy-product-branches">
            <div>
              <span>Major route</span>
              <strong>Specialized metabolites</strong>
              <p>
                Root-associated biosynthetic pathways can be maintained and
                optimized in culture.
              </p>
            </div>

            <div>
              <span>Additional route</span>
              <strong>Recombinant proteins</strong>
              <p>
                Hairy-root systems can also express complex recombinant
                products.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="chapter-insight">
        <span>Scale-up consequence</span>
        <strong>
          Branching root biomass makes oxygen and nutrient transfer more
          difficult than in freely suspended cells; cultivation technology
          must adapt to the biology.
        </strong>
      </div>
    </SlideChrome>
  );
}


export function CellRootSlideRenderer({ slide }) {
  switch (slide.id) {
    case "cell-suspension":
      return <CellSuspensionSlide slide={slide} />;

    case "elelyso-case":
      return <ElelysoSlide slide={slide} />;

    case "hairy-root":
      return <HairyRootConceptSlide slide={slide} />;

    case "hairy-root-workflow":
      return <HairyRootWorkflowSlide slide={slide} />;

    default:
      return null;
  }
}

import { useState } from "react";
import nicotianaImage from "../assets/nicotiana_transient_expression.webp";
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

function FactoryFlow() {
  const stages = [
    {
      id: "instruction",
      label: "Biological instruction",
      short: "Introduce the production program",
    },
    {
      id: "cells",
      label: "Living plant cells",
      short: "Plant machinery reads the instruction",
    },
    {
      id: "synthesis",
      label: "Biosynthesis",
      short: "Cells manufacture the target product",
    },
    {
      id: "biomass",
      label: "Product in biomass",
      short: "The useful molecule accumulates in tissue",
    },
    {
      id: "harvest",
      label: "Harvest / recovery",
      short: "Plant biomass becomes the production feedstock",
    },
  ];

  return (
    <div className="factory-flow">
      {stages.map((stage, index) => (
        <div className="factory-flow__unit" key={stage.id}>
          <div className="factory-stage">
            <span className="factory-stage__number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{stage.label}</strong>
            <p>{stage.short}</p>
          </div>

          {index < stages.length - 1 && (
            <div className="factory-flow__arrow" aria-hidden="true">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function WholePlantFactorySlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Whole plant / vegetative tissue</p>
        <h2>The plant becomes the factory</h2>
        <p>
          The plant is not simply storing a useful molecule. Its living cells
          perform the biological synthesis.
        </p>
      </div>

      <div className="whole-factory-layout">
        <div className="whole-factory-visual">
          <div className="whole-factory-plant">
            <PlantGlyph type="plant" size={150} />
          </div>

          <div className="whole-factory-callout">
            <span>Biological factory</span>
            <strong>Living plant tissue</strong>
          </div>

          <div className="whole-factory-products">
            <span>Possible outputs</span>
            <div>
              <strong>Proteins</strong>
              <strong>Antibodies</strong>
              <strong>Enzymes</strong>
              <strong>Metabolites</strong>
            </div>
          </div>
        </div>

        <FactoryFlow />
      </div>

      <div className="chapter-insight">
        <span>Key idea</span>
        <strong>
          The biological production machinery already exists inside the plant
          cell. Biotechnology redirects it toward a desired product.
        </strong>
      </div>
    </SlideChrome>
  );
}

const strategies = {
  stable: {
    label: "Stable expression",
    kicker: "Build a persistent transformed line",
    steps: [
      "Introduce the gene",
      "Integrate into nuclear genome",
      "Select transformed cells",
      "Regenerate transformed plant",
      "Maintain the production line",
    ],
    strength:
      "Useful when a persistent transformed production system is required.",
    constraint:
      "Establishing and regenerating the transformed plant line takes time.",
  },

  transient: {
    label: "Transient expression",
    kicker: "Use the plant rapidly without first creating a stable line",
    steps: [
      "Introduce expression construct",
      "Deliver into plant tissue",
      "Temporary gene expression",
      "Rapid product accumulation",
      "Harvest tissue",
    ],
    strength:
      "Production can begin quickly in existing plant tissue.",
    constraint:
      "Expression is temporary rather than inherited as a stable plant line.",
  },
};

function StrategyPath({ strategy }) {
  return (
    <div className="strategy-path">
      {strategy.steps.map((step, index) => (
        <div className="strategy-path__unit" key={step}>
          <div className="strategy-path__step">
            <span>{index + 1}</span>
            <strong>{step}</strong>
          </div>

          {index < strategy.steps.length - 1 && (
            <span className="strategy-path__arrow" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function StableTransientSlide({ slide }) {
  const [mode, setMode] = useState("stable");
  const strategy = strategies[mode];

  return (
    <>
      <div className="interactive-screen-slide screen-only-content">
        <SlideChrome slide={slide}>
          <div className="section-heading">
            <p className="eyebrow">
              Same biological platform · different strategy
            </p>
            <h2>Two ways to use the whole plant</h2>
            <p>
              Stable and transient expression are strategies for establishing
              production. They are not separate biological reactor types.
            </p>
          </div>

          <div className="strategy-selector" role="tablist">
            {Object.entries(strategies).map(([id, item]) => (
              <button
                type="button"
                role="tab"
                aria-selected={mode === id}
                className={`strategy-selector__button ${
                  mode === id ? "is-selected" : ""
                }`}
                onClick={() => setMode(id)}
                key={id}
              >
                <span>{item.label}</span>
                <small>{item.kicker}</small>
              </button>
            ))}
          </div>

          <div className="strategy-stage">
            <div className="strategy-stage__plant">
              <PlantGlyph type="plant" size={128} />

              <div className="strategy-stage__badge">
                {strategy.label}
              </div>
            </div>

            <div className="strategy-stage__content">
              <StrategyPath strategy={strategy} />

              <div className="strategy-outcomes">
                <div>
                  <span className="strategy-outcomes__plus">+</span>
                  <p>
                    <small>Why use it?</small>
                    <strong>{strategy.strength}</strong>
                  </p>
                </div>

                <div>
                  <span className="strategy-outcomes__trade">±</span>
                  <p>
                    <small>Important constraint</small>
                    <strong>{strategy.constraint}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="chapter-insight">
            <span>Decision rule</span>
            <strong>
              The appropriate strategy depends on the production objective —
              not on one method being universally better.
            </strong>
          </div>
        </SlideChrome>
      </div>

      <div className="print-only">
        <SlideChrome slide={slide}>
          <div className="section-heading">
            <p className="eyebrow">
              Same biological platform · different strategy
            </p>
            <h2>Stable and transient expression</h2>
            <p>
              Both use the whole plant as the biological platform, but they
              establish production differently.
            </p>
          </div>

          <div className="strategy-print-summary">
            {Object.entries(strategies).map(([id, item]) => (
              <section
                className="strategy-print-summary__item"
                key={id}
              >
                <div className="strategy-print-summary__heading">
                  <h3>{item.label}</h3>
                  <p>{item.kicker}</p>
                </div>

                <StrategyPath strategy={item} />

                <div className="strategy-print-summary__notes">
                  <div>
                    <span>Why use it?</span>
                    <strong>{item.strength}</strong>
                  </div>

                  <div>
                    <span>Constraint</span>
                    <strong>{item.constraint}</strong>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="chapter-insight">
            <span>Decision rule</span>
            <strong>
              Choose the expression strategy according to the production
              objective, not because one strategy is universally superior.
            </strong>
          </div>
        </SlideChrome>
      </div>
    </>
  );
}

function NicotianaCaseSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Real example · Nicotiana benthamiana</p>
        <h2>A plant biofactory in practice</h2>
        <p>
          Transient expression can redirect leaf metabolism toward useful
          specialized metabolites.
        </p>
      </div>

      <div className="case-layout">
        <figure className="case-figure">
          <img
            src={nicotianaImage}
            alt="Nicotiana benthamiana transient expression workflow from the collected source material."
          />

          <figcaption>
            Yao et al. (2022), Figure 2. A: an individual
            <em>Nicotiana benthamiana</em> plant is fixed in the holder;
            B: several plants are joined for handling; C: leaves are inverted
            into an <em>Agrobacterium tumefaciens</em> suspension and vacuum
            infiltrated; D: the infiltrated leaf tissue is used to produce
            the target plant natural products genistein and scutellarin.
          </figcaption>
        </figure>

        <div className="case-story">
          <div className="case-product">
            <span>Target example</span>
            <strong>Genistein + scutellarin</strong>
            <p>Specialized metabolites produced in plant leaf tissue.</p>
          </div>

          <div className="case-sequence">
            <div>
              <span>01</span>
              <strong>Nicotiana plant</strong>
            </div>

            <i>→</i>

            <div>
              <span>02</span>
              <strong>Transient expression</strong>
            </div>

            <i>→</i>

            <div>
              <span>03</span>
              <strong>Biosynthetic enzymes</strong>
            </div>

            <i>→</i>

            <div>
              <span>04</span>
              <strong>Metabolism redirected</strong>
            </div>

            <i>→</i>

            <div>
              <span>05</span>
              <strong>Target molecules</strong>
            </div>
          </div>

          <div className="case-payoff">
            <span>Why this case matters</span>
            <p>
              A plant biofactory can produce more than recombinant proteins.
              Its metabolic pathways can also be redirected toward valuable
              specialized metabolites.
            </p>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

export function WholePlantSlideRenderer({ slide }) {
  switch (slide.id) {
    case "whole-plant":
      return <WholePlantFactorySlide slide={slide} />;

    case "stable-transient":
      return <StableTransientSlide slide={slide} />;

    case "nicotiana-case":
      return <NicotianaCaseSlide slide={slide} />;

    default:
      return null;
  }
}

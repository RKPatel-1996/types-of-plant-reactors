import { useState } from "react";
import { platforms } from "../data/platforms.js";
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
// SLIDE 15 — PLATFORM COMPARISON
// ============================================================

const comparisonMeta = {
  "whole-plant": {
    distinctive: "Intact living biomass becomes the production system.",
  },
  seed: {
    distinctive: "Production can be coupled to dry biological storage.",
  },
  chloroplast: {
    distinctive: "Production is localized inside a subcellular organelle.",
  },
  "cell-suspension": {
    distinctive: "Production no longer requires growing an intact plant.",
  },
  "hairy-root": {
    distinctive: "Differentiated root organization and metabolism are retained.",
  },
};

function ComparisonDetail({ platform }) {
  const meta = comparisonMeta[platform.id];

  return (
    <div className="comparison-detail">
      <div className="comparison-detail__identity">
        <PlantGlyph type={platform.glyph} size={112} />

        <div>
          <span>{platform.level}</span>
          <h3>{platform.label}</h3>
        </div>
      </div>

      <div className="comparison-facts">
        <div>
          <span>What is the factory?</span>
          <strong>{platform.factory}</strong>
        </div>

        <div>
          <span>How is it established?</span>
          <strong>{platform.establish}</strong>
        </div>

        <div className="comparison-facts__accent">
          <span>Distinctive feature</span>
          <strong>{meta.distinctive}</strong>
        </div>

        <div>
          <span>Important constraint</span>
          <strong>{platform.limitation}</strong>
        </div>
      </div>
    </div>
  );
}

function PlatformComparisonSlide({ slide }) {
  const [activeId, setActiveId] = useState(platforms[0].id);

  const active =
    platforms.find((platform) => platform.id === activeId) ?? platforms[0];

  return (
    <>
      <SlideChrome slide={slide}>
        <div className="screen-only-content">
          <div className="section-heading">
            <p className="eyebrow">Compare the biological systems</p>
            <h2>Five biological factories</h2>
            <p>
              The main difference is not the shape of the vessel. It is the
              biological level chosen to perform production.
            </p>
          </div>

          <div className="comparison-selector" role="tablist">
            {platforms.map((platform) => (
              <button
                type="button"
                role="tab"
                aria-selected={platform.id === active.id}
                key={platform.id}
                className={`comparison-selector__button comparison-selector__button--${platform.id} ${
                  platform.id === active.id ? "is-selected" : ""
                }`}
                onClick={() => setActiveId(platform.id)}
              >
                <PlantGlyph type={platform.glyph} size={52} />
                <span>{platform.shortLabel}</span>
              </button>
            ))}
          </div>

          <ComparisonDetail platform={active} />

          <div className="synthesis-rule">
            <span>Comparison rule</span>
            <strong>
              Do not ask “Which reactor is best?” Ask “Which biological system
              fits the production requirement?”
            </strong>
          </div>
        </div>

        <div className="print-only">
          <div className="section-heading">
            <p className="eyebrow">Comparison summary</p>
            <h2>Five biological factories</h2>
          </div>

          <div className="comparison-print-grid">
            {platforms.map((platform) => (
              <div className="comparison-print-card" key={platform.id}>
                <div className="comparison-print-card__header">
                  <PlantGlyph type={platform.glyph} size={50} />
                  <strong>{platform.shortLabel}</strong>
                </div>

                <p>
                  <span>Factory</span>
                  {platform.factory}
                </p>

                <p>
                  <span>Distinctive</span>
                  {comparisonMeta[platform.id].distinctive}
                </p>

                <p>
                  <span>Constraint</span>
                  {platform.limitation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SlideChrome>
    </>
  );
}


// ============================================================
// SLIDE 16 — PLATFORM / PRODUCT MANY-TO-MANY MAP
// ============================================================

const productGroups = [
  {
    id: "metabolites",
    label: "Specialized metabolites",
    short: "Metabolites",
    description:
      "Plant biosynthetic pathways can be used or redirected toward valuable specialized molecules.",
    core: ["whole-plant", "hairy-root"],
    documented: ["cell-suspension", "chloroplast"],
  },
  {
    id: "proteins",
    label: "Recombinant proteins",
    short: "Proteins",
    description:
      "Foreign or engineered proteins can be produced across several plant biological platforms.",
    core: ["whole-plant", "chloroplast", "cell-suspension"],
    documented: ["seed", "hairy-root"],
  },
  {
    id: "enzymes",
    label: "Enzymes",
    short: "Enzymes",
    description:
      "Plant systems can manufacture functional enzymes for therapeutic, industrial, or research use.",
    core: ["cell-suspension", "whole-plant"],
    documented: ["seed", "chloroplast", "hairy-root"],
  },
  {
    id: "vaccines",
    label: "Vaccine antigens",
    short: "Vaccines",
    description:
      "Plant molecular-farming systems can produce antigens intended for vaccine development.",
    core: ["whole-plant", "chloroplast"],
    documented: ["seed", "cell-suspension"],
  },
  {
    id: "antibodies",
    label: "Antibodies / plantibodies",
    short: "Antibodies",
    description:
      "Plants and plant cells can serve as recombinant antibody-production systems.",
    core: ["whole-plant", "cell-suspension"],
    documented: ["seed", "hairy-root"],
  },
  {
    id: "other",
    label: "Other useful biomolecules",
    short: "Other",
    description:
      "The platform-product relationship is broader than any single product category.",
    core: [],
    documented: [
      "whole-plant",
      "seed",
      "chloroplast",
      "cell-suspension",
      "hairy-root",
    ],
  },
];

function ProductPlatformSlide({ slide }) {
  const [productId, setProductId] = useState(productGroups[0].id);

  const product =
    productGroups.find((item) => item.id === productId) ?? productGroups[0];

  return (
    <SlideChrome slide={slide}>
      <div className="screen-only-content">
        <div className="section-heading">
          <p className="eyebrow">Many-to-many relationship</p>
          <h2>One platform can make many products</h2>
          <p>
            Product type does not uniquely define the production platform. The
            same product class may be produced using several biological
            systems.
          </p>
        </div>

        <div className="product-map-layout">
          <div className="product-selector" role="tablist">
            {productGroups.map((item) => (
              <button
                type="button"
                role="tab"
                aria-selected={item.id === product.id}
                key={item.id}
                className={`product-selector__button product-selector__button--${item.id} ${
                  item.id === product.id ? "is-selected" : ""
                }`}
                onClick={() => setProductId(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="product-map">
            <div className={`product-focus product-focus--${product.id}`}>
              <span>Selected product class</span>
              <h3>{product.label}</h3>
              <p>{product.description}</p>
            </div>

            <div className="platform-relation-grid">
              {platforms.map((platform) => {
                const isCore = product.core.includes(platform.id);
                const isDocumented =
                  product.documented.includes(platform.id);

                let relation = "Not highlighted";
                let relationClass = "neutral";

                if (isCore) {
                  relation = "Core example in this lesson";
                  relationClass = "core";
                } else if (isDocumented) {
                  relation = "Documented route";
                  relationClass = "documented";
                }

                return (
                  <div
                    className={`platform-relation platform-relation--${relationClass}`}
                    key={platform.id}
                  >
                    <PlantGlyph type={platform.glyph} size={55} />

                    <strong>{platform.shortLabel}</strong>
                    <span>{relation}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="synthesis-rule synthesis-rule--quiet">
          <span>Important</span>
          <strong>
            This map is illustrative, not exhaustive. “Not highlighted” does
            not mean a biological route is impossible.
          </strong>
        </div>
      </div>

      <div className="print-only product-print-summary">
        <div className="section-heading">
          <p className="eyebrow">Many-to-many relationship</p>
          <h2>Platforms and product classes</h2>
          <p>
            A product class may be produced using more than one biological
            platform.
          </p>
        </div>

        <div className="product-print-matrix">
          <div className="product-print-matrix__corner">
            Product class
          </div>

          {platforms.map((platform) => (
            <div
              className="product-print-matrix__platform"
              key={platform.id}
            >
              <PlantGlyph type={platform.glyph} size={36} />
              <strong>{platform.shortLabel}</strong>
            </div>
          ))}

          {productGroups.map((item) => (
            <div
              className="product-print-matrix__row"
              key={item.id}
            >
              <div className="product-print-matrix__product">
                {item.label}
              </div>

              {platforms.map((platform) => {
                const isCore = item.core.includes(platform.id);
                const isDocumented =
                  item.documented.includes(platform.id);

                const label = isCore
                  ? "Core"
                  : isDocumented
                    ? "Documented"
                    : "—";

                const state = isCore
                  ? "core"
                  : isDocumented
                    ? "documented"
                    : "neutral";

                return (
                  <div
                    className={`product-print-matrix__cell product-print-matrix__cell--${state}`}
                    key={platform.id}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="product-print-legend">
          <span>
            <strong>Core</strong> = emphasized example in this lesson
          </span>

          <span>
            <strong>Documented</strong> = supported route, but not the main
            teaching example
          </span>
        </div>

        <div className="synthesis-rule synthesis-rule--quiet">
          <span>Important</span>
          <strong>
            The matrix is illustrative rather than exhaustive.
          </strong>
        </div>
      </div>
    </SlideChrome>
  );
}

// ============================================================
// SLIDE 17 — FINAL SELECTION CHALLENGE
// ============================================================

const challenges = [
  {
    id: "rapid-leaf",
    number: "A",
    requirement:
      "You need rapid protein production in leaves without first establishing a stable transgenic plant line.",
    match: "whole-plant",
    matchLabel: "Whole plant / leaf — transient expression",
    reason:
      "Transient expression uses existing plant tissue and avoids the time required to establish a stable inherited production line.",
  },
  {
    id: "dry-storage",
    number: "B",
    requirement:
      "You want the biological structure to perform production and then provide dry storage after harvest.",
    match: "seed",
    matchLabel: "Seed / storage tissue",
    reason:
      "Seed tissue can accumulate product during development and later function as a relatively dry storage structure.",
  },
  {
    id: "plastid",
    number: "C",
    requirement:
      "Your design specifically requires engineering the plastid genome and using an intracellular organelle as the production compartment.",
    match: "chloroplast",
    matchLabel: "Chloroplast / plastid",
    reason:
      "This requirement directly identifies the plastid genome and chloroplast as the biological production compartment.",
  },
  {
    id: "contained-cells",
    number: "D",
    requirement:
      "You want a contained, independent plant-cell line that can be cultivated without growing intact plants.",
    match: "cell-suspension",
    matchLabel: "Plant cell suspension",
    reason:
      "A suspension culture maintains selected plant cells as an independent liquid production system.",
  },
  {
    id: "root-metabolism",
    number: "E",
    requirement:
      "The target is strongly associated with differentiated root metabolism and you want to retain organized root tissue.",
    match: "hairy-root",
    matchLabel: "Hairy root culture",
    reason:
      "Hairy roots preserve differentiated root organization and root-associated biosynthetic capabilities.",
  },
];

function ChallengeScreen({ challenge }) {
  const [choice, setChoice] = useState(null);

  return (
    <div className="challenge-screen">
      <div className="challenge-question">
        <span>Production requirement</span>
        <h3>{challenge.requirement}</h3>
      </div>

      <div className="challenge-options">
        {platforms.map((platform) => (
          <button
            type="button"
            key={platform.id}
            className={`challenge-option ${
              choice === platform.id ? "is-selected" : ""
            } ${
              choice !== null && platform.id === challenge.match
                ? "is-designed-match"
                : ""
            }`}
            onClick={() => setChoice(platform.id)}
          >
            <PlantGlyph type={platform.glyph} size={52} />
            <span>{platform.shortLabel}</span>
          </button>
        ))}
      </div>

      {choice === null ? (
        <div className="challenge-prompt">
          Choose the biological platform that most directly fits this
          requirement.
        </div>
      ) : (
        <div className="challenge-reasoning">
          <span>Designed match</span>
          <h4>{challenge.matchLabel}</h4>
          <p>{challenge.reason}</p>

          <small>
            Real process design can permit more than one plausible platform;
            the objective here is to identify the most direct biological match.
          </small>
        </div>
      )}
    </div>
  );
}

function FinalChallengeSlide({ slide }) {
  const [challengeIndex, setChallengeIndex] = useState(0);
  const challenge = challenges[challengeIndex];

  return (
    <>
      <SlideChrome slide={slide}>
        <div className="screen-only-content">
          <div className="section-heading">
            <p className="eyebrow">Final synthesis</p>
            <h2>Which plant factory would you choose?</h2>
            <p>
              Start from the production requirement, then select the biological
              platform. Cultivation technology comes afterward.
            </p>
          </div>

          <div className="challenge-layout">
            <div className="challenge-tabs">
              {challenges.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={`challenge-tab ${
                    index === challengeIndex ? "is-selected" : ""
                  }`}
                  onClick={() => setChallengeIndex(index)}
                >
                  <span>{item.number}</span>
                  <strong>Scenario {index + 1}</strong>
                </button>
              ))}
            </div>

            <ChallengeScreen
              challenge={challenge}
              key={challenge.id}
            />
          </div>

          <div className="final-rule">
            <span>Final rule</span>
            <strong>
              1. Choose the biological production system.
              <i>→</i>
              2. Then choose the cultivation technology that supports it.
            </strong>
          </div>
        </div>

        <div className="print-only">
          <div className="section-heading">
            <p className="eyebrow">Final synthesis</p>
            <h2>Which plant factory would you choose?</h2>
          </div>

          <div className="challenge-print-list">
            {challenges.map((item) => (
              <div className="challenge-print-card" key={item.id}>
                <div className="challenge-print-card__number">
                  {item.number}
                </div>

                <div>
                  <p>{item.requirement}</p>
                  <strong>{item.matchLabel}</strong>
                  <span>{item.reason}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="final-rule">
            <span>Final rule</span>
            <strong>
              Biological platform first → supporting cultivation technology
              second.
            </strong>
          </div>
        </div>
      </SlideChrome>
    </>
  );
}


export function SynthesisSlideRenderer({ slide }) {
  switch (slide.id) {
    case "platform-comparison":
      return <PlatformComparisonSlide slide={slide} />;

    case "platform-products":
      return <ProductPlatformSlide slide={slide} />;

    case "platform-challenge":
      return <FinalChallengeSlide slide={slide} />;

    default:
      return null;
  }
}

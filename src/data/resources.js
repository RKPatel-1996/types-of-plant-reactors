const sources = {
  molecularFarming: {
    label: "Plant Molecular Farming — Shanmugaraj et al. (2020)",
    url: "https://www.mdpi.com/2223-7747/9/7/842",
  },

  plantBioreactors: {
    label: "Plant Bioreactor Systems — Murthy et al. (2023)",
    url: "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2023.1159588/full",
  },

  nicotianaTransient: {
    label: "Nicotiana transient-production case — Yao et al. (2022)",
    url: "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2022.994792/full",
  },

  chloroplastEngineering: {
    label: "Chloroplast Engineering — Narra et al. (2025)",
    url: "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2025.1526578/full",
  },

  feijoaCells: {
    label: "Callus and Cell Suspension — Raikar et al. (2024)",
    url: "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2023.1281733/full",
  },

  plantCellBioreactors: {
    label: "Plant Cells in Bioreactors — Verdú-Navarro et al. (2023)",
    url: "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2023.1310405/full",
  },

  elelysoFDA: {
    label: "ELELYSO prescribing information — FDA",
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/022458s003s006lbl.pdf",
  },

  hairyRootReview: {
    label: "Hairy Root Cultures — Gutierrez-Valdes et al. (2020)",
    url: "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2020.00033/full",
  },

  rootVsCells: {
    label: "Hairy Roots and Derived Cell Suspension — Hidalgo et al. (2017)",
    url: "https://www.nature.com/articles/srep45331",
  },
};

export const slideResources = {
  title: [
    sources.molecularFarming,
  ],

  "reactor-question": [
    sources.molecularFarming,
    sources.plantBioreactors,
  ],

  "plant-as-bioreactor": [
    sources.molecularFarming,
    sources.plantBioreactors,
  ],

  "platform-map": [
    sources.molecularFarming,
  ],

  "whole-plant": [
    sources.molecularFarming,
  ],

  "stable-transient": [
    sources.molecularFarming,
    sources.nicotianaTransient,
  ],

  "nicotiana-case": [
    sources.nicotianaTransient,
  ],

  "seed-platform": [
    sources.molecularFarming,
  ],

  "chloroplast-platform": [
    sources.chloroplastEngineering,
  ],

  "chloroplast-transform": [
    sources.chloroplastEngineering,
  ],

  "cell-suspension": [
    sources.feijoaCells,
    sources.plantCellBioreactors,
  ],

  "elelyso-case": [
    sources.elelysoFDA,
    sources.plantCellBioreactors,
  ],

  "hairy-root": [
    sources.hairyRootReview,
    sources.rootVsCells,
  ],

  "hairy-root-workflow": [
    sources.hairyRootReview,
  ],

  "platform-comparison": [
    sources.molecularFarming,
    sources.plantCellBioreactors,
    sources.hairyRootReview,
  ],

  "platform-products": [
    sources.molecularFarming,
  ],

  "platform-challenge": [
    sources.molecularFarming,
    sources.hairyRootReview,
  ],
};

export function getSlideResources(slideId) {
  return slideResources[slideId] ?? [];
}

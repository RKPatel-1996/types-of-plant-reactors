import { OpeningSlideRenderer } from "./OpeningSlides.jsx";
import { WholePlantSlideRenderer } from "./WholePlantSlides.jsx";
import { SeedChloroplastSlideRenderer } from "./SeedChloroplastSlides.jsx";
import { CellRootSlideRenderer } from "./CellRootSlides.jsx";
import { SynthesisSlideRenderer } from "./SynthesisSlides.jsx";

const openingIds = new Set([
  "title",
  "reactor-question",
  "plant-as-bioreactor",
  "platform-map",
]);

const wholePlantIds = new Set([
  "whole-plant",
  "stable-transient",
  "nicotiana-case",
]);

const seedChloroplastIds = new Set([
  "seed-platform",
  "chloroplast-platform",
  "chloroplast-transform",
]);

const cellRootIds = new Set([
  "cell-suspension",
  "elelyso-case",
  "hairy-root",
  "hairy-root-workflow",
]);

const synthesisIds = new Set([
  "platform-comparison",
  "platform-products",
  "platform-challenge",
]);

export function SlideRenderer({ slide }) {
  if (openingIds.has(slide.id)) {
    return <OpeningSlideRenderer slide={slide} />;
  }

  if (wholePlantIds.has(slide.id)) {
    return <WholePlantSlideRenderer slide={slide} />;
  }

  if (seedChloroplastIds.has(slide.id)) {
    return <SeedChloroplastSlideRenderer slide={slide} />;
  }

  if (cellRootIds.has(slide.id)) {
    return <CellRootSlideRenderer slide={slide} />;
  }

  if (synthesisIds.has(slide.id)) {
    return <SynthesisSlideRenderer slide={slide} />;
  }

  return null;
}

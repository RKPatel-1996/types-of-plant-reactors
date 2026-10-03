import { useCallback, useEffect, useMemo, useState } from "react";
import { slides } from "./data/slides.js";
import { SlideRenderer } from "./components/SlideRenderer.jsx";
import { ResourceMenu } from "./components/ResourceMenu.jsx";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideCount = slides.length;
  const activeSlide = slides[activeIndex];

  const goTo = useCallback(
    (nextIndex) => {
      const bounded = Math.max(0, Math.min(nextIndex, slideCount - 1));
      setActiveIndex(bounded);
      window.scrollTo({ top: 0, behavior: "instant" });
    },
    [slideCount],
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrevious = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          event.preventDefault();
          goNext();
          break;

        case "ArrowLeft":
        case "PageUp":
          event.preventDefault();
          goPrevious();
          break;

        case "Home":
          event.preventDefault();
          goTo(0);
          break;

        case "End":
          event.preventDefault();
          goTo(slideCount - 1);
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrevious, goTo, slideCount]);

  const progress = useMemo(
    () => ((activeIndex + 1) / slideCount) * 100,
    [activeIndex, slideCount],
  );

  return (
    <main className="presentation-shell">
      <header className="presentation-header screen-only">
        <div>
          <p className="presentation-header__course">Unit 3 · Plant as Bioreactor</p>
          <p className="presentation-header__title">{activeSlide.title}</p>
        </div>

        <div className="header-actions">
          <ResourceMenu slideId={activeSlide.id} />

          <button
            type="button"
            className="utility-button"
            onClick={() => window.print()}
          >
            Print / PDF
          </button>
        </div>
      </header>

      <section className="deck" aria-live="polite">
        {slides.map((slide, index) => (
          <section
            className={`slide-frame ${
              index === activeIndex ? "is-active" : ""
            } ${
              slide.printStrategy === "all-platform-states"
                ? "has-print-variants"
                : ""
            }`}
            id={slide.id}
            key={slide.id}
            aria-hidden={index === activeIndex ? "false" : "true"}
          >
            <SlideRenderer slide={slide} />
          </section>
        ))}
      </section>

      <nav className="presentation-nav screen-only" aria-label="Slide navigation">
        <button
          type="button"
          className="nav-button"
          onClick={goPrevious}
          disabled={activeIndex === 0}
        >
          ← Previous
        </button>

        <div className="progress-block">
          <div className="progress-copy">
            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(slideCount).padStart(2, "0")}
            </span>
            <span>{activeSlide.chapter}</span>
          </div>

          <div className="progress-track" aria-hidden="true">
            <div
              className="progress-value"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          type="button"
          className="nav-button"
          onClick={goNext}
          disabled={activeIndex === slideCount - 1}
        >
          Next →
        </button>
      </nav>
    </main>
  );
}

export default App;

import { getSlideResources } from "../data/resources.js";

export function ResourceMenu({ slideId }) {
  const resources = getSlideResources(slideId);

  if (resources.length === 0) {
    return null;
  }

  return (
    <details className="resource-menu" key={slideId}>
      <summary>
        Sources
        <span aria-hidden="true">↗</span>
      </summary>

      <div className="resource-menu__panel">
        <div className="resource-menu__heading">
          Read the original sources
        </div>

        {resources.map((resource) => (
          <a
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            key={resource.url}
          >
            <span>{resource.label}</span>
            <strong aria-hidden="true">↗</strong>
          </a>
        ))}
      </div>
    </details>
  );
}

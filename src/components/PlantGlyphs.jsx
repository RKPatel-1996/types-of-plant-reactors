export function PlantGlyph({ type, size = 88 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    role: "img",
    "aria-hidden": "true",
    focusable: "false",
  };

  if (type === "plant") {
    return (
      <svg {...common}>
        <path className="glyph-line" d="M50 84V29" />
        <path
          className="glyph-fill"
          d="M50 49C34 49 23 40 22 24c16-1 27 7 28 25Z"
        />
        <path
          className="glyph-fill glyph-fill--soft"
          d="M50 62c16 0 27-9 28-25-16-1-27 7-28 25Z"
        />
        <path className="glyph-line" d="M34 84h32" />
      </svg>
    );
  }

  if (type === "leaf") {
    return (
      <svg {...common}>
        <path
          className="glyph-fill"
          d="M79 20C51 20 27 31 21 55c-5 20 13 29 29 21 20-10 27-31 29-56Z"
        />
        <path className="glyph-line" d="M27 72c13-18 27-30 45-43" />
        <path className="glyph-line glyph-line--soft" d="M47 51 34 43" />
        <path className="glyph-line glyph-line--soft" d="M55 44 58 31" />
      </svg>
    );
  }

  if (type === "seed") {
    return (
      <svg {...common}>
        <path
          className="glyph-fill"
          d="M68 21c15 16 14 42 0 57-13 13-36 8-42-9-7-20 3-43 22-51 7-3 14-2 20 3Z"
        />
        <path className="glyph-line" d="M35 68c11-20 21-30 33-39" />
        <path className="glyph-line glyph-line--soft" d="M49 49c-1 10 2 18 8 25" />
      </svg>
    );
  }

  if (type === "chloroplast") {
    return (
      <svg {...common}>
        <ellipse className="glyph-fill" cx="50" cy="50" rx="34" ry="24" />
        <ellipse className="glyph-line" cx="50" cy="50" rx="27" ry="18" />
        <path className="glyph-line glyph-line--soft" d="M31 42h38M28 50h44M31 58h38" />
        <path className="glyph-line" d="M39 37v26M50 34v32M61 37v26" />
      </svg>
    );
  }

  if (type === "cells") {
    return (
      <svg {...common}>
        <circle className="glyph-fill" cx="35" cy="39" r="18" />
        <circle className="glyph-fill glyph-fill--soft" cx="62" cy="35" r="15" />
        <circle className="glyph-fill" cx="61" cy="64" r="19" />
        <circle className="glyph-line" cx="35" cy="39" r="6" />
        <circle className="glyph-line" cx="62" cy="35" r="5" />
        <circle className="glyph-line" cx="61" cy="64" r="6" />
      </svg>
    );
  }

  if (type === "root") {
    return (
      <svg {...common}>
        <path className="glyph-line" d="M50 17v26" />
        <path className="glyph-line" d="M50 37 31 57M50 43l19 14" />
        <path className="glyph-line" d="M40 48 27 71M60 49l15 23" />
        <path className="glyph-line glyph-line--soft" d="M31 57 19 65M31 57l2 21" />
        <path className="glyph-line glyph-line--soft" d="M69 57 82 66M69 57l-2 22" />
        <path className="glyph-line glyph-line--soft" d="M27 71 17 80M33 70l-2 14" />
        <path className="glyph-line glyph-line--soft" d="M75 72 85 81M68 71l2 14" />
        <path
          className="glyph-fill"
          d="M50 23C39 23 31 17 29 8c11-1 19 4 21 15Z"
        />
        <path
          className="glyph-fill glyph-fill--soft"
          d="M50 29c11 0 19-6 21-15-11-1-19 4-21 15Z"
        />
      </svg>
    );
  }

  if (type === "vessel") {
    return (
      <svg {...common}>
        <path className="glyph-line" d="M30 20h40M35 20v12l-7 10v34h44V42l-7-10V20" />
        <path className="glyph-line" d="M34 55h32" />
        <path className="glyph-line glyph-line--soft" d="M40 62c5 5 15 5 20 0" />
        <circle className="glyph-fill" cx="42" cy="51" r="3" />
        <circle className="glyph-fill" cx="57" cy="47" r="3" />
      </svg>
    );
  }

  return <PlantGlyph type="leaf" size={size} />;
}

// Letters that fold away leave "g&m"; the rest stay anchored.
const LETTERS: { char: string; fold: boolean; accent?: boolean }[] = [
  { char: "g", fold: false },
  { char: "r", fold: true },
  { char: "e", fold: true },
  { char: "e", fold: true },
  { char: "n", fold: true },
  { char: "&", fold: false, accent: true },
  { char: "m", fold: false },
  { char: "o", fold: true },
  { char: "r", fold: true },
  { char: "e", fold: true },
];

// Each folding letter starts its cycle slightly after the previous one, so the
// close and the re-open both ripple left to right instead of snapping at once.
const STAGGER_MS = 50;

export default function Wordmark({ className = "" }: { className?: string }) {
  let foldIndex = 0;

  return (
    <>
      {/* The slot is sized by the hidden full-width copy, so folding the
          letters never reflows the header around it. */}
      <span className={`gm-wordmark-slot ${className}`} aria-hidden="true">
        <span className="gm-wordmark-ghost">green&amp;more</span>
        <span className="gm-wordmark">
          {LETTERS.map((l, i) => {
            const color = l.accent ? "text-gm-orange" : undefined;

            if (!l.fold) {
              return (
                <span key={i} className={color}>
                  {l.char}
                </span>
              );
            }

            const delay = foldIndex++ * STAGGER_MS;
            return (
              <span
                key={i}
                className="gm-fold"
                style={{ animationDelay: `${delay}ms` }}
              >
                <span>{l.char}</span>
              </span>
            );
          })}
        </span>
      </span>
      <span className="sr-only">green&amp;more</span>
    </>
  );
}

export function LineStudy({ small = false }: { small?: boolean }) {
  return (
    <svg
      className={small ? "line-study small" : "line-study"}
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
    >
      <g transform="translate(300 300) rotate(-26)">
        {Array.from({ length: 48 }, (_, i) => (
          <ellipse
            key={i}
            rx={90 + i * 2.6}
            ry={218 - i * 1.6}
            transform={`rotate(${i * 3.8})`}
            stroke="currentColor"
            strokeWidth=".65"
            opacity={0.22 + i / 100}
          />
        ))}
      </g>
    </svg>
  );
}
export function ProjectArt({ type }: { type: string }) {
  if (type === "diagram")
    return (
      <div
        className="project-art diagram"
        aria-label="Illustrative entity relationship diagram"
      >
        <div className="art-top">
          SCHEMA / RELATIONSHIP EXPLORER <span>● LOCAL WORKSPACE</span>
        </div>
        <svg viewBox="0 0 600 280" aria-hidden="true">
          <path
            d="M230 90 H295 V180 H365 M230 185 H280 V180"
            fill="none"
            stroke="#b9d781"
            strokeWidth="1.5"
          />
          <g fill="#202824" stroke="#5a695b">
            <rect x="70" y="40" width="160" height="100" rx="6" />
            <rect x="70" y="160" width="160" height="80" rx="6" />
            <rect x="365" y="125" width="160" height="105" rx="6" />
          </g>
          <g fill="#e6e9df" fontFamily="monospace" fontSize="13">
            <text x="88" y="65">
              customers
            </text>
            <text x="88" y="92" fill="#a2ae9c">
              ↳ id · primary key
            </text>
            <text x="88" y="115" fill="#a2ae9c">
              {" "}
              email · varchar
            </text>
            <text x="88" y="186">
              products
            </text>
            <text x="88" y="213" fill="#a2ae9c">
              ↳ id · primary key
            </text>
            <text x="383" y="151">
              orders
            </text>
            <text x="383" y="179" fill="#a2ae9c">
              ↳ customer_id
            </text>
            <text x="383" y="203" fill="#a2ae9c">
              ↳ product_id
            </text>
          </g>
        </svg>
        <span className="art-caption">VISUAL STUDY · BASED ON THE SOURCE</span>
      </div>
    );
  if (type === "tuner")
    return (
      <div
        className="project-art tuner"
        aria-label="Illustrative tuner interface"
      >
        <div className="art-top">CHROMA / FREQUENCY EXPLORER</div>
        <div className="tuner-scale">
          ♭ <span>╵╵╵╵╵╵╵╵╵│╵╵╵╵╵╵╵╵╵</span> ♯
        </div>
        <div className="note">
          A<span>4</span>
        </div>
        <div className="frequency">
          440.00 Hz <span>REFERENCE PITCH</span>
        </div>
        <span className="art-caption">VISUAL STUDY · NO MICROPHONE ACTIVE</span>
      </div>
    );
  return (
    <div
      className="project-art tempo"
      aria-label="Illustrative tempo interface"
    >
      <div className="art-top">PULSE / TEMPO EXPLORER</div>
      <div className="tempo-bars">
        {Array.from({ length: 29 }, (_, i) => (
          <i
            key={i}
            style={{ height: `${20 + Math.abs(Math.sin(i * 1.3)) * 65}px` }}
          />
        ))}
      </div>
      <div className="tempo-readout">
        120 <span>BEATS / MIN</span>
      </div>
      <span className="art-caption">
        VISUAL STUDY · TRY THE LIVE EXPERIMENT BELOW
      </span>
    </div>
  );
}

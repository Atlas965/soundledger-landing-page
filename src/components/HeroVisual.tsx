import { motion } from "framer-motion";

const NODES = [
  { x: 60, y: 70, r: 5 },
  { x: 210, y: 40, r: 4 },
  { x: 340, y: 95, r: 6 },
  { x: 120, y: 190, r: 4 },
  { x: 300, y: 220, r: 5 },
  { x: 400, y: 170, r: 4 },
  { x: 40, y: 260, r: 3 },
  { x: 220, y: 300, r: 5 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [2, 5],
  [4, 5],
  [3, 6],
  [4, 7],
  [0, 3],
];

const BARS = [18, 34, 52, 70, 90, 70, 46, 30, 58, 40, 22];

/**
 * Abstract visual pairing a collaboration node-network with a ledger waveform,
 * used in place of literal microphone/headphone imagery.
 */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg select-none">
      <div className="absolute inset-0 rounded-full bg-hero-glow blur-2xl" />

      <div className="absolute inset-0 animate-float">
        <svg viewBox="0 0 440 340" className="h-full w-full overflow-visible" role="presentation" aria-hidden="true">
          <defs>
            <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3fd7d0" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6f5bf0" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3fd7d0" />
              <stop offset="100%" stopColor="#3b6bf0" />
            </radialGradient>
          </defs>

          {EDGES.map(([a, b], i) => (
            <motion.line
              key={`${a}-${b}`}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              stroke="url(#edgeGradient)"
              strokeWidth={1.2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.15 * i, ease: "easeOut" }}
            />
          ))}

          {NODES.map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="url(#nodeGlow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 * i + 0.3 }}
            />
          ))}
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-ink-900/60 shadow-glow backdrop-blur-sm sm:h-48 sm:w-48">
          <div className="flex items-end gap-1.5">
            {BARS.map((h, i) => (
              <motion.span
                key={i}
                className="w-1.5 rounded-full bg-brand-gradient"
                style={{ height: h * 0.55 }}
                initial={{ scaleY: 0.3, opacity: 0.5 }}
                animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.12,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-2 left-1/2 h-16 w-40 -translate-x-1/2 rounded-full bg-accent-blue/20 blur-3xl" />
    </div>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";

const SPLITSHEET_FEATURES = [
  "Digital split sheets",
  "Contract workflows",
  "E-signatures",
  "Ownership records",
  "Collaboration management",
  "Rights tracking",
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-96 bg-hero-glow opacity-70" />

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="section-eyebrow mx-auto">Product Ecosystem</div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for the entire creator lifecycle
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            SplitSheet is our flagship platform — the foundation of a broader infrastructure built to serve
            creators, businesses, and rights holders across the music industry.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-accent-cyan/25 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900 p-8 shadow-card sm:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-violet/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-950">
                  Flagship Product
                </span>
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">SplitSheet</h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65">
                  A Rights-as-a-Service platform that helps creators document collaborations, manage ownership
                  splits, execute agreements, and maintain transparent records.
                </p>

                <a
                  href="https://splitsheet.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8"
                >
                  Visit SplitSheet
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SPLITSHEET_FEATURES.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <Check size={16} className="shrink-0 text-accent-cyan" />
                    <span className="text-sm font-medium text-white/85">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

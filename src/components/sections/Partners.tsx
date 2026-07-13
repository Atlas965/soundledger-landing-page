import { ArrowRight } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";

const AUDIENCES = [
  "Investors",
  "Music Companies",
  "Labels",
  "Publishers",
  "Technology Partners",
  "Creator Organizations",
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-70" />

            <div className="relative">
              <div className="section-eyebrow mx-auto">Partnerships &amp; Investment</div>
              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Building the next generation of music infrastructure
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60">
                We work alongside investors, labels, publishers, and technology partners who share a vision for a
                more transparent, creator-first music industry.
              </p>

              <div className="mx-auto mt-9 flex max-w-2xl flex-wrap items-center justify-center gap-3">
                {AUDIENCES.map((audience) => (
                  <span
                    key={audience}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70"
                  >
                    {audience}
                  </span>
                ))}
              </div>

              <a href="#contact" className="btn-primary mt-10">
                Partner With Us
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

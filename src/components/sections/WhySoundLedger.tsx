import { Check, X } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";

const PROBLEMS = [
  "Creators lose track of ownership over time",
  "Agreements are fragmented across texts, emails, and paper",
  "Rights information is difficult to manage or verify",
  "Collaboration involves slow, inefficient processes",
];

const SOLUTIONS = [
  "Digital-first workflows from collaboration to contract",
  "Better transparency across every ownership record",
  "Centralized rights information, always accessible",
  "Creator empowerment through simple, modern tools",
];

export default function WhySoundLedger() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="section-eyebrow mx-auto">Why SoundLedger</div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The music industry runs on outdated infrastructure
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            The tools creators rely on to manage rights and ownership haven't kept pace with how music actually
            gets made. We're building what comes next.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">Current Challenges</h3>
              <ul className="mt-6 space-y-4">
                {PROBLEMS.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                      <X size={13} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/60">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-accent-cyan/20 bg-gradient-to-br from-accent-cyan/[0.06] to-accent-violet/[0.04] p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-cyan">
                The SoundLedger Solution
              </h3>
              <ul className="mt-6 space-y-4">
                {SOLUTIONS.map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-cyan/15 text-accent-cyan">
                      <Check size={13} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/80">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

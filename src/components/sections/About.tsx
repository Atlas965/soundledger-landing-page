import { FileSignature, GitBranch, Landmark, ShieldCheck } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";

const PILLARS = [
  {
    icon: Landmark,
    title: "Ownership Tracking",
    description: "Clear, structured records of who owns what — from the first session to the final release.",
  },
  {
    icon: FileSignature,
    title: "Creator Agreements",
    description: "Digital-first contracts and split sheets that replace fragmented paperwork and text-thread deals.",
  },
  {
    icon: ShieldCheck,
    title: "Rights Management",
    description: "Centralized infrastructure for managing and referencing rights information across a catalog.",
  },
  {
    icon: GitBranch,
    title: "Collaboration Workflows",
    description: "Tools that make multi-party collaboration — and the paperwork that follows — simple and transparent.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="section-eyebrow">About SoundLedger</div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Music rights infrastructure, built for the way creators actually work
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              SoundLedger Technologies Inc. is a Canadian music technology company focused on solving the
              structural problems behind creator collaboration — ownership tracking, agreements, rights
              management, and royalty transparency. We build the software layer that the modern music industry
              runs on.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="card-surface group h-full p-6 transition-colors duration-300 hover:border-accent-cyan/30">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient/15 text-accent-cyan ring-1 ring-inset ring-accent-cyan/20">
                    <pillar.icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { ArrowRight, Music4, Radio, Users } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";

const HIGHLIGHTS = [
  { icon: Music4, label: "Music Releases" },
  { icon: Radio, label: "Artist Updates" },
  { icon: Users, label: "Community Building" },
];

export default function Artist() {
  return (
    <section id="artist" className="relative py-24 sm:py-32">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative flex flex-col justify-center p-10 sm:p-14">
              <Reveal>
                <div className="section-eyebrow">SoundLedger Artist</div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Using music culture to demonstrate the future of creator technology
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
                  SoundLedger isn't just building infrastructure from the outside — we're creating music, releasing
                  it, and using our own platform the same way our creators do. It's a creative technology movement,
                  not a traditional record label.
                </p>

                <a
                  href="https://open.spotify.com/artist/1wzGWIcNdAhwDRc1X2DPMb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-8"
                >
                  Follow SoundLedger Artist
                  <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>

            <div className="relative flex flex-col justify-center gap-4 bg-ledger-grid [background-size:32px_32px] p-10 sm:p-14">
              <div className="absolute inset-0 bg-hero-glow opacity-60" />
              {HIGHLIGHTS.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.1} className="relative">
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-ink-950/50 p-5 backdrop-blur-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient/15 text-accent-cyan ring-1 ring-inset ring-accent-cyan/20">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-0.5 text-xs text-white/45">Behind-the-scenes content, always in motion</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

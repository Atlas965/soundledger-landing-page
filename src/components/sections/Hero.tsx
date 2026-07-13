import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../Container";
import HeroVisual from "../HeroVisual";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-ledger-grid [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-hero-glow" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-eyebrow"
            >
              Canadian Music Technology Company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              Building the Future of{" "}
              <span className="text-gradient">Music Rights</span> and Creator Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/65"
            >
              SoundLedger Technologies creates digital tools that help artists, producers, managers, labels, and
              businesses collaborate, manage ownership, and simplify music rights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://splitsheet.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Explore SplitSheet
                <ArrowRight size={16} />
              </a>
              <a href="#about" className="btn-secondary">
                Learn About SoundLedger
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:max-w-md"
            >
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/45">Digital-first</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Canada</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/45">Headquartered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Built for</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/45">Creators &amp; Rights</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

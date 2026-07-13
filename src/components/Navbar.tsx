import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/soundledger-logo.png";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why SoundLedger", href: "#why" },
  { label: "Artist", href: "#artist" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10" aria-label="Primary">
        <a href="#top" className="flex items-center gap-3" aria-label="SoundLedger Technologies home">
          <img src={logo} alt="SoundLedger Technologies logo" className="h-9 w-9 rounded-full" />
          <span className="text-base font-bold tracking-tight text-white">
            SoundLedger<span className="text-accent-cyan">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://splitsheet.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:scale-[1.03]"
          >
            Explore SplitSheet
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/98 px-6 pb-8 pt-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://splitsheet.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-lg bg-brand-gradient px-5 py-3 text-center text-sm font-semibold text-ink-950"
            >
              Explore SplitSheet
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

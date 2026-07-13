import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/soundledger-logo.png";
import Container from "./Container";

const COMPANY_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "SplitSheet", href: "https://splitsheet.ca", external: true },
  { label: "Careers", href: "mailto:careers@soundledger.ca" },
  { label: "Contact", href: "mailto:hello@soundledger.ca" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/soundledger", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/soundledger", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@soundledger", icon: Youtube },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/soundledger",
    icon: (props: { size?: number; className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" width={props.size ?? 18} height={props.size ?? 18} className={props.className}>
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-ink-900/60">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="SoundLedger Technologies logo" className="h-9 w-9 rounded-full" />
              <span className="text-base font-bold tracking-tight text-white">SoundLedger Technologies Inc.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Building the infrastructure that helps creators collaborate, manage rights, and unlock the value of
              their music.
            </p>
            <a
              href="mailto:hello@soundledger.ca"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-white"
            >
              <Mail size={15} />
              hello@soundledger.ca
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/40">Company</h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/40">Legal</h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/40">Follow</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} SoundLedger Technologies Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Made in Canada</p>
        </div>
      </Container>
    </footer>
  );
}

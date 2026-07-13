import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./Container";

interface LegalPageLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, updated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-white/45">Last updated: {updated}</p>
          <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-white/65">{children}</div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

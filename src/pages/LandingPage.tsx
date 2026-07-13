import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Products from "../components/sections/Products";
import WhySoundLedger from "../components/sections/WhySoundLedger";
import Artist from "../components/sections/Artist";
import Partners from "../components/sections/Partners";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhySoundLedger />
        <Artist />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "../components/landing/Navbar";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";
import TypingGardenPreview from "../components/landing/TypingGardenPreview";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B1120]">

      <Navbar />

      <div className="flex">

        <Features />

        <Hero />

        <TypingGardenPreview />

      </div>

    </div>
  );
}

export default LandingPage;
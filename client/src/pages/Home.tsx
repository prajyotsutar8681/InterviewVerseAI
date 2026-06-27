import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Companies from "@/components/landing/Companies";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import DashboardPreview from "@/components/landing/DashboardPreview";
import PlatformHighlights from "@/components/landing/PlatformHighlights";

import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <main className="bg-[#09090B] min-h-screen">
      <Navbar />

      <Hero />

      <Companies />

      <Features />

      <HowItWorks />

      <DashboardPreview />

     <PlatformHighlights />

      <CTA />

      <Footer />
    </main>
  );
};

export default Home;
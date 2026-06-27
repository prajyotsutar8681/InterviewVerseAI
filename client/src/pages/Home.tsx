import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Companies from "@/components/landing/Companies";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import DashboardPreview from "@/components/landing/DashboardPreview";

const Home = () => {
  return (
    <main className="bg-[#09090B]">
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <HowItWorks />
      <DashboardPreview />
    </main>
  );
};

export default Home;
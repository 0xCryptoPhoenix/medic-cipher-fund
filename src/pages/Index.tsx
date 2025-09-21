import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Dashboard } from "@/components/Dashboard";
import { ContractInteraction } from "@/components/ContractInteraction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <ContractInteraction />
      </div>
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;

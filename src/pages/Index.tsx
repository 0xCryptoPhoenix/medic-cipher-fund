import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <HeroSection />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;

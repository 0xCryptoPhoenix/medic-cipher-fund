import { Activity, Database, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import medicalCrossLogo from "@/assets/medical-cross-logo.png";

export const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img 
              src={medicalCrossLogo} 
              alt="HealthVault Protocol Logo" 
              className="w-8 h-8"
            />
            <div className="font-semibold text-lg text-foreground">
              HealthVault Protocol
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1 text-sm text-muted-foreground">
            <Stethoscope className="w-4 h-4" />
            <span>Decentralized Medical Funding</span>
          </div>
        </div>

        {/* Main Title - Center */}
        <div className="hidden lg:block text-center">
          <h1 className="text-xl font-semibold text-foreground">
            Revolutionary Healthcare Financing
          </h1>
          <p className="text-xs text-muted-foreground">
            Secure • Transparent • Community-Driven
          </p>
        </div>

        {/* Wallet Connection */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Activity className="w-4 h-4 mr-2" />
            Analytics Dashboard
          </Button>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};
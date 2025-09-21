import { Shield } from "lucide-react";
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
              alt="Medic Cipher Fund Logo" 
              className="w-8 h-8"
            />
            <div className="font-semibold text-lg text-foreground">
              Medic Cipher Fund
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>FHE-Encrypted Medical Funding</span>
          </div>
        </div>

        {/* Main Title - Center */}
        <div className="hidden lg:block text-center">
          <h1 className="text-xl font-semibold text-foreground">
            Privacy-Preserving Medical Funding
          </h1>
          <p className="text-xs text-muted-foreground">
            Secure • Regulated • FHE-Encrypted
          </p>
        </div>

        {/* Wallet Connection */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Shield className="w-4 h-4 mr-2" />
            Regulator Access
          </Button>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};
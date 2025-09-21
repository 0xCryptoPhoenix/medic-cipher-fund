import { Stethoscope, Lock, Users, Globe } from "lucide-react";
import hospitalIcon from "@/assets/hospital-icon.png";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-muted/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Animated Hospital Icons */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-8">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="relative animate-glow-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <img 
                  src={hospitalIcon} 
                  alt="Hospital Network" 
                  className="w-16 h-9 opacity-80 hover:opacity-100 transition-opacity"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 text-primary" />
              Security & Privacy
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Lock className="w-3 h-3 mr-2 text-encrypted" />
                End-to-End Encryption
              </li>
              <li>Regulatory Compliance</li>
              <li>Audit Transparency</li>
              <li>Privacy Protection</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Healthcare Focus</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Hospital Infrastructure</li>
              <li>Medical Research</li>
              <li>Community Health</li>
              <li>Biotech Innovation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary" />
              For Investors
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Bond Portfolio</li>
              <li>Risk Assessment</li>
              <li>Returns Dashboard</li>
              <li>Impact Reporting</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center">
              <Globe className="w-4 h-4 mr-2 text-primary" />
              Regulatory
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>SEC Compliance</li>
              <li>HIPAA Protection</li>
              <li>International Standards</li>
              <li>Audit Reports</li>
            </ul>
          </div>
        </div>

        {/* Encrypted Signals Animation */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 text-xs text-encrypted">
            <div className="flex space-x-1">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1 h-3 bg-encrypted rounded animate-pulse"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    opacity: Math.random() > 0.5 ? 0.8 : 0.3 
                  }}
                ></div>
              ))}
            </div>
            <span>Encrypted Healthcare Data Flows</span>
            <div className="flex space-x-1">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1 h-3 bg-encrypted rounded animate-pulse"
                  style={{ 
                    animationDelay: `${i * 0.1 + 0.8}s`,
                    opacity: Math.random() > 0.5 ? 0.8 : 0.3 
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 HealthBonds. Healthcare funding with privacy protection.
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
              All Systems Operational
            </span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
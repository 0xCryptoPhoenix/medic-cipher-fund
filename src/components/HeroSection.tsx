import { ArrowRight, Stethoscope, TrendingUp, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 trust-gradient overflow-hidden">
      {/* Binary Pattern Background */}
      <div className="absolute inset-0 binary-pattern opacity-30"></div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Healthcare Funding
              <span className="block medical-gradient bg-clip-text text-transparent">
                with Privacy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Secure, encrypted bonds for hospital infrastructure and biotech research. 
              Visible only to regulators and verified investors.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/invest">
              <Button size="lg" className="medical-gradient text-primary-foreground medical-shadow">
                <Stethoscope className="w-5 h-5 mr-2" />
                Invest in Healthcare
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/regulator">
              <Button size="lg" variant="outline" className="border-encrypted text-encrypted hover:bg-encrypted/10">
                <Lock className="w-5 h-5 mr-2" />
                Regulator Dashboard
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="medical-shadow bg-card/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full medical-gradient flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">End-to-End Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  All funding flows protected with military-grade encryption
                </p>
              </CardContent>
            </Card>

            <Card className="medical-shadow bg-card/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full medical-gradient flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Transparent Returns</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time performance tracking with regulatory oversight
                </p>
              </CardContent>
            </Card>

            <Card className="medical-shadow bg-card/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full medical-gradient flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Verified Network</h3>
                <p className="text-sm text-muted-foreground">
                  Accredited investors and regulated healthcare institutions
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Live Stats */}
          <div className="mt-16 p-8 rounded-2xl encrypted-gradient border border-encrypted/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-encrypted-foreground">$47.3M</div>
                <div className="text-sm text-encrypted-foreground/80">Total Funded</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-encrypted-foreground">1,247</div>
                <div className="text-sm text-encrypted-foreground/80">Active Investors</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-encrypted-foreground">23</div>
                <div className="text-sm text-encrypted-foreground/80">Healthcare Bonds</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-encrypted-foreground">98.2%</div>
                <div className="text-sm text-encrypted-foreground/80">Privacy Protected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
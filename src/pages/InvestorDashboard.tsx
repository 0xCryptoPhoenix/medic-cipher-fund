import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, TrendingUp, Clock, Building2, HeartPulse, Microscope, ArrowRight, Eye, DollarSign } from "lucide-react";

const InvestorDashboard = () => {
  const [selectedBond, setSelectedBond] = useState<string | null>(null);

  const availableBonds = [
    {
      id: "1",
      name: "St. Mary's Hospital Infrastructure Bond",
      institution: "St. Mary's Medical Center",
      type: "Hospital Infrastructure",
      minInvestment: "$10,000",
      expectedReturn: "6.2%",
      term: "5 years",
      funded: 78,
      totalFunding: "$15.2M",
      raisedAmount: "$11.9M",
      riskLevel: "Low",
      status: "Active",
      description: "Funding for new cardiac surgery wing and advanced imaging equipment."
    },
    {
      id: "2", 
      name: "BioGenesis Research Lab Expansion",
      institution: "BioGenesis Research Corp",
      type: "Biotech Research",
      minInvestment: "$25,000",
      expectedReturn: "8.5%",
      term: "7 years",
      funded: 45,
      totalFunding: "$42.8M",
      raisedAmount: "$19.3M",
      riskLevel: "Medium",
      status: "Active",
      description: "Development of next-generation cancer immunotherapy treatments."
    },
    {
      id: "3",
      name: "Regional Emergency Care Network",
      institution: "Metro Health Alliance", 
      type: "Emergency Care",
      minInvestment: "$5,000",
      expectedReturn: "5.8%",
      term: "3 years",
      funded: 92,
      totalFunding: "$8.7M",
      raisedAmount: "$8.0M",
      riskLevel: "Low",
      status: "Nearly Funded",
      description: "Expansion of emergency care facilities across three regional hospitals."
    }
  ];

  const portfolioSummary = {
    totalInvested: "$125,000",
    currentValue: "$132,450",
    totalReturn: "+5.96%",
    activeBonds: 4,
    monthlyIncome: "$742"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Healthcare Investment Portal</h1>
          <p className="text-muted-foreground">Secure, regulated healthcare funding opportunities</p>
        </div>

        <Tabs defaultValue="marketplace" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="marketplace">Bond Marketplace</TabsTrigger>
            <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
            <TabsTrigger value="documents">Compliance Documents</TabsTrigger>
          </TabsList>

          {/* Bond Marketplace */}
          <TabsContent value="marketplace" className="space-y-6">
            <div className="grid gap-6">
              {availableBonds.map((bond) => (
                <Card key={bond.id} className="medical-shadow hover:medical-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{bond.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          {bond.type === "Hospital Infrastructure" && <Building2 className="w-4 h-4" />}
                          {bond.type === "Biotech Research" && <Microscope className="w-4 h-4" />}
                          {bond.type === "Emergency Care" && <HeartPulse className="w-4 h-4" />}
                          {bond.institution}
                        </CardDescription>
                      </div>
                      <Badge variant={bond.status === "Active" ? "default" : "secondary"}>
                        {bond.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{bond.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Expected Return</div>
                        <div className="font-semibold text-medical">{bond.expectedReturn}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Term</div>
                        <div className="font-semibold">{bond.term}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Min Investment</div>
                        <div className="font-semibold">{bond.minInvestment}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Risk Level</div>
                        <div className={`font-semibold ${
                          bond.riskLevel === "Low" ? "text-green-600" : 
                          bond.riskLevel === "Medium" ? "text-yellow-600" : "text-red-600"
                        }`}>{bond.riskLevel}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Funding Progress</span>
                        <span>{bond.raisedAmount} / {bond.totalFunding}</span>
                      </div>
                      <Progress value={bond.funded} className="medical-progress" />
                      <div className="text-xs text-muted-foreground">{bond.funded}% funded</div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedBond(bond.id)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        className="medical-gradient"
                        disabled={bond.status !== "Active"}
                      >
                        <DollarSign className="w-4 h-4 mr-2" />
                        Invest Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Portfolio */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              <Card className="medical-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical">{portfolioSummary.totalInvested}</div>
                  <div className="text-sm text-muted-foreground">Total Invested</div>
                </CardContent>
              </Card>
              <Card className="medical-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical">{portfolioSummary.currentValue}</div>
                  <div className="text-sm text-muted-foreground">Current Value</div>
                </CardContent>
              </Card>
              <Card className="medical-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{portfolioSummary.totalReturn}</div>
                  <div className="text-sm text-muted-foreground">Total Return</div>
                </CardContent>
              </Card>
              <Card className="medical-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical">{portfolioSummary.activeBonds}</div>
                  <div className="text-sm text-muted-foreground">Active Bonds</div>
                </CardContent>
              </Card>
              <Card className="medical-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-medical">{portfolioSummary.monthlyIncome}</div>
                  <div className="text-sm text-muted-foreground">Monthly Income</div>
                </CardContent>
              </Card>
            </div>

            <Card className="medical-shadow">
              <CardHeader>
                <CardTitle>Your Investment Portfolio</CardTitle>
                <CardDescription>Track your healthcare bond investments and returns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Shield className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Your portfolio details will appear here once you make your first investment.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Documents */}
          <TabsContent value="documents" className="space-y-6">
            <Card className="medical-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Regulatory Compliance & Documentation
                </CardTitle>
                <CardDescription>Access your investment documents and compliance certificates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">Accredited Investor Certificate</div>
                      <div className="text-sm text-muted-foreground">Valid through Dec 2024</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Verified</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">KYC Documentation</div>
                      <div className="text-sm text-muted-foreground">Last updated: Jan 2024</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Complete</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">Investment Agreements</div>
                      <div className="text-sm text-muted-foreground">Digital signatures required</div>
                    </div>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default InvestorDashboard;
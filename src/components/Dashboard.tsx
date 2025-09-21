import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Stethoscope, 
  TrendingUp, 
  Eye, 
  EyeOff, 
  Hospital, 
  Microscope,
  Lock,
  Users
} from "lucide-react";

export const Dashboard = () => {
  const bonds = [
    {
      id: "HB001",
      name: "St. Mary's Hospital Expansion",
      type: "Infrastructure",
      amount: "$2.5M",
      funded: 78,
      apy: "4.2%",
      maturity: "36 months",
      investors: 142,
      isEncrypted: true
    },
    {
      id: "HB002", 
      name: "BioTech Cancer Research Initiative",
      type: "Research",
      amount: "$1.8M",
      funded: 92,
      apy: "5.8%",
      maturity: "24 months",
      investors: 89,
      isEncrypted: true
    },
    {
      id: "HB003",
      name: "Community Health Center Network",
      type: "Infrastructure", 
      amount: "$3.2M",
      funded: 45,
      apy: "3.9%",
      maturity: "48 months",
      investors: 234,
      isEncrypted: false
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="medical-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-primary" />
              Total Funded
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$47.3M</div>
            <p className="text-xs text-success">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card className="medical-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Hospital className="w-4 h-4 mr-2 text-primary" />
              Active Bonds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">23</div>
            <p className="text-xs text-muted-foreground">Healthcare projects</p>
          </CardContent>
        </Card>

        <Card className="medical-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary" />
              Investors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <p className="text-xs text-muted-foreground">Verified participants</p>
          </CardContent>
        </Card>

        <Card className="medical-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 text-encrypted" />
              Encrypted Flows
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-encrypted">98.2%</div>
            <p className="text-xs text-encrypted-foreground">Privacy protected</p>
          </CardContent>
        </Card>
      </div>

      {/* Bonds Table */}
      <Card className="medical-shadow">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Microscope className="w-5 h-5 mr-2 text-primary" />
              Healthcare Bond Portfolio
            </span>
            <Badge variant="secondary" className="animate-pulse-encrypted">
              <Lock className="w-3 h-3 mr-1" />
              Encrypted Data
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bonds.map((bond) => (
              <div 
                key={bond.id}
                className={`p-4 rounded-lg border transition-all duration-300 hover:medical-shadow ${
                  bond.isEncrypted ? 'encrypted-gradient border-encrypted/20' : 'bg-card border-border'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-glow-pulse"></div>
                      <span className="font-semibold text-foreground">{bond.id}</span>
                    </div>
                    <Badge variant={bond.type === "Research" ? "default" : "secondary"}>
                      {bond.type}
                    </Badge>
                    {bond.isEncrypted && (
                      <div className="flex items-center space-x-1 text-encrypted">
                        <EyeOff className="w-3 h-3" />
                        <span className="text-xs">Encrypted</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{bond.apy} APY</div>
                      <div className="text-xs text-muted-foreground">{bond.maturity}</div>
                    </div>
                    <Button size="sm" variant={bond.isEncrypted ? "default" : "outline"}>
                      {bond.funded < 100 ? "Invest" : "View"}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-foreground">{bond.name}</h3>
                    <span className="text-sm font-semibold text-primary">{bond.amount}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {bond.investors} investors • {bond.funded}% funded
                    </span>
                    <div className="flex items-center space-x-2">
                      {bond.isEncrypted ? (
                        <div className="encrypted-blur w-16 h-4 rounded"></div>
                      ) : (
                        <span className="text-success">+{(bond.funded * 0.1).toFixed(1)}%</span>
                      )}
                    </div>
                  </div>
                  
                  <Progress 
                    value={bond.funded} 
                    className={`h-2 ${bond.isEncrypted ? 'pulse-encrypted' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
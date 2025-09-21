import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Eye, AlertTriangle, CheckCircle, Search, Download, FileText, Users, Building2, TrendingUp } from "lucide-react";

const RegulatorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const regulatoryOverview = {
    totalBonds: 47,
    activeInvestments: "$287.3M",
    complianceIssues: 2,
    pendingApprovals: 8,
    registeredInvestors: 2843,
    verifiedInstitutions: 156
  };

  const bondTransactions = [
    {
      id: "TXN-2024-0892",
      bondName: "St. Mary's Hospital Infrastructure",
      investor: "Highland Capital LLC",
      amount: "$50,000",
      date: "2024-01-15",
      status: "Approved",
      riskScore: "Low",
      complianceStatus: "Compliant"
    },
    {
      id: "TXN-2024-0891", 
      bondName: "BioGenesis Research Expansion",
      investor: "MedTech Investments",
      amount: "$125,000",
      date: "2024-01-15",
      status: "Under Review",
      riskScore: "Medium", 
      complianceStatus: "Pending Documentation"
    },
    {
      id: "TXN-2024-0890",
      bondName: "Regional Emergency Care Network", 
      investor: "Healthcare Growth Fund",
      amount: "$75,000",
      date: "2024-01-14",
      status: "Approved",
      riskScore: "Low",
      complianceStatus: "Compliant"
    }
  ];

  const complianceAlerts = [
    {
      id: 1,
      type: "Documentation",
      message: "MedTech Investments - Missing updated financial statements",
      severity: "Medium",
      bondId: "BOND-2024-15",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      type: "Risk Assessment",
      message: "BioGenesis Research bond exceeds sector concentration limit",
      severity: "High",
      bondId: "BOND-2024-12",
      timestamp: "1 day ago"
    }
  ];

  const auditTrail = [
    {
      action: "Bond Approval",
      details: "Approved St. Mary's Hospital Infrastructure Bond",
      regulator: "Sarah Johnson",
      timestamp: "2024-01-15 14:30:22",
      entityId: "BOND-2024-18"
    },
    {
      action: "Investor Verification",
      details: "Completed KYC verification for Highland Capital LLC",
      regulator: "Michael Chen",
      timestamp: "2024-01-15 13:15:10", 
      entityId: "INV-2024-455"
    },
    {
      action: "Compliance Review",
      details: "Flagged documentation issue for MedTech Investments",
      regulator: "Sarah Johnson", 
      timestamp: "2024-01-15 11:45:33",
      entityId: "INV-2024-392"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Regulatory Oversight Portal</h1>
          <p className="text-muted-foreground">Monitor and audit healthcare bond transactions with full transparency</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card className="encrypted-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-encrypted">{regulatoryOverview.totalBonds}</div>
              <div className="text-xs text-muted-foreground">Active Bonds</div>
            </CardContent>
          </Card>
          <Card className="encrypted-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-encrypted">{regulatoryOverview.activeInvestments}</div>
              <div className="text-xs text-muted-foreground">Total Volume</div>
            </CardContent>
          </Card>
          <Card className="encrypted-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{regulatoryOverview.complianceIssues}</div>
              <div className="text-xs text-muted-foreground">Compliance Issues</div>
            </CardContent>
          </Card>
          <Card className="encrypted-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{regulatoryOverview.pendingApprovals}</div>
              <div className="text-xs text-muted-foreground">Pending Reviews</div>
            </CardContent>
          </Card>
          <Card className="encrypted-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-encrypted">{regulatoryOverview.registeredInvestors}</div>
              <div className="text-xs text-muted-foreground">Registered Investors</div>
            </CardContent>
          </Card>
          <Card className="encrypted-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-encrypted">{regulatoryOverview.verifiedInstitutions}</div>
              <div className="text-xs text-muted-foreground">Verified Institutions</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="transactions">Transaction Monitor</TabsTrigger>
            <TabsTrigger value="compliance">Compliance Alerts</TabsTrigger>
            <TabsTrigger value="audit">Audit Trail</TabsTrigger>
            <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
          </TabsList>

          {/* Transaction Monitor */}
          <TabsContent value="transactions" className="space-y-6">
            <Card className="encrypted-shadow">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Real-Time Transaction Monitoring</CardTitle>
                    <CardDescription>All healthcare bond transactions with full audit visibility</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search transactions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Bond Name</TableHead>
                      <TableHead>Investor</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Risk Score</TableHead>
                      <TableHead>Compliance</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bondTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                        <TableCell className="font-medium">{transaction.bondName}</TableCell>
                        <TableCell>{transaction.investor}</TableCell>
                        <TableCell className="font-semibold">{transaction.amount}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>
                          <Badge variant={transaction.status === "Approved" ? "default" : "secondary"}>
                            {transaction.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            transaction.riskScore === "Low" ? "default" : 
                            transaction.riskScore === "Medium" ? "secondary" : "destructive"
                          }>
                            {transaction.riskScore}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {transaction.complianceStatus === "Compliant" ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            )}
                            <span className="text-sm">{transaction.complianceStatus}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Alerts */}
          <TabsContent value="compliance" className="space-y-6">
            <Card className="encrypted-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  Active Compliance Alerts
                </CardTitle>
                <CardDescription>Monitor and resolve compliance issues across all healthcare bonds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {complianceAlerts.map((alert) => (
                  <div key={alert.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant={alert.severity === "High" ? "destructive" : "secondary"}>
                          {alert.severity}
                        </Badge>
                        <span className="font-medium">{alert.type}</span>
                        <span className="text-sm text-muted-foreground">• {alert.bondId}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                    </div>
                    <p className="text-sm mb-3">{alert.message}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Review Details
                      </Button>
                      <Button size="sm">
                        Resolve Issue
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Audit Trail */}
          <TabsContent value="audit" className="space-y-6">
            <Card className="encrypted-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Regulatory Audit Trail
                </CardTitle>
                <CardDescription>Complete log of all regulatory actions and decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {auditTrail.map((entry, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-2 h-2 bg-encrypted rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-medium">{entry.action}</div>
                          <div className="text-xs text-muted-foreground font-mono">{entry.entityId}</div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{entry.details}</p>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Regulator: {entry.regulator}</span>
                          <span>{entry.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports & Analytics */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid gap-6">
              <Card className="encrypted-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Regulatory Reports & Analytics
                  </CardTitle>
                  <CardDescription>Generate comprehensive reports for regulatory oversight</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-16 flex-col">
                      <Building2 className="w-6 h-6 mb-2" />
                      <span>Institution Compliance Report</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <Users className="w-6 h-6 mb-2" />
                      <span>Investor Risk Assessment</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <Shield className="w-6 h-6 mb-2" />
                      <span>Transaction Audit Report</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <TrendingUp className="w-6 h-6 mb-2" />
                      <span>Market Analysis Report</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="encrypted-shadow">
                <CardHeader>
                  <CardTitle>Scheduled Reports</CardTitle>
                  <CardDescription>Automated regulatory reports and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No scheduled reports configured. Set up automated compliance reporting.</p>
                    <Button className="mt-4">
                      Configure Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default RegulatorDashboard;
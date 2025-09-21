import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { config } from '../../config';

// Contract ABI for MedicCipherFund
const contractABI = [
  {
    "inputs": [
      {"name": "_name", "type": "string"},
      {"name": "_description", "type": "string"},
      {"name": "_medicalCategory", "type": "string"},
      {"name": "_hospital", "type": "address"},
      {"name": "_targetAmount", "type": "uint256"},
      {"name": "_duration", "type": "uint256"}
    ],
    "name": "createCampaign",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "campaignId", "type": "uint256"},
      {"name": "isAnonymous", "type": "bool"},
      {"name": "message", "type": "string"}
    ],
    "name": "makeDonation",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "_patient", "type": "address"},
      {"name": "_doctor", "type": "address"},
      {"name": "_diagnosis", "type": "string"},
      {"name": "_treatment", "type": "string"},
      {"name": "_hospitalName", "type": "string"},
      {"name": "_patientAge", "type": "uint256"},
      {"name": "_treatmentCost", "type": "uint256"},
      {"name": "_isEmergency", "type": "bool"}
    ],
    "name": "addMedicalRecord",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export function ContractInteraction() {
  const { address, isConnected } = useAccount();
  const [campaignName, setCampaignName] = useState('');
  const [campaignDescription, setCampaignDescription] = useState('');
  const [medicalCategory, setMedicalCategory] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [donationMessage, setDonationMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState('');

  const { writeContract, data: hash, isPending, error } = useWriteContract();
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const handleCreateCampaign = async () => {
    if (!isConnected) return;

    try {
      await writeContract({
        address: config.contractAddress as `0x${string}`,
        abi: contractABI,
        functionName: 'createCampaign',
        args: [
          campaignName,
          campaignDescription,
          medicalCategory,
          address, // Using connected address as hospital
          BigInt(targetAmount),
          BigInt(duration)
        ],
      });
    } catch (err) {
      console.error('Error creating campaign:', err);
    }
  };

  const handleMakeDonation = async () => {
    if (!isConnected || !donationAmount) return;

    try {
      await writeContract({
        address: config.contractAddress as `0x${string}`,
        abi: contractABI,
        functionName: 'makeDonation',
        args: [
          BigInt(selectedCampaign),
          isAnonymous,
          donationMessage
        ],
        value: BigInt(donationAmount),
      });
    } catch (err) {
      console.error('Error making donation:', err);
    }
  };

  if (!isConnected) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Connect Wallet Required</CardTitle>
          <CardDescription>
            Please connect your wallet to interact with the smart contract
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Create Campaign */}
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create Medical Campaign</CardTitle>
          <CardDescription>
            Create a new medical funding campaign using smart contracts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="campaignName">Campaign Name</Label>
              <Input
                id="campaignName"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                placeholder="Enter campaign name"
              />
            </div>
            <div>
              <Label htmlFor="medicalCategory">Medical Category</Label>
              <Input
                id="medicalCategory"
                value={medicalCategory}
                onChange={(e) => setMedicalCategory(e.target.value)}
                placeholder="e.g., Cardiology, Oncology"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="campaignDescription">Description</Label>
            <Textarea
              id="campaignDescription"
              value={campaignDescription}
              onChange={(e) => setCampaignDescription(e.target.value)}
              placeholder="Describe the medical campaign"
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="targetAmount">Target Amount (ETH)</Label>
              <Input
                id="targetAmount"
                type="number"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                placeholder="0.0"
                step="0.01"
              />
            </div>
            <div>
              <Label htmlFor="duration">Duration (days)</Label>
              <Input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="30"
              />
            </div>
          </div>
          
          <Button 
            onClick={handleCreateCampaign} 
            disabled={isPending || !campaignName || !targetAmount}
            className="w-full"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Creating Campaign...
              </>
            ) : (
              'Create Campaign'
            )}
          </Button>
          
          {error && (
            <div className="flex items-center space-x-2 text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span>Error: {error.message}</span>
            </div>
          )}
          
          {isConfirmed && (
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span>Campaign created successfully!</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Make Donation */}
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Make Donation</CardTitle>
          <CardDescription>
            Support medical campaigns through secure smart contract donations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="selectedCampaign">Campaign ID</Label>
              <Input
                id="selectedCampaign"
                value={selectedCampaign}
                onChange={(e) => setSelectedCampaign(e.target.value)}
                placeholder="Enter campaign ID"
              />
            </div>
            <div>
              <Label htmlFor="donationAmount">Amount (ETH)</Label>
              <Input
                id="donationAmount"
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="0.0"
                step="0.01"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="donationMessage">Message (Optional)</Label>
            <Textarea
              id="donationMessage"
              value={donationMessage}
              onChange={(e) => setDonationMessage(e.target.value)}
              placeholder="Leave a message of support"
              rows={2}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="isAnonymous"
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}
            />
            <Label htmlFor="isAnonymous">Anonymous Donation</Label>
          </div>
          
          <Button 
            onClick={handleMakeDonation} 
            disabled={isPending || !selectedCampaign || !donationAmount}
            className="w-full"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing Donation...
              </>
            ) : (
              'Make Donation'
            )}
          </Button>
          
          {error && (
            <div className="flex items-center space-x-2 text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span>Error: {error.message}</span>
            </div>
          )}
          
          {isConfirmed && (
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span>Donation successful!</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Transaction Status */}
      {hash && (
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Transaction Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Transaction Hash:</span>
                <Badge variant="outline" className="font-mono text-xs">
                  {hash.slice(0, 10)}...{hash.slice(-8)}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Status:</span>
                {isConfirming ? (
                  <Badge variant="secondary">
                    <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                    Confirming
                  </Badge>
                ) : isConfirmed ? (
                  <Badge variant="default">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Confirmed
                  </Badge>
                ) : (
                  <Badge variant="outline">Pending</Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

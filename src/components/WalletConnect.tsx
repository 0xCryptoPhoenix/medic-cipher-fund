import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Wallet, LogOut, User } from 'lucide-react';

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  if (!isConnected) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Wallet className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle>Connect Your Wallet</CardTitle>
          <CardDescription>
            Connect your wallet to access the Medic Cipher Fund platform
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <ConnectButton />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5" />
          Connected Wallet
        </CardTitle>
        <CardDescription>
          Your wallet is connected to the platform
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Address:</span>
          <Badge variant="secondary" className="font-mono text-xs">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => disconnect()}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Disconnect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

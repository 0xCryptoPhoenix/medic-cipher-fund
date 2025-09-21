// Configuration for the HealthVault Protocol application
export const config = {
  // Chain Configuration
  chainId: 11155111, // Sepolia testnet
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || 'https://sepolia.infura.io/v3/YOUR_INFURA_KEY',
  
  // Wallet Connect Configuration
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_WALLET_CONNECT_PROJECT_ID',
  
  // Infura Configuration
  infuraApiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY || 'YOUR_INFURA_API_KEY',
  alternativeRpcUrl: 'https://1rpc.io/sepolia',
  
  // Application Configuration
  appName: 'HealthVault Protocol',
  appDescription: 'A decentralized medical funding ecosystem with advanced privacy mechanisms',
  appUrl: 'https://healthvault-protocol.vercel.app',
  
  // Contract Configuration
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000',
} as const;

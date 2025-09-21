// Configuration for the Medic Cipher Fund application
export const config = {
  // Chain Configuration
  chainId: 11155111, // Sepolia testnet
  rpcUrl: 'https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990',
  
  // Wallet Connect Configuration
  walletConnectProjectId: '2ec9743d0d0cd7fb94dee1a7e6d33475',
  
  // Infura Configuration
  infuraApiKey: 'b18fb7e6ca7045ac83c41157ab93f990',
  alternativeRpcUrl: 'https://1rpc.io/sepolia',
  
  // Application Configuration
  appName: 'Medic Cipher Fund',
  appDescription: 'A privacy-preserving medical funding platform using FHE encryption',
  appUrl: 'https://medic-cipher-fund.vercel.app',
  
  // Contract Configuration
  contractAddress: '0x0000000000000000000000000000000000000000', // Will be updated after deployment
} as const;

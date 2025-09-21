# Vercel Deployment Guide for Medic Cipher Fund

This guide provides step-by-step instructions for deploying the Medic Cipher Fund application to Vercel.

## Prerequisites

- GitHub account with access to the repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment

### 1. Prepare the Repository

Ensure all changes are committed and pushed to the main branch:

```bash
git add .
git commit -m "feat: Ready for deployment"
git push origin main
```

### 2. Connect to Vercel

1. **Visit Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project" or "Import Project"
   - Select "Import Git Repository"
   - Choose `0xCryptoPhoenix/medic-cipher-fund` from the list
   - Click "Import"

### 3. Configure Project Settings

1. **Project Name**
   - Set project name: `medic-cipher-fund`
   - Framework Preset: `Vite`
   - Root Directory: `./` (default)

2. **Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 4. Set Environment Variables

In the Vercel dashboard, go to Project Settings > Environment Variables and add:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=YOUR_RPC_ENDPOINT
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_API_KEY
```

### 5. Deploy

1. **Initial Deployment**
   - Click "Deploy" button
   - Wait for the build process to complete (2-3 minutes)
   - Note the deployment URL

2. **Verify Deployment**
   - Visit the provided URL
   - Test wallet connection
   - Verify all features work correctly

### 6. Custom Domain (Optional)

1. **Add Domain**
   - Go to Project Settings > Domains
   - Add your custom domain (e.g., `medic-cipher-fund.com`)
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - HTTPS will be enabled automatically

## Post-Deployment Configuration

### 1. Smart Contract Deployment

Deploy the smart contract to Sepolia testnet:

```bash
# Install Hardhat dependencies
npm install @nomicfoundation/hardhat-toolbox @fhevm/hardhat-plugin @fhevm/lib hardhat

# Configure network settings in hardhat.config.ts
# Add your private key for deployment

# Deploy contract
npx hardhat run scripts/deploy.ts --network sepolia
```

### 2. Update Contract Address

After deployment, update the contract address in your frontend:

1. Copy the deployed contract address
2. Update `config.ts` with the new contract address
3. Commit and push changes
4. Vercel will automatically redeploy

### 3. Environment Variables for Production

Ensure all environment variables are set in Vercel:

- `NEXT_PUBLIC_CHAIN_ID`: 11155111 (Sepolia)
- `NEXT_PUBLIC_RPC_URL`: Your Infura endpoint
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`: Your WalletConnect project ID
- `NEXT_PUBLIC_INFURA_API_KEY`: Your Infura API key

## Monitoring and Maintenance

### 1. Vercel Analytics

- Enable Vercel Analytics in project settings
- Monitor performance and user behavior
- Track deployment metrics

### 2. Error Monitoring

- Set up error tracking (Sentry recommended)
- Monitor smart contract interactions
- Track wallet connection issues

### 3. Updates and Redeployments

- Push changes to main branch for automatic deployment
- Use preview deployments for testing
- Monitor build logs for any issues

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+ required)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Wallet Connection Issues**
   - Verify WalletConnect project ID
   - Check RPC URL configuration
   - Ensure proper network settings

3. **Smart Contract Issues**
   - Verify contract deployment
   - Check contract address configuration
   - Ensure proper ABI integration

### Support

- Check Vercel documentation for deployment issues
- Review GitHub issues for project-specific problems
- Contact development team for technical support

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive keys to repository
   - Use Vercel's environment variable system
   - Rotate keys regularly

2. **Smart Contract Security**
   - Audit contracts before mainnet deployment
   - Use multi-signature wallets for contract ownership
   - Implement proper access controls

3. **Frontend Security**
   - Validate all user inputs
   - Implement proper error handling
   - Use HTTPS for all communications

## Performance Optimization

1. **Build Optimization**
   - Enable Vercel's automatic optimizations
   - Use code splitting for large bundles
   - Optimize images and assets

2. **Caching**
   - Configure proper cache headers
   - Use CDN for static assets
   - Implement service worker for offline support

## Backup and Recovery

1. **Code Backup**
   - Regular commits to GitHub
   - Tag stable releases
   - Maintain development branches

2. **Database Backup**
   - Backup smart contract state
   - Maintain transaction records
   - Implement disaster recovery procedures

## Success Metrics

Monitor these key metrics:

- Deployment success rate
- Build time performance
- User engagement metrics
- Smart contract interaction volume
- Error rates and resolution time

---

For additional support or questions, please refer to the project documentation or contact the development team.

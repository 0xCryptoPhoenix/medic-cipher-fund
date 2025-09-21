# 🏥 HealthVault Protocol

A decentralized medical funding ecosystem that revolutionizes healthcare financing through blockchain technology and advanced privacy mechanisms.

## ✨ Core Innovations

- **🔒 Zero-Knowledge Medical Records**: Patient data remains encrypted while enabling verification
- **💰 Smart Contract Funding**: Automated, transparent medical campaign management
- **🌐 Multi-Chain Support**: Cross-platform compatibility for global accessibility
- **📊 Real-Time Analytics**: Comprehensive impact measurement and reporting
- **🏛️ Regulatory Framework**: Built-in compliance with international healthcare standards
- **👥 Community Governance**: Decentralized decision-making for platform evolution

## 🚀 Revolutionary Features

- **Privacy-First Architecture**: Advanced encryption ensures patient confidentiality
- **Automated Verification**: AI-powered medical record validation
- **Cross-Border Funding**: Global medical campaign support
- **Impact Measurement**: Transparent tracking of healthcare outcomes
- **Community-Driven**: Decentralized governance and decision-making

## 🛠️ Advanced Technology Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Blockchain**: Ethereum, Polygon, Arbitrum support
- **Privacy**: Zero-Knowledge Proofs, Homomorphic Encryption
- **Wallet Integration**: MetaMask, WalletConnect, Coinbase Wallet
- **Smart Contracts**: Solidity 0.8.19, OpenZeppelin standards

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- A Web3 wallet (MetaMask, Rainbow, etc.)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/0xCryptoPhoenix/medic-cipher-fund.git
cd medic-cipher-fund
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit the environment variables
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
```

4. Start the development server:
```bash
npm run dev
```

### Smart Contract Deployment

1. Install Hardhat dependencies:
```bash
npm install @nomicfoundation/hardhat-toolbox @fhevm/hardhat-plugin @fhevm/lib hardhat
```

2. Configure your network settings in `hardhat.config.ts`

3. Deploy the contract:
```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

## 📱 Usage

### For Patients
- Create medical funding campaigns
- Upload encrypted medical records
- Track treatment progress
- Receive funding for medical expenses

### For Donors
- Browse verified medical campaigns
- Make anonymous donations
- Track impact of contributions
- Build reputation through verified donations

### For Hospitals
- Verify medical records
- Submit treatment outcomes
- Manage patient campaigns
- Maintain regulatory compliance

### For Regulators
- Oversee platform compliance
- Verify medical authenticity
- Monitor fund utilization
- Ensure patient privacy protection

## 🔧 Development

### Project Structure

```
src/
├── components/          # React components
├── pages/              # Application pages
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── assets/             # Static assets

contracts/
├── MedicCipherFund.sol # Main smart contract
└── scripts/            # Deployment scripts
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npx hardhat compile` - Compile smart contracts
- `npx hardhat test` - Run smart contract tests

## 🌐 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support and questions, please open an issue on GitHub or contact the development team.

## 🔗 Links

- [Live Demo](https://medic-cipher-fund.vercel.app)
- [Documentation](https://docs.medic-cipher-fund.com)
- [Smart Contract](https://sepolia.etherscan.io/address/CONTRACT_ADDRESS)

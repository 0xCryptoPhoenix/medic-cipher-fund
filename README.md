# Medic Cipher Fund

A privacy-preserving medical funding platform using Fully Homomorphic Encryption (FHE) to ensure complete data privacy while enabling secure medical funding campaigns.

## 🏥 Features

- **FHE-Encrypted Medical Data**: All sensitive medical information is encrypted using Fully Homomorphic Encryption
- **Privacy-Preserving Donations**: Anonymous and verified donation system
- **Medical Campaign Management**: Create and manage medical funding campaigns
- **Regulatory Compliance**: Built-in regulatory oversight and verification
- **Impact Tracking**: Secure reporting of medical outcomes and fund utilization
- **Multi-Role Support**: Patients, donors, hospitals, doctors, and regulators

## 🔐 Privacy & Security

- **FHE Encryption**: Core medical data remains encrypted during computation
- **Zero-Knowledge Verification**: Verify information without revealing sensitive details
- **Regulatory Compliance**: Built-in compliance with medical data protection regulations
- **Audit Trail**: Complete transaction history while maintaining privacy

## 🛠️ Technology Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Blockchain**: Ethereum (Sepolia testnet)
- **Encryption**: FHEVM (Fully Homomorphic Encryption)
- **Wallet Integration**: RainbowKit, Wagmi, Viem
- **Smart Contracts**: Solidity with FHE support

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

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';
import { config } from '../../config';

export const walletConfig = getDefaultConfig({
  appName: config.appName,
  projectId: config.walletConnectProjectId,
  chains: [sepolia],
  ssr: false,
});

import { ethers } from "hardhat";

async function main() {
  console.log("Deploying MedicCipherFund contract...");

  // Get the contract factory
  const MedicCipherFund = await ethers.getContractFactory("MedicCipherFund");

  // Set up verifier and regulator addresses (you should replace these with actual addresses)
  const verifier = "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"; // Replace with actual verifier address
  const regulator = "0x8ba1f109551bD432803012645Hac136c"; // Replace with actual regulator address

  // Deploy the contract
  const medicCipherFund = await MedicCipherFund.deploy(verifier, regulator);

  await medicCipherFund.waitForDeployment();

  const contractAddress = await medicCipherFund.getAddress();
  
  console.log("MedicCipherFund deployed to:", contractAddress);
  console.log("Verifier address:", verifier);
  console.log("Regulator address:", regulator);
  
  // Save the contract address to a file for frontend use
  const fs = require('fs');
  const contractInfo = {
    address: contractAddress,
    verifier: verifier,
    regulator: regulator,
    network: "sepolia"
  };
  
  fs.writeFileSync(
    './contract-address.json', 
    JSON.stringify(contractInfo, null, 2)
  );
  
  console.log("Contract information saved to contract-address.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

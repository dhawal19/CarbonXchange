const { ethers } = require("hardhat");

async function main() {
  try {
    // Get the contract factory for CarbonCreditContract
    const CarbonCreditContract = await ethers.getContractFactory("CarbonCreditContract");

    // Set carbon credit price in ETH (as a string)
    const carbonCreditPriceEth = "0.005";

    // Convert ETH to wei using ethers.utils.parseEther
    const carbonCreditPriceWei = ethers.parseEther(carbonCreditPriceEth);

    // Deploy the contract
    const creditContract = await CarbonCreditContract.deploy(carbonCreditPriceWei);

    // Wait for the contract to be deployed and obtain the deployed contract instance
    await creditContract.waitForDeployment();

    // Log the deployed contract address
    console.log("Contract deployed at address:", creditContract.target);
  } catch (error) {
    console.error("Error deploying contract:", error);
    process.exit(1); // Exit with error code
  }
}

// Execute the deployment script
main()
  .then(() => process.exit(0)) // Exit with success code
  .catch((error) => {
    console.error(error);
    process.exit(1); // Exit with error code
  });

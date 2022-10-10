const { ethers } = require("hardhat");
const config = require("../hardhat.config");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Initializing contracts...", deployer.address, (await deployer.getBalance()).toString());

  if (!config.parameters.script.ContractAddress) {
    console.log('Contract Address is not set.')
    return ;
  }
  const NodeRegistry = await ethers.getContractFactory("NodeRegistry");
  const nodeRegistry = NodeRegistry.attach(config.parameters.script.ContractAddress);

  const lastTokenId = await nodeRegistry.getLastTokenId();
  
  console.log("Displaying last tokenId info  =====>>");
  console.log(`Last Token Id: ${lastTokenId}`);
  console.log("");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

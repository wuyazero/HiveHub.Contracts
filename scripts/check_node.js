const { ethers } = require("hardhat");
const config = require("../hardhat.config");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Initializing contracts...", deployer.address, (await deployer.getBalance()).toString());

  if (!config.parameters.deployment.ContractAddress) {
    console.log('Contract Address is not set.')
    return ;
  }
  const NodeRegistry = await ethers.getContractFactory("NodeRegistry");
  const nodeRegistry = NodeRegistry.attach(config.parameters.deployment.ContractAddress);

  const totalSupply = await nodeRegistry.totalSupply();
  const nodeCount = await nodeRegistry.nodeCount();
  const nodeIds = await nodeRegistry.nodeIds(); 
  const nodes = [];
  for (let i = 0; i < nodeIds.length; i ++) {
    const item = await nodeRegistry.nodeByIndex(i);
    nodes.push(item);
  }
  
  console.log("Displaying node info  =====>>");
  console.log(`Total supply: ${totalSupply}`);
  console.log(`Node count: ${nodeCount}`);
  console.log(`Node Ids: ${nodeIds}`);
  console.log(`Nodes: ${nodes}`);
  console.log("");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

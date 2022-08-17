import hre from "hardhat";
const { ethers, upgrades } = hre;
import { NR_PlatformAddress, NR_CategoryURI, NR_WithProxy, NR_Address } from "../hardhat.config";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying contracts...",
    deployer.address,
    (await deployer.getBalance()).toString()
  );

  // ***************************  Node Registry  *************************** //
  if (!NR_PlatformAddress) {
    console.log("Platform address is not set.");
    return ;
  }
  if (!NR_CategoryURI) {
    console.log("Category URI is not set.");
    return ;
  }
  // deploy proxy contract
  const NodeRegistry = await ethers.getContractFactory("NodeRegistry");
  let proxiedNodeRegisty;
  if (NR_WithProxy) {
    proxiedNodeRegisty = await upgrades.deployProxy(NodeRegistry, [NR_PlatformAddress, NR_CategoryURI]);
    await proxiedNodeRegisty.deployed();
  }
  else {
    proxiedNodeRegisty = await upgrades.upgradeProxy(NR_Address, NodeRegistry)
  }

  // verify implementation contract
  const nodeRegistryAddress = await upgrades.erc1967.getImplementationAddress(proxiedNodeRegisty.address);

  console.log("Node Registry proxy contract deployed to:", proxiedNodeRegisty.address);
  console.log("Node Registry logic contract deployed to:", nodeRegistryAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

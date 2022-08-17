require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("./tasks/flatter");

/**
 * @type import('hardhat/config').HardhatUserConfig
 * */

module.exports = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    elastosmainnet: {
      url: "https://api.elastos.io/esc",
      accounts: [],
    },
    elastostestnet: {
      url: "https://api-testnet.elastos.io/eth",
      accounts: [],
    },
  },
  NR_WithProxy: true,
  NR_Address: "",
  NR_PlatformAddress: "",
  NR_CategoryURI: "",
};

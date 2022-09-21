# Hive Node Registry Contract

The Hive node registry contract is the collection contract of ERC721 standard on Elastos ESC blockchain. When a Hive node is deployed and decided to be a public storage service, it needs to be registered in this contract on the HiveHub webApp. Once the Hive node is registered, the community users can explore and use it to create their vaults. 

***Notice: The registery contract is ERC721 compatible and possibly would be registered into `Pasar` as NFT collection.***



## How to build

### Prepare for environment

Clone the repository onto your local device, and install all depedencies by running the commands below:
```shell
$ git clone https://github.com/elastos-trinity/HiveHub.Contracts.git
$ npm install
```

then, configurate hardhat.config.js, put your private key in the network config item
```javascript
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
  parameters: {
    deployment: {
      PlatformAddress: '', // Platform Address of the Node Registry Contract 
      PlatformFee: 0, // Platform Fee of the Node Registry Contract 
      WithProxy: true, // Set true for new proxy contract deployment, set false for updates  
      ContractAddress: '', // Deployed proxy contract address of the Node Registry Contract
    },
    script: {
      testAddress1: '',
      testAddress2: '',
      testAddress3: '',
    },
  }
};
```

**Notice**: *put your private key string in the item "accounts"*.


### Testing

Run the following command in the terminal to start testing on testnet enviroment.
```shell
$ npx hardhat test
```

### Deploy contracts
Deploy contracts by running such command in terminal

```shell
$ npx hardhat run scripts/deploy.js --network elastostestnet
```



## Contribution

Any contributions  to this project would be highly appreciated, including

- Building docs
- Report bug and bugfix

The contribution acitivities can be either by creating an issue or pushing a pull request.



## License

This project is licensed under the terms of the [MIT license](https://github.com/elastos-trinity/HiveHub.Contracts/blob/main/LICENSE).
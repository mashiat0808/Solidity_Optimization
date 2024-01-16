/*require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
/** @type import('hardhat/config').HardhatUserConfig */

/*
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
};
*/

require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
// Import necessary plugins
//require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require('hardhat-storage-layout');
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 21, // Your desired gas price in gwei
    enabled: process.env.REPORT_GAS ? true : false, // Set REPORT_GAS=true to enable gas reporting
  },
};

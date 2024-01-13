// require('@nomiclabs/hardhat-waffle')
// require('dotenv').config()

// module.exports = {
//   defaultNetwork: 'localhost',
//   networks: {
//     localhost: {
//       url: 'http://127.0.0.1:8545',
//     },
//   },
//   solidity: {
//     version: '0.8.11',
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   paths: {
//     sources: './src/contracts',
//     artifacts: './src/abis',
//   },
//   mocha: {
//     timeout: 40000,
//   },
// }

require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
const { ethers } = require("ethers");

const mnemonic = process.env.MNEMONIC;
const project_id = process.env.PROJECT_ID;

// Function to get wallet from mnemonic
function getWallets() {
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  return [wallet.privateKey];
}

// console.log("mnemonic", mnemonic);
// console.log("project_id", project_id);
// console.log("getWallets", getWallets());
// return;

module.exports = {
  solidity: "0.8.7", 
  networks: {
    // hardhat: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${project_id}`,
      accounts: getWallets()
    }
  },
    paths: {
    sources: './src/contracts',
    artifacts: './src/abis',
  },
};

const hre = require('hardhat')
const fs = require('fs')
const { ethers } = require("hardhat");

async function main() {
  const contractName = 'Kickstarter';
  const taxFee = 5;
  // const Contract = await hre.ethers.getContractFactory(contractName);
  const Contract = await ethers.getContractFactory(contractName);
  const contract = await Contract.deploy(taxFee);

  await contract.deployed();

  const address = JSON.stringify({ address: contract.address }, null, 4)
  console.log(address)
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
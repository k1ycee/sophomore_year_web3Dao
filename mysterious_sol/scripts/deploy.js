const { ethers } = require("hardhat");
require("dotenv").config();
const {
  WHITELIST_CONTRACT_ADDRESS,
  METADATA_URL,
  MYSTERY_NFT_CONTRACT_ADDRESS,
  MYSTERY_TOKEN_CONTRACT_ADDRESS,
} = require("../constants");

async function main() {
  // const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so exchangeContract here is a factory for instances of our Exchange contract.
  */
  const exchangeContract = await ethers.getContractFactory("Exchange");

  // here we deploy the contract
  const deployedExhangeContract = await exchangeContract.deploy(
    MYSTERY_TOKEN_CONTRACT_ADDRESS
  );

  // print the address of the deployed contract
  console.log("Exchange Contract Address:", deployedExhangeContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

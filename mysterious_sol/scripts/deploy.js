const { ethers } = require("hardhat");
require("dotenv").config();
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL, MYSTERY_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Deploy the FakeNFTMarketplace contract first
  const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNftMarketplace.deployed();

  console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);

  // Now deploy the CryptoDevsDAO contract
  const MysteryDAO = await ethers.getContractFactory("MysteryDAO");
  const mysteryDAO = await MysteryDAO.deploy(
    fakeNftMarketplace.address,
    MYSTERY_NFT_CONTRACT_ADDRESS,
    {
      // This assumes your account has at least 1 ETH in it's account
      // Change this value as you want
      value: ethers.utils.parseEther("0.1"),
    }
  );
  await mysteryDAO.deployed();

  console.log("MysteryDAO deployed to: ", mysteryDAO.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
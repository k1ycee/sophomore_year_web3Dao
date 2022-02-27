const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Whitelist", function () {
  it("Whitlist only allows first 10 people", async function () {
    const whitelistContract = await ethers.getContractFactory("Whitelist");
    const deployedWhitelistContract = await whitelistContract.deploy(10);
    await deployedWhitelistContract.deployed();
    expect(await deployedWhitelistContract.registeredAddresses()).to.equal(10);
  });
});

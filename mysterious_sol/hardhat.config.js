require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");





module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "SA7Y5TQ2CT39QF8WXGRNAIQI358AJHUE7I",
  }
};


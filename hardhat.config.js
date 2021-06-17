require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


module.exports = {
  solidity: "0.7.6",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN,
      accounts: [process.env.SK]
    }
  }
};


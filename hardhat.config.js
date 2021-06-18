require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


module.exports = {
  solidity: "0.7.6",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/ead605dd65704007ae941fffb7c1d1a7",
      accounts: ["f3c4ded9365ce3e1171e5b847cb1eef31fa369d88cc0f52681ac8fcd8f8c9694"]
    }
  }
};


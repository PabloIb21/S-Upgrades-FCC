const networkConfig = {
  default: {
    name: "hardhat",
  },
  31337: {
    name: "localhost",
  },
  4: {
    name: "rinkeby",
  },
}

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
}
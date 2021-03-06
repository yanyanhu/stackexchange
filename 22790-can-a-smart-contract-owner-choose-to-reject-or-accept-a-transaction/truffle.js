module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 266000,
      gasPrice: web3.toWei("50", "gwei"),
      network_id: "*" // Match any network id
    }
  }
};

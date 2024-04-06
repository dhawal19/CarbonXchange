// https://eth-sepolia.g.alchemy.com/v2/iIb_zjVxQu_wKNotDaaKNLpNAVmlB-Or

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity : '0.8.0', 
  networks : {
    sepolia : {
      url : "https://eth-sepolia.g.alchemy.com/v2/iIb_zjVxQu_wKNotDaaKNLpNAVmlB-Or", 
      accounts : ['23b28c1eecb19e29ee7e6390d1eb35fd9d6322e6a31c87e712ae3bd9068c6b09']
    }
  }
}
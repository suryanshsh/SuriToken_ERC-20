var SuriToken = artifacts.require("./SuriToken.sol");
var SuriTokenSale = artifacts.require("./SuriTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(SuriToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(SuriTokenSale, SuriToken.address, tokenPrice);
  });
};

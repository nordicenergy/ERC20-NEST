const NESTToken = artifacts.require("NESTToken");

module.exports = function(deployer) {
    deployer.deploy(NESTToken);
};
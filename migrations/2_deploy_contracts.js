var HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  // Additional contracts can be deployed here
  // e.g. deployer.deploy(Contract, input_1, input...);
};
# Truffle Ropsten Boilerplate

Detailed tutorial [here](https://medium.com/@nicolezhu/how-to-deploy-smart-contracts-with-truffle-framework-hdwallet-and-infura-b3e30d5ee1e)

## Setup
0. npm install dependencies: `npm install --save truffle-hdwallet-provider`
1. Add your wallet mneumonic to truffle.js
2. Add your infura key to truffle.js 
3. Create your contracts in ./contracts
4. Deploy your new contract with `truffle deploy --network ropsten` 
5. Migrate future contracts with `truffle migrate --network ropsten`
5. Interact with your contracts via `truffle console --network ropsten`

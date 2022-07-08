require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember hospital install bread sunset tunnel'; 
let testAccounts = [
"0x6315a69d3d4f5b9853e79f7ecab8f6d90a8e47c9fe45fb65ad2ffd32b8993743",
"0x5244b71b64846eb1e132d720f9e52f837698ce48714f44b0e72175d77d11bc57",
"0x3f240231d76129ae479386f948b506165c9d1fe91faa88b86e8615927200f2a2",
"0x0ea6897edc56b5e159f9a400ed983b05344f9f87cd9b48ffbdea3dcb4b6b14c4",
"0x0fae87c31632d0395db5456c9a47978a5746053b5c4127238c501f04662586b3",
"0xb29eacb364af4084ba550927024ae1d9459e398c8520665c77821da711e06ecf",
"0xea88720a5b323ffb14b318be54666bc0151b34e442d333f1e7b41dbeebb2f989",
"0xdbae453b5da3cc929ad062c9005c6be0565bc25857fd74f5bc743d20dd59e2c5",
"0xc08f8d931c5cab072ae489844d7100085ae2e3cd7827ebe97e26fb5c348e327d",
"0x9da6ef5668904243b5b3905470baf6eb66a45aaf231194fb7112cbb933fb3a30"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


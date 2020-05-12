require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain modify give arch off giggle'; 
let testAccounts = [
"0x99fe8c7508aed519336f3acef5c43d4d420b2164e4646e1656ceaaaa56c7bbb8",
"0xe3148ad33efd92e0055ce03321d4226f9951c800ddc6ba15d1d71ed2eb9a1899",
"0xf07d4aad71c4823cfd81dc4920a62a05142c4a385247f1cdfa8e16704fe1313c",
"0x2e45d3819d07c0f557d6a87f3090bea911567cd5704d69ed527b7f286061c0f2",
"0x0e112db8a1d321b4688aac06cdd77a849921125e48c4dc1b345b341ab44578f5",
"0xb66165edea81d83f26d7db77e34b5e8c51af578660e59582333ae4a06c8cd41c",
"0xe7ec12f2be76ed51649689e786e4c04f1e1e97f22a7b28d6e8d8f06d86022fc9",
"0xb7b2b0f644219ce6f69a2363405982df1dd31735b20490147d230183d445ce0f",
"0xeb260aae3ea21cfa63b75345b096e4eb39493ac743ad72269d665b0f9f796321",
"0xd9fe1b4a2f8ea0f411d1760d70df802e66b17b3f437e85c7b8bfe9c22bfa0445"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

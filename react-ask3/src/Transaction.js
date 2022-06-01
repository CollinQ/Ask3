import Web3 from 'web3';


import Transaction from './Smart-Contract/artifacts/contracts/Transaction.sol/Transaction.json';

require('dotenv').config();

let selectedAccount;
let transaction;
let isInitialized = false;

//const API_KEY = process.env.API_KEY;
//const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
//const CONTRACT_ABI = require("./Smart-Contract/artifacts/contracts/Transaction.sol/Transaction.json");

export const init = async () => {

    let provider = window.ethereum;

    if (typeof provider !== 'undefined') {
        provider.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
            selectedAccount = accounts[0];
            console.log(`Selected account is ${selectedAccount}`);
        })
        .catch((err) => {
            console.log(err);
            return;
        })

        window.ethereum.on('accountsChanged', function (accounts) {
            selectedAccount = accounts[0];
            console.log(`Selected account changed to ${selectedAccount}`);
        });
    }
    const web3 = new Web3(provider); 
    //const networkId = new web3.eth.net.getId();
    isInitialized = true;
    transaction = new web3.eth.Contract(Transaction.abi, CONTRACT_ADDRESS);
};

export const verifyAnswer = async (amount) => {
    if (!isInitialized){
        await init();
    }
    return transaction.methods.confirmPurchase({'value' : amount});
}

export const confirmSeller = () => {
    return transaction.methods.confirmSeller();
}

export const confirmSale = () => {
    return transaction.methods.confirmSale();
}

export const withdraw = () => {
    return transaction.methods.withdraw();
}

export const getBalance = () => {
    return transaction.methods.getBalance();
}




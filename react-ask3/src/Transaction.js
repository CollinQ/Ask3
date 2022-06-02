import Web3 from 'web3';
import Transaction from './Smart-Contract/artifacts/contracts/Transaction.sol/Transaction.json';
require('dotenv').config();


const Moralis = require('moralis');
const serverUrl = "https://fs7nsi4sihen.usemoralis.com:2053/server";
const appId = "UiQpegaPb9VOR72ILT8r2NTEaIPqvc0hvoNL2Pmr";
Moralis.start({ serverUrl, appId });

export const Login = async () => {
    let user = Moralis.User.current();
    if (!user) {
        try {
            user = await Moralis.authenticate({ signingMessage: "Authenticate" });
            await Moralis.enableWeb3();
            console.log(user);
            console.log(user.get(`ethAddress`));
        } catch (error) {
            console.log(error);
        }
    }
}

export const Logout = async () => {
    await Moralis.User.logOut();
    console.log("Logged Out");
}

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
    //const web3 = new Web3(provider); 
    const web3 = await Moralis.enableWeb3();

    //const networkId = new web3.eth.net.getId();
    isInitialized = true;
    transaction = new web3.eth.Contract(Transaction.abi, CONTRACT_ADDRESS);
};

export const verifyAnswer = async (amount) => {
    let options = {
        contractAddress: "0xE10dd130f9CD59DC70D6939C029Ccd4b62B0cC1c",
        functionName: "confirmPurchase",
        abi: [{
            "inputs": [],
            "name": "confirmPurchase",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }],
        params: {

        },
        msgValue: amount //insert
    }
    await Moralis.executeFunction(options);
}

export const confirmSellerWallet = async () => {
    let options = {
        contractAddress: "0xE10dd130f9CD59DC70D6939C029Ccd4b62B0cC1c",
        functionName: "confirmSeller",
        abi: [{
            "inputs": [],
            "name": "confirmSeller",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }],
        params: {
        }
    }
    await Moralis.executeFunction(options);
    //return transaction.methods.confirmSeller();
}

export const confirmTransaction = async () => {
    let options = {
        contractAddress: "0xE10dd130f9CD59DC70D6939C029Ccd4b62B0cC1c",
        functionName: "confirmSale",
        abi: [{
            "inputs": [],
            "name": "confirmSale",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }],
        params: {
        }
    }
    await Moralis.executeFunction(options);
}

export const Withdraw = async () => {
    let options = {
        contractAddress: "0xE10dd130f9CD59DC70D6939C029Ccd4b62B0cC1c",
        functionName: "withdraw",
        abi: [{
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }],
        params: {
        }
    }
    await Moralis.executeFunction(options);
    //return transaction.methods.withdraw();
}

export const GetBalance = async () => {
    let options = {
        contractAddress: "0xE10dd130f9CD59DC70D6939C029Ccd4b62B0cC1c",
        functionName: "getBalance",
        abi: [{
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
        }],
        params: {
        }
    }
    await Moralis.executeFunction(options);
    //return transaction.methods.getBalance();
}




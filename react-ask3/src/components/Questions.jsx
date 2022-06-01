import React, { Component } from 'react'
import axios from 'axios';
import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from './AuthProvider';
import { init, verifyAnswer, confirmSellerWallet, confirmTransaction, Withdraw, GetBalance, Login, Logout } from '../Transaction';
//export default class Questions extends Component {
const Moralis = require('moralis');

function Questions() {  
    const init = () => {
        init();
    }
    const verify = (amount) => {
        verifyAnswer(amount).then(tx => {
            console.log(tx);
        }).catch(err => {
            console.log(err);
        });
    }

    const confirmSale = (amount) => {
        confirmTransaction().then(tx => {
            console.log(tx);
        }).catch(err => {
            console.log(err);
        });
    }

    const login = () => {
        Login();
    }
    const logout = () => {
        Logout();
    }
    const confirmSeller = () => {
        confirmSellerWallet().then(tx => {
            console.log(tx);
        }).catch(err => {
            console.log(err);
        });
    }
    const withdraw = () => {
        Withdraw();
    }
    const getbalance = () => {
        var balance = GetBalance().then(tx => {
            console.log(tx);
        }).catch(err => {
            console.log(err);
        });
        console.log(balance);
    }
    //where it says Moralis.Units.ETH(0.1), you can put in a user input value instead of 0.1
    return (
        <div className="Questions">
            <h1>Questions</h1>
            <button onClick={() => login()}>Metamask Login</button>
            <button onClick={() => logout()}>Metamask Logout</button>
            <button>post</button>
            <button onClick={() => confirmSeller()}>Answer</button>
            <button onClick={() => confirmSale()}>receive funds</button>
            <button onClick={() => withdraw()}>withdraw</button>
            <button onClick={() => verify(Moralis.Units.ETH(0.1))}> Verify Answer </button> 
                <p>Purchased successfully</p>
            </div>
    )
}

export default Questions;

import React, { Component } from 'react'
import axios from 'axios';
import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from './AuthProvider';
import { init, verifyAnswer, confirmSeller, confirmSale, withdraw } from '../Transaction';
//export default class Questions extends Component {
const Moralis = require('moralis');
const serverUrl = "https://3bjds9z3ofva.usemoralis.com:2053/server";
const appId = "ZmLehXquNhSlkY3e2e9oMXXurgtIYarjVeihHqaa";
Moralis.start({ serverUrl, appId });

async function Login() {
    let user = Moralis.User.current();
    if (!user) {
        try {
            user = await Moralis.authenticate( { signingMessage: "Authenticate" });
            await Moralis.enableWeb3();
            console.log(user);
            console.log(user.get(`ethAddress`));
        } catch (error) {
            console.log(error);
        }
    }
}

async function Logout() {
    await Moralis.User.logOut();
    console.log("Logged Out");
}
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

    const login = () => {
        Login();
    }
    const logout = () => {
        Logout();
    }
    
    return (
        <div className="Questions">
            <h1>Questions</h1>
            <button onClick={() => login()}>Metamask Login</button>
            <button onClick={() => logout()}>Metamask Logout</button>
            
            <button onClick={() => verify(Moralis.Units.ETH(0.1))}> Verify Answer </button> 
                <p>Purchased successfully</p>
            </div>
    )
}

export default Questions;

import './Post.css';
import icon from '../assets/user-icon.png';
import React, { Component } from 'react'
import axios from 'axios';
import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from './AuthProvider';
import { init, verifyAnswer, confirmSellerWallet, confirmTransaction, Withdraw, GetBalance, Login, Logout } from '../Transaction';
//export default class Questions extends Component {
const Moralis = require('moralis');


//where it says Moralis.Units.ETH(0.1), you can put in a user input value instead of 0.1

class Post extends Component {

    render() {

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

        return (
            <div className="post">
                <div className="forum_container" id="topic">
                    <button onClick={() => login()}>Metamask Login</button>
                    <button onClick={() => logout()}>Metamask Logout</button>
                    <div class="content">
                        <p class="userimage"><img src={icon} /></p>
                        <p class="date">05/19/2022</p>
                        <p></p>
                        <br />
                        <h class="username">jshen0303</h>
                        <br />
                        <h1>What is pi? --- bounty: 0.1 eth</h1>
                        <button className='left' onClick={() => confirmSeller()}>Answer</button>
                        <button className='right' onClick={() => confirmSale()}>receive funds</button>
                    </div>
                </div>
                <div className="comment_container">
                    <div class="content">
                        <p class="userimage"><img src={icon} /></p>
                        <p class="date">05/26/2022</p>
                        <p class="username">jmun</p>

                        <h>It is 3.14</h>
                        <button className='right' onClick={() => verify(Moralis.Units.ETH(0.1))}> Verify Answer </button>
                    </div>
                </div>
                <div className="comment_container">
                    <div class="content">
                        <p class="userimage"><img src={icon} /></p>
                        <p class="date">05/21/2022</p>
                        <p class="username">cqian</p>
                        <h>It's 2</h>
                        <button className='right' onClick={() => verify(Moralis.Units.ETH(0.1))}> Verify Answer </button>
                    </div>
                </div>
                <div className="comment_container">
                    <div class="content">
                        <p class="userimage"><img src={icon} /></p>
                        <p class="date">05/20/2022</p>
                        <p class="username">c_xu</p>
                        <h>3.14</h>
                        <button className='right' onClick={() => verify(Moralis.Units.ETH(0.1))}> Verify Answer </button>
                    </div>
                </div>
                <div className="comment_container">
                    <div class="content">
                        <p class="userimage"><img src={icon} /></p>
                        <p class="date">05/20/2022</p>
                        <p class="username">catli</p>
                        <h>It's 22/7</h>
                        <button className='right' onClick={() => verify(Moralis.Units.ETH(0.1))}> Verify Answer </button>
                        <br />
                    </div>
                </div>
                <br />
                <button onClick={() => withdraw()}>withdraw</button>
            </div>
        );
    }

}

export default Post;
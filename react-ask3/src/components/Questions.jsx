import React, { Component } from 'react'
import axios from 'axios';
import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from './AuthProvider';
import { connectWallet, getCurrentWalletConnected } from '../Transaction';

export default class Questions extends Component {
    render() {
        return (
            <div>
                <h1>Questions</h1>
                <button class="transferFunds">Purchase</button>
                </div>
        )
    }
}

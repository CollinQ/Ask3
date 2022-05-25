import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <img src="logo192.png" alt="poop" />
                    <span className="ask">ask</span>
                    <span className="num">3</span>
                </div>
                <ul className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/questions'>Forum</Link></li>
                    <li><Link to='/recent'>Recent</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </ul>
            </div >
        )
    }
}

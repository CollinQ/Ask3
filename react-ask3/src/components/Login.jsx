import React, { Component } from 'react'
import { useState } from 'react';
import "./pages.css"
import axios from 'axios';




const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    return (
        <div className="login">
            <br></br>
            <h1>Login
            </h1>
            <form>
                <label>
                    email:
                    <input type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br></br>
                <label>
                    password:
                    <input type="text"
                        required
                        value={password}
                        onChange={(c) => setPass(c.target.value)} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
            {email} <br></br>
            {password}
        </div>
    )
}

export default Login;

import React, { Component } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRef, useEffect } from 'react';





const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const [errMsg, setErrMsg] = useState('');
    const [success, getSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])


    return (
        <div className="login">
            <br></br>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg}</p>
            <h1>Login
            </h1>
            <form>
                <label htmlFor="email">
                    email:
                    <input
                        type="text"
                        id="email"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </label>
                <br></br>
                <label htmlFor="password">
                    password:
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPass(e.target.value)}
                        value={password}
                        required
                    />
                    <br></br>
                    <input type="submit" value="Sign In" />
                </label>
            </form>
            <br />
            <p>
                Need an Account?
                <span className="line">
                    {/*Sign up router link here*/}
                    <a href="#"> Sign Up</a>
                </span>
            </p>
            {email} <br></br>
            {password}
        </div >
    )
}

export default Login;

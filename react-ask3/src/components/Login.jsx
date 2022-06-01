import React, { Component } from 'react'
import axios from 'axios';
import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from './AuthProvider';

const LOGIN_URL = 'http://127.0.0.1:4000/login';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("logging in");
            const response = await axios.post(LOGIN_URL,
                { session: { email: email, password: password } },
                {
                    headers: {
                        //'X-CSRF-Token': csrfToken,
                        'Access-Control-Allow-Origin': 'http://127.0.0.1:4000/login',
                        'Content-Type': 'application/json',
                        'Access-Control-Response-Method': 'http://127.0.0.1:4000/login'
                    }
                });
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, password, roles, accessToken })
            setEmail('');
            setPass('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            }
            else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            }
            else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            }
            else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    return (
        < >
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    < div className="login">
                        <br></br>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg}</p>
                        <h1>Login
                        </h1>
                        <form onSubmit={handleSubmit}>
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
                                <a href="/signup"> Sign Up</a>
                            </span>
                        </p>
                    </div >
                </section >
            )
            }
        </>
    )
}

export default Login;

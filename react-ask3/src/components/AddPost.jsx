import React, { Component } from 'react'
import axios from '../api/axios'
import { useState, useRef, useEffect } from 'react'

const POST_URL = 'http://127.0.0.1:4000/post';

const AddPost = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("logging in");
            const response = await axios.post(POST_URL,
                { session: { subject: subject, content: content } },
                {
                    headers: {
                        //'X-CSRF-Token': csrfToken,
                        'Access-Control-Allow-Origin': 'http://127.0.0.1:4000/login',
                        'Content-Type': 'application/json',
                        'Access-Control-Response-Method': 'http://127.0.0.1:4000/login'
                    }
                });

            setSubject('');
            setContent('');
        }

        catch (err) {
            errRef.current.focus();
        }
    }

    return (
        <div className="addPost">
            <br />
            <h1>Submit Post</h1>
            <form className='addPost-form' onSubmit={handleSubmit}>
                <label>
                    subject:
                </label>
                <input
                    placeholder="Subject Line"
                    value={subject}
                    type="subject"
                    id="subject"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <br />
                <label>
                    question:
                </label>
                <textarea
                    as="textarea"
                    placeholder="Write your question here..."
                    style={{ height: "100px" }}
                    value={content}
                    type="content"
                    id="content"
                    ref={userRef}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit"> Post Question </button>
            </form>
        </div>
    )
}

export default AddPost;
import React, { Component } from 'react'
import axios from '../api/axios'
import { useState, useRef, useEffect } from 'react'


const AddPost = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [content, setContent] = useState('');

    return (
        <div>
            addPost
            <form>
                <label>
                    subject:
                </label>
                <input>

                </input>

            </form>

        </div>
    )
}

export default AddPost;
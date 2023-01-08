import React, { useState } from 'react'
import Axios from 'axios'


function Register() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const setUser = (e) => {
        setUserName(e.target.value)
    }

    const setPass = (e) => {
        setPassword(e.target.value)
    }


    // ---- function register ----
    const register = async (e) => {
        e.preventDefault();

        let formTitle = new FormData();

        formTitle.append('username', username);
        formTitle.append('password', password);


        Axios.post('http://localhost:8030/registerUser', formTitle, {
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={register}>
                <label>Username:</label>
                <input type="text" name="username" onChange={setUser} />
                <br></br>
                <label>Password:</label>
                <input type="text" name="password" onChange={setPass} />
                <br></br>
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'



function Register() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


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
                console.log(res.data);
                navigate('/login');
                localStorage.setItem('user-info', JSON.stringify(res.data));
                window.location.reload(false);
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
                <input type="text" name="username" onChange={setUser} required />
                <br></br>
                <label>Password:</label>
                <input type="text" name="password" onChange={setPass} required />
                <br></br>
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';


Axios.defaults.withCredentials = true


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const navigate = useNavigate();

    // ---- function register ----
    const login = async (e) => {
        e.preventDefault();

        Axios.post('http://localhost:8030/loginUser',
            {
                headers: { "Content-Type": "application/json" },
                username: username,
                password: password,
            })
            .then((response) => {
                if (response.data.message) {
                    setLoginStatus(response.data.message)
                } else {
                    setLoginStatus(response.data);
                    navigate('/')
                    window.location.reload(false);
                }
                localStorage.setItem('user-info', JSON.stringify(response.data));
            })
            .catch((err) => {
                console.log(err.response);
            });
    }



    const setUser = (e) => {
        setUsername(e.target.value)
    }

    const setPass = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label>Username</label>
                <input type="text" onChange={setUser} required />
                <br></br>
                <label>Password</label>
                <input type="text" onChange={setPass} required />
                <br></br>
                <input type="submit" value="Login" />
                <br></br>
            </form>


            <h1>{loginStatus}</h1>

            <Link to="/register">Register</Link>



        </div>
    )
}

export default Login
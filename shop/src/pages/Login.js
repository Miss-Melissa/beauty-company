import React, { useState, useEffect } from 'react';
import Axios from 'axios';

Axios.defaults.withCredentials = true

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

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
                console.log(response)
                if (response.data.message) {
                    setLoginStatus(response.data.message)
                } else {
                    setLoginStatus(response.data);
                }
            })
            .catch((err) => {
                console.log(err.response);
            });
    }



    useEffect(() => {

        Axios.get('http://localhost:8030/loginStatus', {
        })
            .then((response) => {
                console.log(response)
                if (response.data.loggedIn === true) {
                    setLoginStatus(response.data.user[0].username)
                }
            })
            .catch((error) => {
                console.log(error)

            })
    }, []);

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
                <input type="text" onChange={setUser} />
                <br></br>
                <label>Password</label>
                <input type="text" onChange={setPass} />
                <br></br>
                <input type="submit" value="Login" />
            </form>


            <h1>{loginStatus}</h1>




        </div>
    )
}

export default Login
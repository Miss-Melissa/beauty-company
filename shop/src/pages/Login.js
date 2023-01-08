import React, { useState } from 'react';
import Axios from 'axios';
import { set } from 'mobx';


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
                password: password
            })

            .then((response) => {
                console.log(response)
                console.log(response.data.message)
                if (response.data.message) {
                    setLoginStatus(response.data.message)
                } else {
                    setLoginStatus(response.data[0].username);
                }

            })
            .catch((response, err) => {
                console.log(response.err);
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
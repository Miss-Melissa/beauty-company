import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Logout() {

    const navigate = useNavigate();


    const logOut = async (e) => {
        e.preventDefault();


        Axios.get('http://localhost:8030/logout')

            .then((response) => {
                console.log(response)
                localStorage.removeItem('user-info');
                window.location.reload(false);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    return (
        <button onClick={logOut}>Log out</button>
    )
}

export default Logout
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
        <Link className="menu__item" to onClick={logOut}>Logout</Link>
    )
}

export default Logout
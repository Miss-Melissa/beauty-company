import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaDoorClosed } from 'react-icons/fa';
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
        <Link className="material-icons" to onClick={logOut}><FaDoorClosed /></Link>
    )
}

export default Logout
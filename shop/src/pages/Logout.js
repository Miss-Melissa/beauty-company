import React, { useEffect, useState } from 'react'
import Axios from 'axios';

function Logout() {


    const logOut = async (e) => {
        e.preventDefault();

        Axios.get('http://localhost:8030/logout',
            {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log(response)
                localStorage.removeItem('user-info');
            })
            .catch((err) => {
                console.log(err.response);
            });
    }


    return (
        <div>
            <button onClick={logOut}>LogOut</button>
        </div>
    )
}

export default Logout
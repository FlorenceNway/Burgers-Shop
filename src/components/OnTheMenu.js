import React from 'react';
import {NavLink} from 'react-router-dom';

const OnTheMenu = () => {
    return <div>
        <h1>ON THE MENU</h1>
        <NavLink to="/recipes" activeClassName={'active'}>
            <button>GET STARTED</button>
        </NavLink>
    </div>
}

export default OnTheMenu;
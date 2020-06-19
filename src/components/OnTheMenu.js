import React from 'react';
import {NavLink} from 'react-router-dom';
import './style/OnTheMenu.scss'

const OnTheMenu = () => {
    return <div className="coverPage">
                <div className="coverText">
                    <h1> Order our top-rated recipes today!</h1>
                    <NavLink to="/recipes" activeClassName={'active'}>
                        <button>GET STARTED</button>
                    </NavLink>
                </div>
            </div>
}

export default OnTheMenu;
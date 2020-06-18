import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/Nav.scss';

const Nav = () => {
    return <div className="nav">
        <ul className="menu">
            
            <li><NavLink exact={true} activeClassName="active" to="/">ON THE MENU</NavLink></li>
            <li><NavLink activeClassName="active" to="/recipes">RECIPES</NavLink></li>
            
            <li>WINE</li>
            <li>GIFTS</li>
            <li>MARKET</li>
        </ul>
        <ul className="cart">
            <li>CART</li>
        </ul>
    </div>
}

export default Nav;
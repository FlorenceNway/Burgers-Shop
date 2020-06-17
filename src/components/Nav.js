import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/Nav.scss';

const Nav = () => {
    return <div className="nav">
        <ul className="menu">
            <NavLink activeClassName="active" to="/">
                <li>ON THE MENU</li>
            </NavLink>
            <NavLink activeClassName="active" to="/recipes">
                <li>RECIPES</li>
            </NavLink>
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
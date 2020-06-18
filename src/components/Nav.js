import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/Nav.scss';

const Nav = ({qtyCounter}) => {


    return <div className="nav">
        <ul className="menu">
            
            <li><NavLink exact={true} activeClassName="active" to="/">ON THE MENU</NavLink></li>
            <li><NavLink activeClassName="active" to="/recipes">RECIPES</NavLink></li>
            
            <li>WINE</li>
            <li>GIFTS</li>
            <li>MARKET</li>
        </ul>
        <ul className="cart">
            <li><NavLink to="/cart">CART</NavLink><span>{qtyCounter}</span></li>
        </ul>
    </div>
}

export default Nav;
import React from 'react';
import "./style/Footer.scss";

const Footer = () => {

    return  <div className="footer">
                <ul>
                    <li>Categories</li>
                    <li>About us</li>
                    <li>Testimonial</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul>
                    <li>Partners</li>
                    <li>Support</li>
                    <li>Sipping & Returns</li>
                    <li>Product Care</li>
                </ul>
                <ul>
                    <li>Contact Us</li>
                    <li>26A Pagoda St, TANGS</li>
                    <li>+65 6221 5462</li>
                </ul>
                <ul>
                    <li>Follow Us</li>
                    <li><img src={require('../images/socialIcon.png')}></img></li>
                </ul>
            </div>
}

export default Footer;
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

Header.propTypes = {
    orderCount: PropTypes.number,
};

function Header(props) {
    const { orderCount } = props

    return (
        <div className='Header row'>
            <div className="logo col-4">
                <img src={'./images/ShopLogo/ShopLogo.png'} alt="Logo" />
                <span>JAGERTHEJAGER SHOP</span>
            </div>
            <div className="menus col-8">
                <ol>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li id="cart">
                        <FontAwesomeIcon icon={solid('cart-shopping')} />
                        <span> {orderCount}</span>
                    </li>
                    <li><Link to="/">Recipes</Link></li>
                </ol>
            </div>
        </div>
    );
}

export default Header;
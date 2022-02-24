import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css'

Header.propTypes = {

};

function Header(props) {
    return (
        <div className='Header'>
            <div className="logo">
                <img src={'./images/ShopLogo/ShopLogo.png'} alt="Logo" />
                <span>JAGERTHEJAGER SHOP</span>
            </div>
            <div className="menus">
                <button><Link to="/">About</Link></button>
                <button><Link to="/products">Products</Link></button>
                <button><Link to="/">Shopping</Link></button>
                <button><Link to="/">Recipes</Link></button>
            </div>
        </div>
    );
}

export default Header;
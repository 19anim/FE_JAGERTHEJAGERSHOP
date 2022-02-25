import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css'

Header.propTypes = {

};

function Header(props) {
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
                    <li><Link to="/">Shopping</Link></li>
                    <li><Link to="/">Recipes</Link></li>
                </ol>
                {/* <button><Link to="/">About</Link></button>
                <button><Link to="/products">Products</Link></button>
                <button><Link to="/">Shopping</Link></button>
                <button><Link to="/">Recipes</Link></button> */}
            </div>
        </div>
    );
}

export default Header;
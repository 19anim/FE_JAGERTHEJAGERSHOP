import React from 'react';
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
                <button>About</button>
                <button>Products</button>
                <button>Shopping</button>
                <button>Recipes</button>
            </div>
        </div>
    );
}

export default Header;
import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

Content.propTypes = {

};

function Content(props) {
    return (
        <div className='Content row'>
            <div className="content-left col-6">
                <h1>JagermeisterJagermeisterJagermeisterJagermeisterJagermeister JagermeisterJagermeister JagermeisterJagermeisterJagermeisterJagermeister </h1>
                <p>JagermeisterJagermeisterJagermeisterJagermeisterJagermeisterJagermeisterJagermeisterJagermeisterJagermeister Jagermeister Jagermeister Jagermeister Jagermeister Jagermeister Jagermeister</p>
                <div className="product-navigator">
                    <div></div>
                    <span>Let's get started ➔</span>
                </div>
            </div>
            <div className="content-right col-6">
                <img src={'./images/ShopLogo/ShopLogo.png'} alt="" />
            </div>
        </div>
    );
}

export default Content;
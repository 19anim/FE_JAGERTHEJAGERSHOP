import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

Content.propTypes = {

};

function Content(props) {
    return (
        <div className='Content'>
            <div className="content-left">
                <h1>JagermeisterJagermeisterJagermeisterJagermeisterJagermeister JagermeisterJagermeister JagermeisterJagermeisterJagermeisterJagermeister </h1>
                <p>JagermeisterJagermeisterJagermeisterJagermeisterJagermeisterJagermeisterJagermeisterJagermeisterJagermeister Jagermeister Jagermeister Jagermeister Jagermeister Jagermeister Jagermeister</p>
                <div className="product-navigator">
                    <div></div>
                    <span>Let's get started ➔</span>
                </div>
            </div>
            <div className="content-right">
            </div>
        </div>
    );
}

export default Content;
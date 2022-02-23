import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

Footer.propTypes = {

};

function Footer(props) {
    return (
        <div className='Footer'>
            <div className="footer-title">
                <h1>Lorem Ipsum is simply dummy text of the printing and type</h1>
            </div>

            <div className="information">
                <div className='footer-item'>
                    <div className='outer-icon'>
                        <FontAwesomeIcon id='location' icon={solid('location-dot')} />
                    </div>
                    <span>Location</span>
                </div>
                <div className='footer-item'>
                    <div className='outer-icon'>
                        <FontAwesomeIcon icon={solid('phone')} />
                    </div>
                    <span>Phone</span>
                </div>
                <div className='footer-item'>
                    <a href="https://www.facebook.com/19.anim" target="_blank">
                        <div className='outer-icon'>
                            <FontAwesomeIcon icon={brands('facebook-f')} />
                        </div>
                        <span>Fanpage (Click me)</span>
                    </a>
                    <a href="https://www.facebook.com/jagerthejager" target="_blank">
                        <div className='outer-icon'>
                            <FontAwesomeIcon icon={brands('facebook-f')} />
                        </div>
                        <span>Fanpage (Click me)</span>
                    </a>
                </div>
                <div className='footer-item'>
                    <div className='outer-icon'>
                        <FontAwesomeIcon icon={brands('tiktok')} />
                    </div>
                    <span>Tiktok</span>
                </div>
            </div>
        </div >

    );
}

export default Footer;
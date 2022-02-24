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
                <h1>Personal Information</h1>
            </div>

            <div className="information">
                <div className='footer-item'>
                    <div className='outer-icon'>
                        <FontAwesomeIcon id='location' icon={solid('location-dot')} />
                    </div>
                    <span>304 Nguyen Thuong Hien street, Ward 5, Phu nhuan District</span>
                </div>
                <div className='footer-item'>
                    <div className='outer-icon'>
                        <FontAwesomeIcon icon={solid('phone')} />
                    </div>
                    <span>0927183879 - 0818191099</span>
                </div>
                <div className='footer-item'>
                    <a href="https://www.facebook.com/jagerthejager" target="_blank">
                        <div className='outer-icon'>
                            <FontAwesomeIcon icon={brands('facebook-f')} />
                        </div>
                        <span>Fanpage (Click me)</span>
                    </a>
                    <a href="https://www.facebook.com/19.anim" target="_blank">
                        <div className='outer-icon'>
                            <FontAwesomeIcon icon={brands('facebook-f')} />
                        </div>
                        <span>Personal Facebook (Click me)</span>
                    </a>
                </div>
                <div className='footer-item'>
                    <a href="https://www.tiktok.com/@jagerthejager" target="_blank">
                        <div className='outer-icon'>
                            <FontAwesomeIcon icon={brands('tiktok')} />
                        </div>
                        <span>Tiktok for recipes and more (Click me)</span>
                    </a>
                </div>
            </div>
        </div >

    );
}

export default Footer;
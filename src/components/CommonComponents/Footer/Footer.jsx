import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

Footer.propTypes = {

};

function Footer(props) {
    return (
        <div className='Footer'>
            <div className="footer-title row">
                <h1>Personal Information</h1>
            </div>

            <div className="information row">
                <div className='footer-item'>
                    <div className='outer-icon col-3'>
                        <FontAwesomeIcon id='location' icon={solid('location-dot')} />
                    </div>
                    <span className='col-9'>304 Nguyen Thuong Hien street, Ward 5, Phu nhuan District</span>
                </div>

                <div className='footer-item'>
                    <div className='outer-icon col-3'>
                        <FontAwesomeIcon icon={solid('phone')} />
                    </div>
                    <span className='col-9'>0927183879 - 0818191099</span>
                </div>

                <a href="https://www.facebook.com/jagerthejager" target="_blank">
                    <div className='footer-item'>
                        <div className='outer-icon col-3'>
                            <FontAwesomeIcon icon={brands('facebook-f')} />
                        </div>
                        <span className='col-9'>Fanpage (Click me)</span>
                    </div>
                </a>

                <a href="https://www.facebook.com/19.anim" target="_blank">
                    <div className='footer-item'>
                        <div className='outer-icon col-3'>
                            <FontAwesomeIcon icon={brands('facebook-f')} />
                        </div>
                        <span className='col-9'>Personal Facebook (Click me)</span>
                    </div>
                </a>


                <a href="https://www.tiktok.com/@jagerthejager" target="_blank">
                    <div className='footer-item'>
                        <div className='outer-icon col-3'>
                            <FontAwesomeIcon icon={brands('tiktok')} />
                        </div>
                        <span className='col-9'>Tiktok for recipes and more (Click me)</span>
                    </div>
                </a>
            </div>

        </div >

    );
}

export default Footer;
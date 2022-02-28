import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/CommonComponents/Header/Header';
import Footer from '../../components/CommonComponents/Footer/Footer';
import axios from 'axios';

TelegramBot.propTypes = {

};

function TelegramBot(props) {

    function handleSendMessage() {
        axios.post('/api/booking', {
            receiver: "AA",
            parcel: "1 chai 700, 1 dau huou vang nho",
            phone: "0927183879",
            address: "304/50/16 Nguyen Thuong Hien p5 quan Phu Nhuan"
        }).then(respone => {
            console.log(respone)
        })
    }

    return (
        <>
            <Header />
            <div className="content-to-send">
                <button onClick={handleSendMessage} style={{ color: "black" }}>
                    Get token
                </button>
            </div>
            <Footer />
        </>
    );
}

export default TelegramBot;
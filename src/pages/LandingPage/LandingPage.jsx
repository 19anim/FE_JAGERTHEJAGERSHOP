import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/CommonComponents/Header/Header';
import Content from '../../components/CommonComponents/Content/Content';
import Footer from '../../components/CommonComponents/Footer/Footer';

LandingPage.propTypes = {

};

function LandingPage(props) {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
}

export default LandingPage;
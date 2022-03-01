import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/CommonComponents/Header/Header';
import Content from '../../components/CommonComponents/Content/Content';
import Footer from '../../components/CommonComponents/Footer/Footer';

LandingPage.propTypes = {
    orderCount: PropTypes.number,
    setOrderCount: PropTypes.func,
};

function LandingPage(props) {
    const { orderCount, setOrderCount } = props
    return (
        <div className="pages">
            <Header orderCount={orderCount} setOrderCount={setOrderCount} />
            <Content orderCount={orderCount} setOrderCount={setOrderCount} />
            <Footer />
        </div>
    );
}

export default LandingPage;
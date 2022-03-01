import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/CommonComponents/Footer/Footer';
import Header from '../../components/CommonComponents/Header/Header';
import ProductsContent from '../../components/ProductsContentComponent/ProductsContent';

ProductPage.propTypes = {
    orderCount: PropTypes.number,
    setOrderCount: PropTypes.func,
};

function ProductPage(props) {
    const { orderCount, setOrderCount } = props

    return (
        <div className='pages'>
            <Header orderCount={orderCount} />
            <ProductsContent orderCount={orderCount} setOrderCount={setOrderCount} />
            <Footer />
        </div>
    );
}

export default ProductPage;
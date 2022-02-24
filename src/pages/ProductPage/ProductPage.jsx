import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/CommonComponents/Footer/Footer';
import Header from '../../components/CommonComponents/Header/Header';
import ProductsContent from '../../components/ProductsContentComponent/ProductsContent';

ProductPage.propTypes = {

};

function ProductPage(props) {

    const productPage = {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        overflow: 'auto',
    }

    return (
        <div className='ProductPage' style={productPage}>
            <Header />
            <ProductsContent />
            <Footer />
        </div>
    );
}

export default ProductPage;
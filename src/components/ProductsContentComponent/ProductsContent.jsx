import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';

ProductsContent.propTypes = {

};

function ProductsContent(props) {
    const jagermeisterOriginalVNPrice = useRef();
    const jagermeisterOriginalDEPrice = useRef();
    const jagermeisterOriginalVN = {
        20: '60.000 vnđ',
        200: '280.000 vnđ',
        700: '430.000 vnđ',
        1000: '530.000 vnđ',
    }
    const jagermeisterOriginalDE = {
        100: '400.000 vnđ',
        350: '799.000 vnđ',
        700: '950.000 vnđ',
        1000: '1.900.000 vnđ',
        3000: '6.000.000 vnđ',
    }
    const productDetailParam = {
        width: '500px',
        height: '500px',
        textDetailBackgroundWidth: '400px',
        textDetailBackgroundHeight: '100px'
    }
    const content = {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 40px',
        textAlign: 'center'
    }
    const jagermeisterOriginal = {
        display: 'flex',
        justifyContent: 'space-around'
    }
    const productItem = {
        position: 'relative',
        width: productDetailParam.width,
        height: productDetailParam.height,
        backgroundImage: 'url("https://cdn.musebycl.io/2020-06/Jagermeister-original.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const productDetail = {
        width: productDetailParam.textDetailBackgroundWidth,
        //height: productDetailParam.textDetailBackgroundHeight,
        backgroundColor: 'rgba(255,255,255,0.5)',
        position: 'absolute',
        left: `calc((${productDetailParam.width} - ${productDetailParam.textDetailBackgroundWidth}) / 2)`,
        //top: `calc(${productDetailParam.height} - ${productDetailParam.textDetailBackgroundHeight} - 20px)`,
        bottom: '20px',
    }

    function handleButtonMouseEnter(e) {
        e.target.style.fontSize = '18px'
        e.target.parentNode.parentNode.parentNode.parentNode.className === "originalVN"
            ? jagermeisterOriginalVNPrice.current.innerText = `Price: ${jagermeisterOriginalVN[e.target.textContent.split('ml')[0]]}`
            : jagermeisterOriginalDEPrice.current.innerText = `Price: ${jagermeisterOriginalDE[e.target.textContent.split('ml')[0]]}`
        //console.log(e.target.parentNode.children[0])
        for (const child of e.target.parentNode.children) {
            child.style.color = '#ede6e6'
            child.style.backgroundColor = '#c6c1be'
        }
        e.target.style.color = '#fff'
        e.target.style.backgroundColor = 'chocolate'

    }

    function handleButtonMouseLeave(e) {
        e.target.style.fontSize = '15px'
        for (const child of e.target.parentNode.children) {
            child.style.color = '#fff'
            child.style.backgroundColor = 'chocolate'
        }
    }

    return (
        <div className='ProductsContent' style={content}>
            <div className="jagermeister-original products-category">
                <h1>Jagermeister Original</h1>
                <div className="countries" style={jagermeisterOriginal}>
                    <div className="originalVN" >
                        <h2>Jagermeister Original VN</h2>
                        <div className='product-item' style={productItem}>
                            <div className="product-detail" style={productDetail}>
                                <div className="volume">
                                    <button
                                        onMouseOver={handleButtonMouseEnter}
                                        onMouseLeave={handleButtonMouseLeave}
                                    >
                                        20ml
                                    </button>
                                    <button
                                        onMouseOver={handleButtonMouseEnter}
                                        onMouseLeave={handleButtonMouseLeave}
                                    >
                                        200ml
                                    </button>
                                    <button
                                        onMouseOver={handleButtonMouseEnter}
                                        onMouseLeave={handleButtonMouseLeave}
                                    >
                                        700ml
                                    </button>
                                    <button
                                        onMouseOver={handleButtonMouseEnter}
                                        onMouseLeave={handleButtonMouseLeave}
                                    >
                                        1000ml
                                    </button>
                                </div>
                                <div className="price" ref={jagermeisterOriginalVNPrice}>
                                    Price: {jagermeisterOriginalVN[20]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="originalDE">
                        <h2>Jagermeister Original Germany</h2>
                        <div className='product-item' style={productItem}>
                            <div className="product-detail" style={productDetail}>
                                <div className="volume">
                                    <button
                                        onMouseOver={handleButtonMouseEnter}
                                        onMouseLeave={handleButtonMouseLeave}
                                    >
                                        100ml
                                    </button>
                                    <button
                                        onMouseOver={handleButtonMouseEnter}
                                        onMouseLeave={handleButtonMouseLeave}
                                    >
                                        350ml
                                    </button>
                                    <button
                                        onMouseOver={handleButtonMouseEnter}
                                        onMouseLeave={handleButtonMouseLeave}
                                    >
                                        700ml
                                    </button>
                                    <button
                                        onMouseOver={handleButtonMouseEnter}
                                        onMouseLeave={handleButtonMouseLeave}
                                    >
                                        1000ml
                                    </button>
                                    <button
                                        onMouseOver={handleButtonMouseEnter}
                                        onMouseLeave={handleButtonMouseLeave}
                                    >
                                        3000ml
                                    </button>
                                </div>
                                <div className="price" ref={jagermeisterOriginalDEPrice}>
                                    Price: {jagermeisterOriginalDE[100]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jagermeister-special products-category">
                <h1>Jagermeister Special</h1>
            </div>
            <div className="jagermeister-limited products-category">
                <h1>Jagermeister Limited</h1>
            </div>
            <div className="jagermeister-stuff products-category">
                <h1>Jagermeister Stuff</h1>
            </div>
        </div >
    );
}

export default ProductsContent;
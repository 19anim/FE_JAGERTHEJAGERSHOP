import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

ProductsContent.propTypes = {
    orderCount: PropTypes.number,
    setOrderCount: PropTypes.func,
};

function ProductsContent(props) {
    const jagermeisterOriginalVNPrice = useRef();
    const jagermeisterOriginalDEPrice = useRef();
    const jagermeisterColdbrewPrice = useRef();
    const jagermeisterManifestPrice = useRef();
    const originalVNVolume = useRef();
    const originalDEVolume = useRef();
    const coldbrewVolume = useRef();
    const ManifestVolume = useRef();
    const { orderCount, setOrderCount } = props

    const jagermeisterOriginalVN = {
        20: '60.000VNĐ',
        200: '280.000VNĐ',
        700: '430.000VNĐ',
        1000: '530.000VNĐ',
    }
    const jagermeisterOriginalDE = {
        100: '400.000VNĐ',
        350: '799.000VNĐ',
        700: '950.000VNĐ',
        1000: '1.900.000VNĐ',
        3000: '6.000.000VNĐ',
    }
    const jagermeisterColdbrew = {
        20: '180.000VNĐ',
        1000: '3.000.000VNĐ',
    }
    const jagermeisterManifest = {
        1000: '3.000.000VNĐ',
        plus_1000: '3.500.000VNĐ'
    }

    useEffect(() => {
        for (const key in jagermeisterOriginalVN) {
            originalVNVolume.current.innerHTML += `<button>${key}ml</button>`
        }

        for (const key in jagermeisterOriginalDE) {
            originalDEVolume.current.innerHTML += `<button>${key}ml</button>`
        }

        for (const key in jagermeisterColdbrew) {
            coldbrewVolume.current.innerHTML += `<button>${key}ml</button>`
        }

        for (const key in jagermeisterManifest) {
            Number.isInteger(parseInt(key))
                ? ManifestVolume.current.innerHTML += `<button>${key}ml</button>`
                : ManifestVolume.current.innerHTML += `<button>${key.split('_')[1]}ml + 3 ly rock</button>`
        }

        const [...volumeElements] = document.getElementsByClassName('volume')
        volumeElements.forEach((element) => {
            for (const child of element.children) {
                if (child.tagName === 'BUTTON') {
                    child.onmouseover = handleButtonMouseEnter
                    child.onmouseleave = handleButtonMouseLeave
                }
            }
        })

    }, [])

    function handleButtonMouseEnter(e) {
        //e.target.style.fontSize = '1.2rem'

        switch (e.target.parentNode.parentNode.parentNode.className) {
            case "originalVN col-6":
                jagermeisterOriginalVNPrice.current.innerText = `${jagermeisterOriginalVN[e.target.textContent.split('ml')[0]]} / ${e.target.textContent}`
                break;
            case "originalDE col-6":
                jagermeisterOriginalDEPrice.current.innerText = `${jagermeisterOriginalDE[e.target.textContent.split('ml')[0]]} / ${e.target.textContent}`
                break;
            case "coldbrew col-6":
                jagermeisterColdbrewPrice.current.innerText = `${jagermeisterColdbrew[e.target.textContent.split('ml')[0]]} / ${e.target.textContent}`
                break;
            case "manifest col-6":
                e.target.textContent === '1000ml'
                    ? jagermeisterManifestPrice.current.innerText = `${jagermeisterManifest[e.target.textContent.split('ml')[0]]} / ${e.target.textContent}`
                    : jagermeisterManifestPrice.current.innerText = `${jagermeisterManifest.plus_1000} / ${e.target.textContent}`
                break;
        }

        for (const child of e.target.parentNode.children) {
            if (child.tagName === 'BUTTON') {
                child.style.color = '#ede6e6'
                child.style.backgroundColor = '#c6c1be'
            }
        }
        e.target.style.color = '#fff'
        e.target.style.backgroundColor = 'chocolate'

    }

    function handleButtonMouseLeave(e) {
        e.target.style.fontSize = '1rem'
        for (const child of e.target.parentNode.children) {
            if (child.tagName === 'BUTTON') {
                child.style.color = '#fff'
                child.style.backgroundColor = 'chocolate'
            }
        }
    }

    function handleToggleCollapse(e) {
        e.target.nextSibling.style.height
            ? e.target.nextSibling.style.height = null
            : e.target.nextSibling.style.height = e.target.nextSibling.scrollHeight + "px"
    }

    function handleSelectItem() {
        localStorage.getItem('orderCount') === null
            ? localStorage.setItem('orderCount', 1)
            : localStorage.setItem('orderCount', parseInt(localStorage.getItem('orderCount')) + 1)
        setOrderCount(parseInt(localStorage.getItem('orderCount')))
    }

    return (
        <div className='row'>
            <div className="product-cat jagermeister-original col-12">
                <h2
                    onClick={handleToggleCollapse}
                >
                    JAGERMEISTER ORIGINAL
                </h2>
                <div className="product-item">
                    <div className="originalVN col-6">
                        <div className="product-name-img col-4">
                            <p>JAGERMEISTER ORIGINAL VIET NAM</p>
                            <img src="https://cdn.musebycl.io/2020-06/Jagermeister-original.jpg" alt="" />
                        </div>
                        <div className="product-volume-price col-8">
                            <div className="price">
                                <p>Giá:</p>
                                <h2 ref={jagermeisterOriginalVNPrice}>60.000VNĐ / 20ml</h2>
                            </div>
                            <div className="volume" ref={originalVNVolume}>
                                <p>Dung tich:</p>
                            </div>
                            <button className="selectItemButton"
                                onClick={handleSelectItem}
                            >
                                Order</button>
                        </div>
                    </div>

                    <div className="originalDE col-6">
                        <div className="product-name-img col-4">
                            <p style={{ textAlign: "center" }}>JAGERMEISTER ORIGINAL Deusch</p>
                            <img src="https://cdn.musebycl.io/2020-06/Jagermeister-original.jpg" alt="" />
                        </div>
                        <div className="product-volume-price col-8">
                            <div className="price">
                                <p>Giá:</p>
                                <h2 ref={jagermeisterOriginalDEPrice}>400.000VNĐ / 100ml</h2>
                            </div>
                            <div className="volume" ref={originalDEVolume}>
                                <p>Dung tich:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-cat jagermeister-special col-12">
                <h2
                    onClick={handleToggleCollapse}
                >
                    JAGERMEISTER SPECIAL
                </h2>
                <div className="product-item">
                    <div className="coldbrew col-6">
                        <div className="product-name-img col-4">
                            <p>JAGERMEISTER COLDBREW</p>
                            <img src="https://cdn.thisiswhyimbroke.com/images/jagermeister-cold-brew-coffee-640x533.jpg" alt="" />
                        </div>
                        <div className="product-volume-price col-8">
                            <div className="price">
                                <p>Giá:</p>
                                <h2 ref={jagermeisterColdbrewPrice}>180.000VNĐ / 20ml</h2>
                            </div>
                            <div className="volume" ref={coldbrewVolume}>
                                <p>Dung tich:</p>
                            </div>
                            <button className="selectItemButton"
                                onClick={handleSelectItem}
                            >
                                Order</button>
                        </div>
                    </div>
                    <div className="manifest col-6">
                        <div className="product-name-img col-4">
                            <p>JAGERMEISTER Manifest</p>
                            <img src="https://shop.jaegermeister.de/media/image/13/6a/bc/manifest2U4UBrAc8qXw4E.png" alt="" />
                        </div>
                        <div className="product-volume-price col-8">
                            <div className="price">
                                <p>Giá:</p>
                                <h2 ref={jagermeisterManifestPrice}>3.000.000VNĐ / 1000ml</h2>
                            </div>
                            <div className="volume" ref={ManifestVolume}>
                                <p>Dung tich:</p>
                            </div>
                            <button className="selectItemButton"
                                onClick={handleSelectItem}
                            >
                                Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-cat jagermeister-limited col-12">
                <h2
                    onClick={handleToggleCollapse}
                >
                    JAGERMEISTER LIMITED
                </h2>
            </div>
            <div className="product-cat jagermeister-stuff col-12">
                <h2
                    onClick={handleToggleCollapse}
                >
                    JAGERMEISTER STUFF
                </h2>
            </div>
        </div>
    );
}

export default ProductsContent;
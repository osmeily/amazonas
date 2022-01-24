import React from 'react';
import "../../styles/recommended.css"

const Recommended = ({products}) => {

    const getLocal = JSON.parse(localStorage.getItem("detail"));

    return (
        <div className='productsRecommended-cont'>
            {products.map(product => (
            product.docData.category === getLocal.docData.category && <div className='products'>
            <div key={products.docId} className='products'>
                <div className='card-productReco' id=''>
                    <img src={product.docData.imgUrl} alt=""/>
                    <p className='product-nameReco'>{product.docData.productName}</p>
                </div>
            </div>
            </div>
        ))}
        </div>
    )
};

export default Recommended;

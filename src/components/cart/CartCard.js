import React from 'react'
import "../../styles/cartCard.css"

const CartCard = ({products}) => {
    return (
        <div className='cartCard'>
            {
                products.map(product=> (
                <div className='cart-cardInfo'>
                    <img src={product.docData.imgUrl} alt=""/>
                    <div className='text-info'>
                        <p>{product.docData.productName}</p>
                        <p className='disponible'>Disponible</p>
                        <p className='ship'>Envío a Colombia</p>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default CartCard

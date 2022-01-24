import React from 'react'
import { useSelector } from 'react-redux';
import "../../styles/cartCard.css"

const CartCard = ({products}) => {

    const cartState = useSelector(cart => cart.cart)
    console.log(cartState.cart[0]);
    const docId = []
    const getDocId = products.map(product => docId.push(product.docId))
    console.log(docId);
    
    return (
        <div className='cartCard'>
            {
                products.map(product=> (
                <div id={cartState.cart[0]} className=''>
                    { product.docId === cartState.cart[0] ?
                        <div id={cartState.cart[0]} className='cart-cardInfo'>
                            <img src={product.docData.imgUrl} alt=""/>
                        <div className='text-info'>
                            <p>{product.docData.productName}</p>
                            <p className='disponible'>Disponible</p>
                            <p className='ship'>Envío a Colombia</p>
                        </div>
                        </div>
                        : <div style={{display:"none"}}></div>
                    }
                </div>
                ))
            }
        </div>
    )
}

export default CartCard

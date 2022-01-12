import React from 'react'

import Footer from '../home/Footer'
import Footer2 from '../home/Footer2'
import NavBar from '../home/NavBar'
import NavBar2 from '../home/NavBar2'
import PreFooter from '../home/PreFooter'
import UpToHome from '../home/UpToHome'
import CartCard from './CartCard'
import '../../styles/cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <NavBar/>
            <NavBar2/>
            <div className='cart-cont'>
                <div className='shopping-cart'>
                    <h2>Carrito</h2>
                    <CartCard/>
                </div>
                <div className='sub-total'>
                <p>Subtotal(1 producto): <span><b>5000$</b></span></p>
                <button type='button' className='pay-btn'>Proceder al pago</button>
                </div>
            </div>


            <PreFooter/>
            <UpToHome/>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default Cart

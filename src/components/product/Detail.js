import React from 'react'
import Footer from '../home/Footer';
import Footer2 from '../home/Footer2';
import NavBar from '../home/NavBar';
import NavBar2 from '../home/NavBar2';
import PreFooter from '../home/PreFooter';
import carti from "../../resources/cart.png"
import "../../styles/detail.css"
import Recommended from '../product/Recommended';
import { useDispatch } from 'react-redux';
import { actionCart } from '../../actions/actionCart';



const Detail = ({products}) => {

    const dispatch = useDispatch()
    
    const getLocal = JSON.parse(localStorage.getItem("detail"));
    const addToCart = () => {
        let detail = JSON.parse(localStorage.getItem("detail"))
        dispatch(actionCart(detail.docId))
    }


    return (
        <div>
            <NavBar/>
            <NavBar2/>
            <div className='detail-card'>
                <div className='mini-pic'>
                    <img src={getLocal.docData.imagen1} alt=""/>
                    <img src={getLocal.docData.imagen2} alt=""/>
                    <img src={getLocal.docData.imagen3} alt=""/>
                </div>
                <img className='big-pic' src={getLocal.docData.imgUrl} alt=""/>
                <p className='info-name'>{getLocal.docData.productName}</p>
                <p className='about'>Acerca de este artículo</p>
                <p className='info-description'>{getLocal.docData.productDetail}</p>
                <p className='info-price'>Precio: US$ {getLocal.docData.productPrice}<span style={{color:"black", fontSize:"16px", fontWeight:"600", padding:"0px 10px"}}>Envío GRATIS</span></p>
                <div className='add-carti'>
                    <p style={{color:"#AF2913"}}>${getLocal.docData.productPrice}</p>
                    <p>Envío GRATIS.</p>
                    <button onClick={addToCart} className='carti-btn'><img src={carti} alt=""/>Agregar al carrito</button>
                    <p style={{color:"#0E7184", fontSize:"14px"}}>Transacción segura</p>
                </div>
            </div>
            <hr/>
                <p style={{fontSize:"20px", padding:"10px"}}>Productos relacionados con este artículo</p>
                <Recommended products={products}/>

            <div>
            </div>
            <PreFooter/>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default Detail

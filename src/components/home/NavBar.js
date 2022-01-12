import React, { useState } from 'react'
import Logo from './Logo'
import gps from "../../resources/gps.png"
import "../../styles/navBar.css"
import DropDown from './DropDown'
import buscar from "../../resources/Frame 29.png"
import cart from "../../resources/shopping-cart.png"
import { useNavigate } from 'react-router-dom'



const NavBar = () => {

    const [selected, setSelected] = useState("Todo")

    const navigate = useNavigate()

    return (
        <header className='navBar' id='home'>
            <Logo />
            <div className='gps-container'>
                <p className='hola'>Hola</p>
                <div className='gps'>
                    <img src={gps} alt=""/>
                    <p>Elige tu direccion</p>
                </div>
            </div>
            <div className='drop-search'>
                <DropDown selected={selected} setSelected={setSelected}/>
                <input className='search' name='search'/>
                <img src={buscar} alt=""/>
            </div>
            <div className='cuenta-container' onClick={() => navigate("/login")}>
                <p className='hola-id' >Hola, identificate</p>
                <div className='cuenta-lista-container'>
                    <p className='cuenta-listas'>Cuenta y Listas</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
            </div>
            <div className='pedidos-container'>
                <p className='devoluciones'>Devoluciones</p>
                <p className='pedidos'>y Pedidos</p>
            </div>
            <div className='cart-container' onClick={()=> navigate("/cart")}>
            <img src={cart} alt=""/>
            <p className='cart-text'>Carrito</p>
            </div>
            
        </header>
    )
}

export default NavBar

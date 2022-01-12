import React from 'react'
import "../../styles/navbar2.css"
import menu from "../../resources/menu.png"

const NavBar2 = () => {
    return (
        <header className='navbar2'>
        <div className='menu item'>
            <img src={menu} alt=""/>
            <p>Todo</p>
        </div>
        <p className='item'>Tarjetas de regalo</p>
        <p className='item'>Prime</p>
        <p className='item'>Los más vendidos</p>
        <p className='item'>AmazonBasics</p>
        <p className='item'>Cómputo y tabletas</p>
        <p className='item'>Los más regalados</p>
        </header>
    )
}

export default NavBar2

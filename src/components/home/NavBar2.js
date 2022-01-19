import React from 'react'
import "../../styles/navbar2.css"
import menu from "../../resources/menu.png"
import { useNavigate } from 'react-router-dom'

const NavBar2 = () => {

    const navigate = useNavigate()

    return (

        <header className='navbar2'>
        <div className='menu item'>
            <img src={menu} alt=""/>
            <p>Todo</p>
        </div>
        <p onClick={()=> navigate("/addProduct")} className='item'>Agregar producto</p>
        <p className='item'>Prime</p>
        <p className='item'>Los más vendidos</p>
        <p className='item'>AmazonBasics</p>
        <p className='item'>Cómputo y tabletas</p>
        <p className='item'>Los más regalados</p>
        </header>
    )
}

export default NavBar2

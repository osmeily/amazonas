import React from 'react'
import "../../styles/navBar.css"

import logo from "../../resources/logo-amazon.png"
import { useNavigate } from 'react-router-dom'

const Logo = () => {

    const navigate = useNavigate()

    return (
        <div>
            <img onClick={()=>navigate("/")} className='logo' src={logo} alt=""/>
        </div>
    )
}

export default Logo
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/uptohome.css'

const UpToHome = () => {

    const navigate = useNavigate()

    return (
        <div className='up'>
            <a href='#up'>
            <button className='up-btn'>Inicio de página</button>

            </a>
        </div>
    )
}

export default UpToHome

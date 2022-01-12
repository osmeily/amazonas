import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../styles/prefooter.css"

const PreFooter = () => {

    const navigate = useNavigate()

    return (
        <div className='prefooter'>
            <p>Ver recomendaciones personalizadas</p>
            <button onClick={()=> navigate("/login")} className='id-btn'>Identifícate</button>
            <div className='link-cont'>
                <p className='new-client'>¿Eres un cliente nuevo?</p>
                <Link to='/register' className='register-link'>Empieza aqui</Link>
            </div>
        </div>
    )
}

export default PreFooter

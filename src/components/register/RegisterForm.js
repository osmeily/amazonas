import React from 'react'
import logo from '../../resources/logo-amazon (1).png'
import '../../styles/registerform.css'
import { Link, useNavigate } from 'react-router-dom'
import ShortFooter from '../login/ShortFooter'

const RegisterForm = () => {

    const navigate = useNavigate()

    return (
        <div className="register-cont">
            <img src={logo} onClick={()=> navigate("/")} alt=""/>
            <div className='form'>
                <h1>Crear cuenta</h1>
                <div className='form-row'>
                    <div className='form-col'>
                    <label>Tu nombre</label>
                    <input />
                    </div>
                    <div className='form-col'>
                    <label>Correo electrónico</label>
                    <input type="email"/>
                    </div>
                    <div className='form-col'>
                    <label>Contraseña</label>
                    <input type="password"/>
                    </div>
                    <button className='register-btn' type='submit'>Crea tu cuenta</button>
                    <Link to='/login'>¿Ya tienes una cuenta?</Link>
                </div>
            </div>
            <ShortFooter/>
        </div>
    )
}

export default RegisterForm

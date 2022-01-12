import React from 'react'
import ShortFooter from './ShortFooter'
import logo from '../../resources/logo-amazon (1).png'
import '../../styles/loginform.css'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const navigate = useNavigate()

    return (
        <div className="login-cont">
            <img onClick={()=> navigate("/")} src={logo} alt=""/>
            <div className='form'>
                <h1>Iniciar sesión</h1>
                <div className='form-row'>
                    <div className='form-col'>
                    <label>Dirección de correo electrónico</label>
                    <input />
                    </div>
                    <div className='form-col'>
                    <label>Contraseña</label>
                    <input/>
                    </div>
                    <button className='login-btn' type='submit'>Continuar</button>
                    <Link to='/register'>¿No tienes una cuenta?</Link>
                </div>
            </div>
            <ShortFooter/>
        </div>
    )
}

export default LoginForm

import React, { useState } from 'react'
import ShortFooter from './ShortFooter'
import logo from '../../resources/logo-amazon (1).png'
import '../../styles/loginform.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actionLogin } from '../../actions/actionLogin'

const LoginForm = () => {

    const dispatch = useDispatch()

    const [login, setLogin] = useState({
        user: "",
        pass: ""
    })

    const {user, pass} = login

    const navigate = useNavigate()

    const handleOnChange = ({target}) => {
        setLogin({
            ...login,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, pass)
        dispatch(actionLogin(user, pass))
    }

    return (
        <div className="login-cont">
            <img onClick={()=> navigate("/")} src={logo} alt=""/>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Iniciar sesión</h1>
                <div className='form-row'>
                    <div className='form-col'>
                    <label>Dirección de correo electrónico</label>
                    <input value={user} onChange={handleOnChange} name="user" />
                    </div>
                    <div className='form-col'>
                    <label>Contraseña</label>
                    <input type="password" onChange={handleOnChange} value={pass} name="pass"/>
                    </div>
                    <button className='login-btn' type='submit'>Continuar</button>
                    <Link to='/register'>¿No tienes una cuenta?</Link>
                </div>
            </form>
            <ShortFooter/>
        </div>
    )
}

export default LoginForm

import React, { useState } from 'react'
import ShortFooter from './ShortFooter'
import logo from '../../resources/logo-amazon (1).png'
import '../../styles/loginform.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actionLogin, actionLoginAsync, actionLoginFacebook, actionLoginGoogle } from '../../actions/actionLogin'
import googleLogo from '../../resources/pngwing.com.png'
import facebookLogo from '../../resources/pngwing.com (1).png'

const LoginForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogle = () => {
        dispatch(actionLoginGoogle())
    }

    const handleFacebook = () => {
        dispatch(actionLoginFacebook())
        navigate("/*")
    }

    const [login, setLogin] = useState({
        user: "",
        pass: ""
    })

    const {user, pass} = login

    const handleOnChange = ({target}) => {
        setLogin({
            ...login,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, pass)
    }

    const handleLogin = () => {
        dispatch(actionLoginAsync(user, pass))
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
                    <button className='login-btn' onClick={()=>handleGoogle()}>Login con Google <img style={{width:"20px"}} src={googleLogo} alt=""/></button>
                    <button className='login-btn' onClick={()=> handleFacebook()}>Login con Facebook <img style={{width:"20px"}} src={facebookLogo} alt=""/></button>
                    <button className='login-btn' type='submit' onClick={()=> handleLogin()}>Continuar</button>
                    <Link to='/register'>¿No tienes una cuenta?</Link>
                </div>
            </form>
            <ShortFooter/>
        </div>
    )
}

export default LoginForm

import React, { useState } from 'react'
import logo from '../../resources/logo-amazon (1).png'
import '../../styles/registerform.css'
import { Link, useNavigate } from 'react-router-dom'
import ShortFooter from '../login/ShortFooter'
import { useDispatch } from 'react-redux'
import { actionRegister, actionRegisterAsync } from '../../actions/actionRegister'

const RegisterForm = () => {

    const dispatch = useDispatch()

    const [register, setRegister] = useState({
        name:"",
        email:"",
        pass:""
    })

    const {name, email, pass} = register

    const navigate = useNavigate()

    const handleOnChange = ({target}) => {
        setRegister({
            ...register,
            [target.name] : target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, pass)
        dispatch(actionRegisterAsync(email, pass, name))
    }

    return (
        <div className="register-cont">
            <img src={logo} onClick={()=> navigate("/")} alt=""/>
            <form onSubmit={handleSubmit} className='form'>
                <h1>Crear cuenta</h1>
                <div className='form-row'>
                    <div className='form-col'>
                    <label>Tu nombre</label>
                    <input onChange={handleOnChange} name='name' />
                    </div>
                    <div className='form-col'>
                    <label>Correo electrónico</label>
                    <input onChange={handleOnChange} name='email' type="email"/>
                    </div>
                    <div className='form-col'>
                    <label>Contraseña</label>
                    <input onChange={handleOnChange} name='pass' type="password"/>
                    </div>
                    <button className='register-btn' type='submit'>Crea tu cuenta</button>
                    <Link to='/login'>¿Ya tienes una cuenta?</Link>
                </div>
            </form>
            <ShortFooter/>
        </div>
    )
}

export default RegisterForm

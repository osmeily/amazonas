import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import gps from "../../resources/gps.png"
import "../../styles/navBar.css"
import DropDown from './DropDown'
import buscar from "../../resources/Frame 29.png"
import cart from "../../resources/shopping-cart.png"
import { useNavigate } from 'react-router-dom'
import { actionLogoutAsync } from '../../actions/actionLogin'
import { useDispatch } from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { searchProductAsync } from '../../actions/actionProducts'


const NavBar = ({user}) => {

    const formik = useFormik({
        initialValues:{
            search:""
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit:({search})=>{
            dispatch(searchProductAsync(search))
        }
    })

    const dispatch = useDispatch()

    const [selected, setSelected] = useState("Todo")
    const [isLogout, setIsLogout] = useState(false);

    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(actionLogoutAsync())
        isLogout()
    }

    let url = '';

    const [ubicacion, setUbicacion] = useState('')
    
        useEffect(() => {
        getCoordenadas();
        setIsLogout(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

    const getCoordenadas = () => {
        navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI';
        getUbicacion(url);
    });
    }

    const getUbicacion = async(endpoint) => {
        const resp = await fetch(endpoint);
        const {results} = await resp.json();
        setUbicacion(results[8].formatted_address)
        }

    return (
        <header className='navBar' id='up'>
            <Logo />
            <div className='gps-container'>
                <p className='hola'>Hola</p>
                <div className='gps'>
                    <img src={gps} alt=""/>
                    {
                        ubicacion ? <p>{ubicacion}</p> : <p>Elige tu ubicación</p>
                    }
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} className='drop-search'>
                <DropDown selected={selected} setSelected={setSelected}/>
                <input onChange={formik.handleChange} className='search' name='search'/>
                <button className='search-btn' type='submit'><img src={buscar} alt=""/></button>
            </form>
            <div className='cuenta-container' onClick={() => navigate("/login")}>
                <p className='hola-id' >Hola, {user ? user : "identifícate"}</p>
                <div className='cuenta-lista-container'>
                    <p className='cuenta-listas'>Cuenta y Listas</p>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
            </div>
            <div className='pedidos-container'>
                <p className='devoluciones'>Devoluciones</p>
                <p className='pedidos'>y Pedidos</p>
            </div>
            <div className='cart-container' onClick={()=> navigate("/cart")}>
                <img src={cart} alt=""/>
                <p className='cart-text'>Carrito</p>
            </div>
            {user ? 
            <div className='logout-div'>
                <button className='logout' onClick={()=> handleLogout()}>Logout</button>
            </div> : ""}
        </header>
    )
}

export default NavBar
